# 桜香予約システム 操作マニュアル

GitHub Pagesでそのまま公開できる、ビルド不要の静的サイトです。

## ファイル

- `index.html` … ページ本体
- `style.css` … デザイン
- `script.js` … 検索・折り畳み・コピー・目次
- `manual-data.js` … **マニュアル本文。文章変更は基本ここだけでOK**

## iPhone / スマホだけでGitHub Pagesへ公開する

1. SafariでGitHubへログインする。
2. 新しいRepositoryを作る。例：`ouka-manual`
3. Repositoryの `Add file` → `Upload files` から、このフォルダの4ファイルをアップロードする。
4. `Commit changes` を押す。
5. Repositoryの `Settings` → `Pages` を開く。
6. `Build and deployment` の Source を `Deploy from a branch` にする。
7. Branchを `main`、Folderを `/(root)` にして `Save`。
8. 数分後、GitHub PagesのURLが表示される。

公開URLは通常、
`https://GitHubユーザー名.github.io/ouka-manual/`
の形になります。

## スマホから文章だけ直す

1. GitHubで `manual-data.js` を開く。
2. 鉛筆アイコン（Edit）を押す。
3. 直したい文章だけ変更する。
4. `Commit changes`。
5. GitHub Pagesへ自動反映される。

### 例

```js
{
  title: "オンラインキャンセル",
  body: [
    "お客様は予約ごとの専用URLからオンラインキャンセルできます。"
  ]
}
```

`title` が見出し、`body` の中が本文です。

## デザイン変更

主な色は `style.css` 冒頭の `:root` にまとまっています。

```css
--bg:#fff8fa;
--main:#e88fa9;
--accent:#d96b8a;
--deep:#c24f73;
```

## 特徴

- スマホ最優先のレスポンシブ表示
- マニュアル全文検索
- カテゴリー / 各項目の折り畳み
- 管理画面などへのクイックリンク
- URL / CMDのコピーボタン
- 固定ヘッダー / 目次
- 上へ戻るボタン
- 外部ライブラリなし
- npm / ビルド不要
