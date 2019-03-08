import React from 'react';
import styles from './Copyright.module.scss';

const Copyright = ({ copyright }) => (
  <div className={styles['copyright']}>
  <a href='https://kskfdev.netlify.com/' target='_blank'>kskfdev.netlify.com</a><br/>
    {copyright}
  </div>
);

export default Copyright;