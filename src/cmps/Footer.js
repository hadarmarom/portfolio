import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {

    return (
        <div className="footer-container">
            <footer className="text-center text-white">
                <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    <div className="contact-details">
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=hadarmarom1@gmail.com"
                        target="_blank" rel="noreferrer">hadarmarom1@gmail.com</a>
                        <p>+972-(0)58-644-2004</p>
                    </div>
                    <div>
                        <a
                            className="btn btn-primary m-1"
                            style={{ backgroundColor: '#0082ca' }}
                            href="https://www.linkedin.com/in/hadar-marom-18611a20b"
                            target="_blank" rel="noreferrer"
                            role="button"
                        ><FontAwesomeIcon icon={faLinkedinIn} /></a>
                        <a
                            className="btn btn-primary m-1"
                            style={{ backgroundColor: '#333333' }}
                            href="https://github.com/hadarmarom"
                            target="_blank" rel="noreferrer"
                            role="button"
                        ><FontAwesomeIcon icon={faGithub} /></a>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer