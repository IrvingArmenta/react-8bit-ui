import React, { FC } from "react";

const Testing: FC<{ text?: string }> = (props) => {
    const { children, text } = props;

    return <h3>{children || text}</h3>
}

export default Testing;