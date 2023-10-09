const mobileBtn = document.querySelector('#mobile-btn')
const mobileMenu = document.querySelector('#mobile-menu')

if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('!flex')
    })
}