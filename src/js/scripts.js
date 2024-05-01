// This is where you should write all JavaScript
// for your project. Remember a few things as you start!
// - Use let or const for all variables
// - Do not use jQuery - use JavaScript instead
// - Do not use onclick - use addEventListener instead
// - Run npm run test regularly to check autograding
// - You'll need to link this file to your HTML :)

const startBtn = document.querySelector("#js-start");
const gaurdOrHerdBtn = document.querySelector("#guard-herd-button");
const gaurdBtn = document.querySelector("#gaurding-button");
const herdBtn = document.querySelector("#herding-button");
const activeBtn = document.querySelector("#active-button");
const loungeBtn = document.querySelector("#lounge-button");
const loudBtn = document.querySelector("#loud-button");
const quietBtn = document.querySelector("#quiet-button");
const qShortCoatBtn = document.querySelector("quiet-short-coat-button");
const hypoallergenicBtn = document.querySelector("#hypoallergenic-button");
const fluffyBtn = document.querySelector("#fluffy-button");
const lShortCoatBtn = document.querySelector("#loud-short-coat-button");
const xLBtn = document.querySelector("#extra-large-button");
const mediumBtn = document.querySelector("#medium-button");
const xSBtn = document.querySelector("#extra-small-button");

//startBtn.addEventListener("click", toFirstQ);
//gaurdOrHerdBtn.addEventListener("click", toGaurdOrHerdQ);
//gaurdBtn.addEventListener("click", toGuardResult);
//herdBtn.addEventListener("click", toHerdResult);
//activeBtn.addEventListener("click", toLoudQ);





const certificateBtn = document.querySelector("#certificate-button");
console.log(certificateBtn);

function customizeCertificate() {
	const inputBtn = document.querySelector(".input-text");
	console.log(inputBtn);
	console.log(inputBtn.value);
}
certificateBtn.addEventListener("click", customizeCertificate);
