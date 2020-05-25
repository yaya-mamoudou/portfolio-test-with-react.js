import React, { Component } from 'react'

class ProfilePicture extends Component {

    render() {
        return (
            <div className = 'Picture_part'>
                <div className = 'Picture_round'>
                    <img  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Profile"/>
                </div>
            </div>
        )
    }
}

export default ProfilePicture
