# Hello Open Source (Hola Open Source) 🖐️

Un repositorio para aprender acerca del flujo para contribuir al código abierto (_solo para principiantes_).

## ❓ ¿Cómo contribuir?

- Hazle _fork_ a este repositorio, lee [¿Cómo hacer fork a un repositorio?](https://docs.github.com/es/get-started/quickstart/fork-a-repo)
- Crea una rama con tu nombre de usuario de github, por ejemplo: `add-mazipan.js`. **Nunca uses la rama `master` para crear un PR**.
  lee [cómo crear una rama](https://docs.github.com/es/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-and-deleting-branches-within-your-repository)
- Agrega tu primer archivo con el nombre `github_nombredeusuario.js` en el directorio `people/` de esa rama.
- Agrega código con información acerca de ti. Por ejemplo:

```js
module.exports = {
  name: 'TU_NOMBRE',
  github: 'XXX',
  email: 'xxx@xxx.com',
  twitter: '@xxx',
  facebook: 'xxx',
  linkedin: 'in/xxx'
};
```
- Crea un Pull-Request a la rama `master` de este repositorio, lee [¿Cómo crear un PR?](https://docs.github.com/es/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request).
- No te olvides de darle 🌟 a este repositorio, puedes verificar en [la página de stargazers](https://github.com/mazipan/hello-open-source/stargazers).
- Sigue a [@mazipan](https://github.com/mazipan) en GitHub.
- Voy a revisar tus PR's y **agregaré la etiqueta `invalid`** y **cerraré los PR's** que no sigan los pasos.
- Diviértete y bienvenido al mundo del open source (código abierto).
- Ten en mente, la calidad siempre es primero al crear PR's.

## 💰 ¿Es esto una recolección de datos?

No, esto es para propósitos de aprendizaje sobre el flujo de git y el proceso de contribución al código abierto.

## 🥶 ¿Es necesario que ponga mi nombre real?

No, pon cualquier dato. No es relevante, queremos aprender acerca de cómo contribuir al código abierto.

## ⤵️ ¿Cómo obtengo los datos acerca de alguien?

```shell
git clone https://github.com/mazipan/hello-open-source # clone the repo
cd hello-open-source # cd al repositorio
node index.js caxvis # va a retornarte el nombre de la persona llamada caxvis
```

## 🗑️ ¿Cómo borrar los datos?

Borrar todos los datos

```shell
yarn purge
```

Puedes especificar un nombre (o más) para borrar solo ese(esos) archivo(s)

```shell
yarn purge joe-bob kitty-luvr73
```

**❌ Borraré periódicamente los datos (mensualmente, a través de Travis Cronjob), por favor, ten en cuenta que tus datos podrían eliminarse en cualquier momento**.

## 🙈 Hazlo bajo tu propio riesgo

Nosotros no almacenamos los datos, pero hay una posibilidad de que otras personas se aprovechen de los datos que subiste acá. Por favor, hazlo bajo tu propio riesgo. **No protegemos tus datos**.

## 🚶 Siguiente Paso

Este repositorio es para introducirte al flujo de contribuciones al código abierto.
Después que sigas estos pasos, esperamos que sepas cómo hacer fork a un repositorio, cómo funcionan las ramas, cómo crear un pull request y otras cosas acerca de contribución al código abierto 🥳.

**👉 No te detengas aquí, por favor manténte contribuyendo a cualquier código abierto 🙏.**

---

Copyright © 2018-2019 **Irfan Maulana**
