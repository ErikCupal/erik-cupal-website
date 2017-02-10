import React from 'react'
import Header from './Header'
import { View, div } from '../../css'

const Body = div([{
  fontFamily: 'Nunito',
}])

const Page = ({ children }: React.Props<{}>) => (
  <View>
    <Body>
      <Header />
      {children}
    </Body>
  </View>
)

export default Page