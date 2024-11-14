"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var resource_js_1 = require("./resource.js");
function displayMasks() {
    var masks = (0, resource_js_1.default)();
    console.log(masks.join(", "));
}
displayMasks();
