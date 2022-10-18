"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mamifero = void 0;
class Mamifero {
    constructor() {
        this.nombre = "";
        this.habitat = "";
        this.alimento = "";
    }
    comer() {
        console.log("comiendo...");
    }
    getNombre() {
        return this.nombre;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    getHabitat() {
        return this.habitat;
    }
    setHabitat(habitat) {
        this.habitat = habitat;
    }
    getAlimento() {
        return this.alimento;
    }
    setAlimento(alimento) {
        this.alimento = alimento;
    }
}
exports.Mamifero = Mamifero;
