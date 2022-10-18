"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hervivoro = void 0;
const Mamifero_1 = require("./Mamifero");
class Hervivoro extends Mamifero_1.Mamifero {
    constructor() {
        super();
    }
    comer() {
        console.log("comiendo vegetales");
    }
}
exports.Hervivoro = Hervivoro;
