import { State } from '../common/types/index'
import htmlTemplate from './html5'

const css = ``

const fonts = `
  <link href="https://fonts.googleapis.com/css?family=Ubuntu:400,400i,500&amp;subset=latin-ext" rel="stylesheet">
`

const injectApp = (path: string) => `<script src="${path}"></script>`

const injectState = (preloadedState: State) => `
  <script>
    window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState)}
  </script>
`

const renderHtml = (
  html: string,
  preloadedState: State,
  title?: string,
) => htmlTemplate(
  title ? title : 'App',
  'app',
  html,
  css + fonts,
  injectState(preloadedState) + injectApp('/public/js/app.js')
)

export default renderHtml