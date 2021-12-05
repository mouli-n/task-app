import React from "react";
import { Box, Typography } from "@material-ui/core";
import styled from "styled-components";
function Project() {
  let dateCurr = new Date();
  let projects = [
    {
      name: "Amazon clone",
      year: dateCurr.getFullYear(),
      month: dateCurr.toLocaleString("default", { month: "short" }),
      img: "https://images-na.ssl-images-amazon.com/images/I/31%2BDgxPWXtL.jpg",
    },
    {
      name: "Book my show App",
      year: dateCurr.getFullYear(),
      month: dateCurr.toLocaleString("default", { month: "short" }),
      img: "https://static.toiimg.com/thumb/msid-80702697,width-1200,height-900,resizemode-4/.jpg",
    },
    {
      name: "Book my show App",
      year: dateCurr.getFullYear(),
      month: dateCurr.toLocaleString("default", { month: "short" }),
      img: "https://static.toiimg.com/thumb/msid-80702697,width-1200,height-900,resizemode-4/.jpg",
    },
  ];
  return (
    <Styled.AboutBOX>
      <Typography
        style={{
          padding: "1em 0 0 0.8em",
          fontWeight: "600",
          fontSize: "1.5em",
        }}
      >
        Projects
      </Typography>
      <Box
        style={{
          padding: "1.4em 1em",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        {projects.map((e) => (
          <Box>
            <img src={e.img} alt="projects" height="200px"></img>

            <Typography
              style={{
                fontWeight: "600",
                fontSize: "1.5em",
              }}
            >
              {e.name}
            </Typography>
            <Typography>
              {e.year} {e.month}
            </Typography>
          </Box>
        ))}
      </Box>
    </Styled.AboutBOX>
  );
}

export default Project;
const Styled = {
  AboutBOX: styled(Box)`
    width: 95%;
    background: white;
    height: auto;
    margin: 2em auto;
  `,
};
