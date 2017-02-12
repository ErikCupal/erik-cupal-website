import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'

import { Context } from 'koa'

import renderHtml from './renderHtml'
import configureStore from '../common/store/configureStore'

import Routes from '../common/routes'
import initialState from './initialState'

import { StaticRouter } from 'react-router'

const isomorphic = async (ctx: Context, next: () => Promise<any>) => {

  const context: any = {}

  const {store} = configureStore(initialState)

  const html = renderToString(
    <Provider store={store}>
      <StaticRouter location={ctx.req.url} context={context}>
        <Routes />
      </StaticRouter>
    </Provider>
  )

  const finalState = store.getState()

  switch (true) {
    case !!context.url: {
      ctx.redirect(context.url)
      break
    }
    default: {
      ctx.body = renderHtml(html, finalState)
      break
    }
  }

  await next()
}

export default isomorphic