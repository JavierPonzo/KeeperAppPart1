import React from "react";

function Footer() {
  const currentDate = new Date().getFullYear();

  return <footer> Copyright {currentDate}</footer>;
}
export default Footer;
