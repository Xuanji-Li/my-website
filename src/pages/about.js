import React from 'react';
import Layout from '@theme/Layout';
import styles from "./styles.module.css";
import './about.css';
import Experience from "../components/Experience.js"

function Hello() {
  return (
    <Layout title="Hello">
      <div>

        <h1 className='underlineTitle'>About Me</h1>
        <h2 className='bodyAbout'>Hello,</h2>
        <p className="bodyAboutDetail">I am Manny, a passionate full stack software developer, <br />
        I'm from China and currently graduated from University of Adelaide with a Computing and Innovation degree.<br />
        </p>
        <p className="bodyAboutDetail">
          Im Strongly interested in Full Stack Software Engineer, Highly effective at developing and standardizing designs according to company brand and objectives. Knowledgeable Front End Developer adept at creating successful websites that meet customer needs. Specializing in collaborating with customers to gather requirements, produce plans and improve designs for usability and functionality.
        </p>

        <div className='experience-container'>
          <h1 className="experience-title">Experience</h1>
          <Experience>
            title="universit of adelaide"
          </Experience>
        </div>

      
      </div>
    </Layout>
  );
}

export default Hello;