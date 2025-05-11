/*
3. Tạo file test3.spec.ts. Truy cập trang https://material.playwrightvn.com/, click vào “Bài học 3: Todo page”. 
a. Thêm mới 100 todo item có nội dung “Todo <i>” 
b. Xoá các todo có số lẻ 
*/
import { test, expect } from '@playwright/test';

test('Bài 3', async ({ page }) => {
    await test.step("Navigate to Playwight", async () => {
        await page.goto('https://material.playwrightvn.com/');
    })
    await test.step("click vào bài học 3: Todo page", async () => {
        await page.locator('//a[contains(.,"Bài học 3: Todo page")]').click();
    })

    await test.step("Thêm mới 100 todo item có nội dung “Todo <i>", async () => {
        for (let i = 1; i <= 100; i++) {
            await page.locator('//input[@id="new-task"]').fill(`Todo ${i}`);
            await page.locator('//button[@id="add-task"]').click();
        }
    })
    await test.step("Xoá các todo có số lẻ  ", async () => {
        page.once('dialog', async (dialog) => {
            await dialog.accept();
        });
        for (let i = 1; i <= 100; i++) {
            if (i % 2 === 1) {
                let deleteBtn = page.locator(`//button[@id="todo-${i}-delete"]`);
                await deleteBtn.waitFor({ state: 'visible' });
                await deleteBtn.click();
                console.log(`Xoa to do : ${i}`);
            }
        }
    })

});