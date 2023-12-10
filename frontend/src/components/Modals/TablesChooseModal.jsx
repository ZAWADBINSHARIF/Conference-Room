// external import
import { Modal } from "react-bootstrap";
import { useSelector } from "react-redux";

// internal import
import TableListItem from "../TableListItem";

const TablesChooseModal = (props) => {

    const allTables = useSelector(state => state.table_img.data);

    return (
        <div className="TablesChooseModal">
            <Modal
                {...props}
                size="xl"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Choose a table
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="tablesContainer">
                        {allTables.map(item => (
                            <TableListItem
                                key={item.id}
                                id={item.id}
                                imgFilename={item.filename}
                                hideTheTableModal={props.onHide}
                            />
                        ))}
                    </div>
                </Modal.Body>
                <Modal.Footer />
            </Modal>
        </div>
    );
};
export default TablesChooseModal;