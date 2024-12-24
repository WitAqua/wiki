---
prev: false
next: false
---
# Adding Your Device to WitAqua OTA
We are excited to offer you the opportunity to add your device to our OTA update system. This guide will walk you through the process of adding your device to the OTA, structuring the necessary files, and ensuring that everything works smoothly.

### Folder Structure Overview
To properly integrate your device into our OTA system, you'll need to follow a specific folder structure. Below is the folder structure you'll be working with:
```
/$codename.json
/changelog/$codename
/data/devices.json
```
Let's break down what each part of the folder structure represents and what goes into each file.


### 1. `$codename.json`
This file is critical for defining the updater URL, which allows the app to fetch OTA updates for the specific device. The format of the JSON is standardized, and it will inform the app about where to download the update from.

#### Example Structure:
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

- `timestamp`: This is the build date represented as a Unix timestamp.
::: tip
You can get it by following this command:
```bash
cat out/target/product/$codename/system/build.prop | grep "ro.build.date.utc"
```
:::

- `filename`: Name of the OTA update file.
- `md5`: The MD5 value is usually a hash or checksum of the file, used for integrity verification.
::: tip
You can get it by following this command:
```bash
md5sum out/target/product/$codename/WitAqua-*-OFFICIAL.zip
```
:::
- `size`: The size of the update, measured in bytes.
::: tip
You can get it by following this command:
```bash
ls -l WitAqua-*-OFFICIAL.zip | awk '{print $5}'
```
:::
- `download`: The URL where the OTA package can be downloaded.
- `version`: The version of the ROM, which corresponds to the build version on the device.

---

### 2. `/changelog/$device`

The changelog file provides a summary of changes made in each update. It's a simple plain text file that users can refer to when they want to know what's new or improved in the latest update.

#### Example Structure:
```
===== 20241224 =====
- Merge December Security Patch

===== 20241129 =====
- Initial Android 15 Release
```
::: info
This file should be named based on your device's codename (e.g., `dipper` for Xiaomi Mi 8). Keep the changelog clear and concise, listing the most recent changes first.
:::
---

### 3. `/data/devices.json`
This file contains metadata for each device you want to add on our website. The file uses the following JSON format to store device information:

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
If the device is no longer maintained, consider including:
```json
"deprecated": true
```
:::

This file should contain the following details for each device:

- `name`: The full name of the device.
- `codename`: The device's codename.
- `brand`: The manufacturer or brand of the device.
- `maintainer`: The name and GitHub username of the person responsible for maintaining the device's OTA updates.
- `downloadUrl`: A link to the OTA download for the device.
- `imgsUrl`: A URL where users can find various device images, such as `recovery.img`, `boot.img`, `vendor_boot.img`, `dtbo.img`, or any other relevant image files.
- `archiveUrl`: A URL for accessing archived versions of ROM packages for the device.
- `installUrl`: A URL where users can find installation instructions for the device.
- `latestAndroidVersion`: The latest available Android version for the device.
- `latestBuildDate`: The most recent build date of the device `(YYYY-MM-DD)`.
- `deprecated`: If the device is unmaintained or no longer supported, set this to `true`. This helps indicate that the device is no longer receiving updates.
