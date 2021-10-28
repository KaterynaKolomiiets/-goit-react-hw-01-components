export default function randomNumber(min, max, opacity = 1) {
  return `${Math.round(Math.random() * (max - min) + min)}, ${Math.round(
    Math.random() * (max - min) + min
  )}, ${(Math.round(Math.random() * (max - min) + min))}, ${opacity}`;
}
