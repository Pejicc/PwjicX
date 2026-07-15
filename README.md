# Pejic - Language System for Learning

**A comprehensive language learning and development system built with multiple support providers and instant feedback mechanisms.**

---

## 📋 Pregled / Overview

Pejic je kompletan sistem za učenje i razvoj sa podrškama za:
- **Pejic Language Support** - Jezični server sa syntax highlighting-om i IntelliSense
- **Provider System** - 7 različitih providera za različite funkcionalnosti
- **Instant Reaction System** - Trenutne povratne informacije pri svakoj izmjeni koda
- **VS Code Integration** - Direktna integracija sa VS Code ekstenzijama
- **Security & Validation** - Sigurnosne provjere i validacija koda

---

## 📚 Nivoi Jezika (AIEOM)

AIEOM sistema definiše nivoe znanja:

- **AIEOM: Početnik** - Osnove sintakse i osnovnih koncepata
- **AIEOM: Elementarni** - Osnovne operacije i kontrolne strukture
- **AIEOM: Srednji** - Naprednije tehnike i funkcionalnosti
- **AIEOM: Viši srednji** - Kompleksne strukture i optimizacije
- **AIEOM: Napredni** - Ekspertsko znanje i specijalizovane tehnike
- **AIEOM: Gotovo savršen** - Mastery nivo sa maksimalnom efikasnosti

---

## 🛠️ Komponente / Components

### 1. **Pejic Language** (`.pej`)
- Dark tema sa 20 foreground boja
- Syntax highlighting
- Keyword support
- Forbidden words lista

### 2. **Nexus Language Support** (`.nxs`)
- Syntax highlighting
- Code completion
- Error detection
- Language features

### 3. **Nexus Config** (`.nxc`)
- Konfiguracija sistema
- Postavke kompajlera
- Optimizacijske opcije

### 4. **Instant Reaction System** (`.nxr`)
- Instant povratne informacije
- Error highlighting
- Success notifications
- Warning messages

### 5. **Provider System** (`.nxp`)
7 providera:
- **Syntax Provider** - Sintaksna validacija
- **Language Provider** - Jezični servisi
- **Compiler Provider** - Kompajliranje
- **Config Provider** - Konfiguracija
- **Reaction Provider** - Sistem povratnih informacija
- **Theme Provider** - Tematske postavke
- **Security Provider** - Sigurnosne provjere

### 6. **VS Code Extensions**
- Pejic Language Support Extension
- Pejic Provider System Extension
- Pejic Complete Development Kit

---

## 🚀 Instalacija / Installation

### Metoda 1: Direktna iz VS Code
1. Otvori VS Code
2. Idi na Extensions (Ctrl+Shift+X)
3. Pretraži "Pejic"
4. Klikni "Install"

### Metoda 2: Preko VS Code Extension URLs
```javascript
// Direktno iz datoteke vscodeExtensionUrls.js
- vscode:extension/Pejicc.pejic-language-support
- vscode:extension/Pejicc.pejic-provider-system
- vscode:extension/Pejicc.pejic-dev-kit
```

