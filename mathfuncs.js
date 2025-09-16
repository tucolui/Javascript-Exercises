function areaOfCircle(radius) {
  return Math.PI * radius * radius;
}

console.log(areaOfCircle(5));

function generatePassword(length) {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }
  return password;
}

console.log(generatePassword(12));

function calcPrice(price, taxRate) {
  const totalPrice = price + (price * taxRate) / 100;
  return totalPrice.toFixed(2);
}
