import React, { useEffect } from "react";
import { storiesOf } from "@storybook/react";

import { LoaderContainer, loader } from "../components/LoaderContainer";

import { Audio } from "react-loader-spinner";

const stories = storiesOf("Loader Test", module);

stories.add("Loader", () => {
  useEffect(() => {
    loader.show();
    setTimeout(() => {
      loader.hide();
    }, 5000);
  });
  return <LoaderContainer />;
});

stories.add("Custom", () => {
  useEffect(() => {
    loader.show();
    setTimeout(() => {
      loader.hide();
    }, 5000);
  });

  const Arrow = () => (
    <div
      style={{
        width: 0,
        height: 0,
        borderTop: "10px solid transparent",
        borderRight: "20px solid red",
        borderBottom: "10px solid transparent",
      }}
    ></div>
  );
  return (
    <LoaderContainer>
      <div style={{ display: "inline-flex" }}>
        <Arrow />
        <div style={{ marginLeft: "10px" }}> Custom Loader</div>
      </div>
    </LoaderContainer>
  );
});

stories.add("LoaderSpinner", () => {
  useEffect(() => {
    loader.show();
    setTimeout(() => {
      loader.hide();
    }, 5000);
  });
  return (
    <LoaderContainer>
      <Audio
        height="100"
        width="100"
        color="#4fa94d"
        ariaLabel="audio-loading"
        wrapperStyle={{}}
        wrapperClass="wrapper-class"
        visible={true}
      />
    </LoaderContainer>
  );
});
