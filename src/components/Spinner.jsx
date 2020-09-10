import React from "react";
import Loader from "react-loader-spinner";

export default class Spinner extends React.Component {
  //other logic
  render() {
    return (
      <>
        <Loader
          type="Rings"
          color="teal"
          height={130}
          width={130}
          timeout={7000}
          radius={400}
        />
      </>
    );
  }
}
