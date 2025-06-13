import '../css/contact.css'
const Contact = () => {
  return (
    <section className="contact-container">
        <h2>Contact</h2>
        <div className="contact-content">
            <div className="contact-card">
                <form action="">
                  <input type="text" placeholder="Name" />
                  <input type="email" placeholder="Email" />
                  <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
                  <button type="submit">Send</button>
                </form>
            </div>
        </div>  
    </section>
  )
}

export default Contact