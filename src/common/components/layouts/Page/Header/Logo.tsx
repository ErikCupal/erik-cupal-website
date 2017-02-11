import { darkslateblue, darkslategray } from 'stylish-components/lib'
import { div, img, sm, md, extend, lightslategrey } from 'stylish-components'

const Wrapper = div([
  {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '63px',
    fontSize: 30,
    color: darkslategray,
    height: 75,
  },
  sm({
    marginLeft: '92px',
  }),
  md({
    justifyContent: 'flex-start',
    marginLeft: '5%',
  })
])

const Logo = () => (
  <Wrapper>
    Erik Cupal
  </Wrapper>
)

export default Logo