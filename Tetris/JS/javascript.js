// 즉시 실행 함수 사용하여 이름 받기
(function() {
  var userName = prompt("이름을 입력하세요!");
  
  if (userName === null) {
    alert("유효하지 않은 이름입니다!");
    location.reload(true);
  }

  if ((userName.length < 6) && (userName.length > 0)) {
    document.getElementById("inputName").innerHTML = "name : " + userName; 

  } else {
    alert("유효하지 않은 이름입니다!");
    location.reload(true);
  }  
}())



