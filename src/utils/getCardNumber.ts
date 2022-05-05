export default function getCardNumber() {
  const firstNumber = Math.trunc(Math.random() * 10);
  const resNumbers = Math.trunc(Math.random() * 1000000000000000);

  return firstNumber === 0
    ? String(1) + resNumbers
    : String(firstNumber) + resNumbers;
}
