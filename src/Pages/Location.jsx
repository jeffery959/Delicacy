import "./Location.css"
import Footer from '../Components/Footer'
const Location = () => {
  return (
    <>
    <div className='Location '>

        <h3>Location</h3>


  <iframe className='Map' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d96761.2994208087!2d-74.11069076246204!3d40.722625847942425!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25153abefda67%3A0x8971e805835b3a5b!2sFlyNYON%20Helicopter%20Tours!5e0!3m2!1sen!2sus!4v1690161390910!5m2!1sen!2sus"   allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
    
    <Footer/>
    </>
  )
}

export default Location