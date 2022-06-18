import { defineConfig } from '@windicss/plugin-utils'
import merge from 'lodash/merge'
import commonTheme from './commonTheme'
import commonShortcuts from './commonShortcuts'

export default defineConfig({
  theme: {
    extend: merge(commonTheme, {
      // * Write other config
      // colors: {
      //   yellowish: "#FFCC80",
      //   darkblue: "#3C4852",
      // },
    }),
  },
  // plugins: [require('@windicss/plugin-scrollbar')],
  /**
   * Write windi classes in html attributes.
   * @see https://windicss.org/features/attributify.html
   */
  attributify: true,
  shortcuts: merge(commonShortcuts, {
    // * Write other config
  }),
})
