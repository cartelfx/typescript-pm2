function toplama(x: number, y: number): number {
    return x + y;
}

function cikarma(x: number, y: number): number {
    return x - y;
}

function carpma(x: number, y: number): number {
    return x * y;
}

function bolme(x: number, y: number): number {
    if (y === 0) {
        throw new Error("Bir sayıyı sıfıra bölemezsiniz!");
    }
    return x / y;
}

const secim: string = prompt("Yapmak istediğiniz işlemi seçin: \n1. Toplama \n2. Çıkarma \n3. Çarpma \n4. Bölme");
const sayi1: number = parseFloat(prompt("Birinci sayıyı girin: "));
const sayi2: number = parseFloat(prompt("İkinci sayıyı girin: "));

switch (secim) {
    case '1':
        console.log(`${sayi1} + ${sayi2} = ${toplama(sayi1, sayi2)}`);
        break;
    case '2':
        console.log(`${sayi1} - ${sayi2} = ${cikarma(sayi1, sayi2)}`);
        break;
    case '3':
        console.log(`${sayi1} * ${sayi2} = ${carpma(sayi1, sayi2)}`);
        break;
    case '4':
        try {
            console.log(`${sayi1} / ${sayi2} = ${bolme(sayi1, sayi2)}`);
        } catch (error) {
            console.log(error.message);
        }
        break;
    default:
        console.log("Geçersiz giriş");
}
