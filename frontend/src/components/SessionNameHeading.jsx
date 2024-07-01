// external import
import { useSelector } from "react-redux";

// internal import

const SessionNameHeading = () => {

    const session_name = useSelector(state => state.session_info.data.sessionName);

    console.log(session_name);

    return (
        <div className='SessionNameHeading w-100 p-4 position-absolute d-flex justify-content-center align-items-center'>
            <h1 style={{
                "text-shadow": "5px 5px 5px black"
            }}>{session_name}</h1>
        </div>
    );
};

export default SessionNameHeading;