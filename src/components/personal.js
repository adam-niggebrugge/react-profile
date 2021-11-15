import 'materialize-css/dist/css/materialize.min.css';
import './header.css';
import profilePic from '../images/ProfilePic.jpg';
import { Parallax } from 'react-materialize';

function Personal() {
  return (

<div className="row">
          <div className="col s12">
            <h2 className="header center offset-s2 page-title">Hello! I am <span className="header-name">Adam Niggebrugge</span>
            </h2>
          </div>
          <div className="col s12">
            <div id="index-banner" className="parallax-container">
              <div className="section no-pad-bot">
                <div className="container">
                    <div className="row right-aligned">
                      <h5  className="col offset-s6 s6 banner-red">A Full Stack Web Developer</h5>    
                    </div>
                </div>
                <Parallax
                  image={<img alt="developer" src={ profilePic } />}
                  options={{
                    responsiveThreshold: 2
                  }}
                />
              </div>
            </div>
          </div>
        </div>
    );
}

export default Personal;
