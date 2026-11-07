Jishac サイト：共通パーツ化版

【アップロード】
このフォルダの中身を GitHub のリポジトリ直下にアップロードしてください。
既存の index.html など同名ファイルは上書きし、次の4ファイルを新規追加します。
  header.html / sidebar.html / footer.html / site-components.js
画像・CSSは現在の内容をそのまま保持しています。

【今後の更新】
header.html ＝ 全ページのヘッダー
sidebar.html ＝ 全ページのサイドメニュー
footer.html ＝ 全ページのフッター
各ページの内容は従来どおり index.html、item.html などを編集します。

【注意】
共通パーツは JavaScript の fetch() で読み込みます。
ローカルのHTMLファイルを直接ダブルクリックして開く file:// 環境では表示できないことがあります。
Cloudflare Workers の公開URLで確認してください。
GitHubのHTMLプレビューでも正しく表示されない場合があります。
