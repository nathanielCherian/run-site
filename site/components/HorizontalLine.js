import React from 'react';
import styles from '../styles/HorizontalLine.module.css';

const HorizontalLine = ({ position }) => {
    return (
      <div className={styles.container}>
        <div className={styles.line}>
          {Array.from({ length: 10 }).map((_, index) => (
            <div
              key={index}
              className={`${styles.marker} ${
                position === index / 10 ? styles.active : ''
              }`}
              style={{ left: `${(index * 10)}%` }}
            />
          ))}
          <div
            className={styles.icon}
            style={{ left: `${position * 100}%` }}
          >
            <img src='/runner.png' className={styles.iconImg}></img>
          </div>
        </div>
      </div>
    );
  };
  
  export default HorizontalLine;