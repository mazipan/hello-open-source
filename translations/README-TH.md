# Hello Open Source 🖐️

Repository เพื่อการศึกษาเกี่ยวกับการมีส่วนร่วมในปรับปรุง open source (_สำหรับมือใหม่เท่านั้น_)


## 🌎 ภาษาอื่น ๆ

- [Portuguese](https://github.com/mazipan/hello-open-source/blob/master/README-PT-BR.md)
- [Chinese](https://github.com/mazipan/hello-open-source/blob/master/README-CHI.md)
- [Japanese](https://github.com/mazipan/hello-open-source/blob/master/README-JP.md)
- [Korean](https://github.com/mazipan/hello-open-source/blob/master/README-KR.md)
- [Spanish](https://github.com/mazipan/hello-open-source/blob/master/README-ES.md)
- [Indonesian](https://github.com/mazipan/hello-open-source/blob/master/README-ID.md)
- [German](https://github.com/mazipan/hello-open-source/blob/master/README-DE.md)
- [Russian](https://github.com/mazipan/hello-open-source/blob/master/README-RU.md)

## ❓ วิธีการมีส่วนร่วม

- กดปุ่ม Fork เรโปนี้, อ่าน [วิธีการ fork](https://help.github.com/articles/fork-a-repo/)
- สร้าง branch ในเรโปที่คุณ fork มาซึ่งจะเป็น username ของคุณ, ตัวอย่าง: `add-mazipan.js` **สำคัญไม่ควรทำงานบน `master` เพื่อที่จะสร้าง PR**
  อ่าน [วิธีการสร้าง branch](https://help.github.com/articles/creating-and-deleting-branches-within-your-repository/)
- สร้างไฟล์แรกของคุณโดยชื่อไฟล์ว่า `github_username.js` บนโฟล์เดอร์ `people/` ใน branch นั้น ๆ
- เพิ่มโค๊ดพร้อมกับระบุตัวตนของคุณ, ตัวอย่าง:

```js
module.exports = {
  name: 'ชื่อคุณ',
  github: 'XXX',
  email: 'xxx@xxx.com',
  twitter: '@xxx',
  facebook: 'xxx',
  linkedin: 'in/xxx'
};
```

- สร้าง pull request มาที่ branch `master` ในเรโปนี้, อ่านว [วิธีการสร้าง PR](https://help.github.com/articles/creating-a-pull-request/)
- อย่าลืมให้ 🌟 เรโปนี้ด้วย, คุณสามารถตรวจสอบได้ใน [stargazers page](https://github.com/mazipan/hello-open-source/stargazers)
- คุณควรจะติดตาม [@mazipan](https://github.com/mazipan)
- ฉันจะตรวจสอบการ pull request ของคุณและจะ **เพิ่ม `invalid` label** และ **ปิด pull request** ที่ไม่ทำตามขั้นตอนดังนี้
- Have fun and welcome to open source world.
- ขอให้สนุกและยินดีต้อนรับสู่โลกแห่ง Open source
- Keep in mind, quality is always number one when creating PRs.
- โปรดลำลึกเสมอ, คุณภาพควรมาอันดับแรกในการสร้าง pull request.

## 💰 นี้เป็นการเก็บขอมูลใช้ไหม?

ไม่, นี้เป็นแค่วิธีการสอนในการใช้ git ร่วมกับการทำงานของ open source.

## 🥶 ฉันจำเป็นต้องไส่ชื่อจริงของฉันไหม?

ไม่, แค่ไส่ข้อมูลอะไรก็ได้ เป็นเรื่องไร้สาระมาก เราแค่ต้องการสอนเกี่ยวกับการมีส่วนร่วมในการทำ open source

## ⤵️ ฉันจะดึงข้อมูลของใครบางคนได้อย่างไร?

```shell
git clone https://github.com/mazipan/hello-open-source # clone the repo
cd hello-open-source # cd เข้าไปในโฟล์เดอร์เรโป
node index.js caxvis # ขั้นตอนนี้จะแสดงชื่อของ caxvis ให้คุณ
```

## 🗑️ จะล้างข้อมูลได้อย่างไร

ล้างข้อมูลทั้งหมด

```shell
yarn purge
```

 You can specify a name(or more) to purge only those file(s)
 คุณสามารถกำหนด ชื่อ หรือมากกว่านั้นเพื่อที่จะลบแค่ไฟล์นั้น ๆ

```shell
yarn purge joe-bob kitty-luvr73
```

**❌ ฉันจะล้างข้อมูลเป็นระยะ (รายเดือน, โดย Travis Cronjob), ดั้งนั้นข้อมูลของคุณจะถูกลบเมื่อไหร่ก็ได้**

## 🙈 Do it with your own risk
## 🙈 ทำมันโดยความเสี่ยงของคุณ

เราไม่ได้เก็บข้อมูลของคุณ, แต่ข้อมูลของคุณก็อาจจะมีโอกาสถูกเอาไปได้จากที่นี้ ดังนั้นทำตามความเสี่ยงที่คุณรับได้ **เราไม่ได้ป้องกันข้อมูลคุณ**.

## 🚶 ขั้นตอนต่อไป

เรโปนี้เป็นการนำเสนอเกี่ยวกับกับมีส่วนร่วมในการทำ open source
หลักจากขั้นตอนทั้งหมดนี้ เราคาดหวังว่าคุณจะรู้วิธีการ fork จัดการ branch และสร้าง pull request ที่ดีและ อีกหนึ่งสิ่งเกี่ยวกับการมีส่วนร่วมใน open soruce

**👉 อย่าหยุดแค่ที่นี้, กรุณาพยายามสนับสนุน Open source 🙏.**

---

Copyright © 2018 **Irfan Maulana**
