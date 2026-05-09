# @erwanjugand/stylelint-config

Stylelint preset.

## Installation

```
npm install -D @erwanjugand/stylelint-config
yarn add -D @erwanjugand/stylelint-config
pnpm add -D @erwanjugand/stylelint-config
bun add -D @erwanjugand/stylelint-config
```

## Usage

Create a `stylelint.config.ts` file and extend the preset.

```js
export default {
  extends: ['@erwanjugand/stylelint-config'],
}
```

For Vue projects:

```js
export default {
  extends: ['@erwanjugand/stylelint-config/vue'],
}
```
