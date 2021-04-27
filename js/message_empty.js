// console.log('2');
$('header i')[0].ontouchstart = () => {
    $('article .content').remove()
    $('article .empty').removeClass('none')
}