function Footer(){
    return (
        <footer className="bg-dark text-center text-white">
            <div className="container d-flex flex-column justify-content-around align-item-center">
                <a className="hover link-info text-decoration-none text-white gap-3 h3 py-3" href="mailto:surendar.db18@gmail.com" target='_blank' rel="noreferrer">mailto: Surendar.db18@gmail.com</a>
                <a className="hover link-info text-decoration-none text-white h3 py-3" href="tel:+919176768096"  target='_blank' rel="noreferrer">+91 9176768096</a>
            </div>
            <div className="embed-responsive embed-responsive-21by9">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d835.3269742105026!2d80.13883182916855!3d12.96754079942868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525ffc03bc983b%3A0xf8ef7010fbdee13a!2s11%2C%20Thangaiah%20St%2C%20Gandhi%20Nagar%2C%20Nagalkeni%2C%20Pallavaram%2C%20Chennai%2C%20Tamil%20Nadu%20600044!5e1!3m2!1sen!2sin!4v1655224786401!5m2!1sen!2sin" className="embed-responsive-item" width="280" height="250" title="myLocation"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

            </div>

        </footer>
    )
}
export default Footer