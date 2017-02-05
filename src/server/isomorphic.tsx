import { Request, Response } from 'express'
import { match, RouterContext } from 'react-router'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'

import renderHtml from './renderHtml'
import configureStore from '../common/store/configureStore'

import routes from '../common/routes'
import initialState from './initialState'

const isomorphic = (req: Request, res: Response) => {
  match(
    { routes, location: req.url },
    (err, redirect, props) => {
      switch (true) {
        case !!err: {
          res.status(500).send(err.message)
          break
        }
        case !!redirect: {
          res.redirect(302, redirect.pathname + redirect.search)
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
          res.send(renderHtml(html, finalState))
          break
        }
        default: {
          res.status(404).send('Not Found')
        }
      }
    }
  )
}

export default isomorphic