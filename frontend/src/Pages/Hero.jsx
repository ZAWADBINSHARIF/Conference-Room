// external import
import { Col, Row } from 'react-bootstrap'

// internal import
import PlayGround from '../components/PlayGround/PlayGround'
import SideBar from '../components/SideBar'

const Hero = () => {
    return (
        <>
            <Row>
                {/* playGround */}
                <Col md={10}>
                    <PlayGround />
                </Col>

                {/* SideBar */}
                <Col md={2}>
                    <SideBar />
                </Col>
            </Row>
        </>
    )
}
export default Hero