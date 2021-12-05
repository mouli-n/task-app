import React from "react";
import { Box, Typography } from "@material-ui/core";
import styled from "styled-components";
function Work() {
  return (
    <Styled.AboutBOX>
      <Box>
        <Typography
          style={{
            padding: "1em 0 0 0.8em",
            fontWeight: "600",
            fontSize: "1.5em",
          }}
        >
          Language
        </Typography>
        <Box
          style={{
            padding: "1.4em 1em",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography>Tamil</Typography>
          <Typography>English</Typography>
          <Typography>Telugu</Typography>
        </Box>
      </Box>
    </Styled.AboutBOX>
  );
}

export default Work;
const Styled = {
  AboutBOX: styled(Box)`
    width: 95%;
    background: white;
    height: auto;
    margin: 2em auto;
  `,
};
