const toggle = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation');

toggle.addEventListener('click', () => {
  toggle.classList.toggle('active');
  navigation.classList.toggle('active');
})

let link = document.getElementById('service-link');

document.link.onclick = displayChange;

function displayChange(e) {
  console.log('hi');
  navigation.style.display = "none";

}