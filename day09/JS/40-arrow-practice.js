// Ürün fiyatı, kdv oranı ve indirim oranını parametre olarak alıp son fiyatı hesaplayan fonksiyonu arrow function ile yazınız.
// Ürün fiyatı 1500 üzerinde ise extra 10% indirim uygulanacaktır.
// İndirim uygulanmamış ise kdv hesaba katılmayacaktır.

let calculate = (price, tax, discount) => {

    if(price > 1500) discount += 10;
    if(discount <= 0) tax = 0;

    let totalTax = price * tax/100;
    let totalDiscount = price * discount/100;
    let lastPrice = price + totalTax - totalDiscount;

    return lastPrice;

}

let showLastPrice = () => {

    let fiyat = Number(price.value);
    let vergi = Number(tax.value);
    let indirim = Number(discount.value);

    result.innerHTML = `Son fiyat: ${calculate(fiyat, vergi, indirim)}`;
}


