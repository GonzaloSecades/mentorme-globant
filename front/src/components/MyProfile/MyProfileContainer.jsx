import React, { useEffect, useState } from "react"
import {useSelector} from 'react-redux'
import axios from 'axios'
import MyProfile from './MyProfile'


export default ()=>{
    const currentUser = useSelector((state)=>state.currentUser)
    console.log(currentUser)
    return(
        <section>

            <MyProfile
            
            user={currentUser}

            />                 
        </section>
    )
}