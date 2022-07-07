'use strict';

const puppeteer = require('puppeteer');
const fs = require('fs/promises');
const { prompt } = require('enquirer');

const url = process.env.URL || 'http://zc.qq.com/chs/index.html?type=1';


module.exports = async function(nickName, password, phoneRegion, phone) {
    const browser = await puppeteer.launch({
        headless: false,
    });
    const page = await browser.newPage();
    await page.goto(url);

    // 填写资料
    let inputs = await page.$$('input');
    await inputs[1].type(nickName, {delay: 100});
    await inputs[2].type(password, {delay: 100});
    await inputs[3].type(phone, {delay: 100});

    // 点击发送验证码
    const link = await page.$('a.send-sms');
    link.click();

    // TODO
    // TDC交互验证
    let response = await prompt({
        type: 'input',
        name: 'code',
        message: '手动验证'
    });

    // TODO
    // 发送验证码给腾讯或者接受验证码
    response = await prompt({
        type: 'input',
        name: 'code',
        message: '手动发送验证码'
    });

    // 点击我已发送
    let button = page.$('.submit');
    button.click();

    // 注册成功
    await page.waitForNavigation();
}
