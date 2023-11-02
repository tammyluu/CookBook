export default class Ingredient {
    static count = 0;
    constructor(id, name, quantitiy) {
        this.id = ++count;
        this.name = name;
        this.quantitiy = quantitiy;
    };
}