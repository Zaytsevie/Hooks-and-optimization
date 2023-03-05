import React from "react";
import CardWrapper from "../common/Card";

const withFunctions = (SimpleComponents) => (props) => {
    const isAuth = localStorage.getItem("auth");

    const onLogin = () => {
        localStorage.setItem("auth", "true");
        console.log("inLogin");
    };

    const onLogOut = () => {
        localStorage.removeItem("auth");
        console.log("inLogOut");
    };

    return (
        <CardWrapper>
            <SimpleComponents
                {...props}
                isAuth={isAuth}
                onLogin={onLogin}
                onLogOut={onLogOut}
            />
        </CardWrapper>
    );
};
export default withFunctions;
