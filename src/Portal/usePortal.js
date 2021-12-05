import React from "react";

const initialPortalState = {
  isPortal: false,
  handleClose: (event, setPortalState) => {
    console.log(`Closing Portal!`);
    setPortalState((prevState) => ({
      ...prevState,
      isPortal: false,
    }));
  },
};

export const usePortalState = (initialState = initialPortalState) => {
  const [state, setState] = React.useState(() =>
    typeof initialState === "function" ? initialState() : initialState
  );

  return [state, setState];
};
