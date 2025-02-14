# WitAquaのビルド
## 必須事項
ビルドを始める前に、マシンが必要な要件を満たし、必要な依存関係がインストールされていることを確認することが重要です。

## リポジトリの初期化

Androidソースコード用のディレクトリを作成します。

```bash
mkdir ~/witaqua
cd ~/witaqua
```

リポジトリを初期化します。

```bash
repo init -u https://github.com/WitAqua/manifest.git -b 15.1 --git-lfs
```

## リポジトリの同期

リポジトリを同期してソースコードをダウンロードします。

```bash
repo sync
```
::: info
インターネット接続によっては、これに数時間かかることがあります.
:::
## ビルド環境のセットアップ

ビルドを行う前に、ビルド環境をセットアップする必要があります。

```bash
. build/envsetup.sh
```

## ビルドするデバイスの選択

```bash
breakfast <codename>
```

## ビルド

ビルドを開始します。

```bash
brunch <codename>
```
