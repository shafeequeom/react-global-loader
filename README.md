# React Global Loader

Simple Customizable Global React Loader.

## Install

`npm i react-global-loader`

## Simple Usage

#### Import LoaderContainer in App.js or root js

```js
import { LoaderContainer } from "react-global-loader";

export default function App() {
  return (
    <div>
      <LoaderContainer />
    </div>
  );
}
```

#### Usage inside pages, components and services

```js
import { loader } from "react-global-loader";

export default function PageName() {
  const showLoader = () => {
    loader.show();
  };

  const hideLoader = () => {
    loader.hide();
  };

  useEffect(() => {
    showLoader();

    setTimeout(() => {
      hideLoader();
    }, 3000);
  });

  return <div>Page 1</div>;
}
```

## Extended Usage

```js
import { LoaderContainer, loader } from "react-global-loader";

export default function App() {
  const showLoader = () => {
    loader.show();
  };

  const hideLoader = () => {
    loader.hide();
  };

  useEffect(() => {
    showLoader();

    setTimeout(() => {
      hideLoader();
    }, 3000);
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
    <div>
      <LoaderContainer opacity={0.5} backgroundColor="#ccc">
        <div style={{ display: "inline-flex" }}>
          <Arrow />
          <div style={{ marginLeft: "10px" }}> Custom Loader</div>
        </div>
      </LoaderContainer>
    </div>
  );
}
```

## Using with react-loader-spinner Usage

If you are familiar with react-loader spinner please do check out the [official page](https://mhnpd.github.io/react-loader-spinner/) and [npm page](https://www.npmjs.com/package/react-loader-spinner) .

```js
import { Audio } from "react-loader-spinner";
import { LoaderContainer, loader } from "react-global-loader";

export default function App() {
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
}
```

## Container Properties

| Property        | Default Value | Type   |
| --------------- | ------------- | ------ |
| opacity         | 1             | number |
| backgroundColor | #0000003a     | string |
| justify         | center        | string |
| justify         | center        | string |
| defaultText     | Loading..     | string |

```

```
