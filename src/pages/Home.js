import React, { useState } from 'react';
import Header from "../components/Header";

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
