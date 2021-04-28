var lists = $('footer ul li')
console.log(lists);
// for (let i = 0; i < lists.length; i++) {
//     console.log(lists[i]);
//     lists[i].onclick = () => {
//         for (let i = 0; i < lists.length; i++) {
//             lists[i].classList.remove('active')
//             console.log(i);
//         }
//         lists[i].classList.add('active')
//     }
// }
lists[0].ontouchend = () => {
    // console.log('1');
    for (let i = 0; i < lists.length; i++) {
        lists[i].classList.remove('active')
    }
    lists[0].classList.add('active')
    window.location.href = './index.html'
}
lists[1].ontouchend = () => {
    // console.log('2');
    for (let i = 0; i < lists.length; i++) {
        lists[i].classList.remove('active')
    }
    lists[1].classList.add('active')
    window.location.href = './message.html'
}
lists[2].ontouchend = () => {
    // console.log('3');
    for (let i = 0; i < lists.length; i++) {
        lists[i].classList.remove('active')
    }
    lists[2].classList.add('active')
    window.location.href = './user.html'
}