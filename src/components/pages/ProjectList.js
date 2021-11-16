import React from 'react';
import portfolio from '../../portfolio'
import ImgMediaCard from '../ImgMediaCard';

export default function ProjectList() {
    return (
      <div>
            <h1>This is my Portfolio</h1>
                { portfolio.map((project, index) => {
                  return (
                      <ImgMediaCard project={project} key={index}/>
                  )
           })}
      </div>    
  );
}
