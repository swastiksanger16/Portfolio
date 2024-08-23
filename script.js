window.addEventListener("scroll",function(){
  var header=document.getElementById("nav");
  header.classList.toggle("sticky",window.scrollY>0);
})

var tl=gsap.timeline({scrollTrigger:{
  trigger:".main",
  start:"0% 75%",
  end:"60% 80%",
  scrub:1
}})

tl.to(".blob",{
  top:"100vh",
  left:"-125vh",
  rotation:360
},"image")
tl.to(".image",{
  top:"20vh",
  left:"-90vh",
  
},"image")

document.querySelectorAll('#nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

function copyNumber() {
  var copyText = document.getElementById("copyNumber").innerText;
  var textArea = document.createElement("textarea");
  textArea.value = copyText;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
  alert("Phone Number Copied : " + copyText);
}

function copyMail() {
  var copyText = document.getElementById("copyMail").innerText;
  var textArea = document.createElement("textarea");
  textArea.value = copyText;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
  alert("Mail Copied : " + copyText);
}

