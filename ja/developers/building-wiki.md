# WitAqua Wikiのビルド
## 必須事項
ビルドを始める前に下記のものをインストールしておく必要があります:
- **Node.js**: ビルドツールを実行するために必要となります.
- **npm** (Node Package Manager): npmはNode.jsに付属しており、依存関係をインストールするために使用します。

これらの必須事項が揃ったら、準備完了です。

## Setup

プロジェクトをセットアップするために、次の手順に従ってください.。

### 1. リポジトリのクローン

まず、リポジトリをローカルマシンにクローンします。

```bash
git clone "ssh://username@gerrit.witaqua.org:29418/wiki" && (cd "wiki" && mkdir -p `git rev-parse --git-dir`/hooks/ && curl -Lo `git rev-parse --git-dir`/hooks/commit-msg http://gerrit.witaqua.org/tools/hooks/commit-msg && chmod +x `git rev-parse --git-dir`/hooks/commit-msg)
```
zshを使用している場合:
```zsh
git clone "ssh://username@gerrit.witaqua.org:29418/wiki" && (cd "wiki" && mkdir -p "$(git rev-parse --git-dir)/hooks/" && curl -Lo "$(git rev-parse --git-dir)/hooks/commit-msg" http://gerrit.witaqua.org/tools/hooks/commit-msg && chmod +x "$(git rev-parse --git-dir)/hooks/commit-msg")
```

### 2. 依存関係のインストール

プロジェクトに必要なすべての依存関係をインストールします。

```bash
npm install
```

## ローカルでの開発

依存関係がインストールされたら、ローカル開発用サーバーを起動してサイトをプレビューできます。

サーバーを実行するには下記のコマンドを実行してください。

```bash
npm run docs:dev
```

::: info
これにより開発サーバーが起動します。サーバーは変更を常に監視しているため、手動でリフレッシュや再起動を行わなくても、更新がリアルタイムで反映されます。
:::

## 本番環境用のビルド
ローカルでWikiをビルドするには、次のコマンドを使用します。

```bash
npm run docs:build
```

このコマンドは必要なファイルをコンパイルし、サイトの静的バージョンを生成します。

## Gerritへのプッシュ
変更をレビュー用にプッシュするには、次のコマンドを使用します:
```bash
git push origin HEAD:refs/for/main
```

### フィードバックへの対応
レビュアーが変更を要求した場合、コードを修正し、コミットを修正します。
```bash
git commit --amend
```
そして修正したコミットをプッシュします。
```bash
git push origin HEAD:refs/for/main
```
