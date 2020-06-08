let number = 0;

$('h2').append(number);

$('button').click((event) => {
    $('h2').text(number++);
})