var sel= document.querySelectorAll(' li');
var menu=document.querySelector('.mn');
var listmn=document.querySelector('.menu nav ul');
var nav =document.querySelector('nav');
menu.addEventListener('click',function () {
   listmn.style.display='flex';
	listmn.style.flexDirection='column';
   nav.style.flexDirection='column-reverse';
});


for(i=0; i<=4; i++){
    sel.addEventListener('mouseover',function(){
       this.style.backgroundColor='rgba(50,55,100,0.5)';
     
    });
    sel[i].addEventListener('mouseout',function(){
        this.style.backgroundColor='rgba(20,55,100,0.3)';
      
     });
}
