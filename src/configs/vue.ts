import type { Config } from 'stylelint'

import { config as baseConfig } from './base.js'

export const config: Config = {
  ...baseConfig,
  overrides: [{ files: ['**/*.vue'], customSyntax: 'postcss-html' }],
}

export default config
