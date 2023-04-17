
const items = document.querySelectorAll('.item')

const expand = (item, i) => {
  items.forEach((it, ind) => {
    if (i === ind) return
    it.clicked = false
  })
  gsap.to(items, {
    width: item.clicked ? '15vw' : '8vw',
    duration: 2,
    ease: 'elastic(1, .6)'
  })
  
  item.clicked = !item.clicked
  gsap.to(item, {
    width: item.clicked ? '42vw' : '15vw',
    duration: 2.5,
    ease: 'elastic(1, .3)'
  })
}

items.forEach((item, i) => {
  item.clicked = false
  item.addEventListener('click', () => expand(item, i))
})

// Smooth Scroll
document.getElementById('lien1').addEventListener('click', (event) => {
  event.preventDefault();
  const section = document.getElementById('engagements');
  section.scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('lien2').addEventListener('click', (event) => {
  event.preventDefault();
  const section = document.getElementById('galerie');
  section.scrollIntoView({ behavior: 'smooth' });
});