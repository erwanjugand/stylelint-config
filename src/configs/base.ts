import type { Config } from 'stylelint'

export const config: Config = {
  extends: ['stylelint-config-recess-order', 'stylelint-config-standard-scss'],
  plugins: ['stylelint-plugin-use-baseline'],
  rules: { 'plugin/use-baseline': [true, { available: 'newly' }] },
}

export default config
