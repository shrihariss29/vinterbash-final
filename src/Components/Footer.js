import React, { useEffect } from 'react';

function Footer() {
  useEffect(() => {
    const mail = document.getElementById('mail');
    if (!mail) return;

    const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (isMobile) {
      mail.href = 'mailto:vinterbash2024@gmail.com?';
    } else {
      mail.href = 'https://mail.google.com/mail/?view=cm&fs=1&to=vinterbash2024@gmail.com';
      mail.target = '_blank';
    }
  }, []);

  return (
    <footer>
      <div className="wholefooter">
        <div className="contentfooter">
          <div>
            <h1 className="footername">VINTERBASH</h1>
            <h3 className="footertheme">CATCH-UP ! RISE ! TAKE-OVER</h3>
            <p>July 26th, 2025</p>
          </div>
          <div className="linkfooter">
            <div className="socialmedia">
              <a id="mail"><img src="/footer2.jpg" alt="Gmail" /></a>
              <a href="https://www.instagram.com/vageeshaosa/" target="_blank" rel="noreferrer"><img src="/footer1.jpg" alt="Instagram" /></a>
              <a href="https://maps.app.goo.gl/WPRcauXJaa4rzhoq8" target="_blank" rel="noreferrer"><img src="/footer3.jpg" alt="Maps" /></a>
              <a href="https://srivageesha.com/" target="_blank" rel="noreferrer"><img src="/footer4.jpg" alt="School Site" /></a>
              <a id="playstore" href="https://play.google.com/store/apps/details?id=com.mycompany.vinterbash" target="_blank" rel="noreferrer"><img src="/footer5.png" alt="Play Store" /></a>
            </div>
            <img src="/Indian_govt.jpg" alt="Indian Government Logo" />
          </div>
        </div>
        <hr />
        <div className="anchor">
          <a href="/">Home</a>
          <a href="/Events">Events</a>
          <a href="/Contact">Contact</a>
          <a href="/Schedule">Schedule</a>
        </div>
        <h2 className="devby">Developed by Old Student's Association of Sri Vageesha Vidhyashram Ⓒ</h2>
      </div>
    </footer>
  );
}

export default Footer;
