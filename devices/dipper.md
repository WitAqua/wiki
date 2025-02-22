---
title: Xiaomi Mi 8
prev: false
next: false
---

# Installation Guide for Xiaomi Mi 8 <Badge type="info" text="dipper" />
::: warning
Keep in mind that flashing a custom ROM will erase all data on your device, including apps, settings, and system files, effectively restoring it to a factory-like state. Double-check that your backups are complete and accessible before moving forward.
:::

## Enter Fastboot Mode
- First, completely power off your device.
- To enter Fastboot mode, press and hold the `Power` and `Volume Down` buttons simultaneously. Keep holding them until the Fastboot screen appears.

## Connect Your Device to the PC
- Use a reliable USB cable to connect your device to the PC.
- Ensure that your PC has the necessary drivers installed for your device.

## Verify the Device
- Open a terminal or command prompt on your PC and run the following command:
```bash
fastboot devices
```
- If your device is detected, it will show a unique identifier followed by the word "fastboot." Example:
```
ABC12345XYZ fastboot
```
- If nothing appears, ensure Fastboot is properly configured on your PC, check the USB connection, and verify that the device is in Fastboot mode.

## Flash Necessary Images
::: info
Ensure the image file (`recovery.img`) is in the same directory as your terminal/command prompt. Then, execute the following command:
:::
```bash
fastboot flash recovery recovery.img
```
::: info
After flashing, do not boot into the system yet. Instead, reboot directly into recovery mode.
:::

## Perform a Format Data
::: warning
Formatting data will erase all user files and settings. Ensure you’ve backed up your data before proceeding.
:::
- Navigate to the "Wipe" or "Format Data" option in the recovery menu.
- Select **Factory Reset** or **Format Data**. Confirm the action.

## Install the ROM
- Go to `Main Menu` > `Apply Update` > `Apply from ADB`.
- On your PC, navigate to the directory where the ROM file is saved.
- Open a terminal in that directory.
- Enter the sideload command:
```bash
adb sideload <filename>.zip
```
::: info
This can take several minutes.
:::
- After the installation is complete, return to the main menu of the recovery.
- Select `Reboot` > `System`.
