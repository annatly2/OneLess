import React from 'react';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './Footer.css';

// Import Images
import bg from '../../header-bk.png';

export function Footer() {
  return (
    <div style={{ background: `#FFF url(${bg}) center` }} className={styles.footer}>
      <p>&copy; 2018 &middot; OneLess</p>
      <p>Created by Anna, Elizabeth, Erandy, and Lucy at the Women Who Code San Diego International Women's Day Hackathon</p>
    </div>
  );
}

export default Footer;
