export class Flames {
    private yourName: string = '';
    private crushName: string = '';
    addYourName(yourName: string) {
        this.yourName = yourName;
    }
    addYourCurshName(crushName: string) {
        this.crushName = crushName;
    }   
    calc() {
        console.log(`${this.yourName} Loves ${this.crushName}`);
    }
}