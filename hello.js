

var cv=document.querySelector('.cv');
var porto=document.querySelector('.porto');
var menu=document.querySelector('.mn');
var listmn=document.querySelector('.menu nav ul');

cv.addEventListener('click',function(){
	location.assign('cv.html');
});
porto.addEventListener('click',function(){
	location.assign('portofolio.html');
});
menu.addEventListener('click',function () {
	listmn.style.display='flex';
	listmn.style.flexDirection='column';

});














