import React from 'react';
import './Footer.css';
import { getFullYear, getFooterCopy } from '../utils/utils';

function Footer() {
  return (
    <footer className="App-footer">
      <p>
        {getFooterCopy()} - {getFullYear()}
      </p>
    </footer>
  );
}

export default Footer;
