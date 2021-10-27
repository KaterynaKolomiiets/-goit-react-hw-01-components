export default function randomNumber(min, max) {
    return `${Math.round(Math.random() * (max-min) + min)}, ${Math.round(Math.random() * (max-min) + min)}, ${Math.round(Math.random() * (max-min) + min)}`;
}