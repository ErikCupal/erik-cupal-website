import { aqua, Col, indianred, papayawhip, Row } from './css'

const Flexy = () => (
  <Row debug width height={350} around reverse>
    <Col sm={12} md={2} debug={indianred}>
      <div style={{ height: '100px', width: '90px' }}>Hoi</div>
    </Col>
    <Col xs sm={6} md={4} debug={aqua} height={100} />
    <Col xs sm={6} md={4} debug={papayawhip} height={100} />
  </Row>
)

export default Flexy