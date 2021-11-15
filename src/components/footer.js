import  MailIcon from '@mui/icons-material/Mail';
import 'materialize-css';
import './footer.css';

function Footer() {
  return (
    <footer className="banner-purple">
        <p className="flow-text">Developed by NAI Copyright 2021
        Background Images from <a target="_blank" rel="noreferrer noopener" href="https://www.svgbackgrounds.com/">SVGBackgrounds.com</a>
        </p>
        <ul className="light list-inline">
        <div className="banner-green"></div>
        <li>
            <p>Check me out on GitHub
            <a target="_blank" rel="noreferrer noopener" href="https://github.com/adam-niggebrugge">
            <img alt="github logo" className="custom-image" src="/images/github.png" />
            </a>
            </p> 
        </li>
        <li>
            <p>Check me out on LinkedIn
            <a target="_blank" rel="noreferrer noopener" href="http://www.linkedin.com/in/adam-niggebrugge">
                <img alt="linkedIn logo" className="custom-image" src="/images/linkedIN.png"/>
            </a>
            </p> 
        </li>
        <li>
            <p>Send Feedback
            <a href = "mailto:adam.niggebrugge@gmail.com?subject = Feedback&body = Message">
                <MailIcon data-testid="MailIcon"></MailIcon> 
            </a>
            </p>
        </li>
        </ul>
    </footer>
    );
}
    
export default Footer;