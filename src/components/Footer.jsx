import React from "react";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer box-card">
          <p>
            copyright
            <span>&copy; {new Date().getFullYear()}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
