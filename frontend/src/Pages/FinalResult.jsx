// external import
import { useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'

// internal import
import '../result.scss'

const FinalResult = () => {

    const All_Allies = useSelector(state => state.draggable_img)
    const All_Traitors = useSelector(state => state.removed_draggable_img)

    function showPrintPDF() {
        window.print()
    }

    const apiPath = import.meta.env.VITE_API

    useEffect(() => {
        console.log('Load')
        window.onload = showPrintPDF()
    })
    return (
        <div className="FinalResult">
            <h1 className="text-center">Result</h1>
            <br />
            <Row>
                <Col>
                    <h2>ALLIES</h2>
                    {All_Allies.map(item=> (
                    <div className='d-flex flex-row' key={item.draggable_id}>
                            <img src={`${apiPath}/${item.folder_name}/${item.src}`} />
                        <div className="d-flex flex-column justify-content-center align-content-center">
                                <span>{ item.name}</span>
                                <span>{item.role}</span>
                                <span>{ item.description}</span>
                        </div>
                    </div>
                    ))}
                </Col>
                <Col>
                    <h2>TRAITORS</h2>
                    {All_Traitors.map(item => (
                        <div className='d-flex flex-row' key={item.draggable_id}>
                            <img src={`${apiPath}/${item.folder_name}/${item.src}`} />
                            <div className="d-flex flex-column justify-content-center align-content-center">
                                <span>{item.name}</span>
                                <span>{item.role}</span>
                                <span>{item.description}</span>
                            </div>
                        </div>
                    ))}
                </Col>
            </Row>
        </div>
    )
}
export default FinalResult