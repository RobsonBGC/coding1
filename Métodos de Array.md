# Este é um dicionário e métodos de Array.
## Join()
 O método join() junta todos os elementos de um array (ou um array-like object) em uma string e retorna esta string.
> ### Exemplo:
```Js
> const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// Expected output: "Fire,Air,Water"

console.log(elements.join(''));
// Expected output: "FireAirWater"

console.log(elements.join('-'));
// Expected output: "Fire-Air-Water"
```

## pop()
O método pop() remove o último elemento de um array e retorna aquele elemento.
>### Exemplo:
```Js
var meuPeixe = ["acara-bandeira", "palhaco", "mandarim", "esturjao"];

console.log(meuPeixe); // ['acara-bandeira', 'palhaco', 'mandarim', 'esturjao']

var meuPeixePop = meuPeixe.pop();

console.log(meuPeixe); // ['acara-bandeira', 'palhaco', 'mandarim' ]

console.log(meuPeixePop); // 'esturjao'
```

## Keys()
 método keys() retorna um novo Array Iterator que contém as chaves para cada index do array.
 >### Exemplo de Uso Básico:
```Js
var arr = ["a", "b", "c"];
var iterator = arr.keys();

console.log(iterator.next()); // { value: 0, done: false }
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: undefined, done: true }
```
>### Exemplo: keys iterator não ignora lacunas:
```Js
var arr = ["a", , "c"];
var sparseKeys = Object.keys(arr);
var denseKeys = [...arr.keys()];
console.log(sparseKeys); // [0, 2]
console.log(denseKeys); // [0, 1, 2]
```

## Include()
O método includes() determina se um array contém um determinado elemento, retornando true ou false apropriadamente.
>### Exemplo:
```Js
const array1 = [1, 2, 3];

console.log(array1.includes(2));
// Expected output: true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// Expected output: true

console.log(pets.includes('at'));
// Expected output: false
```
## Unshift() 
O unshift()método de Arrayinstâncias adiciona os elementos especificados ao início de uma matriz e retorna o novo comprimento da matriz.
>### Exemplo:
```Js
const array1 = [1, 2, 3];

console.log(array1.unshift(4, 5));
// Expected output: 5

console.log(array1);
// Expected output: Array [4, 5, 1, 2, 3]
```






