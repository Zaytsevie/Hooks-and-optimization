import React from "react";
import PropTypes from "prop-types";

const SimpleComponents = ({ onLogin, onLogOut, isAuth }) => {
    return (
        isAuth === "true"
        ? <button className="btn btn-primary" onClick={onLogOut}>Выйти из системы</button>
        : <button className="btn btn-primary" onClick={onLogin}>Войти</button>
     );
};

SimpleComponents.propTypes = {
    isAuth: PropTypes.string,
    onLogin: PropTypes.func,
    onLogOut: PropTypes.func
};

export default SimpleComponents;
