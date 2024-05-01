// This is where you should write all JavaScript
// for your project. Remember a few things as you start!
// - Use let or const for all variables
// - Do not use jQuery - use JavaScript instead
// - Do not use onclick - use addEventListener instead
// - Run npm run test regularly to check autograding
// - You'll need to link this file to your HTML :)

//all buttons before final certificate
const startBtn = document.querySelector("#js-start");
const gaurdOrHerdBtn = document.querySelector("#guard-herd-button");
const gaurdBtn = document.querySelector("#gaurding-button");
const herdBtn = document.querySelector("#herding-button");
const activeBtn = document.querySelector("#active-button");
const loungeBtn = document.querySelector("#lounge-button");
const loungeLoudBtn = document.querySelector("#lounge-loud-button");
const loungeQuietBtn = document.querySelector("#lounge-quiet-button");
const activeLoudBtn = document.querySelector("#active-loud-button");
const activeQuietBtn = document.querySelector("#active-quiet-button");
const qShortCoatBtn = document.querySelector("#quiet-short-coat-button");
const hypoallergenicBtn = document.querySelector("#hypoallergenic-button");
const fluffyBtn = document.querySelector("#fluffy-button");
const lShortCoatBtn = document.querySelector("#loud-short-coat-button");
const xLBtn = document.querySelector("#extra-large-button");
const mediumBtn = document.querySelector("#medium-button");
const xSBtn = document.querySelector("#extra-small-button");


const adoptGP = document.querySelector("#adopt-gp");
const adoptBC = document.querySelector("#adopt-bc");
const adoptH = document.querySelector("#adopt-h");
const adoptB = document.querySelector("#adopt-b");
const adoptP = document.querySelector("#adopt-p");
const adoptLR = document.querySelector("#adopt-lr");
const adoptST = document.querySelector("#adopt-st");
const adoptC = document.querySelector("#adopt-c");
const adoptBH = document.querySelector("#adopt-bh");
const adoptGD = document.querySelector("#adopt-gd");


const retakeGP = document.querySelector("#retake-gp");
const retakeBC = document.querySelector("#retake-bc");
const retakeH = document.querySelector("#retake-h");
const retakeB = document.querySelector("#retake-b");
const retakeP = document.querySelector("#retake-p");
const retakeLR = document.querySelector("#retake-lr");
const retakeST = document.querySelector("#retake-st");
const retakeC = document.querySelector("#retake-c");
const retakeBH = document.querySelector("#retake-bh");
const retakeGD = document.querySelector("#retake-gd");


//custom slide functions because each page has a specific route
function toFirstQ() {
	const thisSection = this.closest('.rap-section');
	const nextSection = document.querySelector('#lifestyle-question');

	thisSection.classList.toggle('show');
	nextSection.classList.toggle('show');
}
function toGaurdOrHerdQ() {
	const thisSection = this.closest('.rap-section');
	const nextSection = document.querySelector('#job-type-question');

	thisSection.classList.toggle('show');
	nextSection.classList.toggle('show');
}

function toGuardResult() {
	const thisSection = this.closest('.rap-section');
	const nextSection = document.querySelector('#great-pyrenese-result');

	thisSection.classList.toggle('show');
	nextSection.classList.toggle('show');
}

function toHerdResult() {
	const thisSection = this.closest('.rap-section');
	const nextSection = document.querySelector('#border-collie-result');

	thisSection.classList.toggle('show');
	nextSection.classList.toggle('show');
}

function toActiveLoudQ() {
	const thisSection = this.closest('.rap-section');
	const nextSection = document.querySelector('#active-loud-type-question');

	thisSection.classList.toggle('show');
	nextSection.classList.toggle('show');
}

function toLoungeLoudQ() {
	const thisSection = this.closest('.rap-section');
	const nextSection = document.querySelector('#lounge-loud-type-question');

	thisSection.classList.toggle('show');
	nextSection.classList.toggle('show');
}

function toLoudHairQ() {
	const thisSection = this.closest('.rap-section');
	const nextSection = document.querySelector('#loud-hair-type-question');

	thisSection.classList.toggle('show');
	nextSection.classList.toggle('show');
}

function toQuietHairQ() {
	const thisSection = this.closest('.rap-section');
	const nextSection = document.querySelector('#quiet-hair-type-question');

	thisSection.classList.toggle('show');
	nextSection.classList.toggle('show');
}

function toSizeQ() {
	const thisSection = this.closest('.rap-section');
	const nextSection = document.querySelector('#size-question');

	thisSection.classList.toggle('show');
	nextSection.classList.toggle('show');
}

function toLoungeQuietResult() {
	const thisSection = this.closest('.rap-section');
	const nextSection = document.querySelector('#shih-tzu-result');

	thisSection.classList.toggle('show');
	nextSection.classList.toggle('show');
}

function toQShortCoatResult() {
	const thisSection = this.closest('.rap-section');
	const nextSection = document.querySelector('#labrador-retriever-result');

	thisSection.classList.toggle('show');
	nextSection.classList.toggle('show');
}

function toHypoallergenicResult() {
	const thisSection = this.closest('.rap-section');
	const nextSection = document.querySelector('#poodle-result');

	thisSection.classList.toggle('show');
	nextSection.classList.toggle('show');
}

function toFluffyResult() {
	const thisSection = this.closest('.rap-section');
	const nextSection = document.querySelector('#husky-result');

	thisSection.classList.toggle('show');
	nextSection.classList.toggle('show');
}

function toLShortCoatResult() {
	const thisSection = this.closest('.rap-section');
	const nextSection = document.querySelector('#beagle-result');

	thisSection.classList.toggle('show');
	nextSection.classList.toggle('show');
}

function toXLResult() {
	const thisSection = this.closest('.rap-section');
	const nextSection = document.querySelector('#great-dane-result');

	thisSection.classList.toggle('show');
	nextSection.classList.toggle('show');
}

function toMediumResult() {
	const thisSection = this.closest('.rap-section');
	const nextSection = document.querySelector('#basset-hound-result');

	thisSection.classList.toggle('show');
	nextSection.classList.toggle('show');
}

function toXSResult() {
	const thisSection = this.closest('.rap-section');
	const nextSection = document.querySelector('#chihuaha-result');

	thisSection.classList.toggle('show');
	nextSection.classList.toggle('show');
}

//all button event listeners for the quiz itself//
startBtn.addEventListener("click", toFirstQ);
gaurdOrHerdBtn.addEventListener("click", toGaurdOrHerdQ);
gaurdBtn.addEventListener("click", toGuardResult);
herdBtn.addEventListener("click", toHerdResult);
activeBtn.addEventListener("click", toActiveLoudQ);
loungeBtn.addEventListener("click", toLoungeLoudQ);

activeLoudBtn.addEventListener("click", toLoudHairQ);
activeQuietBtn.addEventListener("click", toQuietHairQ);
loungeLoudBtn.addEventListener("click", toSizeQ);
loungeQuietBtn.addEventListener("click", toLoungeQuietResult);

qShortCoatBtn.addEventListener("click", toQShortCoatResult);
hypoallergenicBtn.addEventListener("click", toHypoallergenicResult);
fluffyBtn.addEventListener("click", toFluffyResult);
lShortCoatBtn.addEventListener("click", toLShortCoatResult);
xLBtn.addEventListener("click", toXLResult);
mediumBtn.addEventListener("click", toMediumResult);
xSBtn.addEventListener("click", toXSResult);



function toStartCertificate() {
	const thisSection = this.closest('.rap-section');
	const nextSection = document.querySelector('#certificate-prep');

	thisSection.classList.toggle('show');
	nextSection.classList.toggle('show');
}

function retakeQuiz() {
	const thisSection = this.closest('.rap-section');
	const nextSection = document.querySelector('#start-page');

	thisSection.classList.toggle('show');
	nextSection.classList.toggle('show');
}

adoptGP.addEventListener("click", toStartCertificate);
adoptBC.addEventListener("click", toStartCertificate);
adoptH.addEventListener("click", toStartCertificate);
adoptB.addEventListener("click", toStartCertificate);
adoptP.addEventListener("click", toStartCertificate);
adoptLR.addEventListener("click", toStartCertificate);
adoptST.addEventListener("click", toStartCertificate);
adoptC.addEventListener("click", toStartCertificate);
adoptBH.addEventListener("click", toStartCertificate);
adoptGD.addEventListener("click", toStartCertificate);


retakeGP.addEventListener("click", retakeQuiz);
retakeBC.addEventListener("click", retakeQuiz);
retakeH.addEventListener("click", retakeQuiz);
retakeB.addEventListener("click", retakeQuiz);
retakeP.addEventListener("click", retakeQuiz);
retakeLR.addEventListener("click", retakeQuiz);
retakeST.addEventListener("click", retakeQuiz);
retakeC.addEventListener("click", retakeQuiz);
retakeBH.addEventListener("click", retakeQuiz);
retakeGD.addEventListener("click", retakeQuiz);













const certificateBtn = document.querySelector("#certificate-button");
console.log(certificateBtn);

function customizeCertificate() {
	const inputBtn = document.querySelector(".input-text");
	console.log(inputBtn);
	console.log(inputBtn.value);
}
certificateBtn.addEventListener("click", customizeCertificate);
