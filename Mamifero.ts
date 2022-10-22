export class Mamifero {
    protected nombre: string;
    protected habitat: string;
    protected alimento: string;

    public constructor() {
        this.nombre = "";
        this.habitat = "";
        this.alimento = "";
    }

    public comer(): void {
        console.log("comiendo...");
    }

    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public getHabitat(): string {
        return this.habitat;
    }

    public setHabitat(habitat: string): void {
        this.habitat = habitat;
    }

    public getAlimento(): string {
        return this.alimento;
    }

    public setAlimento(alimento: string): void {
        this.alimento = alimento;
    }

}
