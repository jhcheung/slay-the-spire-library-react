// https://stackoverflow.com/questions/5915096/get-random-item-from-javascript-array
export function randomItem(items){
  return items[Math.floor(Math.random() * items.length)];
}

export function colorToClass(color) {
  switch (color) {
    case "Red": return "Ironclad";
    case "Blue": return "Defect";
    case "Green": return "Silent";
    case "Purple": return "Watcher";
    default: return "N/A";
  }
}