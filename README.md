# nuxt-node-externals-module

## Setup

```bash
npm i nuxt-node-externals-module
```

## Usage

```js
{
  modules: [
    // add it as the last module
    [
      'nuxt-node-externals-module',
      {
        whitelist: [/^vue-cli-plugin-apollo/, /^vuetify/],
      },
    ],
  ],
}
```
