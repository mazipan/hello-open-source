# Hallo Open Source 🖐️

Ein Repository, in dem Du Informationen zum Open-Source-Beitrags-Workflow erhälst (_nur für Anfänger_)

## 🌎 Übersetzungen

- [Bengalisch](./README-BN.md) (**বাংলা**)
- [Chinesisch](./README-CHI.md) (**中文**)
- [Französisch](./README-FR.md) (**Français**)
- [Deutsch](./README-DE.md) (**Deutsch**)
- [Hindi](./README-HI.md) (**हिंदी**)
- [Hinglisch](./README-HINGLISH.md) (**Hinglish**)
- [Ungarisch](./README-HU.md) (**Hungarian**)
- [Indonesisch](./README-ID.md) (**Bahasa Indonesia**)
- [Italienisch](./README-it.md) (**Italiano**)
- [Japanisch](./README-JP.md) (**日本人**)
- [Koreanisch](./README-KR.md) (**한국어**)
- [Portugiesisch](./README-PT-BR.md) (**Português**)
- [Russisch](./README-RU.md) (**русский**)
- [Spanisch](./README-ES.md) (**Española**)
- [Telugu](./README-TE.md) (**తెలుగు**)
- [Thailändisch](./README-TH.md) (**ไทย**)
- [Urdu](./README-UR.md) (**اردو**)

## ❓ Wie kannst Du beitragen?

- Forke dieses Repository, lese [hier, wie man ein Repository forkt](https://help.github.com/articles/fork-a-repo/)
- Klone Dein geforktes Repository auf Deinen Computer. Lies [hier nach, wie das geht](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository).
- Erstelle einen `Branch` mit Deinem GitHub-Benutzernamen, z.B.: `add-mazipan`. 
Das geht im Terminal folgendermaßen:
  ```shell
  git checkout -b DeinNutzername/DeinBranchname`
  ```
- Bsp.: `git checkout -b mazipan/add-mazipan`

> **⚠️ Verwende niemals den Branch `master` oder `main`, um Pull Requests zu erstellen**
> Lies Dir [diesen Artikel durch](https://help.github.com/articles/creating-and-deleting-branches-within-your-repository/), wie man einen Branch erstellt.

- Vergewissere Dich, dass Du auf dem neuen Branch bist. Lass Dir mit diesem Befehl den aktuellen Branch anzeigen: `git branch --show-current`
- Erstelle Deine erste Datei mit dem Dateinamen `github_username.js` und füge sie im Verzeichnis `people` in diesem Branch hinzu.
- Füge diesen (an Dich angepassten) Code Deiner neuen Datei hinzu:

````js
module.exports = {
  Name:'DEIN_NAME',
  github:'XXX',
  E-Mail: 'xxx@xxx.com',
  Twitter: '@xxx',
  Facebook: "xxx",
  linkedin: 'in/xxx'.
};
````

- Erstell einen Pull Request für den `master`-Branch des originalen Repositories. Einen Pull Request [erstellt man so](https://help.github.com/articles/creating-a-pull-request/).
- Vergiss nicht, diesem Repository einen 🌟 zu geben. Auf der [Stargazers(Sterngucker)-Seite](https://github.com/mazipan/hello-open-source/stargazers) kannst Du nachschauen, wer diesem Projekt einen 🌟 gegeben hat.
- Wenn Dir das Projekt gefällt, kannst Du [@mazipan auf GitHub](https://github.com/mazipan) folgen.
- Ich werde deinen Pull Request überprüfen und ihm **das `invalid` Label hinzufügen** und **den Pull Request schließen**, wenn Du nicht diese Schritte befolgt hast.
- Viel Spaß und herzlich willkommen in der Open-Source-Welt.
- Denk daran, dass Qualität bei der Erstellung von Pull Requests immer an oberster Stelle steht.

## 💰 Ist das eine Datensammlung?

Nein, dieses Repository dient lediglich Lernzwecken.

## 🥶 Muss ich meinen richtigen Namen anhängen?

Nein, füge einfach irgendwelche Daten ein. Es kann auch kompletter Unsinn sein, wir wollen Dir nur einen Einstieg in die Open-Source-Welt ermöglichen.

## 🙈 Mach es auf eigene Gefahr

Wir sammeln keine Daten. Jedoch besteht die Gefahr, dass andere Personen Deine Daten missbrauchen. Mach es demnach bitte auf eigene Gefahr.

## ⤵️ Wie kann ich die Daten von jemandem abrufen?

```shell
git clone https://github.com/mazipan/hello-open-source # Klone das Repo
cd hello-open-source # navigiere in das Repo
node index.js github_milan960 # gibt den Namen dieser Person github_milan960 zurück
```

## 🗑️ Wie lösche ich meine Daten?

Alle Daten löschen:

```shell
yarn purge
```

Du kannst einen (oder mehrere) Namen angeben, um nur diese Datei(en) zu löschen.

```shell
yarn purge joe-bob kitty-luvr73
```

**❌ Ich werde die Daten periodisch löschen.**

## 🚶 Nächster Schritt

Dieses Repo ist für die Einführung in den Open-Source-Beitrags-Workflow.
Nachdem Du alle Schritte ausgeführt hast, erwarten wir, dass Du weißt, wie man ein Repository forkt, wie Branches funktionieren, wie gute Pull-Requests erstellt werden und andere einfache Dinge über den Beitrag zu Open-Source-Code 🥳.

**👉 Bitte hör jetzt nicht auf! Trag weiter zu Open-Source-Projekten bei! 🙏.**

---

Copyright © 2018-2024 **Irfan Maulana****
