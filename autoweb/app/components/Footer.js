export default function Footer() {
  return (
    <footer className="footer">
      <div className="working-hours">
        <h4>Darb. laiks</h4>
        <ul>
          <li>
            <span>p.</span> <span>5 - 22</span>
          </li>
          <li>
            <span>o.</span> <span>5 - 22</span>
          </li>
          <li>
            <span>t.</span> <span>5 - 22</span>
          </li>
          <li>
            <span>c.</span> <span>5 - 22</span>
          </li>
          <li>
            <span>pk.</span> <span>4 - 23</span>
          </li>
          <li>
            <span>s.</span> <span>3 - 23</span>
          </li>
          <li>
            <span>sv.</span> <span>1 - 24</span>
          </li>
        </ul>
      </div>
      <div className="contact-info">
        <h4>Kā mūs atrast?</h4>
        <ul>
          <li>Tele. +371 66 666 666</li>
          <li>Loc. Ziediņu bulvāris 53</li>
          <li>LV-6232</li>
          <li>autoweb@inbox.lv</li>
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
