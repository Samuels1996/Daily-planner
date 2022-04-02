var listItem = document.querySelector('container')
var timeEl = document.getElementById('timeSlot')

$(document).ready(function() {
    var update = function() {
        document.getElementById('currentDay')
        .innerHTML = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');
    }
    setInterval(update, 1000)

    $('.saveBtn').on('click', function() {

        var input = $(this).siblings('.formList').val();
        var hour = $(this).siblings().attr('id');

        localStorage.setItem(hour, input)
    })
});

if ((moment().format('H')) > 8 ) {
    $('#8hour').css('background-color', 'gray');
} else if ((moment().format('H')) < 8) {
    $('#8hour').css('background-color', 'green');
} else ((moment().format('H')) == 8) ;{
    $('#8hour').css('background-color', 'red');
}

if ((moment().format('H')) > 9 ) {
    $('#9hour').css('background-color', 'gray');
} else if ((moment().format('H')) < 9) {
    $('#9hour').css('background-color', 'green');
} else ((moment().format('H')) == 9) ;{
    $('#9hour').css('background-color', 'red');
}

if ((moment().format('H')) >10 ) {
    $('#10hour').css('background-color', 'gray');
} else if ((moment().format('H')) < 10) {
    $('#10hour').css('background-color', 'green');
} else ((moment().format('H')) == 10) ;{
    $('#10hour').css('background-color', 'red');
}

if ((moment().format('H')) > 11 ) {
    $('#11hour').css('background-color', 'gray');
} else if ((moment().format('H')) < 11) {
    $('#11hour').css('background-color', 'green');
} else ((moment().format('H')) == 11) ;{
    $('#11hour').css('background-color', 'red');
}

if ((moment().format('H')) > 12 ) {
    $('#12hour').css('background-color', 'gray');
} else if ((moment().format('H')) < 12) {
    $('#12hour').css('background-color', 'green');
} else ((moment().format('H')) == 12) ;{
    $('#12hour').css('background-color', 'red');
}

if ((moment().format('H')) > 13 ) {
    $('#13hour').css('background-color', 'gray');
} else if ((moment().format('H')) < 13) {
    $('#13hour').css('background-color', 'green');
} else ((moment().format('H')) == 13) ;{
    $('#13hour').css('background-color', 'red');
}

if ((moment().format('H')) > 14 ) {
    $('#14hour').css('background-color', 'gray');
} else if ((moment().format('H')) < 14) {
    $('#14hour').css('background-color', 'green');
} else ((moment().format('H')) == 14) ;{
    $('#14hour').css('background-color', 'red');
}

if ((moment().format('H')) > 15 ) {
    $('#15hour').css('background-color', 'gray');
} else if ((moment().format('H')) < 15) {
    $('#15hour').css('background-color', 'green');
} else ((moment().format('H')) == 15) ;{
    $('#15hour').css('background-color', 'red');
}

if ((moment().format('H')) > 16 ) {
    $('#16hour').css('background-color', 'gray');
} else if ((moment().format('H')) < 16) {
    $('#16hour').css('background-color', 'green');
} else ((moment().format('H')) == 16) ;{
    $('#16hour').css('background-color', 'red');
}

if ((moment().format('H')) > 17 ) {
    $('#17hour').css('background-color', 'gray');
} else if ((moment().format('H')) < 17) {
    $('#17hour').css('background-color', 'green');
} else ((moment().format('H')) == 17) ;{
    $('#17hour').css('background-color', 'red');
}
