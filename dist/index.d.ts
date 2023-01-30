/// <reference types="react" />
declare const LoaderContainer: ({ backgroundColor, opacity, justify, align, defaultText, defaultShow, id, autoHide, hideDuration, children, }: {
    backgroundColor?: string | undefined;
    opacity?: number | undefined;
    justify?: string | undefined;
    align?: string | undefined;
    defaultText?: string | undefined;
    defaultShow?: boolean | undefined;
    id?: string | undefined;
    autoHide?: boolean | undefined;
    hideDuration?: number | undefined;
    children?: any;
}) => JSX.Element;

declare const loader: {
    show: ({ id }?: {
        id?: string | undefined;
    }) => void;
    hide: ({ id }?: {
        id?: string | undefined;
    }) => void;
};

declare const DefaultSpinner: () => JSX.Element;

export { DefaultSpinner, LoaderContainer, loader };
