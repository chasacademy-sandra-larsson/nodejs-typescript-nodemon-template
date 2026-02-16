# Node.js Express TypeScript Template

En minimal template för backend-utveckling med Node.js, Express och TypeScript.

## Kom igång

### 1. Installera dependencies

```bash
npm install
```

### 2. Starta utvecklingsservern (med hot reload)

```bash
npm run dev
```

Servern startar på [http://localhost:3000](http://localhost:3000).

### 3. Bygg för produktion

```bash
npm run build
```

### 4. Kör applikation för produktion

```bash
npm start
```

## Projektstruktur

```
src/
  server.ts   ← Huvudfil: skapar Express-app och startar servern
```

## Dependencies

### Runtime

| Paket | Beskrivning |
|-------|-------------|
| `express` | Webbramverk för Node.js - hanterar routes, requests och responses |

```bash
npm install express
```

### Dev

| Paket | Beskrivning |
|-------|-------------|
| `typescript` | TypeScript-kompilatorn - kompilerar `.ts`-filer till JavaScript |
| `ts-node` | Kör TypeScript direkt i Node.js utan att behöva kompilera först |
| `nodemon` | Övervakar filändringar och startar om servern automatiskt (hot reload) |
| `@types/node` | TypeScript-typdefinitioner för Node.js inbyggda moduler (fs, path, http etc.) |
| `@types/express` | TypeScript-typdefinitioner för Express (ger autocomplete och typkontroll) |

```bash
npm install -D typescript ts-node nodemon @types/node @types/express
```

## Scripts

| Script          | Beskrivning                                    |
| --------------- | ---------------------------------------------- |
| `npm run dev`   | Startar servern med nodemon + ts-node          |
| `npm run build` | Kompilerar TypeScript till JavaScript (dist/)   |
| `npm start`     | Kör kompilerad kod från dist/                  |


Istället för ```nodemon``` och ```ts-node``` kan man använda ```tsx```och ```--watch```. 
[Läs denna artikel](https://medium.com/modernnerd-code/tsx-vs-ts-node-and-nodemon-0ec60d21c5e1)