# 你好，开源 🖐️

一个用于学习开源代码贡献流程的库。(_仅针对初学者_)

## ❓ 如何贡献

- Fork 此仓库，阅读 [如何 fork 仓库](https://help.github.com/articles/fork-a-repo/)。
- 将你 fork 的仓库克隆到你的电脑上，阅读 [如何克隆仓库](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository)。
- 使用你的 github 用户名创建一个新的分支，例如：`add-mazipan.js`。
- 你可以使用这个命令：`git checkout -b YourUsername/YourBranchName`，例如：`git checkout -b mazipan/add-mazipan`。

> **不要使用 `master` 或者 `main` 分支去创建一个 Pull Request。**
> 阅读文章 [如何创建分支](https://help.github.com/articles/creating-and-deleting-branches-within-your-repository/)。

- 确保你在新分支上，使用这个命令来查看你的当前分支：`git branch --show-current`。
- 在你的分支上的 `people` 目录下，添加文件名为 `github_username.js` 的文件作为你的第一个文件。
- 把这些代码添加到你的新文件中：

```js
module.exports = {
  name: 'YOUR_NAME',
  github: 'XXX',
  email: 'xxx@xxx.com',
  twitter: '@xxx',
  facebook: 'xxx',
  linkedin: 'in/xxx'
};
```

- 在这个仓库创建一个指向 `master` 分支的 pull request，阅读 [如何创建一个 PR](https://help.github.com/articles/creating-a-pull-request/)。
- 别忘了给这个仓库一个 🌟 ，你可以查看 [关注者列表](https://github.com/mazipan/hello-open-source/stargazers)。
- 帮我点个关注 [@mazipan](https://github.com/mazipan)
- 我会检查你的 PR，并会给那些没有正确遵循步骤的 PR **添加 `invalid` 标签** 并 **关闭它**。
- 玩得开心，欢迎来到开源世界。
- 记住，创建 PR 时，质量永远是第一位的，请仔细阅读说明。

## 💰 这是一个收集数据的仓库吗？

不，这个仓库只是以学习为目的。

## 🥶 我需要输入真实姓名吗？

不用，你可以提交假数据。
我们只是在学习开源生态中的贡献流程。

## 🙈 自行承担风险

我们不收集任何数据。
但其他人有可能会滥用你的数据。
请自行承担风险。
**我们不保护你的数据**。

## ⤵️ 我如何检索别人的数据？

```shell
git clone https://github.com/mazipan/hello-open-source # 克隆这个仓库
cd hello-open-source # cd 到仓库
node index.js github_milan960 # 会返回名称为 github_milan960 的人的数据
```

## 🗑️ 如何删除我的数据

删除所有数据

```shell
yarn purge
```

你可以指定一个 (或多个) 名字来删除这个（或多个）文件

```shell
yarn purge joe-bob kitty-luvr73
```

**❌ 我会定期删除数据**

## 🚶 下一步

这个仓库会介绍开源的贡献流程。
完成所有步骤后，我们希望你会对如何 fork 仓库有基本的了解，知道 git 的分支是如何工作的，如何创建一个好的 pull request 以及其他基本知识，以让你在开源代码中做出下一步贡献。 🥳.

**👉 不要在此停留，继续为开源代码做贡献**

---

Copyright © 2018-2021 **Irfan Maulana**
