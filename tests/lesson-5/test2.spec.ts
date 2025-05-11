/*
2. Tạo file test2.spec.ts. Truy cập trang https://material.playwrightvn.com/, click vào “Bài học 2: Product page”, hãy thêm sản phẩm để giỏ hàng có số lượng sản phẩm như sau:
a. Sản phẩm 1: 2 sản phẩm 
b. Sản phẩm 2: 3 sản phẩm 
c. Sản phẩm 3: 1 sản phẩm 
*/
import { test, expect } from '@playwright/test';
let btnAddToCart1 = "//button[@class='add-to-cart' and @data-product-id='1']";
let btnAddToCart2 = "//button[@class='add-to-cart' and @data-product-id='2']";
let btnAddToCart3 = "//button[@class='add-to-cart' and @data-product-id='3']";
test('Bài 1', async ({ page }) => {
    await test.step("Navigate to Playwight", async () => {
        await page.goto('https://material.playwrightvn.com/');
    })
    await test.step("Bài học 2: Product page", async () => {
        await page.locator('//a[contains(.,"Bài học 2: Product page")]').click();
    })
    await test.step("Add to cart", async () => {
        await page.locator(btnAddToCart1).dblclick();
        await page.locator(btnAddToCart2).click({ clickCount: 3 });
        await page.locator(btnAddToCart3).click();
    })
});