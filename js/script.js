function dropNav() {
  document.querySelector('.toggle').classList.remove('active');
  document.querySelector('.navigation').classList.remove('active');
}

const toggle = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation');

toggle.addEventListener('click', () => {
  toggle.classList.toggle('active');
  navigation.classList.toggle('active');
})




