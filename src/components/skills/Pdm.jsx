import React from 'react'

const Pdm = () => {
  return (
    <div className="skills_content">
        <h3 className="skills_title">Product Manager</h3>

        <div className="skills_box">
            <div className="skills_group">
                <div className="skills_data">
                    <i className="bx bx-badge-check"></i>
                    <div>
                        <h3 className="skills_name">OMO Product</h3>
                        <span className="skills_level">Advanced</span>
                    </div>
                </div>
                <div className="skills_data">
                    <i className="bx bx-badge-check"></i>
                    <div>
                        <h3 className="skills_name">Mobile App</h3>
                        <span className="skills_level">Basic</span>
                    </div>
                </div>
            </div>
            <div className="skills_group">
                <div className="skills_data">
                    <i className="bx bx-badge-check"></i>
                    <div>
                        <h3 className="skills_name">Web Service</h3>
                        <span className="skills_level">Basic</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Pdm