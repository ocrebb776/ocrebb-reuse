function setCookie(cname, cvalue, exdays) {
  const d = new Date()
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000)
  let expires = 'expires=' + d.toUTCString()
  document.cookie = cname + '=' + cvalue + ';' + expires + ';Secure'
}

function getCookie(cname) {
  let name = cname + '='
  let ca = document.cookie.split(';')
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) == ' ') {
      c = c.substring(1)
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length)
    }
  }
  return ''
}
function changeid(locaLId, localvalue) {
  document.getElementById(locaLId).innerHTML = localvalue
}
function tell(LocalValue) {
  alert(LocalValue)
}
function ask(LocalValue) {
  return prompt(LocalValue)
}
function confi(LocalValue) {
  return confirm(LocalValue)
}
function split(LocalValue) {
  return LocalValue.split('')
}
function logc(LocalValue) {
  console.log(LocalValue)
}

function ascii(letter) {
  return letter.charCodeAt(0)
}
function toascii(code) {
  if (code < 126 && code >= 32) {
    return String.fromCharCode(Number(code))
  } else {
    return '#'
  }
}

function revs(str) {
  var splitString = str.split('')
  var reverseArray = splitString.reverse()
  var joinArray = reverseArray.join('')
  return joinArray
}
function change(string, from, to) {
  return string.replace(from, to)
}
function scramble(number, LocalValue) {
  let jasflihsaui = LocalValue.length
  var ghjr =
    LocalValue[number] +
    String(jasflihsaui ** 2 - jasflihsaui ** number) +
    LocalValue[number * 2] +
    LocalValue[jasflihsaui - number] +
    revs(LocalValue) +
    LocalValue[0] +
    LocalValue[2] +
    LocalValue[0].toUpperCase() +
    String(number) +
    String(ascii(LocalValue[1]) + 12 * number) +
    toascii(number + jasflihsaui + 31) +
    toascii(number + 33) +
    toascii(number + number + 32 + jasflihsaui)
  ghjr = change(ghjr, '+', '#')
  ghjr = change(ghjr, '`', 'H')
  ghjr = change(ghjr, '|', 'R')
  ghjr = change(ghjr, '$', '(')
  ghjr = change(ghjr, ' ', 'R')
  ghjr = change(ghjr, 'undefined', 'WereYoMaMMA@t')
  return ghjr
}
function formvalue(fname, name) {
  return document.forms[fname][name].value
}
