var endDay = new Date('May 24, 2012 11:30:00');

var countDown = setInterval(function(){
    var currentDate = new Date();
    var daysdecimal = (endDay - currentDate)/(1000*60*60*24);
    var daysLeft = Math.floor(daysdecimal);
    var hoursdecimal = (daysdecimal - Math.floor(daysdecimal))*24;
    var hoursLeft = Math.floor(hoursdecimal);
    var minLeft = 60 - currentDate.getMinutes();
    var secLeft = 60 - currentDate.getSeconds();

    $('#days').val(daysLeft);
    $('#hours').val(hoursLeft);
    $('#minutes').val(minLeft);
    $('#seconds').val(secLeft);
},1000);
