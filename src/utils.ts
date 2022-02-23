export const new_year: string = "January 1, 2023 00:00:00";

export function getTimeLeft(deadline: Date | undefined = undefined) {
  const date: Date = new Date((deadline ? deadline.getTime() : new Date(new_year).getTime()) - (new Date().getTime()))
  
  return {
    'days': Math.floor(date.getTime()/(1000*60*60*24)),
    'hours': Math.floor((date.getTime()/(1000*60*60)) % 24),
    'minutes': Math.floor((date.getTime()/1000/60) %60),
    'seconds': Math.floor((date.getTime()/1000) %60),
    'total': date
  }
}
