import React from "react";
import { useForm } from "react-hook-form";

import Button from '@mui/material/Button';
import "materialize-css/dist/css/materialize.min.css";
import Grid from "@mui/material/Grid";



function EmailContact () {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
      } = useForm();
      
      const onSubmit = async (data) => {
        const { name, email, subject, message } = data;
        
        console.log("Name: ", name);
        console.log("Email: ", email);
        console.log("Subject: ", subject);
        console.log("Message: ", message);
        reset({});
      };
    return (
    <>
        <Grid item xs={12}>
          <form id="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
                {/* Row 1 of form */}
                <Grid item xs={12}>
                  <Grid item md={6} xs={12}>
                    <input
                      type="text"
                      name="name"
                      {...register("name", {
                        required: { value: true, message: "Please enter your name" },
                        maxLength: {
                          value: 30,
                          message: "Please use 30 characters or less"
                        }
                      })}
                      className="form-control formInput"
                      placeholder="Name"
                    ></input>
                    {errors.name && <span className="errorMessage">{errors.name.message}</span>}
                  </Grid>
                  <Grid item xs={12}>
                    <input
                      type="email"
                      name="email"
                      {...register("email", {
                        required: true,
                        pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                      })}
                      className="form-control formInput"
                      placeholder="Email address"
                    ></input>
                    {errors.email && (
                      <span className="errorMessage">Please enter a valid email address</span>
                    )}
                  </Grid>
                </Grid>
                {/* Row 2 of form */}
                <Grid item xs={12}>
                  <Grid item xs={12}>
                    <input
                      type="text"
                      name="subject"
                      {...register("subject", {
                        required: { value: true, message: "Please enter a subject" },
                        maxLength: {
                          value: 75,
                          message: "Subject cannot exceed 75 characters"
                        }
                      })}
                      className="form-control formInput"
                      placeholder="Subject"
                    ></input>
                    {errors.subject && (
                      <span className="errorMessage">{errors.subject.message}</span>
                    )}
                  </Grid>
                </Grid>
                {/* Row 3 of form */}
                <Grid className="row formRow">
                  <Grid item xs={12} sx={{gridRow: 'span 4'}}>
                    <textarea
                      name="message"
                      {...register("message", {
                        required: true
                      })}
                      className="form-control formInput"
                      placeholder="Message"
                    ></textarea>
                    {errors.message && <span className="errorMessage">Please enter a message</span>}
                  </Grid>
                </Grid>
                <Button variant="contained" type="submit">
                  Submit
                </Button>
            </form>
        </Grid>
    </>
   )
}

export default EmailContact;

