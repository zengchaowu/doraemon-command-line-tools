'use strict';

const puppeteer = require('puppeteer');


const url = process.env.URL || 'http://zc.qq.com/chs/index.html?type=1';


module.exports = async function(nickname, password, phone) {
    const browser = await puppeteer.launch({
        headless: false,
    });
    const page = await browser.newPage();
    await page.goto(url);

    // 昵称
    const nicknameElement = await page.$("#nickname");
    await nicknameElement.type(nickname);

    // 密码
    const passwordElement = await page.$("#password");
    await passwordElement.type(password);

    // 电话
    const phoneElement = await page.$("#phone");
    await phoneElement.type(phone);

    // // 需要手机发送短信，爬取短信内容和对应号码。
    // document.getElementsByTagName("span")[5].innerText
    // document.getElementsByTagName("span")[7].innerText
}
