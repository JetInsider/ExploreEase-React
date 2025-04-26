import React from 'react';
import Navbar from '../../components/navbar/navbar';
import styles from './Hotel.module.css';

const Hotel = () => {
  return (
    <div>
        <Navbar />

      <section className={styles.hero}>
        <div className={styles.container}>
          <h2>Find your perfect stay</h2>
          <div className={styles['search-box']}>
            <div className={styles['search-fields']}>
              <div className={styles.field}>
                <h3>Destination</h3>
                <label htmlFor="destination">Where are you going?</label>
                <input type="text" id="destination" placeholder="City, hotel, or landmark" />
              </div>
            </div>

            <div className={styles['search-fields']}>
              <div className={styles.field}>
                <label htmlFor="checkin">Check-in</label>
                <input type="date" id="checkin" />
              </div>
              <div className={styles.field}>
                <label htmlFor="checkout">Check-out</label>
                <input type="date" id="checkout" />
              </div>
              <div className={styles.field}>
                <label htmlFor="guests">Guests</label>
                <input type="text" id="guests" defaultValue="1 room, 2 adults" />
              </div>
              <button type="submit" className={styles['search-button']}>Search</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hotel;
