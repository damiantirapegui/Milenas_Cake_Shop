import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

export function Footer() {
  return (
    <footer>
      <div className="information">
        <h1>Contact</h1>
        <p>Epost: Milena@gmail.com</p>
        <span></span>
        <p>
          Telefon:
          <br />
          070-000 00 00
        </p>
      </div>
      <div className="social-media">
        <a href="/about" className="about">
          About
        </a>
        <a href="#">
          <FontAwesomeIcon
            icon={faInstagram}
            style={{ color: "#c13584", fontSize: "30px" }}
          />
        </a>
      </div>
    </footer>
  );
}
