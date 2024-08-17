const productList:Product[] = [];

class Product{
    name:string;
    price:number;
    constructor(name:string, price:number){
        this.name = name;
        this.price = price;
    }
}
const prod1 = new Product("Cama", 1203.98);
const prod2 = new Product("Mesa", 123.23);
const prod3 = new Product("Cadeira", 250.27);
const prod4 = new Product("Computador", 2002.00);

productList.push(prod1);
productList.push(prod2);
productList.push(prod3);
productList.push(prod4);

const bubbleSort = (productList: Product[]): Product[] => {
    const newProductList: Product[] = [...productList];
    const len = newProductList.length;

    for (let i = 0; i < len - 1; i++) { 
        for (let j = 0; j < len - i - 1; j++) { 
            if (newProductList[j].price > newProductList[j + 1].price) {
                [newProductList[j], newProductList[j + 1]] = [newProductList[j + 1], newProductList[j]];
            }
        }
    }

    return newProductList;
}

console.log("Original:", productList); 
const sortedList = bubbleSort(productList);
console.log("Ordenada:", sortedList);  

productList.sort((a, b) => a.name.localeCompare(b.name));
const binarySearchByName = (arr: Product[], targetName: string): number => {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2); 
        const midName = arr[mid].name; 

        if (midName === targetName) {
            return mid; 
        } else if (midName.localeCompare(targetName) < 0) {
            low = mid + 1; 
        } else {
            high = mid - 1; 
        }
    }
 
    return -1; 
}

const targetName = "Cadeira"; 
const index = binarySearchByName(productList, targetName);

if (index !== -1) {
    console.log(`Produto encontrado: ${productList[index].name} com preço ${productList[index].price}`);
} else {
    console.log(`Produto com nome ${targetName} não encontrado.`);
}

