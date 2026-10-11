# Nido Café website preview

The review build is on the [`homepage-preview` branch](https://github.com/pixnel11-1984/nido/tree/homepage-preview). It opens to the menu placeholder on mobile, with the birthday button at the top, and uses the bento layout on desktop. No production deployment is needed to preview it.

## Preview in your browser with GitHub Codespaces

1. Open the `homepage-preview` branch on GitHub.
2. Select **Code → Codespaces → Create codespace on homepage-preview**. The included dev container installs Node.js 24, runs `npm ci`, and starts the website automatically.
3. Open the forwarded **3000** port in the **Ports** tab. GitHub opens the live site in your browser. Keep the port's visibility set to **Private**; do not change it to Public.

The site updates as you edit files in the codespace. The private port requires GitHub access to the codespace. The website is available while the codespace is running; you can resume it for the next review. Codespaces availability depends on your GitHub account and usage allowance.

## Preview on your computer

Install [Node.js 24](https://nodejs.org/) and Git, then run:

```sh
git clone --branch homepage-preview https://github.com/pixnel11-1984/nido.git
cd nido
npm ci
npm run dev -- --port 3000
```

Open <http://localhost:3000> in a browser on the same computer. To compare layouts, use the browser's device toolbar at **375 × 812** for mobile and resize the desktop viewport to around **1440 × 900**. The `/carta` and `/cumpleanos` links are also available from the homepage.
