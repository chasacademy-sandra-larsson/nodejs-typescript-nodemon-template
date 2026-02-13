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

### 4. Kör produktionsbygget

```bash
npm start
```

## Projektstruktur

```
src/
  server.ts   ← Huvudfil: skapar Express-app och startar servern
```

## Scripts

| Script          | Beskrivning                                    |
| --------------- | ---------------------------------------------- |
| `npm run dev`   | Startar servern med nodemon + ts-node          |
| `npm run build` | Kompilerar TypeScript till JavaScript (dist/)   |
| `npm start`     | Kör kompilerad kod från dist/                  |
