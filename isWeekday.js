function isWeekday(day){
    var weekDay = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    var notweekDay = ['Saturday' , 'Sunday'];
    if( weekDay.includes(day)){
      return true;
      }else{
        return false;
        }
    }