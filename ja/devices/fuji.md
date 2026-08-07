---
title: FCNT arrows Alpha
prev: false
next: false
---

# arrows Alpha用のインストールガイド <Badge type="info" text="fuji" />
::: warning
カスタムROMをフラッシュすると、アプリ、設定、システムファイルを含むデバイス上のすべてのデータが消去されます。必要なデータは必ず事前にバックアップを取るようにしてください。
:::

## Fastbootモードの入り方
- まず、デバイスの電源を完全に切ります。
- Fastbootモードに入るには、`Power`ボタンと`Volume Down`ボタンを同時に押し続けます。Fastboot画面が表示されるまで押し続けてください。

## デバイスをPCに接続
- 信頼できるUSBケーブルを使用して、デバイスをPCに接続します。
- PCにデバイス用の必要なドライバーがインストールされていることを確認してください。

## デバイスが認識されているかの確認
- PCでターミナルまたはコマンドプロンプトを開き、次のコマンドを実行します。
```bash
fastboot devices
```
- デバイスが認識されている場合、固有の識別子と「fastboot」という単語が表示されます。:
```
ABC12345XYZ fastboot
```
- 何も表示されない場合は、PCでFastbootが正しく設定されていること、USB接続を確認し、デバイスがFastbootモードにあることを確認してください。

## 必要なイメージの書き込み
- イメージファイル（`boot.img`、`init_boot.img`、`vendor_boot.img`）がターミナル/コマンドプロンプトと同じディレクトリにあることを確認してください。
- 次のコマンドを実行します。
```bash
fastboot flash boot boot.img
fastboot flash init_boot init_boot.img
fastboot flash vendor_boot vendor_boot.img
```
- 3個のイメージをフラッシュしたら、音量キーを押して`RECOVERY MODE`に合わせ、電源キーでリカバリーに再起動します。

## データフォーマットの実行
::: warning
データのフォーマットはすべてのユーザーファイルと設定を消去します。実行前にデータをバックアップしたことを確認してください。
:::
- **Factory reset** > **Format data/factory reset** を選択します。するとデータフォーマットが実行されます。

## ROMのインストール
- 左上の「←」ボタンを押してメインメニューに戻ります。
- `Apply Update` > `Apply from ADB` を選択します。
- PCで、ROMファイルが保存されているディレクトリに移動します。
- そのディレクトリでターミナルを開きます。
- sideloadコマンドを実行します。
```bash
adb sideload <filename>.zip
```
::: info
これには数分かかります。
:::
- インストールが完了したら、リカバリのメインメニューに戻ります。
- `Reboot system now`を選択します。
