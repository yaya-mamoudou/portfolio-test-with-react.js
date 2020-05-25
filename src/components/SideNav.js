import React, { Component } from 'react'
import NavMenu from '../NavMenu'
import ProfilePicture from './ProfilePicture'

class SideNav extends Component {
    
    render() {
        return (
            <div className = 'Side_nav'>
                <ProfilePicture/>
                <NavMenu/>
            </div>
        )
    }
}

export default SideNav
