import React from 'react'

const Footer = () => {
    return (
        <footer>
          <small>&copy; {new Date().getFullYear()}. by traveller.com.</small>
          <p>
            Version <b>1.0</b>
          </p>
        </footer>
      );
}

export default Footer