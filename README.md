# React Global Loader

Simple Customizable Global React Loader.

## Install

`npm i react-global-loader`

## Simple Usage

    import { LoaderContainer, loader } from "react-global-loader";

    export default function App() {

        const showLoader = () => {
            loader.set();
        };

        const hideLoader = () => {
            loader.reset();
        };

        useEffect(()=>{
            showLoader();

            setTimeout(() => {
                hideLoader();
            }, 3000);
        });


    	return (<div>
    		 <LoaderContainer />
    	</div>)
    }

## Extended Usage

    import CustomLoaderComponent from "./components"
    import { LoaderContainer, loader } from "react-global-loader";

    export default function App() {

        const showLoader = () => {
            loader.set();
        };

        const hideLoader = () => {
            loader.reset();
        };

        useEffect(()=>{
            showLoader();

            setTimeout(() => {
                hideLoader();
            }, 3000);
        });

    	return (<div>
    		 <LoaderContainer opacity={0.5} backgroundColor="#ccc">
                <CustomLoaderComponent/>
             </LoaderContainer>
    	</div>)
    }
