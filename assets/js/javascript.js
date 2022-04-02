var listItem = document.querySelector('.container');
var timeEl = document.getElementById('.timeSlot');
var saveBtn = document.querySelector('.saveBtn');
var currentTime = moment();

$(document).ready(function() {
    var update = function() {
        document.getElementById('currentDay')
        .innerHTML = moment().format('dddd, MMMM Do YYYY, h:mm:ss');
    }
    setInterval(update, 1000)

    $('.saveBtn').on('click', function() {

        var input = $(this).siblings('.formList').val();
        var hour = $(this).siblings().attr('id');

        localStorage.getItem(hour, input)
    })
});

if ((moment().format('H')) > 8 ) {
    $('8hour').css('.past');
} else if ((moment().format('H')) < 8) {
    $('8hour').css('.future');
} else ((moment().format('H')) === 8) ;{
    $('8hour').css('.present');
}

if ((moment().format('H')) > 9 ) {
    $('9hour').css('.past');
} else if ((moment().format('H')) < 9) {
    $('9hour').css('.future');
} else ((moment().format('H')) === 9) ;{
    $('9hour').css('.present');
}

if ((moment().format('H')) >10 ) {
    $('10hour').css('.past');
} else if ((moment().format('H')) < 10) {
    $('10hour').css('.future');
} else ((moment().format('H')) === 10) ;{
    $('10hour').css('.present');
}

if ((moment().format('H')) > 11 ) {
    $('11hour').css('.past');
} else if ((moment().format('H')) < 11) {
    $('11hour').css('.future');
} else ((moment().format('H')) === 11) ;{
    $('11hour').css('.present');
}

if ((moment().format('H')) > 12 ) {
    $('12hour').css('.past');
} else if ((moment().format('H')) < 12) {
    $('12hour').css('.future');
} else ((moment().format('H')) === 12) ;{
    $('12hour').css('.present');
}

if ((moment().format('H')) > 13 ) {
    $('13hour').css('.past');
} else if ((moment().format('H')) < 13) {
    $('13hour').css('.future');
} else ((moment().format('H')) === 13) ;{
    $('13hour').css('.present');
}

if ((moment().format('H')) > 14 ) {
    $('14hour').css('.past');
} else if ((moment().format('H')) < 14) {
    $('14hour').css('.future');
} else ((moment().format('H')) === 14) ;{
    $('14hour').css('.present');
}

if ((moment().format('H')) > 15 ) {
    $('15hour').css('.past');
} else if ((moment().format('H')) < 15) {
    $('15hour').css('.future');
} else ((moment().format('H')) === 15) ;{
    $('15hour').css('.present');
}

if ((moment().format('H')) > 16 ) {
    $('16hour').css('.past');
} else if ((moment().format('H')) < 16) {
    $('16hour').css('.future');
} else ((moment().format('H')) === 16) ;{
    $('16hour').css('.present');
}

if ((moment().format('H')) > 17 ) {
    $('17hour').css('.past');
} else if ((moment().format('H')) < 17) {
    $('17hour').css('.future');
} else ((moment().format('H')) === 17) ;{
    $('17hour').css('.present');
}
