/// <reference types="react" />
declare const LoaderContainer: ({ backgroundColor, opacity, justify, align, defaultText, children, }: {
    backgroundColor?: string | undefined;
    opacity?: number | undefined;
    justify?: string | undefined;
    align?: string | undefined;
    defaultText?: string | undefined;
    children?: any;
}) => JSX.Element;

declare const loader: {
    show: () => void;
    hide: () => void;
};

export { LoaderContainer, loader };
