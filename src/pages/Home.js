import React from 'react';
import Header from "../components/Header";

export default function Home(props) {

  return (
  <>
    <Header data={props.data.header}/>
  </>
  );
}
