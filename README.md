# React Global Loader

Simple Customizable Global React Loader.

## Install

`npm i react-global-loader`

## Simple Usage

    // App.js
    import { LoaderContainer } from "react-global-loader";

    export default function App() {

    	return (
            <div>
    		    <LoaderContainer />
    	    </div>
        )
    }

    // Component/Pages

    import { loader } from "react-global-loader"

    export default function PageName() {

        const showLoader = () => {
            loader.show();
        };

        const hideLoader = () => {
            loader.hide();
        };

        useEffect(()=>{
            showLoader();

            setTimeout(() => {
                hideLoader();
            }, 3000);
        });

        return (<div>Page 1</div>)
    }

## Extended Usage

    import CustomLoaderComponent from "./components"
    import { LoaderContainer, loader } from "react-global-loader";

    export default function App() {

        const showLoader = () => {
            loader.show();
        };

        const hideLoader = () => {
            loader.hide();
        };

        useEffect(()=>{
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

    	return (<div>
    		 <LoaderContainer opacity={0.5} backgroundColor="#ccc">
                 <div style={{ display: "inline-flex" }}>
                    <Arrow />
                    <div style={{ marginLeft: "10px" }}> Custom Loader</div>
                </div>
             </LoaderContainer>
    	</div>)
    }
