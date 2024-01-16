// Example: Sticky header script
window.onscroll = function() {
var header = document.querySelector('.site-header');
var sticky = header.offsetTop;

if (window.pageYOffset > sticky) {
	header.classList.add("sticky");
} else {
	header.classList.remove("sticky");
}
};
