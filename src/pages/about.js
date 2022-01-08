import React from 'react';
import Layout from '@theme/Layout';
import styles from "./styles.module.css";

function Hello() {
  return (
    <Layout title="Hello">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          // height: '50vh',
          fontSize: '20px',
        }}>


        <h2 className={styles.underlineTitle}>About Me</h2>
        
        <div className={styles.bodyAbout}>
          hello
        </div>


      </div>
    </Layout>
  );
}

export default Hello;