// external import
import { useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'

// internal import
import '../result.scss'


const FinalResult = () => {

    function showPrintPDF() {
        window.print()
    }

    useEffect(() => {
        console.log('Load')
        // window.onload = showPrintPDF()
    })
    return (
        <div className="FinalResult">
            <h1 className="text-center">Result</h1>
            <br />
            <Row>
                <Col>
                    <h2>ALLIES</h2>
                    <div className='d-flex flex-row'>
                        <img src='/friend1.png' />
                        <div className="d-flex flex-column justify-content-center align-content-center">
                            <span>[Name]</span>
                            <span>[Role]</span>
                            <span>[Description]</span>
                        </div>
                    </div>
                    <div className='d-flex flex-row'>
                        <img src='/friend2.png' />
                        <div className="d-flex flex-column justify-content-center align-content-center">
                            <span>[Name]</span>
                            <span>[Role]</span>
                            <span>[Description]</span>
                        </div>
                    </div>
                </Col>
                <Col>
                    <h2>TRAITORS</h2>
                    <div className='d-flex flex-row'>
                        <img src='/enemy1.png' />
                        <div className="d-flex flex-column justify-content-center align-content-center">
                            <span>[Name]</span>
                            <span>[Role]</span>
                            <span>[Description]</span>
                        </div>
                    </div>
                    <div className='d-flex flex-row'>
                        <img src='/enemy2.png' />
                        <div className="d-flex flex-column justify-content-center align-content-center">
                            <span>[Name]</span>
                            <span>[Role]</span>
                            <span>[Description]</span>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
export default FinalResult