function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";Secure";
}

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
function changeid(locaLId,localvalue){
  document.getElementById(locaLId).innerHTML = localvalue
}
function tell(LocalValue){
  alert(LocalValue);
}
function ask(LocalValue){
  return prompt(LocalValue)
}
function conf(LocalValue){
  return confirm(LocalValue)
}
function split(LocalValue){
  return LocalValue.split('')
}
function logc(LocalValue){console.log(LocalValue)}

function ascii(letter){
  return letter.charCodeAt(0)
}
function toascii(code){
  return String.fromCharCode(Number(code))
}

function revs(str) {
    var splitString = str.split("")
    var reverseArray = splitString.reverse()
    var joinArray = reverseArray.join("")
    return joinArray
}
function scramble(number,LocalValue){
  let j = LocalValue.length
   LocalValue += LocalValue[number -1]
    logc(LocalValue[number]+String(number-j+j**2)+LocalValue[number*2]+LocalValue[j-number]+revs(LocalValue)+LocalValue[0]+LocalValue[2]+LocalValue[number+1].toUpperCase()+String(number)+String(ascii(LocalValue[1])+12*number)+toascii(number+j)+toascii(number+33)+toascii(number+number+32+j))
}