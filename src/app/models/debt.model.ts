export class Debt {
    name!: String;
    amount!: String;
    date!: String;

    constructor(name: String, amount: String, date: String) {
        this.name = name;
        this.amount = amount;
        this.date = date;
    }
}