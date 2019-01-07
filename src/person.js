export const isAdult = (age) => {
  if(age >= 18){
      return('You are an adult, do what you want!');
  }
  else{
      return('You have been restricted due to your youthfullness!');
  }
}

export const canDrink = (age) => {
    if (age >= 21){
        return('Enjoy your inhibriation');
    } 
else{
    return('You are too young to drink, but you have so many hangovers to look forward to!');
}
}
const isSeniorCitizen = (age) => age >= 65; 
export default isSeniorCitizen;