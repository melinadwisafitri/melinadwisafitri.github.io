const humbergerIcon = document.querySelector('.humberger-icon')
const n = document.querySelector('.ul-list')
const img1 = document.querySelector('.gamis')
const img2 = document.querySelector('.kaos')
const img3 = document.querySelector('.jacket')
const img4 = document.querySelector('.hijab')
const circlePath = document.querySelector('.circle');

humbergerIcon.addEventListener('click', () => {
    humbergerIcon.classList.toggle('active');
    n.classList.toggle('active');
})

img1.addEventListener("click", e => {
    document.querySelector('.img-gamis').src = "/style/images/gamis.png";
    circlePath.style.background = "var(--orange1-color)"
})

img2.addEventListener("click", (e) => {
    document.querySelector('.img-gamis').src = "/style/images/kaos.png"
    circlePath.style.background = "#FFD4D4"
})

img3.addEventListener("click", (e) => {
    document.querySelector('.img-gamis').src = "/style/images/jacket.png"
    circlePath.style.background = "#F8CBA6"
})

img4.addEventListener("click", (e) => {
    document.querySelector('.img-gamis').src = "/style/images/hijab.png"
    circlePath.style.background = "#D5CEA3"
})