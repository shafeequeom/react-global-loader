import React, { useEffect } from "react";
import { storiesOf } from "@storybook/react";

import { LoaderContainer, loader } from "../components/LoaderContainer";

const stories = storiesOf("Loader Test", module);

stories.add("Loader", () => {
  useEffect(() => {
    loader.set();
    setTimeout(() => {
      loader.reset();
    }, 3000);
  });
  return <LoaderContainer />;
});
