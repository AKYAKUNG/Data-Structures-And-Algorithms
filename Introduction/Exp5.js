let totalAmount = 1200;
if (totalAmount >= 1000) {
    let discount = totalAmount * 0.1;
    let finalAmount = totalAmount - discount;
    console.log("🎉 ยินดีด้วย! คุณได้รับส่วนลด 10%");
    console.log("💥 ยอดชำระสุทธิ: " + finalAmount.toFixed(2) + " บาท");
} else {
    console.log("❌ ขออภัย! คุณไม่ได้รับส่วนลด");
    console.log("💥 ยอดชำระ: " + totalAmount.toFixed(2) + " บาท");
}