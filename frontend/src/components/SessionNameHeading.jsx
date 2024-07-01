// external import
import { useSelector } from "react-redux";

const SessionNameHeading = () => {

    const session_name = useSelector(state => state.session_info.data.sessionName);

    return (
        <div className='SessionNameHeading w-100 p-4 position-absolute d-flex justify-content-center align-items-center'>
            <h1 style={{
                "textShadow": "5px 5px 5px black"
            }}>{session_name}</h1>
        </div>
    );
};

export default SessionNameHeading;