import React from 'react';
import Design from './Design';
import Pdm from './Pdm';
import "./skills.css";

const Skills = () => {
  return (
    <section className="skills section" id ="skills">
        <h2 className="section_title">Skills</h2>
            <span className="section_subtitle">My  technical level</span>

            <div className="skills_container container grid">
                <Design />
                <Pdm />
            </div>
    </section>
  )
}

export default Skills