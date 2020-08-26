import React from "react";

function ShapeFill() {
    console.log(document.body.clientWidth)
    return (
        // <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.5 19.6" preserveAspectRatio="none" className="fill-shapes">
        //     <path className="shape-fill" style={{opacity:0.33}} d="M0 0L0 18.8 141.8 4.1 283.5 18.8 283.5 0z"></path>
        //     <path className="shape-fill" style={{opacity:0.33}} d="M0 0L0 12.6 141.8 4 283.5 12.6 283.5 0z"></path>
        //     <path className="shape-fill" style={{opacity:0.33}} d="M0 0L0 6.4 141.8 4 283.5 6.4 283.5 0z"></path>
        //     <path className="shape-fill" d="M0 0L0 1.2 141.8 4 283.5 1.2 283.5 0z"></path>
        // </svg>
        <svg className="separator__svg" width="100%" height={document.body.clientWidth >= 768 ? "200" : "100"} viewBox="0 0 100 100" preserveAspectRatio="none" fill="#fff" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path d="M 100 100 V 10 L 0 100" />
        </svg>
    )
}

export default ShapeFill;