import React from "react";

function Keyword(props) {
    const style = {
        color: "yellow",
        fontWeight: "bold"
    }
    let rendered;
    switch (props.name){
        case "[E]":
            rendered = <span role="img" aria-label="Colorless">⚪</span>
            break;
        case "[B]":
            rendered = <span role="img" aria-label="Defect">🔵</span>
            break;
        case "[G]":
            rendered = <span role="img" aria-label="Silent">🟢</span>
            break;
        case "[R]":
            rendered = <span role="img" aria-label="Ironclad">🔴</span>
            break;
        case "[W]":
            rendered = <span role="img" aria-label="Watcher">🟣</span>
            break;
        default:
            rendered = <span style={style}>{props.name}</span>;
    }
    return rendered;
}

export default Keyword;