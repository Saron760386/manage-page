const email=document.querySelector("#email")
const emailMessage=document.querySelector(".error")
const button=document.querySelector("#btn_Go")
const error_id=document.querySelector("#error_id")


button.addEventListener('click',(e)=>{
  e.preventDefault();
  if(email.value === ""){
    emailMessage.textContent="please insert a valid email";
    emailMessage.style.color="red";
    isvalid=true;
    
    return;
  }
  else{
    emailMessage.textContent=" ";
    emailMessage.style.color="red";
    isvalid=false;
  }
  
  return valid;
})


const radio1=document.getElementById("avator1Button1")
const radio2=document.getElementById("avator2Button2")
const radio3=document.getElementById("avator3Button3")
const radio4=document.getElementById("avator4Button4")
const avator1=document.querySelector(".avator1")
const avator2=document.querySelector(".avator2")
const avator3=document.querySelector(".avator3")
const avator4=document.querySelector(".avator4")

radio1.addEventListener('click',()=>{
  avator1.style.display="block";
  avator4.style.display="none";
  avator2.style.display="none";
  avator3.style.display="none"
})
radio2.addEventListener('click',()=>{
  avator1.style.display="none";
  avator2.style.display="block";
  avator3.style.display="none";
  avator4.style.display="none";
})
radio3.addEventListener('click',()=>{
  avator2.style.display="none";
  avator3.style.display="block";
  avator4.style.display="none";
  avator1.style.display="none";
})
radio4.addEventListener('click',()=>{
  avator3.style.display="none";
  avator1.style.display="none";
  avator4.style.display="block";
  avator2.style.display="none";
})

const hambarger=document.getElementById("hamburger")
const li_list=document.getElementById('li_list')
const close=document.getElementById('close')

hambarger.addEventListener('click',()=>{
  close.style.display="block";
  li_list.style.display="block";
  hambarger.style.display="none";

})
close.addEventListener('click',()=>{
  close.style.display="none";
  li_list.style.display="none";
  hambarger.style.display="block";
})