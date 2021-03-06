
## Solidusを利用したECサイト

** (下記のアドレスにて公開中) **

http://kozy.work/potepan/

### 本番環境･･･AWS EC2上にデプロイ
･ unicorn + nginx
･ capistorano等は使用せず､手動によるデプロイ
･ db: postgresを使用 (サーバは同一インスタンスを共用)

### 背景

ポテパンキャンプにて提供されたモックアップをベースにコーディングを重ね､バグフィックスや改変などを加えていったもの｡
カート機能､商品レビュー機能などを実装｡（2017年2月-5月）

### 苦労した点

* Solidusの仕様解読

READMEや公式サイトにはあまりつっこんだ記述が見られず､直接gemのコードリーディングするなど、仕様の理解に手間取った｡

* アセット

画像の絶対パス指定や､font-awesome･slider revolutionなどの要素が思ったように表示されず苦労した｡
もともと入っていたフロント用のライブラリ、slider revolutionによる文字化けでは苦しみました｡Windows-31Jの文字コードがcssの中に直書きされていたことと､またrailsでの実装例があまり紹介されていないこともあり､原因特定までに時間がかかってしまいました｡
試行錯誤を通じて､アセットプリコンパイルの仕組みやデプロイ周りの注意点などを学びました｡

* エンジンとの分離
SolidusをベースにしてECサイトを作る場合は､おそらくSolidusエンジンの提供するフレームに乗っかる形で､ビューやコントローラーのカスタマイズをするのが一般的かと思います｡

今回はゼロから独立したアプリケーションを作る方針があったため､ところどころSolidasのモジュールを部分的にインクルードするなど､かなり複雑でわかりにくい使い方をすることになってしまいました｡
Solidusに完全に乗っかるのか､別アプリとして､SolidusのAPIだけを利用させてもらうのか(データ管理などはこちらでやる前提)｡
ここが整理されていないまま進んだ結果､Solidusとこのアプリとの結合度が(中途半端に)高くなってしまったのが反省点です｡
