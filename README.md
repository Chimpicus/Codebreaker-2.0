# [Codebreaker 2.0](https://github.com/Chimpicus/MM-Codebreaker-2.0)

This is a rebuild of an older project, built with more up-to-date technologies such as Next.js, Typescript, and Tailwind. Redux is also a possible route for managing state of the game('s).
With worlde being so popular, I have found a tutorial to use as reference to solving some of the problems, the link can be found [here](https://youtu.be/4qkMSWsUp2s)

Try it [here!](https://codebreaker-2-0.vercel.app/)

## Getting Started

First, run the development server and watch for tailwind changes:

```bash
npm run dev
# or
yarn dev

```

### Styling

Mobile-first approach, adding responsive style for larger screens later on. Please ensure all styling fits on the galaxy fold in chrome dev tools.

Tailwind is used for styling and needs to be updated when using a new utility class.

The following command will now run the app and watch for changes to the inline tailwind classes and rebuild the output.css. :

```
yarn run dev
```

Alternativeley, run the following command to ensure changes are made:

```
npx tailwindcss -i ./styles/input.css -o ./styles/output.css --watch
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
