import React from 'react'
import { Redirect } from 'react-router-dom'

function Profile({ authorized }){
    if (!authorized){
        return <Redirect to="/login">
    }

    return <div>Admin, welcome!</div>
}

export default Profile;