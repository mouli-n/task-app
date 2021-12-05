import { Box } from "@material-ui/core";
import styled from "styled-components";

export const Backdrop = styled(Box)`
  position: absolute;
  width: 100%;
 height: 100% ;
  display: ${({ isDisplay }) => (isDisplay ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.4);
`;