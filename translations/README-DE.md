# Hallo Open Source 🖐️

Ein Repository, in dem du Informationen zum Open-Source-Code-Beitragsworkflow erhälst (_nur für Anfänger_).

## 🌎 Übersetzungen

- [Bengalisch](./translations/README-BN.md) (**বাংলা**)
- [Chinesisch](./translations/README-CHI.md) (**中文**)
- [Französisch](./translations/README-FR.md) (**Français**)
- [Hindi](./translations/README-HI.md) (**हिंदी**)
- [Hinglisch](./translations/README-HINGLISH.md) (**Hinglish**)
- [Ungarisch](./translation/README-HU.md) (**Hungarian**)
- [Indonesisch](./translations/README-ID.md) (**Bahasa Indonesia**)
- [Italienisch](./translations/README-it.md) (**Italiano**)
- [Japanisch](./translations/README-JP.md) (**日本人**)
- [Koreanisch](./translations/README-KR.md) (**한국어**)
- [Portugiesisch](./translations/README-PT-BR.md) (**Português**)
- [Russisch](./translations/README-RU.md) (**русский**)
- [Spanisch](./translations/README-ES.md) (**Española**)
- [Telugu](./translations/README-TE.md) {**తెలుగు**}
- [Thailändisch](./translations/README-TH.md) (**ไทย**)
- [Urdu](./translations/README-UR.md) (**اردو**)

## ❓ Wie Du beitragen kannst

- Forke dieses Repository. Wenn du Hilfe brauchst, lies hier, [wie man ein Repo forkt](https://help.github.com/articles/fork-a-repo/)
- Klone dieses Repository auf deinen Computer. Eine Anleitung findest du [hier](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository). 
- Erstelle einen Branch mit deinem GitHub-Benutzernamen, z.B.: `add-mazipan`. Dafür kannst du folgenden Befehl verwenden: 
  ```shell
  git checkout -b YourUsername/YourBranchName`
  ```
- Zum Beispiel: `git checkout -b mazipan/add-mazipan`

> **⚠️ Verwende niemals den Branch `master` oder `main`, um Pull Requests zu erstellen**.
> Lies hier, [wie man einen Branch erstellt](https://help.github.com/articles/creating-and-deleting-branches-within-your-repository/)

- Vergewissere dich, dass du den richtigen Branch verwendest. Das geht beispielsweise mit diesem Befehl: `git branch --show-current`
- Füge deine erste Datei mit dem Namen `github_username.js` im Verzeichnis `people` in diesem neuen Branch hinzu.
- Füge der Datei folgendes von dier ausgefüllte Code-Schnipsel hinzu:

````js
module.exports = {
  name:'DEIN_NAME',
  github:'XXX',
  email: 'xxx@xxx.com',
  fwitter: '@xxx',
  facebook: "xxx",
  linkedin: 'in/xxx'.
};
````

- Erstelle danach einen Pull Request für den Branch `master` aus diesem originalen Repository, siehe: [Wie erstellt man Pull Requests](https://help.github.com/articles/creating-a-pull-request/)
- Vergiss nicht, diesem Repository einen 🌟 zu geben, was du unter [dieser Seite](https://github.com/mazipan/hello-open-source/stargazers) nachschauen kannst
- Du solltest meinem GitHub-Account [@mazipan](https://github.com/mazipan) folgen
- Ich werde jedoch deine Pull Requests überprüfen und ihnen **das `invalid` Label hinzufügen** und **die Pull Requests schließen**, die nicht diesen Schritten folgen
- Viel Spaß und herzlich willkommen in der Open-Source-Welt
- Denke daran, dass Qualität bei der Erstellung von Pull Requests immer an erster Stelle steht, weshalb du besonders auf Anweisungen achten sollst

## 💰 Ist das eine Datenerhebung?

Nein, dieses Repository dient primär dem Lernzweck über den Git Workflow und dem Open-Source-Beitragsprozess.

## 🥶 Muss ich meinen richtigen Namen anhängen?

Nein, füge einfach irgendwelche Daten ein. Es kann auch kompletter Unsinn sein, du sollst nur etwas über Open-Source-Beiträge lernen.

## 🙈 Verwenden auf eigene Gefahr

Wir sammeln keine Daten. Jedoch besteht die Möglichkeit, dass andere Menschen deine Daten missbrauchen. Deswegen verwende diese Übung auf eigene Gefahr.
**Wir beschützen deine Daten nicht**.

## ⤵️ Wie kann ich die Daten von jemandem abrufen?

```shell
git clone https://github.com/mazipan/hello-open-source # Klone das Repository
cd hello-open-source # Navigiere in das Verzeichnis
node index.js caxvis # Gibt den Namen der Person caxvis zurück
```

## 🗑️ Wie lösche ich meine Daten?

Alle Daten löschen

```shell
yarn purge
```

Du kannst einen Namen (oder mehr) angeben, um nur genau diese Datei(en) zu löschen.

```shell
yarn purge joe-bob kitty-luvr73
```

**❌ Ich werde die Daten periodisch (monatlich) löschen, daher erwarte bitte, dass deine Daten jederzeit gelöscht werden können**.

## 🚶 Nächster Schritt

Dieses Repository ist für die Einführung in den Open-Source-Code-Beitragsworkflow.
Nachdem du alle Schritte ausgeführt hast, erwarten wir, dass du weißt, wie man ein Repository forkt, wie Branches funktionieren und wie gute Pull-Requests erstellt werden. Außerdem kennst du viele andere Dinge über den Beitrag zu Open-Source-Code 🥳.

**👉 Höre hiermit nicht auf, bitte trage weiter zu Open Source bei 🙏.**

---

Copyright © 2018 **Irfan Maulana****
