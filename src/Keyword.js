import React from "react";

function Keyword(props) {
  const style = {
    color: "yellow",
    fontWeight: "bold"
  }
  let rendered;

  console.log(props.keywords)

  /*
  // TODO refactor and ideally have a route like api/v1/keywords_lookup
  const map = {
    [E]: 1,
    artifact: 5,
    block: 6,
    blocks: 6,
    burn: 7,
    burns: 7,
    calm: 8,
    channel: 9,
    channeled: 9,
    confused: 10
  }
  */
  const map = {};
  for (var i = 0; i < props.keywords.length; i++) {
    for (var j = 0; j < props.keywords[i].attributes.names.length; j++) {
        map[props.keywords[i].attributes.names[j]] = i
    }
  }

  console.log(map)
  switch (props.name) {
    case "[E]":
      rendered = <span role="img" title="Colorless" aria-label="Colorless">⚪</span>
      // alternate style: // rendered = <img src={"/energy/E.png"} alt="Colorless"/>
      break;
    case "[B]":
      rendered = <span role="img" title="Defect" aria-label="Defect">🔵</span>
      break;
    case "[G]":
      rendered = <span role="img" title="Silent" aria-label="Silent">🟢</span>
      break;
    case "[R]":
      rendered = <span role="img" title="Ironclad" aria-label="Ironclad">🔴</span>
      break;
    case "[W]":
      rendered = <span role="img" title="Watcher" aria-label="Watcher">🟣</span>
      break;
    default:
      const description = props.keywords[map[props.name.toLowerCase()]]?.attributes.description;
      rendered = <span style={style} title={description}>{props.name}</span>;
  }
  return rendered;
}

export default Keyword;