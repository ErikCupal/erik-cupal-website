import { media, types } from 'typestyle'

export const small = (...properties: types.CSSProperties[]) => media({ minWidth: 500 }, ...properties)
export const medium = (...properties: types.CSSProperties[]) => media({ minWidth: 900 }, ...properties)
export const large = (...properties: types.CSSProperties[]) => media({ minWidth: 1200 }, ...properties)

export {
  small as sm,
  medium as md,
  large as lg,
}