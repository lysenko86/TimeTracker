$(function(){
  let startTime = 0;
  let totalTime = 0;
  let counterOn = false;
  setInterval(function(){
    const time = new Date();
    const hours = time.getHours() < 10 ? '0' + time.getHours() : time.getHours();
    const minutes = time.getMinutes() < 10 ? '0' + time.Minutes() : time.getMinutes();
    const seconds = time.getSeconds() < 10 ? '0' + time.getSeconds() : time.getSeconds();
    $('.currnet-time span').text(hours + ':' + minutes + ':' + seconds);
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
    counterOn = true;
    startTime = 0;
  });
  $('.btn-stop').click(function(){
    counterOn = false;
  });
  $('.btn-reset').click(function(){
    counterOn = false;
    totalTime = 0;
  });
});