import React from 'react';
import Header from "../components/Header";
import cosmos from "../images/cosmos.png"
export default function Home(props) {

  return (
    <>
    <Header data={props.data.header}/>

    
    <div className="container">
      <h1>{props.data.greeting}</h1>
      <p>
        {props.data.body}
      </p>
    </div>
  </>
  );
}
