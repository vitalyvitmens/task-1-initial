export function getRandomColor() {
  const body = document.querySelector(`body`)
  body.style.background =
    '#' + Math.floor(Math.random() * 16777215).toString(16)

  return body
}
