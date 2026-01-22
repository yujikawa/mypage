# My Personal Page (Astro)

このリポジトリは、Astro、TypeScript、Tailwind CSSを使用して構築された個人のウェブサイトです。ブログ機能とドキュメントコンテンツの管理をサポートし、GitHub Pagesに自動デプロイされます。

## ✨ 特徴

*   **モダンなスタック**: Astro, TypeScript, Tailwind CSS
*   **高速な静的サイト**: 高いパフォーマンスとSEOに最適化
*   **Markdownベースのコンテンツ**: 既存のMarkdownファイルを簡単に統合
*   **自動デプロイ**: GitHub Actionsを利用したGitHub Pagesへの継続的デプロイ

## 🚀 セットアップと開発

### 必要条件

*   Node.js (v18以上を推奨)
*   npm (Node.jsに含まれています)

### インストール

プロジェクトの依存関係をインストールします。

```bash
npm install
```

### ローカル開発サーバーの起動

開発サーバーを起動し、ローカルでサイトをプレビューします。

```bash
npm run dev
```

ブラウザで `http://localhost:4321` にアクセスすると、サイトを確認できます。
変更を保存すると、ブラウザが自動的にリロードされます。

### コンテンツの管理

Markdownファイルは `src/content/docs/` ディレクトリに配置されています。

*   `src/content/docs/` : ドキュメントやブログ記事のMarkdownファイルをここに配置します。既存のフォルダ構造（例: `data_engineering/`, `development/`, `rust/`）は維持されています。

新しいコンテンツを追加するには、このディレクトリにMarkdown (`.md`) ファイルを作成し、フロントマターを追加してください。

#### Markdownファイルのフロントマター

各Markdownファイルの先頭には、以下のようなYAML形式のフロントマターを含める必要があります。

```markdown
---
title: "ページのタイトル"
description: "ページの説明文"
---

ここにページの本文をMarkdown形式で記述します。
```

*   `title`: ページのタイトルとして表示されます。`src/content/config.ts`で必須と定義されています。
*   `description`: ページの簡単な説明として、一覧ページやSEOに利用できます。（オプション）

### サイトのビルド

本番環境向けにサイトをビルドします。ビルドされたファイルは `dist/` ディレクトリに出力されます。

```bash
npm run build
```

### デプロイメント (GitHub Pages)

このプロジェクトはGitHub Pagesに自動的にデプロイされるように設定されています。

*   **トリガー**: `master` ブランチにプッシュまたはマージされると、デプロイプロセスが開始されます。
*   **ツール**: GitHub Actions (`.github/workflows/deploy.yml`) がAstroプロジェクトをビルドし、`gh-pages` ブランチにプッシュします。
*   **URL**: サイトは `https://yujikawa.github.io/mypage/` で公開されます。

### プロジェクト構造

```text
.
├── public/                 # 静的アセット (favicon, imagesなど)
├── src/
│   ├── components/         # 再利用可能なAstro/UIフレームワークコンポーネント
│   ├── content/
│   │   ├── docs/           # Markdownコンテンツファイル（あなたの記事やドキュメント）
│   │   └── config.ts       # コンテンツコレクションのスキーマ定義
│   ├── layouts/            # 共通のページレイアウト
│   └── pages/              # Astroページとルーティング
│       └── docs/           # ドキュメント一覧と詳細ページのルーティング
├── astro.config.mjs        # Astroの設定ファイル
├── tailwind.config.cjs     # Tailwind CSSの設定ファイル
├── tsconfig.json           # TypeScriptの設定ファイル
└── package.json            # プロジェクトの依存関係とスクリプト
```