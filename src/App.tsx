import * as React from "react";
import { Hello } from "./components/Hello"

export interface AppProps {}

export default class App extends React.Component<AppProps, {}> {
    render() {
        return <Hello compiler="TypeScript" framework="React" />;
    }
}