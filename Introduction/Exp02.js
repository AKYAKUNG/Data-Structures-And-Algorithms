let productPrice = 200;
let vat = productPrice * 0.07;
let totalPrice = productPrice + vat;
console.log("-- รายงานยอดเงิน --");
console.log("ราคาสินค้า: " + productPrice + " บาท");
console.log("ภาษีมูลค่าเพิ่ม (VAT): " + vat.toFixed(2) + " บาท");
console.log("💥ราคาสุทธิ: " + totalPrice.toFixed(2) + " บาท");
