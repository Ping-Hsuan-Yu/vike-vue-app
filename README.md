<!--bati:start section="document"-->

<!--bati:start section="intro"-->

Generated with [Bati](https://batijs.dev) ([version 294](https://www.npmjs.com/package/create-bati/v/0.0.294)) using this command:

```sh
npm create bati -- --vue --tailwindcss
```

<!--bati:start section="TOC"-->

## Contents

* [`/pages/+config.ts`](#pagesconfigts)
* [Routing](#routing)
* [`/pages/_error/+Page.vue`](#pages_errorpagevue)
* [`/pages/+onPageTransitionStart.ts` and `/pages/+onPageTransitionEnd.ts`](#pagesonpagetransitionstartts-and-pagesonpagetransitionendts)
* [SSR](#ssr)
* [HTML Streaming](#html-streaming)

<!--bati:end section="TOC"-->

<!--bati:end section="intro"-->

<!--bati:start section="features"-->

<!--bati:start category="UI Framework" flag="vue"-->

This app is ready to start. It's powered by [Vike](https://vike.dev) and [Vue](https://vuejs.org/guide/quick-start.html).

### `/pages/+config.ts`

Such `+` files are [the interface](https://vike.dev/config) between Vike and your code. It defines:

* A default [`<Layout>` component](https://vike.dev/Layout) (that wraps your [`<Page>` components](https://vike.dev/Page)).
* A default [`title`](https://vike.dev/title).
* Global [`<head>` tags](https://vike.dev/head-tags).

### Routing

[Vike's built-in router](https://vike.dev/routing) lets you choose between:

* [Filesystem Routing](https://vike.dev/filesystem-routing) (the URL of a page is determined based on where its `+Page.vue` file is located on the filesystem)
* [Route Strings](https://vike.dev/route-string)
* [Route Functions](https://vike.dev/route-function)

### `/pages/_error/+Page.vue`

The [error page](https://vike.dev/error-page) which is rendered when errors occur.

### `/pages/+onPageTransitionStart.ts` and `/pages/+onPageTransitionEnd.ts`

The [`onPageTransitionStart()` hook](https://vike.dev/onPageTransitionStart), together with [`onPageTransitionEnd()`](https://vike.dev/onPageTransitionEnd), enables you to implement page transition animations.

### SSR

SSR is enabled by default. You can [disable it](https://vike.dev/ssr) for all your pages or only for some pages.

### HTML Streaming

You can enable/disable [HTML streaming](https://vike.dev/stream) for all your pages, or only for some pages while still using it for others.

<!--bati:end category="UI Framework" flag="vue"-->

<!--bati:end section="features"-->

<!--bati:end section="document"-->
