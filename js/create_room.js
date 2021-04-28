$('#back')[0].ontouchend = () => {
    location.href = "./index.html"
}

$('#create')[0].addEventListener('click', () => {
    location.href = './studying_room.html'
})

$('#invite')[0].addEventListener('click', () => {
    console.log('invite bottom');
})