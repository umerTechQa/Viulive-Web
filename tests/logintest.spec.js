const { test, expect } = require('@playwright/test');
import { ViuLive } from '../pages/loginpage';
// const ViuLive = require("../tests/loginpage.spec")
//const Zibalogin123 = require("../pages/loginpagefile")
test('logintest1',async({page})=> {
  await page.goto('https://www.viulive.com/?category=all');
  
  const loginpageViuLive = new ViuLive(page);
  await loginpageViuLive.ViuLivelogin();
  //await page.pause();
});