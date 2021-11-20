import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

//app components
import ImgMediaCard from "../components/ImgMediaCard";
import Header from "../components/Header";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



export default function ProjectList(props) {
    return (
      <div className="center-align">
            <Header data={props.data.header}/>
          <article className="container">
            <Box sx={{ flexGrow: 2 }}>
              <Grid container spacing={2}>
                <Grid item xs={8} md={6} lg={4}>
                    { props.data.projects.map((project, index) => {
                        return (
                          <Item>
                            <ImgMediaCard project={project} key={index}/>
                          </Item>
                        )
                    })}
                </Grid>
              </Grid>
            </Box>
          </article>
      </div>    
  );
}
