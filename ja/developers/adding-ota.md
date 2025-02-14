# WitAqua OTAにデバイスを追加する
私たちは、あなたのデバイスをOTAシステムに追加する機会を提供できることを嬉しく思います。このガイドでは、デバイスをOTAに追加するプロセス、必要なファイルの構造化、およびすべてがスムーズに動作することを確認する方法について説明します。

### フォルダ構造について
デバイスをOTAシステムに適切に統合するには、特定のフォルダ構造に従う必要があります。以下は、使用するフォルダ構造です。
```
/$codename.json
/changelog/$codename
/data/devices.json
```
フォルダ構造の各部分が何を表しているか、各ファイルに何が含まれているかを見ていきましょう。


### 1. `$codename.json`
このファイルは、特定のデバイスのためにアプリがOTAアップデートを取得できるようにするアップデーターURLを定義するために重要です。JSONの形式は標準化されており、アプリにどこからアップデートをダウンロードするかを通知します。

#### 例:
```json
{
  "response": [
    {
      "timestamp": 1734854400,
      "filename": "WitAqua-15.0-20241222-dipper-v2.0-OFFICIAL.zip",
      "md5": "5660eb5e11e004c5c98910389874bcbe",
      "size": 1198424117,
      "download": "https://sourceforge.net/projects/witaqua/files/15/dipper/WitAqua-15.0-20241222-dipper-v2.0-OFFICIAL.zip/download",
      "version": "2"
    }
  ]
}
```

- `timestamp`: これはUnixタイムスタンプで表されたビルド日時です。
::: tip
次のコマンドで取得できます。
```bash
cat out/target/product/$codename/system/build.prop | grep "ro.build.date.utc"
```
:::

- `filename`: OTAアップデートファイルの名前。
- `md5`: MD5値は通常、ファイルのハッシュまたはチェックサムであり、整合性検証に使用されます。
::: tip
ハッシュ値は次のコマンドで取得できます。
```bash
md5sum out/target/product/$codename/WitAqua-*-OFFICIAL.zip
```
:::
- `size`: アップデートパッケージのサイズ（バイト単位）。
::: tip
アップデートパッケージのサイズは次のコマンドで取得できます。
```bash
ls -l WitAqua-*-OFFICIAL.zip | awk '{print $5}'
```
:::
- `download`: OTAパッケージをダウンロードできるURL。
- `version`: デバイスのビルドバージョンに対応するROMのバージョン。

---

### 2. `/changelog/$device`

変更履歴ファイルは、各アップデートで行われた変更の概要を提供します。これは、最新のアップデートで何が新しくなったか、または改善されたかを知りたいユーザーが参照できるシンプルなプレーンテキストファイルです。

#### 例:
```
===== 20241224 =====
- Merge December Security Patch

===== 20241129 =====
- Initial Android 15 Release
```
::: info
このファイルは、デバイスのコードネームに基づいて名前を付ける必要があります（例：Xiaomi Mi 8の場合は `dipper`）。変更履歴は明確かつ簡潔にし、最新の変更を最初に記載してください。
:::
---

### 3. `/data/devices.json`
このファイルには、ウェブサイトに追加したい各デバイスのメタデータが含まれています。デバイス情報を保存するために、次のJSON形式を使用します。

```json
{
  "devices": [
        {
      "name": "Pixel 6a",
      "codename": "bluejay",
      "brand": "Google",
      "maintainer": {
        "name": "Toufu",
        "github": "toufune"
      },
      "downloadUrl": "https://sourceforge.net/projects/witaqua/files/15/bluejay/WitAqua-15.0-20241214-bluejay-v2.0-OFFICIAL.zip/download",
      "imgsUrl": "https://sourceforge.net/projects/witaqua/files/15/bluejay/images/",
      "archiveUrl": "https://sourceforge.net/projects/witaqua/files/15/bluejay",
      "installUrl": "https://wiki.witaqua.org/devices/bluejay",
      "latestAndroidVersion": "15",
      "latestBuildDate": "2024-12-14"
    },
    {
      "name": "Xiaomi Mi 8",
      "codename": "dipper",
      "brand": "Xiaomi",
      "maintainer": {
        "name": "neroices",
        "github": "neroices"
      },
      "downloadUrl": "https://sourceforge.net/projects/witaqua/files/15/dipper/WitAqua-15.0-20241222-dipper-v2.0-OFFICIAL.zip/download",
      "imgsUrl": "https://sourceforge.net/projects/witaqua/files/15/dipper/images/",
      "archiveUrl": "https://sourceforge.net/projects/witaqua/files/15/dipper/",
      "installUrl": "https://wiki.witaqua.org/devices/dipper",
      "latestAndroidVersion": "15",
      "latestBuildDate": "2024-12-22"
    }
  ]
}
```

::: info
デバイスがメンテナンスされなくなった場合、次の情報を含めてください：
```json
"deprecated": true
```
:::

このファイルには、各デバイスの次の詳細情報が含まれている必要があります：

- `name`: デバイスの正式名称
- `codename`: デバイスのコードネーム
- `brand`: デバイスのブランドまたはメーカー
- `maintainer`: デバイスのOTAアップデートを担当するメンテナの名前とGitHubユーザー名。
- `downloadUrl`: デバイスのOTAパッケージのダウンロードリンク。
- `imgsUrl`:  `recovery.img`、`boot.img`、`vendor_boot.img`、`dtbo.img` などのデバイスイメージファイルのダウンロードリンク。
- `archiveUrl`: デバイスのOTAパッケージのアーカイブ版をダウンロードするためのリンク。
- `installUrl`: デバイスのインストール手順を見つけることができるリンク。
- `latestAndroidVersion`: WitAquaでサポートされている最新のAndroidバージョン
- `latestBuildDate`: 最新ビルドのビルド日時 `(YYYY-MM-DD)`.
- `deprecated`: デバイスがメンテナンスされていない、またはサポートされていない場合は、これを `true` に設定します。これにより、デバイスが更新を受け取らなくなったことが示されます。
