var rohim=20;

// var korim=10;
// console.log(rohim+korim);
// alert(rohim+korim);
// document.write('<br>');
// document.write('Both have '+ (rohim + korim) + ' Taka');

// var amr = {"profession":"Web Developer","age" : 30, "height" :5.6,"skills" : "Hibijibi"};

// alert("Amar Profession : " + amr["profession"]);
// alert("Amar Age : " + amr["age"]);
// alert("Amar Height : " + amr["height"]);
// alert("Amar Skills : " + amr['skills']);

// document.write("Amar Profession : " + amr["profession"]);
// document.write("Amar Age : " + amr["age"]);
// document.write("Amar Height : " + amr["height"]);
// document.write("Amar Skills : " + amr['skills']);


// var content = "We are Learning Javascript, we are Learning PHP indeed";
// document.write('<br>')
// document.write(content + "</br>");
// document.write(content.length);

// var indx = content.indexOf("Javascript");
// document.write('<br>')
// document.write(indx);
// var indx2 = content.lastIndexOf("indeed");
// console.log(indx2);
// alert(indx2);

// function ami(){
//     document.write('<br>')
//     alert('Welcome to JavaScript\'s World');
//     document.write('Welcome to JavaScript\'s World');
// }

// ami();

function mOver(obj) {
    obj.innerHTML = "Thank You"
  }
  
  function mOut(obj) {
    obj.innerHTML = "Mouse Over Me"
  }

//   function bomb(){
//     return ("Bombing it on click");
//   }

  document.getElementById('abc').style.color="red";
  document.getElementById('abc').style.backgroundColor="green";
  document.getElementById('abc').style.padding="10px";
  document.getElementById('abc').style.fontSize="34px";
  document.getElementById('abc').style.fontWeight="700";
  document.getElementById('abc').style.fontFamily="tahoma, sans-serif";

  var result = 40,
  passMark= 33;

if(result < passMark){
    console.log("Fail Korchos tor khbr ase");   
}else{
    console.log("Thik ase pass korchos,ektu porle result aro better hoite parto");
}

var result = prompt("result ki?");
var passmark = 33;

if(result >= 33 && result <= 100){
    document.write('Pass krce..........');
} else if(result < 0 || result > 100){
    document.write('Invalid Result Input');
} else{
    document.write('Fail Marce..........');
}