# Bilim Hub — React оқу орталығы

Бұл жоба React және Vite көмегімен жасалған қарапайым бір беттік оқу орталығының веб-сайты.

## Іске қосу

1. ZIP архивін ашыңыз.
2. VS Code бағдарламасында `react_oku_ortalygy` бумасын ашыңыз.
3. VS Code терминалын ашып, мына командаларды орындаңыз:

```bash
npm install
npm run dev
```

4. Терминалда көрсетілген мекенжайды браузерде ашыңыз (әдетте `http://localhost:5173`).

Өндірістік нұсқасын тексеру:

```bash
npm run build
```

## GitHub-қа жүктеу

GitHub-та жаңа бос repository жасаңыз. Содан кейін жоба бумасының терминалында:

```bash
git init
git add .
git commit -m "React practical task"
git branch -M main
git remote add origin REPOSITORY_URL
git push -u origin main
```

`REPOSITORY_URL` орнына өз репозиторийіңіздің HTTPS сілтемесін қойыңыз.

## Құрылымы

```text
src/
  components/
    Header.jsx
    Main.jsx
    About.jsx
    Services.jsx
    Footer.jsx
  App.jsx
  main.jsx
  styles.css
index.html
package.json
vite.config.js
```

Автор: Нұрдаулетұлы Темірлан
