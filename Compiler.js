var Run_btn=document.getElementsByClassName('run-btn')
  var Back_btn=document.getElementsByClassName('btn')
function run(){
  var Code=document.getElementById("code").value;
  var Output=document.getElementById('result');
  Output.innerHTML=Code;

  var Code_box=document.getElementsByClassName("code-box");
  Code_box[0].style.display='none';

  var Result_Box=document.getElementsByClassName('show-result');
  Result_Box[0].style.display='block';

  Run_btn[0].style.display='none';
  Back_btn[0].style.display='block';
}
function back(){
  var Codebox=document.getElementsByClassName("code-box");
  var Resultbox=document.getElementsByClassName('show-result');
  Resultbox[0].style.display='none';
  Codebox[0].style.display='block'
  Back_btn[0].style.display='none';
  Run_btn[0].style.display='block';

}
