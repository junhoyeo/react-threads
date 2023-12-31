# react-threads

[![NPM](https://img.shields.io/npm/v/react-threads.svg?style=flat-square&labelColor=black)](https://www.npmjs.com/package/react-threads) [![MIT License](https://img.shields.io/badge/license-MIT-blue?style=flat-square&labelColor=black)](https://github.com/junhoyeo/react-threads/blob/main/license) [![Prettier Code Formatting](https://img.shields.io/badge/code_style-prettier-brightgreen.svg?style=flat-square&labelColor=black)](https://prettier.io)

> Embed Static Threads in your React/Next.js application. UI components for Meta's Threads. _Powered by **[junhoyeo/threads-api](https://github.com/junhoyeo/threads-api)**._

[![cover](.github/cover.jpg)](https://react-threads.vercel.app)

## Demo

> **Warning**<br/>
> Vercel Deployment is currently sometimes unstable. 🏴‍☠️

[![cover](.github/cover-netflix.png)](https://react-threads.vercel.app/CuUoEcbRFma)

## 📦 Setup

First, install `react-threads` with it's dependencies.

```bash
yarn add next react-threads threads-api
yarn add -D tailwindcss postcss autoprefixer
```

Add path to `react-threads` to [content sources](https://tailwindcss.com/docs/content-configuration) of your Tailwind Configuration file(`tailwind.config.js`).

```js
// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{ts,tsx}',

    // path to `react-threads`
    'node_modules/react-threads/**/*',
  ],
};
```

Set [`images.remotePatterns` to your app's `next.config.js`](https://nextjs.org/docs/pages/api-reference/components/image#remotepatterns). We use `next/image` to proxy images under the hood.

```js
// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.cdninstagram.com',
      },
      {
        protocol: 'https',
        hostname: '**.fbcdn.net',
      },
    ],
  },
};

module.exports = nextConfig;
```

## 🚀 Usage

```ts
import { GetStaticProps, NextPage } from 'next';
import { BannerCTA, Thread } from 'react-threads';
import { Thread as ThreadPost, ThreadsAPI } from 'threads-api';

const threadsAPI = new ThreadsAPI();

type Props = {
  threadID: string;
  thread: ThreadPost;
};

export const getStaticProps: GetStaticProps<Props, { threadId: string }> = async (context) => {
  try {
    const threadID = context.params?.threadId;
    if (!threadID) {
      console.log('[!] Thread ID not provided');
      return { notFound: true };
    }
    const postID = threadsAPI.getPostIDfromThreadID(threadID);
    if (!postID) {
      console.log(
        '[!] Post ID not found with provided Thread ID (in threadsAPI.getPostIDfromThreadID):',
        threadID,
      );
      return { notFound: true };
    }
    const thread = await threadsAPI.getThreads(postID);
    const { containing_thread } = thread;

    return {
      props: {
        threadID,
        thread: containing_thread,
      },
      revalidate: 10,
    };
  } catch (err) {
    console.error('[*] Error fetching Thread', err);
    throw err;
  }
};

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}
```

## 🏴‍☠️ Useful Building Blocks

- Looking for an API client?
  - **[junhoyeo/threads-api ![](https://img.shields.io/github/stars/junhoyeo%2Fthreads-api?style=social)](https://github.com/junhoyeo/threads-api)**
- Using [_Private Git Submodules_](https://github.com/orgs/vercel/discussions/44) when deploying with Vercel?
  - **[junhoyeo/vercel-submodules ![](https://img.shields.io/github/stars/junhoyeo%2Fvercel-submodules?style=social)](https://github.com/junhoyeo/vercel-submodules)**

## 🏴‍☠️ Inspired from 🤍

- [vercel-labs/react-tweet](https://github.com/vercel-labs/react-tweet)
- [transitive-bullshit/react-static-tweets](https://github.com/transitive-bullshit/react-static-tweets)
- [zernonia/tweetic](https://github.com/zernonia/tweetic)

## License

<p align="center">
  <a href="https://github.com/junhoyeo">
    <img src="https://github.com/junhoyeo/threads-api/raw/main/.github/labtocat.png" width="256" height="256">
  </a>
</p>

<p align="center">
  <strong>MIT © <a href="https://github.com/junhoyeo">Junho Yeo</a></strong>
</p>

If you find this project intriguing, **please consider starring it(⭐)** or following me on [GitHub](https://github.com/junhoyeo) (I wouldn't say [Threads](https://www.threads.net/@_junhoyeo)). I code 24/7 and ship mind-breaking things on a regular basis, so your support definitely won't be in vain.
