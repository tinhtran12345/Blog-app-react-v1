import React, { useState } from "react";

export const Alert = ({ props }) => {
    const [show, setShow] = useState(props);

    return (
        show && (
            <div className="alert">
                <p>Registration successful</p>
                <button className="closeBtn" onClick={() => setShow(false)}>
                    x
                </button>
            </div>
        )
    );
};
