import { match, RouterContext } from 'react-router'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'

import { Context } from 'koa'

import renderHtml from './renderHtml'
import configureStore from '../common/store/configureStore'

import routes from '../common/routes'
import initialState from './initialState'

const isomorphic = async (ctx: Context, next: () => Promise<any> ) => {
  match(
    { routes, location: ctx.req.url as string },
    (err, redirect, props) => {
      switch (true) {
        case !!err: {
          ctx.status = 500
          ctx.body = err.message
          break
        }
        case !!redirect: {
          ctx.redirect(redirect.pathname + redirect.search)
          break
        }
        case !!props: {
          const store = configureStore(initialState)
          const html = renderToString(
            <Provider store={store}>
              <RouterContext {...props} />
            </Provider>
          )
          const finalState = store.getState()
          ctx.body = renderHtml(html, finalState)
          break
        }
        default: {
          ctx.status = 404
          ctx.body = 'Not Found'
        }
      }
    }
  )

  await next()
}

export default isomorphic