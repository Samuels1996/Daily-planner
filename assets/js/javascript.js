var listItem = document.querySelector('container')
var timeEl = document.getElementById('timeSlot')

$(document).ready(function() {
    var update = function() {
        document.getElementById('currentDay')
        .innerHTML = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');
    }
    setInterval(update, 1000)
})