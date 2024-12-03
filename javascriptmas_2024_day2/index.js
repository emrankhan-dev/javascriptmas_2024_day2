const calendarContainer = document.getElementById('calendar');
let clickCount = 0
const totalBox = 24

for (let i = 1; i <= 24; i++) {
  let box = document.createElement('li');
  box.classList.add('calendar-box');
  let number = document.createElement('p');
  number.innerHTML = i;
  number.classList.add('number')
  const icon = document.createElement('i');
  icon.classList.add('fas', 'fa-gift');
  let description = document.createElement('p');
  description.innerHTML = "Open me!";
  description.classList.add('description')
  box.appendChild(number);
  box.appendChild(icon);
  box.appendChild(description);
  calendarContainer.appendChild(box);

  let isClick = false

  box.addEventListener('click', function () {
    if (!isClick) {
      box.style.backgroundColor = "#ff9999"
      number.remove()
      icon.remove()
      description.remove()
      box.innerHTML = `<span class="candy">🍫</span>`
      clickCount++
    } else {
      box.style.backgroundColor = ""
      box.textContent = ""
      box.appendChild(number)
      box.appendChild(icon)
      box.appendChild(description)
      clickCount--
    }
    isClick = !isClick
    console.log(clickCount)
    if(clickCount === totalBox) {
      document.getElementById('calendar').innerHTML = `<h1 class="reward">🎉 Congratulations! You have got your final reward! <a href="https://www.apple.com/macbook-air/">Macbook Air M3<a> 🎉 </h1>`
    }
  })
}
