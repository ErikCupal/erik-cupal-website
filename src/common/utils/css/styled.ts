import React from 'react'
import { style, types } from 'typestyle'
import pickBy from 'lodash/pickBy'
import isValidAttribute from './isValidAttribute'

type CSS = types.NestedCSSProperties
type Element<P> = React.ReactElement<P>

type Props<P, H> = P & H
type HtmlProps<P, H> = Props<P, React.HTMLProps<H>>

type HtmlStyler<P, H> = (params: HtmlProps<P, H>) => CSS[]

type Styler<P, H> = (params: Props<P, H>) => CSS[]

export const factory = <H>(tag: string) => (
  <P>(...objects: (CSS | HtmlStyler<P, H> | CSS[])[]) => (
    (props: HtmlProps<P, H>) => {
      const cssObjects = objects.map(obj => {
        if (typeof obj === 'function') {
          const fn = obj
          return fn(props)
        }
        return obj
      }).reduce((acc: CSS[], cur) => {
        if (Array.isArray(cur)) {
          return acc.concat(cur)
        }
        acc.push(cur)
        return acc
      }, []) as CSS[]

      const passedProps = Object.assign(
        {},
        pickBy(props, isValidAttribute),
        { className: style(...cssObjects) }
      )

      return React.createElement(tag, passedProps, props.children)
    }
  )
)

class Helper {
  static styled<H>(type: React.ComponentClass<H>):
    <P>(...objects: (CSS | Styler<P, H> | CSS[])[]) => (props: Props<P, H> & React.Props<H>) => React.ReactElement<H>

  static styled<H>(type: React.StatelessComponent<H>):
    <P>(...objects: (CSS | Styler<P, H> | CSS[])[]) => (props: Props<P, H> & React.Props<H>) => React.SFCElement<H>

  static styled<H>(type: React.StatelessComponent<H> | React.ComponentClass<H>) {
    return <P>(...objects: (CSS | Styler<P, H> | CSS[])[]) => (
      (props: Props<P, H> & React.Props<H>) => {
        const cssObjects = objects.map(obj => {
          if (typeof obj === 'function') {
            const fn = obj
            return fn(props)
          }
          return obj
        }).reduce((acc: CSS[], cur) => {
          if (Array.isArray(cur)) {
            return acc.concat(cur)
          }
          acc.push(cur)
          return acc
        }, []) as CSS[]

        return React.createElement(
          type as any,
          Object.assign({}, props, { className: style(...cssObjects) }),
          props.children
        ) as any
      }
    )
  }
}

export const extend = Helper.styled