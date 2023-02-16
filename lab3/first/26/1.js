let d2 = new Date("2012-02-20T03:12");
alert( d2 );

function getWeekDay(date) {
    let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
  
    return days[date.getDay()];
  }
  
  let date = new Date(2014, 0, 3); // 3 Jan 2014
  alert( getWeekDay(date) ); // FR


  function getLocalDay(date) {

    let day = date.getDay();
  
    if (day == 0) {
      day = 7;
    }
  
    return day;
  }

  function getDateAgo(date, days) {
    date.setDate(date.getDate() - days);
    return date.getDate();
  }

  function getDateAgo(date, days) {
    let dateCopy = new Date(date);
  
    dateCopy.setDate(date.getDate() - days);
    return dateCopy.getDate();
  }
  
  let date = new Date(2015, 0, 2);
  
  alert( getDateAgo(date, 1) ); 
  alert( getDateAgo(date, 2) ); 
  alert( getDateAgo(date, 365) ); 

  function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
  }
  
  alert( getLastDayOfMonth(2012, 0) ); 
  alert( getLastDayOfMonth(2012, 1) );
  alert( getLastDayOfMonth(2013, 1) ); 

  function getSecondsToday() {
    let now = new Date();
  
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  
    let diff = now - today; 
    return Math.round(diff / 1000); 
  }
  
  alert( getSecondsToday() );

  function getSecondsToTomorrow() {
    let now = new Date();
  
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
  
    let diff = tomorrow - now; 
    return Math.round(diff / 1000); 
  }

  function formatDate(date) {
    let diff = new Date() - date; 
  
    if (diff < 1000) { 
      return 'right now';
    }
  
    let sec = Math.floor(diff / 1000); 
  
    if (sec < 60) {
      return sec + ' sec. ago';
    }
  
    let min = Math.floor(diff / 60000); 
    if (min < 60) {
      return min + ' min. ago';
    }
  
    let d = date;
    d = [
      '0' + d.getDate(),
      '0' + (d.getMonth() + 1),
      '' + d.getFullYear(),
      '0' + d.getHours(),
      '0' + d.getMinutes()
    ].map(component => component.slice(-2)); 
  
    return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
  }
  
  alert( formatDate(new Date(new Date - 1)) ); // "right now"
  
  alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 sec. ago"
  
  alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 min. ago"
  
  // yesterday's date like 31.12.2016 20:00
  alert( formatDate(new Date(new Date - 86400 * 1000)) );