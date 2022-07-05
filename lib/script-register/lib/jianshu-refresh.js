'use strict';

const puppeteer = require('puppeteer');

const url = process.env.URL || 'https://www.jianshu.com/p/6dcd3e4932f2';


module.exports = async function(nickName, password, phone) {
    const browser = await puppeteer.launch({
        headless: false,
    });
    const page = await browser.newPage();
    await page.goto(url);
    while (true) {
        await page.reload();
    }
}