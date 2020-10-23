function getTimeLeft(deadline: Date | undefined = undefined) {
  const date: Date = new Date((deadline ? deadline.getTime() : new Date("January 1, 2021 00:00:00").getTime()) - (new Date().getTime()))
  
  return {
    'days': Math.floor(date.getTime()/(1000*60*60*24)),
    'hours': Math.floor((date.getTime()/(1000*60*60)) % 24),
    'minutes': Math.floor((date.getTime()/1000/60) %60),
    'seconds': Math.floor((date.getTime()/1000) %60),
    'total': date
  }
}

export function createFormat(deadline: Date | undefined = undefined) {
  const time = getTimeLeft(deadline)
  return `${time.days} days, ${time.hours} hours, ${time.minutes} minutes, ${time.seconds} seconds`
}