import React from "react";
import { Box, Paper, Typography } from "@material-ui/core";
import styled from "styled-components";
function About() {
  return (
    <>
      <Styled.AboutBOX>
        <Typography
          style={{
            padding: "1em 0 0 0.8em",
            fontWeight: "600",
            fontSize: "1.5em",
          }}
        >
          About Me
        </Typography>

        <Box
          style={{
            padding: "1.4em 1em",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <img
            src={
              "https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720__480.jpg"
            }
            alt="img"
            height="250px"
            width="350px"
          />
          <Typography style={{ padding: "0 2em", fontSize: "1.3em" }}>
            Hi There, I’m Chandra Mouli and I am Front-End Developer. It's been
            6 months . I have done my graduation in B.E Computer Science.
            <br />
            <br /> I'm also learning Back-End Development and looking forward to
            be a Full Stack Web Developer..
            <br />
            <br />
            My Skill Set : HTML5, CSS3, JavaScript,React js,figma,UX/UI .
            <br />
          </Typography>
        </Box>
      </Styled.AboutBOX>
    </>
  );
}

export default About;
const Styled = {
  AboutBOX: styled(Box)`
    width: 95%;
    min-width:100%;
    background: white;
    height: auto;
    margin: 2em auto;
  `,
};
