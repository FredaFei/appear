function hasClass(ele, cls) {
  return !!ele.className.match(new RegExp('\\b' + cls + '\\b'));
}

function addClass(ele, cls) {
  if (ele.length && ele.length > 0) {
    for (var i = 0; i < ele.length; i++) {
      singleAddClass(ele[i], cls);
    }
  } else {
    singleAddClass(ele, cls);
  }
}

function removeClass(ele, cls) {
  if (ele.length && ele.length > 0) {
    for (var i = 0; i < ele.length; i++) {
      singleRemoveClass(ele[i], cls);
    }
  } else {
    singleRemoveClass(ele, cls);
  }
}

function singleAddClass(ele, cls) {
  if (hasClass(ele, cls)) return;
  ele.className += ' ' + cls;
}

function singleRemoveClass(ele, cls) {
  ele.className = ele.className.replace(new RegExp('\\b' + cls + '\\b', 'g'), '');
}

// 字符串两边的空白字符
function trim(str){
  var s=/^\s+|\s+$/g
  return str.replace(s,'');
}
// 用户名（长度3-10个字符，只能包括字母、数字、下划线）
function isLegalUsername(str){
  return /^[A-Za-z_0-9]{3,10}$/.test(str);
}

// 密码（长度6-20个字符，包括大写字母、小写字母、数字、下划线至少两种）
function isLegalPassword(str){
  if(str.length < 6 || str.length > 16){
    return false;
  }
  // 如果包含上述四种以外的字符，false
  if(/[^A-Za-z_0-9]/.test(str)){
    return false;
  }

  //如果全为大写、小写、下划线、数字, false
  if( /(^[a-z]+$)|(^[A-Z]+$)|(^_+$)|(^\d+$)/g.test(str) ){
    return false;
  }
  return true;
}

function isLegalPhone(str){
  return /^1[3-9]\d{9}$/.test(str);
}

function isLegalEmail(str) {
    var exp = /^[A-Za-z0-9][\w\.\-]+@[A-Za-z0-9][\w\-]+[A-Za-z0-9]\.[A-Za-z]{2,}$/;
    return exp.test(str);
}
/* 获取随机数 */
function getRandom(min, max) {
  return (Math.floor((max - min + 1) * Math.random() + min));
}
// 数字日期改成中文日期  2015-01-08 --> 二零一五年一月八日
function getChsDate(datestr){
  var time=new Date(datestr);
  var chslist=['零', '一','二','三','四','五','六','七','八','九','十','十一','十二','十三','十四','十五','十六','十七','十八','十九','二十','二十一','二十二','二十三','二十四','二十五','二十六','二十七','二十八','二十九','三十','三十一']

  var dataArr = datestr.split('-');
  var year = dataArr[0];
  var month = parseInt(dataArr[1]); //“03”-> 3
  var day = parseInt(dataArr[2]);
  return chslist[year[0]]+chslist[year[1]]+chslist[year[2]]+chslist[year[3]] + '年' + chslist[month] +'月' + chslist[day] + '日';
}
// 获取从当前时间到指定日期的间隔时间
function getIntv(date){
  var totime=Date.parse(date);
  var nowtime=Date.now();
  var timedif=8*60*60*1000;  //时差
/*在ES5之中，如果日期采用连词线（-
）格式分隔，且具有前导0，JavaScript会认为这是一个ISO格式的日期字符串，导致返回的时间是以UTC时区计算的;假设用户处于格林尼治国际标准时的时区，会有8小时的时差。如果没有前导0，JavaScript引擎假设用户处于本地时区。但是，ES6改变了这种做法，规定凡是没有指定时区的日期字符串，一律认定用户处于本地时区。*/
  var time=totime-nowtime-timedif;
  var ds=24*60*60*1000,  //1天
      hs=60*60*1000,  //1小时
      ms=60*1000,   //1分
      sc=1000;   //1秒
  var days=parseInt( time/ds );
  var hours=parseInt( (time%ds)/hs );
  var mins=parseInt( ((time%ds)%hs)/ms );
  var secs=parseInt( (((time%ds)%hs)%ms)/sc );
  return days + "天" + hours + "时" + mins + "分" + secs + "秒";
}
// 获取n天前的日期
function getLastNDays(ndate){
  var time=Date.now()-ndate*(24*60*60*1000);
  var theDay=new Date(time);
  var year=theDay.getFullYear();
  var month=theDay.getMonth()+1;
  var day=theDay.getDate();
  var result= year+'-'+month+'-'+day;
  return result; 
}


