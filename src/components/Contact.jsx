import '../css/Contact.css'
const Contact = () => {
  return (
    <section className="contact-container" id='contact'>
      <h2>Contact</h2>
      <div className="contact-area">
        <div className="contact-content">

          <div className="contact-card">
            <form action="">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
              <button type="submit">Send</button>
            </form>
          </div>

          <div className="contact-info">
            <h2>Contact Info</h2>
            <ul>
              <li><a href=":mailto">email: victoroduor723@gmail.com</a></li>
              <li><a href="phone">WhatasApp: +254759335491</a></li>
              <li><a href=":mailto">phone: 0759335491</a></li>
              <li><a href=":mailto"></a></li>
            </ul>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Contact