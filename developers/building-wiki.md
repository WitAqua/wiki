# Building WitAqua Wiki
## Prerequisites
Before you begin, make sure that you have the following installed:
- **Node.js**: You need Node.js to run the necessary build tools.
- **npm** (Node Package Manager): npm comes with Node.js, and you’ll use it to install dependencies.

Once these prerequisites are in place, you’re ready to get started.

## Setup

Follow these steps to set up your project.

### 1. Clone the Repository

Start by cloning the repository to your local machine:

```bash
git clone "ssh://username@gerrit.witaqua.org:29418/wiki" && (cd "wiki" && mkdir -p `git rev-parse --git-dir`/hooks/ && curl -Lo `git rev-parse --git-dir`/hooks/commit-msg http://gerrit.witaqua.org/tools/hooks/commit-msg && chmod +x `git rev-parse --git-dir`/hooks/commit-msg)
```
If you're using zsh:
```zsh
git clone "ssh://username@gerrit.witaqua.org:29418/wiki" && (cd "wiki" && mkdir -p "$(git rev-parse --git-dir)/hooks/" && curl -Lo "$(git rev-parse --git-dir)/hooks/commit-msg" http://gerrit.witaqua.org/tools/hooks/commit-msg && chmod +x "$(git rev-parse --git-dir)/hooks/commit-msg")
```

### 2. Install Dependencies

Install all the required dependencies for the project.

```bash
npm install
```

## Local Development

Once the dependencies are installed, you can start a local development server to preview the site.

To run the server, use the following command:

```bash
npm run docs:dev
```

::: info
This will start the development server. The server watches for changes, so you’ll see your updates live without needing to manually refresh or restart the server.
:::

## Building for Production
To build the wiki locally, use the following command:

```bash
npm run docs:build
```

This command will compile the necessary files and generate a static version of the site.

## Push to Gerrit
Use the following command to push your changes for review:
```bash
git push origin HEAD:refs/for/main
```

### Address Feedback
If reviewers request changes, modify your code and amend the commit:
```bash
git commit --amend
```
Then, push the amended commit:
```bash
git push origin HEAD:refs/for/main
```
