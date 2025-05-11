#  Lesson5
# 1. Dom
  - Thẻ mở , thuộc tính, giá trị thuộc tính ,text, thẻ đóng.
  ## Cây DOM

  ```
Document
├── html
│   ├── head
│   │   └── title
│   │       └── "Trang web"
│   └── body
│       ├── h1
│       │   └── "Tiêu đề"
│       └── p
│           ├── "Đoạn văn "
│           └── strong
│               └── "in đậm"
```

# 2. Selector
 - Là cách chọn phần tử trên trang
- Các kiểu
  * Xpath selector
    * Xpath=XML path.
    * Có 2 loại  
       * Tuyệt đối : đi dọc theo cây DOM ==> bắt đầu bằng dấu / 
       * Tương đối : Tìm dựa vào đặc tính ==> bắt đầu bằng dấu //  ( //Tên thẻ[@thuộc tính="giá trị thuộc tính"])
  * Css selector.
  * Playwright selector.
# 3. Playwright base syntax
- Test : đơn vị có bản khai báo 1 test 
```
import { test } from '@playwright/test';

test('<tên test>', async ({ page }) => {
// Code của test
});
```
- Step : Đơn vị nhỏ hơn test dùng để khai báo từng step của TestCase.
```
await test.step('Tên step', async () => {
// Code here
});
```
  Lưu ý  : *step nên được map 1-1 với test case để dễ dàng maintain.*
-
- Basic action 
     *  Navigate
     * Click
     * Input
     * Radio/checkbox
     * Select option
     * Set Input File