export default function getRandomDate() {
  const start = new Date(2022, 7, 1);
  const end = new Date();

  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}
