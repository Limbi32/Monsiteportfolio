var menu=document.querySelector('.mn');
var listmn=document.querySelector('.menu nav ul');
var nav =document.querySelector('nav');
menu.addEventListener('click',function () {
	listmn.style.display='flex';
	listmn.style.flexDirection='column';
	nav.style.flexDirection='column-reverse';
});
