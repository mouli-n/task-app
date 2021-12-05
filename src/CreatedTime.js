import React from "react";

function CreatedTime(props) {
  const [flag, setflag] = React.useState({
    create: false,
    start: false,
    end: false,
  });
  let spiltedTime = props.task.created_timestamp.split(":");

  const saveTime = () => {
    setflag((prev) => {
      return {
        ...prev,
        create: true,
      };
    });
    props.setTask((prev) => {
      return { ...prev, created_timestamp: props.task.created_timestamp };
    });
  };
  const saveTime2 = () => {
    setflag((prev) => {
      return {
        ...prev,
        start: true,
      };
    });
    props.setTask((prev) => {
      return { ...prev, started_timestamp: props.task.ended_timestamp };
    });
  };
  const saveTime3 = () => {
    setflag((prev) => {
      return {
        ...prev,
        end: true,
      };
    });
    props.setTask((prev) => {
      return { ...prev, ended_timestamp: props.task.started_timestamp };
    });
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>
        {flag.create ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            <p>
              {" "}
              <span>created_timestamp: </span>
              <b>
                {props.task.created_timestamp}
                {spiltedTime[0] >= 12 ? " PM " : " AM "}
              </b>
            </p>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            <span>Created_timestamp: </span>
            <input
              type="time"
              onChange={(e) =>
                props.setTask((prev) => {
                  return { ...prev, created_timestamp: e.target.value };
                })
              }
              required
            />
            <button onClick={saveTime}>✔</button>
          </div>
        )}
      </div>
      <div>{flag.create ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <p>
            {" "}
            <span>Started_timestamp: </span>
            <b>
              {props.task.Started_timestamp}
              {spiltedTime[0] >= 12 ? " PM " : " AM "}
            </b>
          </p>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <span>Started_timestamp: </span>
          <input
            type="time"
            onChange={(e) =>
              props.setTask((prev) => {
                return { ...prev, Started_timestamp: e.target.value };
              })
            }
            required
          />
          <button onClick={saveTime2}>✔</button>
        </div>
      )}</div>
      <div>
      {flag.create ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <p>
            {" "}
            <span>Ended_timestamp: </span>
            <b>
              {props.task.Ended_timestamp}
              {spiltedTime[0] >= 12 ? " PM " : " AM "}
            </b>
          </p>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <span>Ended_timestamp: </span>
          <input
            type="time"
            onChange={(e) =>
              props.setTask((prev) => {
                return { ...prev, Ended_timestamp: e.target.value };
              })
            }
            required
          />
          <button onClick={saveTime3}>✔</button>
        </div>
      )}
      </div>
    </div>
  );
}

export default CreatedTime;
