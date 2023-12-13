import React from 'react'
import {useSelector} from 'react-redux'
import {Outlet, Navigate} from 'react-router-dom'

const ProtectedRoute = () => {

    const sessionName = useSelector(state=> state.session_info.data.sessionName)

    return sessionName? <Outlet/> : <Navigate to={'/'}/>
}

export default ProtectedRoute