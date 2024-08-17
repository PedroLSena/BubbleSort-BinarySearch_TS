var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var productList = [];
var Product = /** @class */ (function () {
    function Product(name, price) {
        this.name = name;
        this.price = price;
    }
    return Product;
}());
var prod1 = new Product("Cama", 1203.98);
var prod2 = new Product("Mesa", 123.23);
var prod3 = new Product("Cadeira", 250.27);
var prod4 = new Product("Computador", 2002.00);
productList.push(prod1);
productList.push(prod2);
productList.push(prod3);
productList.push(prod4);
var bubbleSort = function (productList) {
    var _a;
    var newProductList = __spreadArray([], productList, true);
    var len = newProductList.length;
    for (var i = 0; i < len - 1; i++) {
        for (var j = 0; j < len - i - 1; j++) {
            if (newProductList[j].price > newProductList[j + 1].price) {
                _a = [newProductList[j + 1], newProductList[j]], newProductList[j] = _a[0], newProductList[j + 1] = _a[1];
            }
        }
    }
    return newProductList;
};
console.log("Original:", productList);
var sortedList = bubbleSort(productList);
console.log("Ordenada:", sortedList);
productList.sort(function (a, b) { return a.name.localeCompare(b.name); });
var binarySearchByName = function (arr, targetName) {
    var low = 0;
    var high = arr.length - 1;
    while (low <= high) {
        var mid = Math.floor((low + high) / 2);
        var midName = arr[mid].name;
        if (midName === targetName) {
            return mid;
        }
        else if (midName.localeCompare(targetName) < 0) {
            low = mid + 1;
        }
        else {
            high = mid - 1;
        }
    }
    return -1;
};
var targetName = "Cadeira";
var index = binarySearchByName(productList, targetName);
if (index !== -1) {
    console.log("Produto encontrado: ".concat(productList[index].name, " com pre\u00E7o ").concat(productList[index].price));
}
else {
    console.log("Produto com nome ".concat(targetName, " n\u00E3o encontrado."));
}
