function setTime() {
    var today = moment().format("MMMM Do YYYY, h:mm:ss a");
    $("#currentDay").text(today);
    }
    
    setTime();
    setInterval(function(){
        setTime();
      },1000)
    
