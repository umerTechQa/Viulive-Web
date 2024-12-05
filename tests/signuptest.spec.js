const { test, expect } = require('@playwright/test');
import { SignupViulive } from '../pages/signuppage';

test('SignUp',async({page})=> {
    await page.goto('https://www.viulive.com/?category=all');

    const testsignupviu = new SignupViulive(page);
    await testsignupviu.signup() ;

  });