import React from 'react'
import { large, medium, small } from './media'
import { style } from 'typestyle'
import { factory } from './styled'

// Styled

const doSpan = (span: number) => (String(span * 100 / 12) + '%')

interface ViewProps {
  debug?: boolean | string

  tag?: string

  hide?: boolean
  xsHide?: boolean
  smHide?: boolean
  mdHide?: boolean
  lgHide?: boolean

  row?: boolean
  xsRow?: boolean
  smRow?: boolean
  mdRow?: boolean
  lgRow?: boolean
  col?: boolean
  xsCol?: boolean
  smCol?: boolean
  mdCol?: boolean
  lgCol?: boolean

  nowrap?: boolean

  first?: boolean
  last?: boolean

  order?: number
  reverse?: boolean
  width?: string | number | boolean
  height?: string | number | boolean

  span?: number | boolean
  xs?: number | boolean
  sm?: number | boolean
  md?: number | boolean
  lg?: number | boolean

  offset?: number
  xsOffset?: number
  smOffset?: number
  mdOffset?: number
  lgOffset?: number

  start?: boolean
  end?: boolean
  center?: boolean
  between?: boolean
  around?: boolean

  crossStart?: boolean
  crossEnd?: boolean
  crossCenter?: boolean
  crossStretch?: boolean
}

export const View = ({
  tag,
  hide, xsHide, smHide, mdHide, lgHide,
  row, col, nowrap,
  xsRow, smRow, mdRow, lgRow,
  xsCol, smCol, mdCol, lgCol,
  order, first, last, reverse, width, height,
  span, xs, sm, md, lg,
  offset, xsOffset, smOffset, mdOffset, lgOffset,
  start, end, center, between, around,
  crossStart, crossEnd, crossCenter, crossStretch,
  debug, children }: ViewProps & React.Props<ViewProps>
) => {

  const viewClass = style(
    {
      display: 'flex',
      flexBasis: 'auto',
      flexWrap: 'wrap',
      flexDirection: 'row',
      alignContent: 'flex-start',
    },

    typeof hide === 'boolean' ? (hide ? { display: undefined } : { display: 'flex' }) : {},
    typeof xsHide === 'boolean' ? (xsHide ? { display: 'none' } : { display: 'flex' }) : {},
    typeof smHide === 'boolean' ? (smHide ? small({ display: 'none' }) : { display: 'flex' }) : {},
    typeof mdHide === 'boolean' ? (mdHide ? medium({ display: 'none' }) : { display: 'flex' }) : {},
    typeof lgHide === 'boolean' ? (lgHide ? large({ display: 'none' }) : { display: 'flex' }) : {},

    nowrap ? { flexWrap: 'nowrap' } : {},

    row ? { flexDirection: 'row' } : {},
    xsRow ? { flexDirection: 'row' } : {},
    smRow ? small({ flexDirection: 'row' }) : {},
    mdRow ? medium({ flexDirection: 'row' }) : {},
    lgRow ? large({ flexDirection: 'row' }) : {},

    col ? { flexDirection: 'row' } : {},
    xsCol ? { flexDirection: 'column' } : {},
    smCol ? small({ flexDirection: 'column' }) : {},
    mdCol ? medium({ flexDirection: 'column' }) : {},
    lgCol ? large({ flexDirection: 'column' }) : {},

    col ? { flexDirection: 'column' } : {},

    start ? { justifyContent: 'flex-start' } : {},
    end ? { justifyContent: 'flex-end' } : {},
    center ? { justifyContent: 'center' } : {},
    between ? { justifyContent: 'space-between' } : {},
    around ? { justifyContent: 'space-around' } : {},

    crossStart ? { alignItems: 'flex-start' } : {},
    crossEnd ? { alignItems: 'flex-end' } : {},
    crossCenter ? { alignItems: 'center' } : {},
    crossStretch ? { alignItems: 'stretch' } : {},

    typeof span === 'number' ? { flexBasis: doSpan(span), display: 'flex' }
      : typeof span === 'boolean' ? (span ? { flexGrow: 1, display: 'flex' } : { display: 'none' }) : {},
    typeof xs === 'number' ? { flexBasis: doSpan(xs), display: 'flex' }
      : typeof xs === 'boolean' ? (xs ? { flexGrow: 1, display: 'flex' } : { display: 'none' }) : {},
    typeof sm === 'number' ? small({ flexBasis: doSpan(sm), display: 'flex' })
      : typeof sm === 'boolean' ? small(sm ? { flexGrow: 1, display: 'flex' } : { display: 'none' }) : {},
    typeof md === 'number' ? medium({ flexBasis: doSpan(md), display: 'flex' })
      : typeof md === 'boolean' ? medium(md ? { flexGrow: 1, display: 'flex' } : { display: 'none' }) : {},
    typeof lg === 'number' ? large({ flexBasis: doSpan(lg), display: 'flex' })
      : typeof lg === 'boolean' ? large(lg ? { flexGrow: 1, display: 'flex' } : { display: 'none' }) : {},

    typeof offset === 'number' ? { marginLeft: doSpan(offset) } : {},
    typeof xsOffset === 'number' ? { marginLeft: doSpan(xsOffset) } : {},
    typeof smOffset === 'number' ? small({ marginLeft: doSpan(smOffset) }) : {},
    typeof mdOffset === 'number' ? medium({ marginLeft: doSpan(mdOffset) }) : {},
    typeof lgOffset === 'number' ? large({ marginLeft: doSpan(lgOffset) }) : {},

    debug === true ? { backgroundColor: 'rgba(211, 211, 211, 0.75)' }
      : typeof debug === 'string' ? { backgroundColor: debug } : {},

    typeof order === 'number' ? { order } : {},
    first === true ? { order: -1000 } : {},
    last === true ? { order: 1000 } : {},
    reverse === true ? { flexDirection: col ? 'column-reverse' : 'row-reverse' } : {},
    reverse === true ? ({ flexDirection: xsCol ? 'column-reverse' : 'row-reverse' }) : {},
    reverse === true ? small({ flexDirection: smCol ? 'column-reverse' : 'row-reverse' }) : {},
    reverse === true ? medium({ flexDirection: mdCol ? 'column-reverse' : 'row-reverse' }) : {},
    reverse === true ? large({ flexDirection: lgCol ? 'column-reverse' : 'row-reverse' }) : {},

    typeof width === 'boolean' ? { width: width ? 'auto' : 0 }
      : (typeof width === 'number' || typeof width === 'string') ? { width } : {},
    typeof height === 'boolean' ? { height: height ? 'auto' : 0 }
      : (typeof height === 'number' || typeof height === 'string') ? { height } : {},
  )

  return tag
    ? React.createElement(tag, { className: viewClass }, ...(children as any))
    : <div className={viewClass}>{children}</div>
}

export const Row = View

export const Col = (props: ViewProps & React.Props<ViewProps>) => (<View col {...props}>{props.children}</View>)

export default View