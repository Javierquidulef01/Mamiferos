import { Mamifero } from './Mamifero';

export class Omnivoro extends Mamifero {

    public constructor() {
        super();
    }
    
    public comer(): void {
        console.log("Comiendo carnes y vegetales.");
    }
}
