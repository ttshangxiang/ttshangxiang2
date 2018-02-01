import { Route } from 'react-router-dom';
import * as React from "react";

export const MyRoute = ({ component: Component, ...rest } : any) => (
    <Route {...rest} render={props => {
        fetch(`/api/visit/?_=${new Date().getTime()}&renderer=${document.referrer}&pathname=${props.location.pathname}`,
        {credentials: 'include'});
        return <Component {...props}/>
    }}/>
)