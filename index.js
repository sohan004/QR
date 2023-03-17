const fb = () => {
    window.location.href = 'https://www.facebook.com/profile.php?id=100056995762123'
}
const ins = () => {
    window.location.href = 'https://www.instagram.com/aryansohan7/'
}
const wht = () => {
    window.location.href = 'https://wa.me/+8801867689987'
}
const git = () => {
    window.location.href = 'https://github.com/sohan004'
}
const email = () => {
    navigator.clipboard.writeText('aryansohan02@gmail.com')
    const em = document.getElementById('em')
    em.innerHTML = `
    copied mail address <i class="fa-solid fa-check"></i>`
    setTimeout(() =>{
        em.innerHTML = `<h4><i class="fa-solid fa-envelope"></i> Mail</h4>`
    }, 2000)
}