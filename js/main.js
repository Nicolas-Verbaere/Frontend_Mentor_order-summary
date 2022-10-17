let bodyContainer = document.querySelector("body");
bodyContainer.className = "container";
console.log(bodyContainer);

let divCard = document.createElement("div");
divCard.className = "card";
bodyContainer.appendChild(divCard);

let figureElement = document.createElement("figure");
figureElement.className = "headImage";
divCard.appendChild(figureElement);

let imgFigure = document.createElement("img");
imgFigure.src = "../images/illustration-hero.svg";
figureElement.appendChild(imgFigure);

let divInsideCard = document.createElement("div");
divInsideCard.className = "insideCarde";
divCard.appendChild(divInsideCard);

let h1Element = document.createElement("h1");
h1Element.textContent = "Oder Summary";
divInsideCard.appendChild(h1Element);

let pElement = document.createElement("p");
pElement.className = "text";
pElement.textContent =
    "You can now listen to milions of songs, audiobooks, and podcats on any devices anywhere you like!";
divInsideCard.appendChild(pElement);

let divSubmission = document.createElement("div");
divSubmission.className = "submission";
divInsideCard.appendChild(divSubmission);

let imgDivSubmission = document.createElement("img");
imgDivSubmission.className = "submissionImg";
imgDivSubmission.src = "../images/icon-music.svg";
divSubmission.appendChild(imgDivSubmission);

let divAbonnement = document.createElement("div");
divAbonnement.className = "abonement";
divSubmission.appendChild(divAbonnement);

let h2Element = document.createElement("h2");
h2Element.className = "submissionTitle";
h2Element.textContent = "Annual Plan";
divAbonnement.appendChild(h2Element);

let pAbonnementElement = document.createElement("p");
pAbonnementElement.textContent = "$59.99/year";
divAbonnement.appendChild(pAbonnementElement);

let buttonAbonnementElement = document.createElement("button");
buttonAbonnementElement.className = "submissionValidate";
buttonAbonnementElement.textContent = "Change";
divSubmission.appendChild(buttonAbonnementElement);

let buttonBlue = document.createElement("button");
buttonBlue.className = "blueButton";
buttonBlue.textContent = "Proceed to Payment";
divInsideCard.appendChild(buttonBlue);

let buttonWhite = document.createElement("button");
buttonWhite.className = "whiteButton";
buttonWhite.textContent = "Cancel Order";
divInsideCard.appendChild(buttonWhite);

console.log(figureElement);
