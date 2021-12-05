import { Box, Typography } from "@material-ui/core";
import { Facebook, Instagram, Twitter, WhatsApp } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";


function Portfolio() {
  return (
    <>
      <Styled.BoxHeader>
        <Styled.Typography1 variant="h4">I am Chandra Mouli</Styled.Typography1>
        <Styled.Typography2 variant="caption">React Developer</Styled.Typography2>
        <Styled.IconBox>
          <Facebook style={{ color: "#fff" }} />
          <Twitter style={{ color: "#fff" }} />
          <Instagram style={{ color: "#fff" }} />
          <WhatsApp style={{ color: "#fff" }} />
        </Styled.IconBox>
        
      </Styled.BoxHeader>
    </>
  );
}

export default Portfolio;
const Styled = {
  BoxHeader: styled(Box)`
    width: 100%;
    height: auto;
    display: flex;
    padding: 2em 0 1em 0;
    flex-direction: column;
    align-items: center;
  `,
  Typography1: styled(Typography)`
    font-family: cursive;
    color: #fff;
  `,
  Typography2: styled(Typography)`
    font-family: cursive;
    color: #fff;
    padding: 0 0 1em 0;
    font-size:1em;
  `,

  IconBox: styled(Box)`
    display: flex;
    width: 20%;
    flex-direction: row;
    justify-content: space-evenly;
  `,
};
