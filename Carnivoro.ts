import { Mamifero } from './Mamifero';

export class Carnivoro extends Mamifero{
    
    public constructor() {
        super();
    }

    public comer(): void {
        console.log("Comiendo carne.");
    }
}
