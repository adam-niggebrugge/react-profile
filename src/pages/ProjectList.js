import React from "react";
//app components
import ImgMediaCard from "../components/ImgMediaCard";
import Header from "../components/Header";

export default function ProjectList(props) {
    return (
      <div>
            <Header data={props.data.header}/>
                { props.data.projects.map((project, index) => {
                  return (
                      <ImgMediaCard project={project} key={index}/>
                  )
           })}
      </div>    
  );
}
