function calculateDuringTime(date, duration) {
  let startHours = date.getHours();
  let startMinutes = date.getMinutes();
  let endHours = duration % 60;
  let endMinutes = duration - endHours * 60;
  return (
    startHours.toString() + ':' + startMinutes.toString() + ' - ' + endHours + ':' + endMinutes
  );
}

console.log(calculateDuringTime(new Date(), 60));
