const { test, expect } = require('@playwright/test');
import { ViuDasgboard } from '../pages/dashbord';

test('Dashbord test',async({page})=> {
  await page.goto('https://www.viulive.com/?category=all');
  
  const dashboard = new ViuDasgboard(page);
  await dashboard.ViuLiveDash();
});