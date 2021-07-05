

/*

时分秒
*/
function formatSeconds (value) {
  var d, h, m, s, ms;
  h = Math.floor(value / 1000 / 60 / 60 % 24);
  m = Math.floor(value / 1000 / 60 % 60);
  s = Math.floor(value / 1000 % 60);
  if(h < 10){
    h = "0"+ h
  }
  if(m < 10){
    m = "0"+ m
  }
  if(s < 10){
    s = "0"+ s
  }
  return  h + ":" + m + ":" + s;
}
/*
分秒
*/
function formatMinutesSeconds (value) {
  var  m, s;
  m = Math.floor(value / 60 % 60);
  s = Math.floor(value  % 60);
  if(m < 10){
    m = "0"+ m
  }
  if(s < 10){
    s = "0"+ s
  }
  return   m + ":" + s;
}

//最后把方法暴露出去
module.exports = {
  formatSeconds: formatSeconds,
  formatMinutesSeconds: formatMinutesSeconds
}