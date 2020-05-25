import React, { Component } from 'react'
import './portfolio.css'
import SideNav from './SideNav'
import MainWindow from './MainWindow'
class Body extends Component {

    render() {
        return (
            <div className = 'Body'>
                <SideNav/>
                <MainWindow/>
            </div>
        )
    }
}

export default Body
