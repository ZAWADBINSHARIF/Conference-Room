// external import
import { Col, Row } from 'react-bootstrap'

// internal import
import PlayGround from '../components/PlayGround/PlayGround'
import SideBar from '../components/SideBar'
import PeanutGallery from '../components/PeanutGallery'

const Hero = () => {
    return (
        <>
            <Row>
                {/* playGround */}
                <Col md={11}>
                    <PeanutGallery/>
                    <PlayGround />
                </Col>

                {/* SideBar */}
                <Col md={1}>
                    <SideBar />
                </Col>
            </Row>
        </>
    )
}
export default Hero