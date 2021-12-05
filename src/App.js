import React, { useState } from "react";
import CreatedTime from "./CreatedTime";
import Portfolio from "./Portfolio/Portfolio";
import About from "./Portfolio/About";
import AgeRestrict from "./Todo";
import Project from "./Portfolio/Project";
import Work from "./Portfolio/Work";
import { Button, Box } from "@material-ui/core";
import Portal from "./Portal/Portal";
import { usePortalState } from "./Portal/usePortal";
const parseToTimeStamp = (dateObj) => {};
const parseToDateTime = (dateObj) => {};
const getDateOnly = (dateObj) => {};
const getTimeOnly = (dateObj) => {};
const getWeekDay = (dateObj) => {};
const initialTask = {
  id: 0,
  name: "Task name",
  description: "Task description",
  created_timestamp: "",
  started_timestamp: "",
  ended_timestamp: "",
  status: "neutral" | "progressing" | "completed",
};
const intialTaskCard = {
  isOpen: false,
};
const App = () => {
  const [portalState, setPortalState] = usePortalState();

  // const [task, setTask] = useState(initialTask);
  // const [taskCard, setTaskCard] = useState(false);
  // const [passwordGen, setPasswordGen] = useState("");
  // const textAreaRef = React.useRef(null);
  // const handleTaskCard = () => {
  //   setTaskCard(!taskCard);

  // setTaskCard((oldState) => ({ ...oldState, isOpen: !oldState.isOpen }));
  // };
  // console.log(passwordGen);
  const openModal = () => {
    setPortalState((prev) => {
      return {
        ...prev,
        isPortal: true,
      };
    });
  };

  return (
    <>
      {/* <button onClick={handleTaskCard}>toggle</button>
      {taskCard ? (
        <div
          style={{
            height: "400px",
            width: "400px",
            
            textAlign: "center",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          <h1>{task.name}</h1>
          <CreatedTime name={"Created_time"} task={task} setTask={setTask} />
          {/* <CreatedTime name={"Started_time"} task={task.started_timestamp} setTask={setTask} />
          <CreatedTime name={"Ended_time"} task={task.ended_timestamp} setTask={setTask} /> */}
      {/* </div> */}
      {/* ) : (
        <div
          style={{
            height: "100px",
            width: "400px",
            
            textAlign: "center",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          <h1>{task.name}</h1>
        </div> */}
      {/* )} */}
      {/* <AgeRestrict></AgeRestrict> */}
      {/* <Portfolio />
      <About />
      <Project />
      <Work /> */}
      <Button onClick={openModal}>Portal</Button>
      <Portal PortalState={[portalState, setPortalState]}>
        <Box style={{width:"800px",height:"400px",backgroundColor:"white"}}>Hi</Box>
      </Portal>
    </>
  );
};
export default App;
// eslint-disable-next-line no-lone-blocks
{
  /* <div style={{ width: "800px", height: "400px" }}>
<div
  style={{
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    border:"1px solid black",
    width: "100%",
  }}
>
  <div
    style={{
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "center",
    
      width: "20%",
    }}
  >
    🔔
  </div>
  <div
    style={{
      display: "flex",
      flexDirection: "column",
        
      width: "60%",
      height: "100%",
    }}
  >
    <div
      style={{
        display: "flex",
        
        height: "80%",
        
      }}
    >
      BRGW-I-477:A New Gateway Added Successfully
    </div>
    <div
      style={{
        display: "flex",
            
        height: "40%",
      }}
    >
      <p
        style={{
              
          padding: "0 0 0 1em",
        }}
      >
        {" "}
        🕓
      </p>

      <p
        style={{
              
          padding: "0 0 0 1em",
        }}
      >
        30 Min Ago
      </p>
    </div>
  </div>
  <div
    style={{
      display: "flex",
      
      alignItems: "flex-start",
      justifyContent: "center",
      width: "20%",
      
    }}
  >
    🗑️
  </div>
</div>
</div> */
}
