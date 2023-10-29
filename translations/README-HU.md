# Helló Open Source 🖐️

Egy tárhely a nyílt forráskódú hozzájárulások áramlásának megtanulásához (_csak kezdőknek_).

## 🌎 Fordítások

_Abécé sorrendben_

- [Bengáli](./translations/README-BN.md) (**বাংলা**)
- [Kínai](./translations/README-CHI.md) (**中文**)
- [Francia](./translations/README-FR.md) (**Français**)
- [Német](./translations/README-DE.md) (**Deutsch**)
- [Hindi](./translations/README-HI.md) (**हिंदी**)
- [Hinglish](./translations/README-HINGLISH.md) (**Hinglish**)
- [Hungarian](./translations/README-HU.md) (**Hungarian**)
- [Indonéz](./translations/README-ID.md) (**Bahasa Indonesia**)
- [Olasz](./translations/README-it.md) (**Italiano**)
- [Japán](./translations/README-JP.md) (**日本人**)
- [Koreai](./translations/README-KR.md) (**한국어**)
- [Portugál](./translations/README-PT-BR.md) (**Português**)
- [Orosz](./translations/README-RU.md) (**русский**)
- [Spanyol](./translations/README-ES.md) (**Española**)
- [Telugu](./translations/README-TE.md) (**తెలుగు**)
- [Thai](./translations/README-TH.md) (**ไทย**)
- [Urdu](./translations/README-UR.md) (**اردو**)

## ❓ Hogyan járulj hozzá

- Forkold ezt a tárhelyet, olvasd el, hogy [hogyan forkolsz egy tárhelyet](https://help.github.com/articles/fork-a-repo/)
- Klónozd le a forkolt tárhelyed a gépedre, olvasd el, hogy [hogyan klónozol egy tárhelyet](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository)
- Hozz létre egy új `branch`-t a GitHub felhasználóneveddel, például: `add-mazipan`.
- Használd az alábbi parancsot:
  ```shell
  git checkout -b Felhasználóneved/ÁgNeved`
  ```
- Példa: `git checkout -b mazipan/add-mazipan`

> **⚠️ NE használd a `master` vagy `main` ágat Pull Request létrehozásához**.
> Olvasd el a cikket a [branch létrehozásáról](https://help.github.com/articles/creating-and-deleting-branches-within-your-repository/)

- Győződj meg róla, hogy az új ágon vagy, használd ezt a parancsot az aktuális ágad ellenőrzéséhez: `git branch --show-current`
- Adj hozzá az első fájlt `github_felhasznaloneved.js` néven az új ágon a `people` könyvtárba.
- Add hozzá ezeket a kódrészleteket az új fájlodhoz:

```js
module.exports = {
  name: 'NEVED',
  github: 'XXX',
  email: 'xxx@xxx.com',
  twitter: '@xxx',
  facebook: 'xxx',
  linkedin: 'in/xxx'
}
```

- Hozz létre egy Pull Request-et a `master` ágra ebben a tárhelyben, olvasd el a [hogyan hozz létre Pull Requestet](https://help.github.com/articles/creating-a-pull-request/) cikket.
- Ne felejtsd el megadni a 🌟-ot ennek a tárhelynnek, ezt a [stargazers oldalon](https://github.com/mazipan/hello-open-source/stargazers) ellenőrizheted.
- Segíts nekem követni a GitHub-on [@mazipan](https://github.com/mazipan)
- Ellenőrizem a PR-jaidat, és hozzá fogok adni egy "érvénytelen" címkét, valamint lezárni azokat, akik nem követik a lépéseket helyesen.
- Szórakozz jól, és üdvözöllek a nyílt forráskódú világban.
- Tartsd észben, hogy a minőség mindig az elsődleges, olvasd el az utasításokat alaposan.

## 💰 Adatgyűjtés?

Nem, ez a tárhely tanulási célokat szolgál.

## 🥶 Csatolnom kell valódi nevemet?

Nem, használhatsz hamis adatokat.
Csak a hozzájárulás folyamatát szeretnénk megtanulni a nyílt forráskódú ökoszisztémában.

## 🙈 Teljesen saját kockázatodra

Nem gyűjtünk adatokat.
De más embereknek lehetőségük van visszaélni az adataiddal.
Kérjük, tedd ezt a saját kockázatodra.
**Nem védelmezzük az adataidat**.

## ⤵️ Hogyan szerezhetem meg valaki adatait?

```shell
git clone https://github.com/mazipan/hello-open-source # klónozd a tárhelyet
cd hello-open-source # menj a tárhelybe
node index.js github_milan960 # visszaadja ennek a személynek a nevét: github_milan960
```

## 🗑️ Hogyan távolíthatom el az adataimat?

Az összes adat eltávolítása

```shell
yarn purge
```

Megadhatod a nevet (vagy neveket), hogy csak az adott fájlt (fájlokat) távolítsd el

```shell
yarn purge joe-bob kitty-luvr73
```

**❌ Időszakosan törölni fogom az adat okat.**

## 🚶 Következő lépés

Ez a tárhely bemutatja a nyílt forráskódú hozzájárulások áramlását.
Miután befejezted az összes lépést itt, arra számítunk, hogy alapvető ismeretekkel rendelkezel arról, hogyan forkolsz egy tárhelyet, hogyan működik egy git ág, hogyan hozz létre egy jó Pull Request-et, és más alapvető dolgokat a következő hozzájárulások készítéséhez a nyílt forráskódú kódban 🥳.

**👉 Ne állj meg itt, folyamatosan hozzájárulhatsz a nyílt forráskódú projektekhez**

---

Szerzői jog © 2018-2023 **Irfan Maulana**
```
