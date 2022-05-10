# Here:After

A better.sg project to spark end-of-life conversations.

## Preview

[here](https://here.vrtopia.net)

# Tech

**Frontend**: Single Page App using Vue3, TailwindCss, Vite.js. FontAwesome 6 Brand Icons are available (included via index.hmtl header from CDN)

**Backend**: TBD

# Recommended Setup

- [Visual studio code](https://code.visualstudio.com/)
- [NodeJS 16 LTS](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)

## Installation

Install the necessary dependencies

```
yarn install
```

## Development

Runs the vite.js development server with hot module reload on localhost

```
yarn dev
```

## Production Build

Generate the /dist folder that can be deployed onto any webserver

```
yarn build
```

# Developing


## Page Skeleton

The page skeleton is defined in src/App.vue and roughly consists of

- Navbar
- Active Page
- Footer

where active page is loaded by the router as defined in 'src/main.js'


## Navigation

The project uses [vue-router](https://router.vuejs.org/) for single-page navigation. To link to an app internal page (as opposed to a page somewhere else on the internet), use a <router-link to='pagename'></router-link> tag.


## Adding new Pages

See /src/App.vue for steps to add new pages


## Vue Components

The vite server is configured to auto-detect and import components present in the /src/components folder as well as [Inkline](https://www.inkline.io/docs/core/layout) components



## Coding conventions

- Please keep in style with the existing project.
- Please code responsive to support mobile and desktop web. 
- Please use inkline/tailwind themes instead of hand-rollig colors wherever possible to account from device dark mode.
- Please avoid introducing new library dependencies.
- Please use tailwindCss classes wherever possible. Tailwind is able to strip any unused css from the project and results in cleaner, more stable code
