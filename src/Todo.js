import React from "react";
import { useFormik } from "formik";

function FormIK() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      channel: "",
    },
  });
  console.log(formik.values)
  return (
    <div>
      <form
        style={{
          display: "grid",
          placeItems: "center",
          width: "100%",
          height: "150px",
          backgroundColor: "red",
        }}
      >
        <input
          type="text"
          placeholder="Name"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <input
          type="email"
          placeholder="Email Address"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <input
          type="text"
          placeholder="Channel Name"
          name="channel"
          onChange={formik.handleChange}
          value={formik.values.channel}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default FormIK;
