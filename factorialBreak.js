//BREAK

let lista = [1, 2 ,3 , 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < lista.length; i ++) {
    if (lista [i] === 3 ) {
        continue
    }

    let j = 50;
    const k = 100;
    console.log(lista[i]);
    console.log(j);
    console.log(k);

    if (lista [i] > 5) {
        break;
    }
}
