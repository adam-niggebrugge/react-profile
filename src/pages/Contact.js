import * as React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Title from "../components/core/Title";
import EmailContact from "../components/Forms/EmailContact";
import fillerPic from "../images/mail.png";

const Contact = () => {

  return (
    <>
    <section className="container shadowed">
      <Box sx={{ flexGrow: 2}} className="nine columns">
      <Grid container spacing={2}>
        <Grid item xs={12} className="text-center">
            <Title>
              I am taking new projects. 
              If you would like to chat, please get in touch.
            </Title>
        </Grid>
        <Grid item xs={7}>
          <EmailContact />
        </Grid>
        <Grid item xs={5}>
          <img alt="email" className="responsive-img" src={fillerPic} />
        </Grid>
      </Grid>
      </Box>
  </section>
</>
  );
};

export default Contact