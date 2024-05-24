var menu=document.querySelector('.mn');
var listmn=document.querySelector('.menu nav ul');
menu.addEventListener('click',function () {
	listmn.style.display='flex';
	listmn.style.flexDirection='column';
});
