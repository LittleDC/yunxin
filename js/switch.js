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
lists[0].onclick = () => {
    for (let i = 0; i < lists.length; i++) {
        lists[i].classList.remove('active')
        console.log(i);
    }
    lists[0].classList.add('active')
    window.location.href = './index.html'
}
lists[1].onclick = () => {
    for (let i = 0; i < lists.length; i++) {
        lists[i].classList.remove('active')
        console.log(i);
    }
    lists[1].classList.add('active')
    window.location.href = './message.html'
}
lists[2].onclick = () => {
    for (let i = 0; i < lists.length; i++) {
        lists[i].classList.remove('active')
        console.log(i);
    }
    lists[2].classList.add('active')
    window.location.href = './user.html'
}