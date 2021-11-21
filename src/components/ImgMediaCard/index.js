import * as React from "react";

import "materialize-css/dist/css/materialize.min.css";

import LiveLink from "../LiveLink";
import GitLink from "../GitLink";

export default function ImgMediaCard(props) {
  return (
    <section className="card medium hoverable">
      <figure className="card-image waves-effect waves-block waves-light">
        <img className="activator" src={props.project.imagePath} alt={props.project.altImageText} />
      </figure>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">{props.project.title}<i className="material-icons right">more_vert</i></span>
        <LiveLink link={props.project.siteLink} />
      </div>
      <div className="card-reveal">
        <span className="card-title grey-text text-darken-4">{props.project.title}<i className="material-icons right">close</i></span>
        <p>{props.project.body}.</p>
        <div className="offset-s6">
          <p className="flow-text valign-wrapper">
            Learn More 
            <GitLink link={props.project.gitLink} />
             Visit Github
          </p>
        </div>
      </div>
    </section>
  );
}
