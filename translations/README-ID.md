# Halo Open Source 🖐️

Sebuah repository untuk mempelajari kontribusi open source (_hanya untuk pemula_)

## 🌎 Translations

- [Portuguese](https://github.com/mazipan/hello-open-source/blob/master/README-PT-BR.md)
- [Chinese](https://github.com/mazipan/hello-open-source/blob/master/README-CHI.md)
- [Japanese](https://github.com/mazipan/hello-open-source/blob/master/README-JP.md)
- [Korean](https://github.com/mazipan/hello-open-source/blob/master/README-KR.md)
- [Indonesian](https://github.com/mazipan/hello-open-source/blob/master/README-ID.md)
- [German](https://github.com/mazipan/hello-open-source/blob/master/README-DE.md)

## ❓ Bagaimana cara berkontribusi

- Fork repository ini, baca lebih lanjut disini [bagaimana caranya mem-fork sebuah repo](https://help.github.com/articles/fork-a-repo/)
- Buatlah branch dengan nama pengguna github mu, contohnya: `add-mazipan.js`. **Jangan pernah gunakan branch `master` untuk membuat PR**.
  baca [bagaimana caranya membuat branch](https://help.github.com/articles/creating-and-deleting-branches-within-your-repository/)
- Buatlah file pertamamu dengan nama file `nama_pengguna_github.js` di dalam folder `people/` di branch tersebut.
- tambahkan kode dengan identitasmu, contohnya:

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

- Buatlah Pull-Request ke branch `master` pada repository ini. lebih lengkapnya [Bagaimana cara membuat PR](https://help.github.com/articles/creating-a-pull-request/)
- Jangan lupa memberikan bintang untuk repository ini, kamu dapat melihat [disini](https://github.com/mazipan/hello-open-source/stargazers)
- Jangan lupa ikuti akun github [@mazipan](https://github.com/mazipan)
- Aku akan memeriksa PR mu dan **menambahkan label `invalid` ** dan **tutup PR ini** yang tidak mengikuti tahapan-tahapan yang tersedia
- Bersenang-senanglah dan selamat datang di dunia open source.
- Harus selalu diingat, kualitas adalah nomer satu dalam hal membuat PR.

## 💰 Apakah ini bertujuan untuk mengoleksi data?

Bukan, ini dibuat hanya untuk tujuan mempelajari git flow dan proses untuk berkontribusi dalam open source.

## 🥶 Apakah saya harus memasukkan data asli?

Tidak, taruh saja data apa saja. kami hanya ingin belajar mengenai kontribusi open source.

## ⤵️ Bagaimana cara saya mengambil data orang lain?

```shell
git clone https://github.com/mazipan/hello-open-source # clone the repo
cd hello-open-source # cd into the repo
node index.js caxvis # will return this person's named caxvis to you
```

## 🗑️ Bagaimana cara menghapus semua data?

Menghapus semua data

```shell
yarn purge
```

Anda dapat menspesifikasikan nama atau yang lainnya untuk hanya menghapus beberapa item.

```shell
yarn purge joe-bob kitty-luvr73
```

**❌ Saya akan menghapus data ini secara periodik dengan menggunakan Cronjob Travis, jadi jangan kaget jika data anda dihapus tiba-tiba**

## 🙈 Lakukan dengan kehati-hatian

Kami tidak mengumpulkan data, tapi ada kemungkinan orang lain akan mengeksploitasi data yang dikumpulkan disini. Tolong lakukan dengan penuh kehati-hatian, kami tidak melindungi datamu

## 🚶 Langkah selanjutnya

Repository ini bertujuan untuk mengenalkan flow untuk berkontribusi open source.
Setelah mengikuti semua tahapan yang ada, kami mengharapkan kamu mengerti bagaimana cara mem-fork sebuah repository, bagaimana branching bekerja, bagaimana cara membuat PR yang baik, dan hal lain mengenai open source 🥳.

**👉 Jangan berhenti disini, tolong tetap berkontribusi ke kode open source lain 🙏.**

---

Copyright © 2018 **Irfan Maulana**
