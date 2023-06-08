# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install
```

## Development Server

Start the development server on `http://localhost:3000`

```bash
yarn dev
```

## Production

Build the application for production:

```bash
yarn build
```

Generate the static site:

```bash
yarn generate
```

Locally preview the generated site:

```bash
yarn preview
```

## Docker

Build a Docker image:

```bash
docker buildx build -t order-products .
```

Run the application in a Docker container:

```bash
docker run -p 3000:3000 order-products
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.



