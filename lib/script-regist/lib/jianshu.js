'use strict';

const puppeteer = require('puppeteer');
const fs = require('fs/promises');
const { prompt } = require('enquirer');

const url = process.env.URL || 'https://www.jianshu.com/sign_up';


module.exports = async function(nickName, password, phone) {
    const browser = await puppeteer.launch({
        headless: false,
    });
    const page = await browser.newPage();
    await page.goto(url);

    // 填写资料
    let inputs = await page.$$('input');
    await inputs[2].type(nickName, {delay: 100});
    await inputs[4].type(phone, {delay: 100});
    await inputs[14].type(password, {delay: 100});

    // TODO
    // 获取验证码，极验校验。
    let button = await page.$('#send_code');
    await button.click();

    // 输入验证码
    let code = '';
    await inputs[7].type(code, {delay: 100});

    // 点击继续
    button = await page.$('.sign-up-button');
    await button.click();

    // 注册完成
    await page.waitForNavigation();
}