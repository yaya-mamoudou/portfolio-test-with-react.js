import React, { Component } from 'react'
import About from './About'
import Experience from './Experience'
import Education from './Education'
import Skills from './Skills'

class MainWindow extends Component {

    render() {
        return (
            <div className = 'main_window'>
                <About/>
                <Experience/>
                <Education/>
                <Skills/>
                
            </div>
        )
    }
}

export default MainWindow
