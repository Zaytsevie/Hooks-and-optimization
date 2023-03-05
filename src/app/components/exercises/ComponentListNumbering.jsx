import React from "react";
import PropTypes from "prop-types";

const ComponentListNumbering = ({ children }) => {
    const arrayChildrens = React.Children.toArray(children);

    return React.Children.map(arrayChildrens, (child) =>
        React.cloneElement(child, {
            ...child.props,
            number: Number(child.key.replace(".", "")) + 1
        })
    );
};

ComponentListNumbering.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default ComponentListNumbering;
