$('#back')[0].ontouchend = () => {
    location.href = "./index.html"
}

$('#create')[0].addEventListener('click', () => {
    location.href = './studying_room.html'
})

$('#invite')[0].addEventListener('click', function () {
    console.log('invite bottom');
    // $(this).toggleClass('none');
    $('.invite_box').toggleClass('none')
    // console.log($(this));
})

// $('#invite')[0].onclick = () => {
//     console.log(this);
//     console.log($('#invite')[0]);
// }

// $('#invite').click(function () {
//     console.log(this);
// })