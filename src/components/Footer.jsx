import { useEffect, useState } from "react";

function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="flex flex-col items-center justify-center px-4 py-10">
      <p>© {year} Made with &#9829;	 by <a href="https://github.com/mmadwn/mmadwn-dev" target="_blank" rel="noopener noreferrer">mmadwn.dev</a>. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
