import * as React from 'react';

//app components
import ImgMediaCard from "../components/ImgMediaCard";
import Header from "../components/Header";

export default function ProjectList(props) {
    return (
      <div className="center-align">
            <Header data={props.data.header}/>
        <article className="container">
          <div className="row">

            <div className="twelve columns collapsed">
              <div className="bgrid-quarters s-bgrid-thirds cf">
                    { props.data.projects.map((project, index) => {
                        return (
                            <ImgMediaCard project={project} key={index}/>
                        )
                    })}
              </div>
            </div>
          </div>    
        </article>
      </div>    
  );
}
