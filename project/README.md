# Novan株式会社 コーポレートサイト

## 概要
Novan株式会社のコーポレートサイトのソースコードです。Next.js 14を使用して構築されています。

## 機能
- コーポレートサイトのメインページ
- 会社概要
- サービス紹介
- お問い合わせフォーム
- ニュース

## 技術スタック
- Next.js 14
- TypeScript
- Tailwind CSS
- Framer Motion
- Shadcn/ui

## 開発環境のセットアップ

1. リポジトリのクローン:
```bash
git clone https://github.com/your-username/novan-homepage.git
cd novan-homepage
```

2. 依存関係のインストール:
```bash
npm install
```

3. 環境変数の設定:
- `.env.example`ファイルを`.env.local`にコピー
- 必要な環境変数を設定

4. 開発サーバーの起動:
```bash
npm run dev
```

## 環境変数
以下の環境変数が必要です：

- `SENDGRID_API_KEY`: SendGridのAPIキー（メール送信用）
または
- `GMAIL_USER`: Gmailアドレス
- `GMAIL_APP_PASSWORD`: Gmailアプリパスワード

## デプロイ
このプロジェクトはVercelにデプロイすることを推奨します。

## ライセンス
All rights reserved - Novan株式会社 