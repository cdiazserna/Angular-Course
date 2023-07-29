//HOMEWORK 1

interface Address {
    street: string;
    country: string;
    city: string
}

interface SuperHero {
    name: string;
    age: number;
    address: Address;
    showAddress: () => string; 
}

const superHeroe: SuperHero = {
    name: 'Spiderman',
    age: 30,
    address: {
        street: 'Calle 72 # 37-10',
        country: 'Colombia',
        city: 'Medellín'
    },
    showAddress() {
        return (this.name + ', ' + this.address.city + ', ' + this.address.country);
    }
}

console.log(superHeroe.showAddress());
console.table(superHeroe);

export {};