import React from "react";
import Spinner from "react-bootstrap/Spinner"

class Loading extends React.Component {
    render() {
        return (
            <div className="Loading">
                <Spinner animation="border" variant="primary" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            </div>
        )
    }
}

export default Loading;