---
title: Google Pixel 6a
prev: false
next: false
---

# Google Pixel 6a用のインストールガイド <Badge type="info" text="bluejay" />
::: warning
カスタムROMをフラッシュすると、アプリ、設定、システムファイルを含むデバイス上のすべてのデータが消去され、工場出荷時の状態に戻ります。バックアップが完全でアクセス可能であることを確認してから進めてください。
:::

## Fastbootモードの入り方
- まず、デバイスの電源を完全に切ります。
- Fastbootモードに入るには、`Power`ボタンと`Volume Down`ボタンを同時に押し続けます。Fastboot画面が表示されるまで押し続けてください。

## デバイスをPCに接続
- 信頼できるUSBケーブルを使用して、デバイスをPCに接続します。
- PCにデバイス用の必要なドライバーがインストールされていることを確認してください。

## デバイスが認識されているかの確認
- PCでターミナルまたはコマンドプロンプトを開き、次のコマンドを実行します。。
```bash
fastboot devices
```
- デバイスが認識されている場合、固有の識別子と「fastboot」という単語が表示されます。:
```
ABC12345XYZ fastboot
```
- 何も表示されない場合は、PCでFastbootが正しく設定されていること、USB接続を確認し、デバイスがFastbootモードにあることを確認してください。

## 必要なイメージの書き込み
::: info
イメージファイル（`boot.img`、`dtbo.img`、`vendor_boot.img`）がターミナル/コマンドプロンプトと同じディレクトリにあることを確認してください。その後、次のコマンドを実行します。
:::
```bash
fastboot flash boot boot.img
fastboot flash dtbo dtbo.img
fastboot flash vendor_boot vendor_boot.img
```
::: info
フラッシュ後、システムにブートしないでください。代わりに、直接リカバリモードに再起動してください。
:::

## データフォーマットの実行
::: warning
データのフォーマットはすべてのユーザーファイルと設定を消去します。実行前にデータをバックアップしたことを確認してください。
:::
- リカバリメニューで「Wipe」または「Format Data」オプションに移動します。
- **Factory Reset** または **Format Data** を選択します。するとデータフォーマットが実行されます。

## ROMのインストール
- `Main Menu` > `Apply Update` > `Apply from ADB` に移動します。
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
- `Reboot` > `System`を選択します。
