"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carnivoro = void 0;
const Mamifero_1 = require("./Mamifero");
class Carnivoro extends Mamifero_1.Mamifero {
    constructor() {
        super();
    }
    comer() {
        console.log("comiendo carne");
    }
}
exports.Carnivoro = Carnivoro;
