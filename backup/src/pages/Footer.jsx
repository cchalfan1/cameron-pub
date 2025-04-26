import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="lp-footer">
      <p>
        © {new Date().getFullYear()} Afternoon Products, LLC. All rights
        reserved.
      </p>
      <Link to="/tos" className="underline hover:text-blue-300">
        Terms of Service
      </Link>
      &nbsp;|&nbsp;
      <Link to="/support" className="underline hover:text-blue-300">
        Support
      </Link>
    </footer>
  );
}

export default Footer;
