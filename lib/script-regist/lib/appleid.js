"use strict";

const puppeteer = require("puppeteer");
const fs = require("fs/promises");
const { prompt } = require("enquirer");

const url = process.env.URL || "https://appleid.apple.com";
// register("马", "云", "3184678883@qq.com", "1995年08月08日", "$Qweewq11", "CHN", "CN", "17897382575");

module.exports = async function (
  firstName,
  lastName,
  email,
  birthday,
  password,
  countryRegion,
  phoneRegion,
  phone
) {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();
  await page.goto(url);

  // 点击注册新的账号
  const links = await page.$$(".btn-link");
  await links[1].click();

  // 填写资料
  await page.waitForNavigation();
  let inputs = await page.$$("input");
  await inputs[4].type(firstName, { delay: 100 });
  await inputs[5].type(lastName, { delay: 100 });
  await inputs[6].type(birthday, { delay: 100 });
  await inputs[7].type(email, { delay: 100 });
  await inputs[8].type(password, { delay: 100 });
  await inputs[9].type(password, { delay: 100 });
  await inputs[10].type(phone);
  const selects = await page.$$("select");
  await selects[0].type(countryRegion);
  await selects[1].type(phoneRegion);
  await inputs[13].click();
  await inputs[14].click();

  // TODO
  // 输入图形验证码
  const imageData = await page.evaluate(
    "document.getElementsByTagName('img')[0].src"
  );
  const base64Data = imageData.replace(/^data:image\/\w+;base64,/, "");
  const bufferData = Buffer.from(base64Data, "base64");
  await fs.writeFile("./code.jpeg", bufferData);

  // 等待用户录入验证码
  let response = await prompt({
    type: "input",
    name: "code",
    message: "图形验证码",
  });
  let code = response.code;
  await inputs[15].type(code, { delay: 100 });

  // 点击继续
  let buttons = await page.$$("button");
  await buttons[8].click();

  // TODO
  // 输入发送到邮箱的验证码
  await page.waitForXPath('//button[@id="send-code"]');
  inputs = await page.$$("input");
  response = await prompt({
    type: "input",
    name: "code",
    message: "邮箱验证码",
  });
  code = response.code;
  await inputs[17].type(code[0], { delay: 100 });
  await inputs[18].type(code[1], { delay: 100 });
  await inputs[19].type(code[2], { delay: 100 });
  await inputs[20].type(code[3], { delay: 100 });
  await inputs[21].type(code[4], { delay: 100 });
  await inputs[22].type(code[5], { delay: 100 });

  // 点击继续
  buttons = await page.$$("button");
  await buttons[10].click();

  // TODO
  // 输入短信验证码
  await page.waitForXPath('//button[@id="resend-code"]');
  inputs = await page.$$("input");
  response = await prompt({
    type: "input",
    name: "code",
    message: "电话验证码",
  });
  code = response.code;
  await inputs[17].type(code[0], { delay: 100 });
  await inputs[18].type(code[1], { delay: 100 });
  await inputs[19].type(code[2], { delay: 100 });
  await inputs[20].type(code[3], { delay: 100 });
  await inputs[21].type(code[4], { delay: 100 });
  await inputs[22].type(code[5], { delay: 100 });

  // 点击继续
  buttons = await page.$$("button");
  await buttons[10].click();

  // 注册完成
  await page.waitForNavigation();
};
