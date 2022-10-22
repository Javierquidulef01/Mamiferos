import { Mamifero } from './Mamifero';

export class Hervivoro extends Mamifero {

    public constructor() {
        super();
    }

    public comer(): void {
        console.log("Comiendo vegetales.");
    }
}
