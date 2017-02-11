import Express from 'express'
import isomorphic from './isomorphic'
import { join } from 'path'
const { log } = console
const debug = process.env.NODE_ENV !== 'production'

import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackConfig, { publicPath } from './webpack.client'
import requestLogger from './requestLogger'

switch (debug) {
  case true:
    log('🏎️ Development\n\n')
    break
  case false:
    log('🤵 Production\n\n')
    break
}

log('🏁 Starting app')

const app = Express()
const port: number = (process.env.PORT || '3000')

app.use('/public', Express.static('public'))



if (!debug) {
  app.get('/public/js/app.js', (req, res) => {
    res.sendFile(join(process.cwd() + '/build/production/app.js'))
  })
}

if (debug) {
  log('🏎️ Initalizing webpack compiler')
  const compiler = webpack(webpackConfig)
  log('💼 Initalizing webpack dev middleware')
  app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath }))
  log('🔥 Initalizing hot module replacement')
  app.use(webpackHotMiddleware(compiler))

  app.use(requestLogger)
}

app.use(isomorphic)

app.listen(port, () => console.log(`🚀 Server is listening on http://localhost:${port} 🎉`))