# training-Java-Framework-FE
新人研修Javaフレームワーク 演習でクロスオリジンを行う用の環境

## フォルダ説明
### assinmentsフォルダ
- 確認テストで使用する用のHTMLファイルが格納されています

### exercisesフォルダ
- 練習問題で使用する用のHTMLファイルが格納されています

### exercisesフォルダの中身について
1. crossOriginフォルダ
- @CrossOriginアノテーションを使って、クロスオリジンリクエスト許可を試行する用
2. slackApi
- Slack SDK for Javaを使う講義の中で、画面上からのSlackメッセージを送信を試行する用

## サーバの立て方
1. Express.jsを使用してWebサーバーを作成するため、ターミナルで「npm install express」を実行
2. サーバ情報の記載されたjsファイルを作成(server.js)
3. ターミナルで「node server.js」を実行
