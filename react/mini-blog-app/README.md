# 💬 미니 블로그

```
/mini-blog-app
 ├── src
 │   ├── components
 │   │   ├── list
 │   │   │   ├── CommentList.jsx
 │   │   │   ├── CommentListItem.jsx
 │   │   │   ├── PostList.jsx
 │   │   │   ├── PostListItem.jsx
 │   │   ├── pages
 │   │   │   ├── MainPage.jsx
 │   │   │   ├── PostViewPage.jsx
 │   │   │   ├── PostWritePage.jsx
 │   │   ├── ui
 │   │   │   ├── Button.jsx
 │   │   │   ├── TextInput.jsx
 │   ├── App.jsx
 ├── package.json
 ├── data.json
 ├── main.jsx
```

## 🏠 메인페이지

![image](https://github.com/user-attachments/assets/92149d2f-ed35-459a-a1db-f64cecd9b5ae)

## ✒️ 글 작성하기

![image](https://github.com/user-attachments/assets/1d9b765e-92d5-49a9-8530-4192769e1636)

![image](https://github.com/user-attachments/assets/10ce0351-bdf9-4005-89c5-79610e832238)

## 📃 글 상세페이지

![image](https://github.com/user-attachments/assets/aedc6f7c-2f00-40c5-bee0-3f98415a10b8)

## 💭 댓글 작성

![image](https://github.com/user-attachments/assets/50d180a2-fe2c-4ae3-8acc-2c63b291355b)

![image](https://github.com/user-attachments/assets/dea7f93e-a470-4fa0-b987-bca7ab23829b)

## ➖ 글 삭제하기

![image](https://github.com/user-attachments/assets/67a7b209-f52a-4112-865c-0c81cbd13e7f)

### 프로덕션 배포하기

npm run build

빌드된 파일 실행<br>
npm install -g serve<br>
serve -s dist

### npm dist 폴더를 Github Pages에 배포하기 위한 모듈

npm install -g gh-pages

### package.json

"scripts": {
"build": "vite build",
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
}

http://localhost:3000

웹서버(WAS)필요

- 깃허브 Pages
- Vercel
- AWS EC2 or 라이트세일(월정액)
