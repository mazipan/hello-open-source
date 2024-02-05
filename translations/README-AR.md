# مرحبًا بالمصدر المفتوح 🖐️

هذا مستودع يساعدك على تعلم سير عمل المساهمات في المشاريع مفتوحة المصدر (_للمبتدئين فقط_)

## 🌎 ترجمات

_مرتبة أبجديا_

- [الأردية](./translations/README-UR.md) (**اردو**)
- [الأسبانية](./translations/README-ES.md) (**Española**)
- [الألمانية](./translations/README-DE.md) (**Deutsch**)
- [الإنجليزية الهندية](./translations/README-HINGLISH.md) (**Hinglish**)
- [الإندونيسية](./translations/README-ID.md) (**Bahasa Indonesia**)
- [الإيطالية](./translations/README-it.md) (**Italiano**)
- [البرتغالية](./translations/README-PT-BR.md) (**Português**)
- [البنغالية](./translations/README-BN.md) (**বাংলা**)
- [التايلاندية](./translations/README-TH.md) (**ไทย**)
- [التيلجو](./translations/README-TE.md) (**తెలుగు**)
- [الروسية](./translations/README-RU.md) (**русский**)
- [الصينية](./translations/README-CHI.md) (**中文**)
- [العربية](./translations/README-AR.md) (**العربية**)
- [الفرنسية](./translations/README-FR.md) (**Français**)
- [الكورية](./translations/README-KR.md) (**한국어**)
- [المجرية](./translation/README-HU.md) (**Hungarian**)
- [الهندية](./translations/README-HI.md) (**हिंदी**)
- [اليابانية](./translations/README-JP.md) (**日本人**)

## ❓ كيفية المساهمة

- قم بعمل Fork لهاذا المستودع, إقرأ [كيفية عمل Fork للمستودع](https://help.github.com/articles/fork-a-repo/)
- قم بنسخ (Clone) المستودع المُفرع (Forked Repo) إلى جهاز الكمبيوتر الخاص بك, إقرأ [كيفية استنساخ المستودع](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository)
- يمكنك استخدام الأمر التالي:
  ```shell
  git clone https://github.com/Your_GitHub_Username/hello-open-source
  ```
- أنشئ فرعًا جديدًا باسم مستخدمك في GitHub كاسم فرع، على سبيل مثال: `add-mazipan`.
- يمكنك استخدام الأمر التالي:
  ```shell
  git checkout -b YourUsername/YourBranchName
  ```
- مثال: `git checkout -b mazipan/add-mazipan`

> **⚠️ لا تستخدم فرع "master" أو "main" لإنشاء طلب سحب (Pull Request).**.
> اقرأ المقالة حول [كيفية إنشاء فرع](https://help.github.com/articles/creating-and-deleting-branches-within-your-repository/)

- تأكد أنك على الفرع الجديد، استخدم هذا الأمر للتحقق من الفرع الحالي: `git branch --show-current`
- أضف ملفك الأول بالاسم `github_username.js` إلى الدليل `people` داخل فرعك الجديد.
- أضف هذه الشفرات إلى ملفك الجديد:

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

- أنشئ طلب سحب (Pull Request) إلى الفرع الرئيسي (`master`) في هذا المستودع, إقرأ [كيفية إنشاء طلب سحب](https://help.github.com/articles/creating-a-pull-request/)
- لا تنسى أن تُعطي ⭐ لهذا المستودع، يمكنك التحقق في [صفحة مشاهدي النجوم](https://github.com/mazipan/hello-open-source/stargazers)
- ساعدني بمتابعتي على [@mazipan](https://github.com/mazipan)
- سأتحقق من طلبات السحب الخاصة بك, **وسأضيف وسم `غير صالح`** و **سأغلق طلب السحب** لمن لم يتبعوا الخطوات بشكل صحيح
- استمتع، ومرحبًا بك في عالم المصادر المفتوحة.
- خذ بعين الإعتبار أن الجودة دائمًا رقم واحد عند إنشاء طلبات السحب، اقرأ التعليمات بعناية.

## 💰 هل هذه عملية جمع بيانات؟

لا، هذا المستودع مخصص لغرض التعلم.

## 🥶 هل يجب علي إرفاق اسمي الحقيقي؟

لا، يمكنك وضع بيانات وهمية.
نريد فقط التعلم عن سير العمل في نظام المصادر المفتوحة.

## 🙈 افعل ذلك على مسؤوليتك الخاصة

نحن لا نقوم بجمع أي بيانات.
ولكن هناك فرصة لاستغلال بياناتك من قبل أشخاص آخرين.
يرجى القيام بذلك على مسؤوليتك الخاصة.
**نحن لا نحمي بياناتك**.

## ⤵️ كيف يمكنني استرخلاص بيانات شخص ما؟

```shell
git clone https://github.com/mazipan/hello-open-source # clone the repo
cd hello-open-source # cd into the repo
node index.js github_milan960 # will return this person's named github_milan960 to you
```

## 🗑️ كيف يمكنني إزالة بياناتي؟

أزل كافة البيانات

```shell
yarn purge
```

يمكنك تحديد اسم (أو أكثر) لإزالة البيانات فقط لهذا الملف أو هؤلاء الملفات

```shell
yarn purge joe-bob kitty-luvr73
```

**❌ سأقوم بحذف البيانات بشكل دوري.**

## 🚶 الخطوة التالية

هذا المستودع سيقدم سير تدفق المساهمة في المصدر المفتوح.
بعد الإنتهاء من جميع الخطوات هنا، نتوقع أن تكون لديك معرفة أساسية حول كيفية عمل Fork للمستودع، وكيفية عمل فرع Git، وكيفية إنشاء طلب سحب جيد، وغيرها من الأمور الأساسية لصنع مساهمتك القادمة في مشروع ذو مصدر مفتوح 🥳.

**👉 لا تتوقف هنا، واستمر في المساهمة في مشاريع مفتوحة المصدر**

---

حقوق النشر © 2018-2024 **Irfan Maulana**
