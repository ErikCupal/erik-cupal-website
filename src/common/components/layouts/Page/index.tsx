import React from 'react'
import Header from './Header'
import { div } from 'stylish-components'

const Body = div([{
  fontFamily: 'Nunito',

  display: 'flex',
  margin: 0,
  padding: 0,
  width: '100%',
  height: '100%',
}])

const Page = ({ children }: React.Props<{}>) => (
  <Body>
    <Header />
    {children}
  </Body>
)

export default Page