import React from 'react'
import Header from './Header'
import { div, main } from 'stylish-components'

const Body = div([{
  fontFamily: 'Ubuntu',

  display: 'flex',
  margin: 0,
  padding: 0,
  width: '100%',
  height: '100%',
}])

const Main = main([{
  marginTop: 75
}])

const Page = ({ children }: React.Props<{}>) => (
  <Body>
    <Header />
    <Main>
      {children}
    </Main>
  </Body>
)

export default Page