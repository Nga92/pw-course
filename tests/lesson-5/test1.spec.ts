/*
1. Tạo file test1.spec.ts. Truy cập trang https://material.playwrightvn.com/, click vào “Bài học 1: Register Page” 
a. Nhập đầy đủ các thông tin, click button register 
*/
import { test, expect } from '@playwright/test';

test('Bài 1', async ({ page }) => {
    await test.step("Navigate to Playwight", async () => {
        await page.goto('https://material.playwrightvn.com/');
    })
    await test.step("click vào Bài học 1: Register Page", async () => {
        await page.locator('//a[contains(.,"Bài học 1: Register Page")]').click();
    })
    await test.step("quit brower", async () => {
        await page.close();
    })
});
