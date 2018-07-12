function getTime(){
    const time = new Date();
    const hours = time.getHours() < 10 ? '0' + time.getHours() : time.getHours();
    const minutes = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes();
    const seconds = time.getSeconds() < 10 ? '0' + time.getSeconds() : time.getSeconds();
    $('.currnet-time span').text(hours + ':' + minutes + ':' + seconds);
}

$(function(){
    let startTime = 0;
    let totalTime = 0;
    let counterOn = false;
    let btnStartActive = true;
    let btnPauseActive = false;
    let btnStopActive = false;
    getTime();
    $('.total-time span').text('00:00:00');

    setInterval(function(){
        getTime();
        if (counterOn){
            totalTime++;
            let hours = Math.floor(totalTime / 60 / 60);
            hours = hours < 10 ? '0' + hours : hours;
            let minutes = Math.floor((totalTime - hours * 60 * 60) / 60);
            minutes = minutes < 10 ? '0' + minutes : minutes;
            let seconds = totalTime - hours * 60 * 60 - minutes * 60;
            seconds = seconds < 10 ? '0' + seconds : seconds;
            $('.total-time span').text(hours + ':' + minutes + ':' + seconds);
        }
    }, 1000);

    $('.btn-start').click(function(){
        if ($(this).hasClass('disabled')){
            return false;
        }
        counterOn = true;
        startTime = 0;
        $('.btn-start').addClass('disabled');
        $('.btn-pause, .btn-stop').removeClass('disabled');
    });

    $('.btn-pause').click(function(){
        if ($(this).hasClass('disabled')){
            return false;
        }
        counterOn = false;
        $('.btn-pause').addClass('disabled');
        $('.btn-start, .btn-stop').removeClass('disabled');
    });

    $('.btn-stop').click(function(){
        if ($(this).hasClass('disabled')){
            return false;
        }
        counterOn = false;
        totalTime = 0;
        $('.total-time span').text('00:00:00');
        $('.btn-pause, .btn-stop').addClass('disabled');
        $('.btn-start').removeClass('disabled');
    });

    $('.total-time span').click(function(){
        $(this).hide();
        $(this).siblings('input').val($(this).text()).show().focus();
    });

    $('.total-time input').keydown(function(e){
        if (e.keyCode === 13){
            const time = $(this).val();
            $(this).siblings('span').text(time).show();
            $(this).hide().val('');
            const hours = parseInt(time.substr(0, 2));
            const minutes = parseInt(time.substr(3, 2));
            const seconds = parseInt(time.substr(6, 2));
            totalTime = hours * 60 * 60 + minutes * 60 + seconds;
        } else if (e.keyCode === 27) {
            $(this).siblings('span').show();
            $(this).hide().val('');
        }
    });
});
