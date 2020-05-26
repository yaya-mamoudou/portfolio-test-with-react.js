import React, { Component } from 'react'

class NavMenu extends Component {

    render() {
        return (
            <div>
                <ul className="nav_items">
                    <li ><a href="#one">ABOUT</a></li>
                    <li><a href="#two">EXPERIENCE</a></li>
                    <li><a href="#three">EDUCATION</a></li>
                    <li><a href="#four">SKILLS</a></li>
                </ul>
            </div>
        )
    }
}

export default NavMenu
