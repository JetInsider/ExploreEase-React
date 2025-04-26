import React from 'react';
import styles from './Flight.module.css';
import Navbar from '../../components/navbar/navbar';

function Flight() {
  return (
    <div className={styles['flight-page']}>
      <Navbar />

      <section className={styles.hero}>
        <div className={styles.container}>
          <h2>So, where are you going next?</h2>
          <div className={styles['search-box']}>
            <div className={styles['search-fields']}>
              <div className={styles.field}>
                {/* <h3>From</h3> */}
                <label htmlFor="from">From</label>
                <input type="text" id="from" placeholder="India (IN)" />
              </div>
              <div className={styles.field}>
                {/* <h3>To</h3> */}
                <label htmlFor="to">To</label>
                <input type="text" id="to" placeholder="Country, city or airport" />
              </div>
            </div>

            <div className={styles['search-fields']}>
              <div className={styles.field}>
                <label htmlFor="depart">Depart</label>
                <input type="date" id="depart" />
              </div>
              <div className={styles.field}>
                <label htmlFor="return">Return</label>
                <input type="date" id="return" />
              </div>
              <div className={styles.field}>
                <label htmlFor="passengers">Travellers and cabin class</label>
                <input type="text" id="passengers" defaultValue="1 adult, Economy" />
              </div>
              <button type="submit" className={styles['search-button']}>Search</button>
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.footer}></footer>
    </div>
  );
}

export default Flight;