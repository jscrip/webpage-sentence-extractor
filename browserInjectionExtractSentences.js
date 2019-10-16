(() => {
var settings = {
	minWordCount: 4,
	minLength: 10,
	cssQuery:"body"
};
var sentences = document.querySelector(cssQuery)
	.innerText.replace(/[\n\r\t]+/gim,"[punct]")
	.replace(/!+\?+|\?+!+/gim,"!?[punct]")
	.replace(/!+/gim,"![punct]")
	.replace(/e\.g\.?/gim,"eg")
	.replace(/\(c\./gim,"(c")
	.replace(/ c\./gim," c")
	.replace(/\.+/gim,".[punct]")
	.replace(/\?+/gim,"?[punct]")
	.split("[punct]")
	.filter(str => str.length > settings.minLength && str.split(" ").length >= settings.minWordCount)
	.map(str => str.trim());
console.log({sentences});
})();
