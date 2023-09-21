// external import
import { Link } from "react-router-dom"

// internal import 
import FormArea from "../components/FormArea"

const Admin = () => {
    return (
        <div className="Admin container d-flex align-items-center flex-column">
            <FormArea/>
            <p className="p-2 mt-3 rounded-2 text-bg-secondary"><Link className=" text-light" to='/'>Go Back</Link></p>
        </div>
    )
}
export default Admin