import React from "react";

function Footer() {
  const currentDate = new Date().getFullYear();

  return <p> Copyright {currentDate}</p>;
}
export default Footer;