### Metoda 3: Iz VS Code Marketplace
Posjetite: [VS Code Marketplace](https://marketplace.visualstudio.com/)

---

## 📁 Struktura Projekta / Project Structure

```
PwjicX/
├── README.md                          # Dokumentacija
├── pejic.pej                          # Pejic language definition
├── forbidden.pej                      # Forbidden words lista
├── nexuslang.nxs                      # Nexus Language Support
├── nexusconfig.nxc                    # Nexus Config
├── instantReaction.nxr                # Instant Reaction System
├── provider.nxp                       # Provider System
├── vscodeExtensionUrls.js             # VS Code Extension URLs
├── pejicSystemConfig.js               # Sistem konfiguracija
├── pejicVerification.js               # Verifikacijski sistem
├── nexusLangLinks.js                  # Nexus Language Links
└── nexusConfigLinks.js                # Nexus Config Links
```

---

## ⚙️ Konfiguracija / Configuration

### Sistemske Postavke

```javascript
{
  version: '1.0.0',
  language: 'Pejic',
  fileExtensions: ['.pej', '.nxs', '.nxc', '.nxr', '.nxp'],
  theme: 'dark',
  encoding: 'UTF-8'
}
```

### Kompajler Opcije

```javascript
{
  strict: true,
  warnings: true,
  optimizations: true,
  sourceMap: true,
  minify: true
}
```

### Sigurnost

```javascript
{
  enabled: true,
  checkForbiddenWords: true,
  validateTypes: true,
  scanVulnerabilities: true
}
```

---

## 🔍 Instant Reaction Types

| Tip | Ikona | Boja | Opis |
|-----|-------|------|------|
| Syntax Error | ❌ | Red | Greška u sintaksi |
| Forbidden Word | ⛔ | Red | Zabranjene riječi |
| Success | ✅ | Green | Uspješna kompilacija |
| Warning | ⚠️ | Yellow | Upozorenja |
| Optimization | ℹ️ | Cyan | Primjena optimizacije |

---

## 🔐 Sigurnosne Provjere

Sistem automatski provjerava:
- ✓ Zabranjene riječi
- ✓ Tipske validacije
- ✓ Ranjivosti
- ✓ Sigurnosne politike

---

## 📝 Datoteke sa Linkovima

### nexusLangLinks.js
Sadrži linkove za Nexus Language Support:
- GitHub repository
- Raw datoteke
- Download linkovi

### nexusConfigLinks.js
Sadrži linkove za Nexus Config:
- GitHub repository
- Raw datoteke
- Download linkovi

---

## ✅ Verifikacija Sistema

Projekt je verificiran sa sledećim komponentama:
- ✅ 10 datoteka
- ✅ 6 komponenti
- ✅ 7 providera
- ✅ 6 tipova reactions
- ✅ 3 VS Code ekstenzije
- ✅ 15 linkova

**Status: SVEUKUPNO VERIFICIRANO** ✅

---

## 🎯 Karakteristike / Features

### Jezika
- 📝 Kompletna sintaksna podrška
- 🎨 Dark tema sa 20 boja
- 🔍 Code completion i IntelliSense
- ⚡ Instant povratne informacije

### Razvojnog Okruženja
- 🛠️ Multi-provider sistem
- 🔧 Fleksibilna konfiguracija
- 📊 Napredne optimizacije
- 🔐 Integrisana sigurnost

### VS Code
- 📦 Instant instalacija
- 🚀 Plug-and-play integracija
- 🎯 Sveobuhvatni dev kit
- 📚 Kompletan template sistem

---

## 📦 Sistemski Zahtjevi / System Requirements

- **VS Code**: ≥ 1.60.0
- **Node.js**: ≥ 14.0.0
- **Platforme**: Windows, macOS, Linux

---

## 🔗 Brzi Linkovi / Quick Links

- **GitHub Repository**: [Pejicc/PwjicX](https://github.com/Pejicc/PwjicX)
- **VS Code Extension - Language Support**: [Pejicc.pejic-language-support](https://marketplace.visualstudio.com/items?itemName=Pejicc.pejic-language-support)
- **VS Code Extension - Provider System**: [Pejicc.pejic-provider-system](https://marketplace.visualstudio.com/items?itemName=Pejicc.pejic-provider-system)
- **VS Code Extension - Dev Kit**: [Pejicc.pejic-dev-kit](https://marketplace.visualstudio.com/items?itemName=Pejicc.pejic-dev-kit)

---

## 📞 Podrška / Support

Za pitanja, bugove ili prijedloge:
- Otvori [issue](https://github.com/Pejicc/PwjicX/issues) na GitHub-u
- Kontaktiraj autora: Pejicc

---

## 📄 Licenca / License

Ovaj projekt je licenciran pod MIT licencom.

---

**Zadnja ažuriranja / Last Updated**: 2026-07-15

**Autor / Author**: Pejicc

**Verzija / Version**: 1.0.0
