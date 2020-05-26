import React, { Component } from 'react'

class Education extends Component {

    render() {
        return (
            <div id = 'three' className = 'education_tab'>
                <h2>EDUCATION</h2>
                <div className = 'block'>
                    <div className='text_area'>
                        <h3>UNIVERSITY OF COLORADO BOULDER</h3>
                        <h4>BACHELOR OF SCIENCE</h4>
                        <p>
                        Computer Science - Web Development Track <br/> GPA: 3.23
                        </p>
                    </div>
                    <span className="date">August 2006 - May 2010</span>
                </div>

                <div className = 'block'>
                    <div className='text_area'>
                        <h3>JAMES BUCHANAN HIGH SCHOOL</h3>
                        <h4>TECHNOLOGY MAGNET PROGRAM</h4>
                        <p>
                        GPA: 3.56
                        </p>
                    </div>
                    <span className="date">August 2002 - May 2006</span>
                </div>
            </div>
        )
    }
}

export default Education
