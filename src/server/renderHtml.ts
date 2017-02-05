import { State } from '../common/types/index'
import htmlTemplate from './html5'

const css = `
  <link
    href="https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/paper/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-awusxf8AUojygHf2+joICySzB780jVvQaVCAt1clU3QsyAitLGul28Qxb2r1e5g+"
    crossorigin="anonymous">
`

const fonts = `
  <link
    href="http://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700,300italic,400italic,700italic"
    rel="stylesheet"
    type="text/css">
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

    // (
    // `<!doctype html>
    // <html>
    //   <head>
    //     <meta charset="UTF-8" />
    //     <meta name="viewport" content="width=device-width, initial-scale=1">

    //     <title>Node</title>

    //     <link
    //         href="https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/paper/bootstrap.min.css"
    //         rel="stylesheet"
    //         integrity="sha384-awusxf8AUojygHf2+joICySzB780jVvQaVCAt1clU3QsyAitLGul28Qxb2r1e5g+"
    //         crossorigin="anonymous">
    //     <link href="font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    //     <link
    //         href="http://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700,300italic,400italic,700italic"
    //         rel="stylesheet"
    //         type="text/css">
    //   </head>
    //   <body>
    //     <div id="app">${html}</div>
    //     <script>
    //       window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState)}
    //     </script>
    //     <script src="/public/js/app.js"></script>
    //   </body>
    // </html>`
    // )