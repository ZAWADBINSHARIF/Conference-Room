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
                <Col xxl={11} xl={10} md={10}>
                    <PeanutGallery/>
                    <PlayGround />
                </Col>

                {/* SideBar */}
                <Col xxl={1} xl={2} md={2}>
                    <SideBar />
                </Col>
            </Row>
        </>
    )
}
export default Hero