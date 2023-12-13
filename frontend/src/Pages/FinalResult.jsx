// external import
import { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { format } from 'date-fns';

// internal import
import '../result.scss';

const FinalResult = () => {

    const Room = useSelector(state => state.draggable_img);
    const PeanutGallery = useSelector(state => state.peanut_gallery_img);
    const Outside = useSelector(state => state.removed_draggable_img);
    const SessionInfo = useSelector(state => state.session_info.data);
    const startTime = SessionInfo.startGameTime.split(":");
    const stopTime = SessionInfo.stopGameTime.split(":");
    // const gameTime = {
    //     hour: Math.abs(format(SessionInfo.stopGameTime, 'HH') - format(SessionInfo.startGameTime, 'HH')),
    //     minute: Math.abs(format(SessionInfo.stopGameTime, 'mm') - format(SessionInfo.startGameTime, 'mm')),
    //     second: Math.abs(format(SessionInfo.stopGameTime, 'SS') - format(SessionInfo.startGameTime, 'SS'))
    // };
    const gameTime = {
        hour: Math.abs(parseInt(startTime[0]) - parseInt(stopTime[0])),
        minute: Math.abs(parseInt(startTime[1]) - parseInt(stopTime[1])),
        second: Math.abs(parseInt(startTime[2]) - parseInt(stopTime[2]))
    };

    function showPrintPDF() {
        window.print();
    }

    const apiPath = import.meta.env.VITE_API; // ! it will be removed when hosting

    useEffect(() => {
        window.onload = showPrintPDF();
    });
    return (
        <div className="FinalResult">
            <h1 className="text-center">Result</h1>
            <br />
            <Row>
                <Col className='text-center'>
                    <h5>
                        Session name: {SessionInfo?.sessionName}
                    </h5>
                    <h6>Date and time: {SessionInfo?.date}  [{SessionInfo.time}]</h6>
                    <h6>Game play time: {gameTime.hour > 0 ? `${gameTime.hour}:` : ""}{Math.abs(parseInt(startTime[1]) - parseInt(stopTime[1]))}m:{Math.abs(parseInt(startTime[2]) - parseInt(stopTime[2]))}s</h6>
                </Col>
            </Row>
            <br />
            <Row>
                <Col>
                    <h2>IN ROOM</h2>
                    {Room.map(item => (
                        <div className='d-flex flex-row' key={item.draggable_id}>
                            <img src={`${apiPath}/${item.folder_name}/${item.src}`} /> {/* // ! it will be removed when hosting */}
                            <div className="d-flex flex-column justify-content-center align-content-center">
                                <span>{item.name}</span>
                                <span>{item.role}</span>
                                <span>{item.description}</span>
                            </div>
                        </div>
                    ))}
                </Col>
                <Col>
                    <h2>PEANUT GALLERY</h2>
                    {PeanutGallery.map(item => (
                        <div className='d-flex flex-row' key={item.draggable_id}>
                            <img src={`${apiPath}/${item.folder_name}/${item.src}`} /> {/* // ! it will be removed when hosting */}
                            <div className="d-flex flex-column justify-content-center align-content-center">
                                <span>{item.name}</span>
                                <span>{item.role}</span>
                                <span>{item.description}</span>
                            </div>
                        </div>
                    ))}
                </Col>
                <Col md={12}>
                    <h2>OUTSIDE</h2>
                    {Outside.map(item => (
                        <div className='d-flex flex-row' key={item.draggable_id}>
                            <img src={`${apiPath}/${item.folder_name}/${item.src}`} /> {/* // ! it will be removed when hosting */}
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
    );
};
export default FinalResult;