import getMasks from"./resource.js";

function displayMasks(){
const masks = getMasks();
console.log(masks.join(", "));
}

displayMasks();