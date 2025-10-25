# Building WitAqua
## Prerequisites
Before you begin, it is essential to ensure that your machine meets the necessary requirements and has the required dependencies installed.

## Initialize the Repository

Create a directory for your Android source code:

```bash
mkdir ~/witaqua
cd ~/witaqua
```

Now initialize the repo:

```bash
repo init -u https://github.com/WitAqua/manifest.git -b 16.0 --git-lfs
```

## Sync the Repository

Sync the repository to download the source code:

```bash
repo sync
```
::: info
This can take several hours depending on your internet connection.
:::
## Set Up the Build Environment

Before you can build, you'll need to set up the environment for the build.

```bash
. build/envsetup.sh
```

## Choose the Device

```bash
breakfast <codename>
```

## Build the Source

Start the build process:

```bash
brunch <codename>
```
