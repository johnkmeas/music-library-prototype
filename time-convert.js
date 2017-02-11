var times = ['1:30', '5:30', '5:33'];


// Sum of Time
// function timeConvert(times){
//   let hours = 0;
//   let minutes = 0;
//   times.forEach(function(i){
//     var timeSplit = i.split(':');
//     console.log(timeSplit)
//     let newHr = Number(timeSplit[0]);
//     hours += newHr
//     let newMin = Number(timeSplit[1]);
//     minutes += newMin
//   });

//   let minuteOfHour = Math.floor(minutes / 60);
//   let minutesLeft = minutes % 60;
//   // console.log(hours, minutes);
//   console.log(minuteOfHour, minutesLeft);
//   hours += minuteOfHour;
//   const totalTime = hours +':'+ minutesLeft
//   console.log(totalTime);

// }
// timeConvert(times);

//Average of Time
function timeConvert(times){
  let hours = 0;
  let minutes = 0;
  let numTime = times.length;

  times.forEach(function(i){
    var timeSplit = i.split(':');
    console.log(timeSplit)
    let newHr = Number(timeSplit[0]);
    hours += newHr
    let newMin = Number(timeSplit[1]);
    minutes += newMin
  });
  minutes = minutes / numTime
  hours = hours / numTime
  let minuteOfHour = Math.floor(minutes / 60);
  let minutesLeft = minutes % 60;
  // console.log(hours, minutes);
  // console.log(minuteOfHour, minutesLeft);
  hours = Math.floor(hours += minuteOfHour);
  const totalTime = hours +':'+ minutesLeft
  console.log(totalTime);
}
timeConvert(times);

