"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Omnivoro = void 0;
const Mamifero_1 = require("./Mamifero");
class Omnivoro extends Mamifero_1.Mamifero {
    constructor() {
        super();
    }
    comer() {
        console.log("comiendo carnes y vegetales");
    }
}
exports.Omnivoro = Omnivoro;
