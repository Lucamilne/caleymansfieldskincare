import React from "react";

function ShapeFill(props) {
    return (
        <svg className={"separator__svg " + props.alt} width="100%" height={document.body.clientWidth >= 768 ? "200" : "100"} viewBox="0 0 100 100" preserveAspectRatio="none" fill={props.color ? props.color : "#fff"} version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path d="M 100 100 V 10 L 0 100" />
        </svg>
    )
}

export default ShapeFill;