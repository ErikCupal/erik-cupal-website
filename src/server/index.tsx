import Koa from 'koa'
import isomorphic from './isomorphic'
import requestLogger from './requestLogger'
import webpackMiddleware from 'koa-2-webpack'
const { log } = console
const debug = process.env.NODE_ENV !== 'production'

import webpackConfig, { publicPath } from './webpack.client'

switch (debug) {
  case true:
    log('🏎️ Development\n\n')
    break
  case false:
    log('🤵 Production\n\n')
    break
}

log('🏁 Starting app')

const app = new Koa()
const port: number = (process.env.PORT || '3000')

// TODO: Serve static - public on /public

// app.use(async (ctx, next) => {
//   ctx.response
// })


if (!debug) {
  // TODO: serve static app.js

  // app.get('/public/js/app.js', (req, res) => {
  //   res.sendFile(join(process.cwd() + '/build/production/app.js'))
  // })
}

if (debug) {
  log('🏎️ Initalizing webpack compiler')
  log('💼 Initalizing webpack dev middleware')
  log('🔥 Initalizing hot module replacement')

  app.use(webpackMiddleware({
    config: webpackConfig,
    dev: { noInfo: true, publicPath }
  }))

  app.use(requestLogger)
}

app.use(isomorphic)

app.listen(port, () => console.log(`🚀 Server is listening on http://localhost:${port} 🎉`))