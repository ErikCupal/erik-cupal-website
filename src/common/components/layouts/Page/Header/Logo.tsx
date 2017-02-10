import { div, img, sm, md } from '../../../css'

const Wrapper = div([
  {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
  },
  md({
    justifyContent: 'flex-start',
    marginLeft: '5%',
  })
])

const StyledImage = img([
  {
    width: '100%',
    height: 75,

    maxWidth: 240,
    marginLeft: 7,
  },
  sm({ maxWidth: 290, margin: 0 })
])

const Logo = () => (
  <Wrapper>
    <StyledImage
      src='https://sonacupalova.cz/wp-content/uploads/2016/05/logosc1.svg'
      alt='Logo'
    />
  </Wrapper>
)

export default Logo