# Привет, Open Source 🖐️

Репозиторий, в котором можно узнать о том, как вносить свой вклад в open source (_только для новичков_)

## 🌎 Переводы

- [Португальский](https://github.com/mazipan/hello-open-source/blob/master/README-PT-BR.md)
- [Китайский](https://github.com/mazipan/hello-open-source/blob/master/README-CHI.md)
- [Японский](https://github.com/mazipan/hello-open-source/blob/master/README-JP.md)
- [Корейский](https://github.com/mazipan/hello-open-source/blob/master/README-KR.md)
- [Испанский](https://github.com/mazipan/hello-open-source/blob/master/README-ES.md)
- [Индонезийский](https://github.com/mazipan/hello-open-source/blob/master/README-ID.md)
- [Немецкий](https://github.com/mazipan/hello-open-source/blob/master/README-DE.md)
- [Польский](https://github.com/mazipan/hello-open-source/blob/master/README-PL.md)
- [Русский](https://github.com/mazipan/hello-open-source/blob/master/README-RU.md)

## ❓ Как внести свой вклад

- Форкните этот репозиторий, прочитайте [как форкать репозиторий](https://help.github.com/articles/fork-a-repo/)
- Создайте ветку с вашим юзернеймом в github, например: `add-mazipan.js`. **Никогда не используйте ветку `master` для создания pull requests**.
  Прочитайте о том, [как создать ветку](https://help.github.com/articles/creating-and-deleting-branches-within-your-repository/)
- Добавьте ваш первый файл с именем файла`github_username.js` в папку `people/` в этой ветке.
- Добавьте код с информацией о себе, например:

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

- Создайте Pull-Request в `master` ветку в этом репозитории, прочитайте, [как создавать pull request](https://help.github.com/articles/creating-a-pull-request/)
- Не забудьте дать 🌟 этому репозиторию, вы можете найти себя на [stargazers page](https://github.com/mazipan/hello-open-source/stargazers)
- Вы должны подписаться на github [@mazipan](https://github.com/mazipan)
- Я проверю ваш запрос и **добавлю `invalid` label** и **закрою pull request**, в котором не соблюдены правила
- Получайте удовольствие, и добро пожаловать в мир open source.
- Помните, что качество - это главное при создании pull реквестов.

## 💰 Вы собираете данные?

Нет, это только для того, чтобы вы освоились с гитом и работой с open source.

## 🥶 Нужно ли мне указывать свое настоящее имя?

Нет, укажите любые данные, вам просто надо узнать, как это делать.

## ⤵️ Как мне узнать чьи-то данные?

```shell
git clone https://github.com/mazipan/hello-open-source # клонируете репозиторий
cd hello-open-source # заходите в него
node index.js caxvis # вернет данные человека по имени caxvis 
```

## 🗑️ Как удалить данные

Удалить все данные

```shell
yarn purge
```

Вы можете указать имя/имена, чтобы удалить только этот файл/файлы

```shell
yarn purge joe-bob kitty-luvr73
```

**❌ Я буду переодически удалять данные (ежемесячно с помощью Travis Cronjob). Пожалуйста, будьте готовы к тому, что ваши данные будут удалены в любое время**

## 🙈 Взвешивайте риски

Мы не собираем ваши данные, но вполне возможно, что данные здесь могут использоваться другими людьми. **Мы не защищаем ваши данные**.

## 🚶 Следующий шаг

Этот репозиторий создан только для знакомства к тем, как вносить свой вклад в open source.
После того работы с ним мы ожидаем, что вы будете знать, как форкать репозитории, как работает создание ветвей, как создать хороший pull request и другую информацию о внесении вклада в open source code 🥳.

**👉 Не останавливайтесь на сделанном! Продолжайте вносить свой вклад в любые открытые open source проекты 🙏.**

---

Copyright © 2018-2019 **Irfan Maulana**
