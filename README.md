# Hello Open Source 🖐️

A repository to learn about open source code contributions flow (_for beginners only_).

## 🌎 Translations

_Sorted alphabetically_

- [Bengali](./translations/README-BN.md) (**বাংলা**)
- [Chinese](./translations/README-CHI.md) (**中文**)
- [French](./translations/README-FR.md) (**Français**)
- [German](./translations/README-DE.md) (**Deutsch**)
- [Hindi](./translations/README-HI.md) (**हिंदी**)
- [Hinglish](./translations/README-HINGLISH.md) (**Hinglish**)
- [Indonesian](./translations/README-ID.md) (**Bahasa Indonesia**)
- [Italian](./translations/README-it.md) (**Italiano**)
- [Japanese](./translations/README-JP.md) (**日本人**)
- [Korean](./translations/README-KR.md) (**한국어**)
- [Portuguese](./translations/README-PT-BR.md) (**Português**)
- [Russian](./translations/README-RU.md) (**русский**)
- [Spanish](./translations/README-ES.md) (**Española**)
- [Telugu](./translations/README-TE.md) {**తెలుగు**}
- [Thai](./translations/README-TH.md) (**ไทย**)
- [Urdu](./translations/README-UR.md) (**اردو**)

## ❓ How to contribute

- Fork this repo, read [how to fork repo](https://help.github.com/articles/fork-a-repo/)
- Checkout your forked repo to your computer, read [how to clone repo](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository)
- Create a new `branch` with your GitHub username as a branch name, for example: `add-mazipan`.
- You can use the following command:
  ```shell
  git checkout -b YourUsername/YourBranchName`
  ```
- Ex: `git checkout -b mazipan/add-mazipan`

> **⚠️ DO NOT use `master` or `main` branch to create a Pull Request**.
> Read the article about [how to create a branch](https://help.github.com/articles/creating-and-deleting-branches-within-your-repository/)

- Make sure you are on the new branch, use this command to check your current branch: `git branch --show-current`
- Add your first file named `github_username.js` to the `people` directory inside your new branch.
- Add these codes to your new file:

```js
module.exports = {
  name: 'YOUR_NAME',
  github: 'XXX',
  email: 'xxx@xxx.com',
  twitter: '@xxx',
  facebook: 'xxx',
  linkedin: 'in/xxx'
}
```

- Create a pull request to the `master` branch in this repository, read [how to create pull request](https://help.github.com/articles/creating-a-pull-request/)
- Don't forget to give your 🌟 to this repository, you can check in [stargazers page](https://github.com/mazipan/hello-open-source/stargazers)
- Help me to follow github [@mazipan](https://github.com/mazipan)
- I will check your PRs, and will **add an `invalid` label** and **close the PRs** of those not following the steps correctly
- Have fun, and welcome to the open-source world.
- Keep in mind, that quality is always number one when creating PRs, read the instructions carefully.

## 💰 Is this a data collection?

No, this repo is intended for learning purposes.

## 🥶 Do I need to attach my real name?

No, you can put a fake data.
We just want to learn about a contribution flow in the open-source ecosystem.

## 🙈 Do it at your own risk

We don't collect any data.
But there is a chance for other people to abuse your data.
Please do it at your own risk.
**We don't protect your data**.

## ⤵️ How do I retrieve someone's data?

```shell
git clone https://github.com/mazipan/hello-open-source # clone the repo
cd hello-open-source # cd into the repo
node index.js github_milan960 # will return this person's named github_milan960 to you
```

## 🗑️ How do I remove my data?

Remove all data

```shell
yarn purge
```

You can specify a name (or more) to remove only those file(s)

```shell
yarn purge joe-bob kitty-luvr73
```

**❌ I will delete the data periodically.**

## 🚶 Next Step

This repo will introduce open source contribution flow.
After finishing all the steps here, we expect you will have a basic knowledge of how to fork the repository, how a git branch works, how to create a good pull request, and other basic things to make your next contribution in open source code 🥳.

**👉 Do NOT stop here, keep contributing to open-source projects**

---

Copyright © 2018-2023 **Irfan Maulana**
