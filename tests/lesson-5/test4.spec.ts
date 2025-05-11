/*
4. Tạo file test4.spec.ts. Truy cập trang https://material.playwrightvn.com/, click vào “Bài học 4: Personal notes”. 
a. Thêm mới 10 note có nội dung là tiêu đề và một phần ngắn (khoảng 3 dòng) tại báo https://vnexpress.net/khoa-hoc, 
b. Thực hiện search theo tiêu đề bài báo bất kì. 
*/
import { test, expect } from '@playwright/test';
test('Bài 4', async ({ page }) => {
    let titles;
    let contents;
    await test.step("Lấy tiêu đề và nội dung tại báo vnexpress ", async () => {
        await page.goto('https://vnexpress.net/khoa-hoc', { waitUntil: 'domcontentloaded' });

        let title = page.locator(`//h3[@class="title-news"]/a`);
        let content = page.locator(`//p[@class="description"]/a`);
        titles = await title.allTextContents();
        contents = await content.allTextContents();

        console.log(`Danh sach Title : ${titles}`);
        console.log(`Danh sach Content : ${contents}`);
    })
    await test.step("Navigate to Playwight => click vào “Bài học 4: Personal notes”", async () => {
        await page.goto('https://material.playwrightvn.com/');
        await page.locator('//a[contains(.,"Bài học 4: Personal notes")]').click();
    })
    await test.step("Thêm mới 10 note", async () => {
        const inputTitle = page.locator('//input[@id="note-title"]');
        const inputContent = page.locator('//textarea[@id="note-content"]');
        const btn = page.locator('//button[@id="add-note"]');
        for (let i = 0; i < 10; i++) {
            await inputTitle.fill(String(titles[i]));
            await inputContent.fill(String(contents[i]));
            await btn.click();
        }
    })
    await test.step("b. Thực hiện search theo tiêu đề bài báo bất kì", async () => {
        const inputSearch = page.locator('//input[@id="search"]');
        await inputSearch.fill(titles[0]);
    })

});