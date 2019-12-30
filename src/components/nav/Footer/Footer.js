import React from 'react';

export default function Footer() {
  return (
    <footer className="nk-footer-bar section section-s tc-light">
      <div className="container container-xxl">
        <div className="row gutter-vr-10px">
          <div className="col-lg-6 order-lg-last text-lg-right">
            <ul className="footer-nav">
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of sales</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-6">
            <div className="copyright-text copyright-text-s2">
              Copyright © 2019 ICO. Handcrafted by <a href="#">iO</a>.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
