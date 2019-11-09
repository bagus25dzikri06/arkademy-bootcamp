//Soal Seleksi Bootcamp No. 2

function username(nama) {
  if ((nama.length <= 5) && (nama === nama.toLowerCase())) {
    return true
  } else {
    return false
  }
}

function password(kataSandi) {
  for (var i = 0; i < kataSandi.length; i++) {
    if ((parseInt(kataSandi[i]).length <= 2) || ((kataSandi[i] === '@') || (kataSandi[i] === '&')) && (kataSandi[i].toUpperCase().length <= 4)) {
      return true
    } else {
      return false
    }
  }
}
