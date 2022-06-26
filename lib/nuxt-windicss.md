# nuxt2 add windicss

## add package

```
yarn add -D nuxt-windicss
```

## add package 2 nuxt.config.js -> buildModules

```
[
  'nuxt-windicss',
]
```

## add css 2 nuxt.config.js -> css

```
[
  'virtual:windi-base.css',
  '~/assets/css/base.css',
  'virtual:windi-components.css',
  '~/assets/css/components.css',
  'virtual:windi-utilities.css',
  '~/assets/css/utilities.css',
]
```

## add config 2 nuxt.config.js

```
windicss: {
  analyze: {
    analysis: {
      interpretUtilities: false,
    },
    // see https://github.com/unjs/listhen#options
    server: {
      port: 4444,
      open: true,
    },
  },
},
```
