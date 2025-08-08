class Product {
    constructor(public name: string,) {}

    toString() {
        return `Product: ${this.name}`;
    }
}

(() => {
    const bluePants = new Product('Blue Pants');
    console.log(bluePants.toString())
})();