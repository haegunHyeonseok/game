function inputTimeColon(time) {
    // replace 함수를 사용하여 콜론( : )을 공백으로 치환한다.
    var replaceTime = time.value.replace(/\:/g, "");
    // 텍스트박스의 입력값이 4~5글자 사이가 되는 경우에만 실행한다.
    if(replaceTime.length >= 4 && replaceTime.length < 5) {
        var hours = replaceTime.substring(0, 2);      // 선언한 변수 hours에 시간값을 담는다.
        var minute = replaceTime.substring(2, 4);    // 선언한 변수 minute에 분을 담는다.
        // isFinite함수를 사용하여 문자가 선언되었는지 확인한다.
        if(isFinite(hours + minute) == false) {
            alert("문자는 입력하실 수 없습니다.");
            time.value = "00:00";
            return false;
        }
        // 두 변수의 시간과 분을 합쳐 입력한 시간이 24시가 넘는지를 체크한다.
        if(hours + minute > 2400) {
            alert("시간은 24시를 넘길 수 없습니다.");
            time.value = "24:00";
            return false;
        }
        // 입력한 분의 값이 60분을 넘는지 체크한다.
        if(minute > 60) {
            alert("분은 60분을 넘길 수 없습니다.");
            time.value = hours + ":00";
            return false;
        }
        time.value = hours + ":" + minute;
    }
    var final_time = document.getElementById("end_time").value;
    document.getElementById("res_time").innerHTML = final_time + "시가 당신의 퇴근시간입니다.";
}

function setClock(){
    var dateInfo = new Date();
    var hour = modifyNumber(dateInfo.getHours());
    var min = modifyNumber(dateInfo.getMinutes());
    var sec = modifyNumber(dateInfo.getSeconds());
    var milsec = modifyNumber(dateInfo.getMilliseconds())

    var formattedMilliseconds = ("0" + milsec).slice(-2);
    var year = dateInfo.getFullYear();
    var month = dateInfo.getMonth() +1;
    var date = dateInfo.getDate();
    document.getElementById("time").innerHTML = hour + ":" + min + ":" + sec + "." + formattedMilliseconds;
    document.getElementById("date").innerHTML = year + "년" + month + "월" + date +"일";

}

function modifyNumber(time){
    if(parseInt(time)<10){
        return "0" + time;
    }
    else
        return time;
}
window.onload = function(){
    setClock();
    setInterval(setClock,50);
}




