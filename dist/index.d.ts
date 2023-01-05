/// <reference types="react" />
declare const LoaderContainer: ({ backgroundColor, opacity, children, }: {
    backgroundColor?: string | undefined;
    opacity?: number | undefined;
    children?: any;
}) => JSX.Element;

declare const loader: {
    set: () => void;
    reset: () => void;
};

export { LoaderContainer, loader };