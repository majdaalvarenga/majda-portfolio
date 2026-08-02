# Portfólio — Májda, Product Owner

Site em React + TypeScript com 4 páginas: **Home**, **Sobre**, **Casos** e **Contato**.

## Paleta usada

| Cor          | Hex       | Uso                          |
|--------------|-----------|------------------------------|
| Ink          | `#1E1B18` | Texto principal, preto quente|
| Graphite     | `#57524C` | Texto secundário (cinza)     |
| Stone        | `#A9A199` | Bordas, detalhes (cinza)     |
| Linen        | `#F3EFE7` | Fundo geral (bege claro)     |
| Sand         | `#E4DBCB` | Blocos, footer (bege médio)  |
| Terracotta   | `#B85C38` | Destaque, links, ícones      |

Tipografia: **Fraunces** (títulos), **Inter** (texto corrido), **IBM Plex Mono** (rótulos/eyebrows).

## Como rodar

Pré-requisito: [Node.js](https://nodejs.org) 18 ou superior.

```bash
npm install
npm run dev
```

Abra o endereço mostrado no terminal (geralmente `http://localhost:5173`).

Para gerar a versão de produção:

```bash
npm run build
npm run preview
```

## O que editar antes de publicar

- `src/pages/Contact.tsx` → troque o link do LinkedIn e o e-mail pelos reais.
- `src/pages/Sobre.tsx` → ajuste o texto de bio se quiser mais detalhes.
- `src/pages/Casos.tsx` → adicione novos `<article className="case-card">` para outros projetos além do App Geotecnia.
- `public/images/avatar.svg` → é uma ilustração placeholder; substitua por uma foto real (ex.: `avatar.jpg`) e ajuste o `src` em `Sobre.tsx`.

## Estrutura

```
src/
  components/   Header, Footer e ProcessFlow (elemento visual do fluxo Problema→Solução→Experiência)
  pages/        Home, Sobre, Casos, Contact
  styles/       global.css com as variáveis de cor e tipografia
public/images/  Ilustrações SVG (hero, avatar, case)
```
