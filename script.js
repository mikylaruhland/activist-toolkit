/* .js files add interaction to your website */
factList = [

  
  "Illicit drug use during pregnancy may cause miscarriage, preterm labor, birth defects, stillbirth, withdrawal symptoms in the baby after birth, a higher risk of sudden infant death syndrome (SIDS), poor fetal growth rate, and cognitive and behavioral problems.",
  "Women who inject drugs are at a higher risk of contracting HIV, which can be passed on to their baby.",
  "More than half — 55 percent — of the 16,000 children in foster care statewide, as of Sept. 3, 2015, were taken from their homes because of parental drug use, according to state department of human services data.",
  "The agency found that the number of children living in foster care nationally climbed for the fourth year in a row, to about 437,500.",
  "The yearly cost per foster child is $150,000, Project Prevention has prevented a minimum of 3,600 infants from being conceived saving taxpayers an estimated 543 million dollars. That is money that could be used for drug treatment, education, or other positive programs.",
  "Estimates suggest that about 5 percent of pregnant women use one or more addictive substances",
  "Sadly, it's not just adults that are afflicted by this troublesome trend. Over 20,000 babies are born each year dependent on illegal or prescription drugs and suffer neonatal abstinence syndrome (NAS), a type of opiate withdrawal. That's the equivalent of one baby every 25 minutes.",
  "Babies exposed to drugs in utero may experience developmental consequences including impaired growth, birth defects, and altered brain development. Prenatal drug exposure may impact the child’s behavior, language, cognition, and achievement long term. "
]

var displayMessage = document.getElementById("message");
var inputBtn = document.getElementById("inputBtn");
var index = 0;

inputBtn.addEventListener("click", displayMotivation);

function displayMotivation() {
  displayMessage.innerHTML = factList[index];
  index++;
  if (index == factList.length) {
    index = 0;
  }
}
