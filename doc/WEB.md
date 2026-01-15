


## セットアップ

### 1. Next.js をインストール

- [Getting Started: Installation | Next.js](https://nextjs.org/docs/app/getting-started/installation)


```bash
pnpm create next-app@15 web --yes
# pnpm create next-app@latest web --yes
cd web
pnpm dev
```

### 2. 依存関係 をインストール

```bash
# 1. ESLintをBiomeに置き換え
pnpm remove eslint eslint-config-next
pnpm add -D @biomejs/biome

# 2. UI ライブラリをインストール
pnpm add -D daisyui

# 3. テスト環境を構築.
pnpm add -D vitest @vitejs/plugin-react jsdom @testing-library/react @testing-library/dom vite-tsconfig-paths @vitest/coverage-v8 @vitest/ui

# 4. ドキュメント生成ツールをインストール
pnpm add -D typedoc typedoc-plugin-markdown

# 5. その他便利ツールをインストール
pnpm approve-builds
```

### 3. スクリプトを追加

```json
// package.json
{
    "scripts": {
        "dev": "next dev",
        "build": "next build",
        "start": "next start",
        "lint": "biome lint",
        "lint:fix": "biome lint --write",
        "lint:legacy": "eslint",
        "format": "biome format --write",
        "check": "biome check --write",
        "typecheck": "next typegen && tsc --noEmit",
        "ci": "biome ci",
        "test": "vitest run --reporter=dot",
        "test:ui": "vitest --ui",
        "test:coverage": "vitest --coverage",
        "test:ci": "vitest run --coverage --reporter=junit --outputFile=junit-report.xml",
        "typedoc": "typedoc --plugin typedoc-plugin-markdown --entryPointStrategy expand app/"
    },
}
```

### 4. Biomeの設定ファイルを追加

### 5. Tailwind CSS と DaisyUI の設定ファイルを追加

- [Testing: Vitest | Next.js](https://nextjs.org/docs/app/guides/testing/vitest)
- [Install daisyUI for Next.js — daisyUI Tailwind CSS Component UI Library](https://daisyui.com/docs/install/nextjs/)

```bash
```

### 6. Telemetry を無効化

- [Telemetry | Next.js by Vercel - The React Framework](https://nextjs.org/telemetry)

```bash
pnpm exec next telemetry disable
```

### 7. global.cssに DaisyUI をインポート

```css
@import "tailwindcss";
@plugin "daisyui";
```

### 8. Next.js の設定ファイルを追加

```ts
// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    webpack: (config) => {
        config.watchOptions = {
            poll: 1000,
            aggregateTimeout: 300,
        }
        return config
    },
};

export default nextConfig;
```

### 9. vitest.config.ts を追加

```ts
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    environment: "jsdom",
    setupFiles: ["./__tests__/setup.tsx"],
    pool: "threads",
    testTimeout: 10000,
    deps: {
      optimizer: {
        web: {
          include: ["next"],
        },
      },
    },
  },
});
```


## その他

- [AWS SAM CLI のインストール](https://docs.aws.amazon.com/ja_jp/serverless-application-model/latest/developerguide/install-sam-cli.html)
