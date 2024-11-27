export default function Footer() {
  return (
    <footer className="footer">
      <div className="working-hours">
        <h4>Darba laiks</h4>
        <ul>
          <li>
            <span className="day">Pirmdiena</span>
            <span className="time">5 - 22</span>
          </li>
          <li>
            <span className="day">Otrdiena</span>
            <span className="time">5 - 22</span>
          </li>
          <li>
            <span className="day">Trešdiena</span>
            <span className="time">5 - 22</span>
          </li>
          <li>
            <span className="day">Ceturtdiena</span>
            <span className="time">5 - 22</span>
          </li>
          <li>
            <span className="day">Piektdiena</span>
            <span className="time">4 - 23</span>
          </li>
          <li className="weekend">
            <span className="day">Sestdiena</span>
            <span className="time">3 - 23</span>
          </li>
          <li className="weekend">
            <span className="day">Svētdiena</span>
            <span className="time">---</span>
          </li>
        </ul>
      </div>
      <div className="contact-info">
        <h4>Kā mūs atrast?</h4>
        <ul>
          <li>
            <i className="contact-label">Tel:</i> +371 66 666 666
          </li>
          <li>
            <i className="contact-label">Adrese:</i> Ziediņu bulvāris 53
          </li>
          <li>
            <i className="contact-label">Pasta ind:</i> LV-6232
          </li>
          <li>
            <i className="contact-label">E-pasts:</i> autoweb@inbox.lv
          </li>
        </ul>
      </div>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2175.3889!2d24.1234567!3d56.9876543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTbCsDU5JzE1LjYiTiAyNMKwMDcnMjQuNCJF!5e0!3m2!1sen!2slv!4v1234567890"
          width="100%"
          height="250"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </footer>
  );
}
