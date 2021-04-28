// console.log('2');
$('header i')[0].ontouchend = () => {
    $('article .content').remove()
    $('article .empty').removeClass('none')
}