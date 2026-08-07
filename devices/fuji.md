---
title: FCNT arrows Alpha
prev: false
next: false
---

# Installation Guide for arrows Alpha <Badge type="info" text="fuji" />
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
Ensure the image file (`boot.img`, `init_boot.img`, and `vendor_boot.img`) is in the same directory as your terminal/command prompt. Then, execute the following command:
:::
```bash
fastboot flash boot boot.img
fastboot flash init_boot init_boot.img
fastboot flash vendor_boot vendor_boot.img
```
::: info
After flashing, do not boot into the system yet. Instead, reboot directly into recovery mode.
:::

## Perform a Format Data
::: warning
Formatting data will erase all user files and settings. Ensure you’ve backed up your data before proceeding.
:::
- Navigate to the "Wipe" or "Format Data" option in the recovery menu.
- Select **Factory reset** > **Format data/factory reset** . Confirm the action.

## Install the ROM
- Press top-left arrow button for back to the main menu.
- Go to `Apply Update` > `Apply from ADB`.
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
- Select `Reboot system now`.
