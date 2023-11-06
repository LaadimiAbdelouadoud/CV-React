//declaration de variables qui vont acceuillir les elements du code HTML
const form = document.getElementById('form');
const nom = document.getElementById('nom');
const prenom = document.getElementById('prenom');
const email = document.getElementById('email');
const dateNaissance = document.getElementById('dateNaissance');
const tel = document.getElementById('tel');
const situationFamiliale = document.getElementsByName('situationFamiliale');
const sexe = document.getElementById('sexe');
const reinitialiser = document.getElementById('reinitialiser');

//Mise de la classe erreur
function setError(element,message){
    const inputControl = element.parentElement;
    const errorMessage = inputControl.querySelector('.errorMessage');
    errorMessage.innerHTML = message;
    inputControl.classList.remove("success");
    inputControl.classList.remove("neutral");
    inputControl.classList.add("error");
}

//Mise de la classe succes
function setSuccess(element,message){
    const inputControl = element.parentElement;
    const errorMessage = inputControl.querySelector('.errorMessage');
    errorMessage.innerHTML = message;
    inputControl.classList.remove("error");
    inputControl.classList.remove("neutral");
    inputControl.classList.add("success");
}

//Mise de la classe neutre
function setNeutral(element){
    const inputControl = element;
    const errorMessage = inputControl.querySelector('.errorMessage');
    errorMessage.innerHTML = '';
    inputControl.classList.remove("error");
    inputControl.classList.remove("success");
    inputControl.classList.add("neutral");
}

//Nom
function validateNom(){
    const nomValue = nom.value.trim();
    const nomExp = /^[A-Z]+$/;
    if (nomValue == ''){
        setError(nom, '<i class="fa-solid fa-circle-exclamation"></i> Veuillez saisir votre nom.');
    }
    else if(!nomExp.test(nomValue)){
        setError(nom, '<i class="fa-solid fa-circle-exclamation"></i> Forme non valide.');
    }
    else{
        setSuccess(nom, '<i class="fa-solid fa-circle-check"></i>');
    }
}

//Prenom
function validatePrenom(){
    const prenomValue = prenom.value.trim();
    const prenomExp = /^[A-Z][a-z]*$/;
    if (prenomValue == ''){
        setError(prenom, '<i class="fa-solid fa-circle-exclamation"></i> Veuillez saisir votre prenom.');
    }
    else if(!prenomExp.test(prenomValue)){
        setError(prenom, '<i class="fa-solid fa-circle-exclamation"></i> Forme non valide.');
    }
    else{
        setSuccess(prenom, '<i class="fa-solid fa-circle-check"></i>');
    }  
}

//email
function validateEmail(){
    const emailValue = email.value.trim();
    const emailExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailValue == ''){
        setError(email, '<i class="fa-solid fa-circle-exclamation"></i> Veuillez saisir votre email.');
    }
    else if(!emailExp.test(emailValue)){
        setError(email, '<i class="fa-solid fa-circle-exclamation"></i> Forme non valide.');
    }
    else{
        setSuccess(email, '<i class="fa-solid fa-circle-check"></i>');
    }  
}

//Date de naissance
function validateDateNaissance(){
    const dateNaissanceValue = dateNaissance.value.trim();
    const dateNaissanceExp = /^(200[0-5]|19[0-9]{2})-[0-9]{2}-[0-9]{2}$/;
    if (dateNaissanceValue == ''){
        setError(dateNaissance, '<i class="fa-solid fa-circle-exclamation"></i> Veuillez saisir votre date de naissance.');
    }
    else if(!dateNaissanceExp.test(dateNaissanceValue)){
        setError(dateNaissance, '<i class="fa-solid fa-circle-exclamation"></i> Seuls ceux qui sont né(e)s en(ou avant) 2005 sont accepté(e)s');
        console.log(dateNaissanceValue);
    }
    else{
        setSuccess(dateNaissance, '<i class="fa-solid fa-circle-check"></i>');
    }  
}

//Numero de telephone
function validateTel(){
    const telValue = tel.value.trim();
    const telExp = /^0[0-9]{9}$/;
    if (telValue == ''){
        setError(tel, '<i class="fa-solid fa-circle-exclamation"></i> Veuillez saisir votre numero de télephone.');
    }
    else if(!telExp.test(telValue)){
        setError(tel, '<i class="fa-solid fa-circle-exclamation"></i> Forme invalide.');
    }
    else{
        setSuccess(tel, '<i class="fa-solid fa-circle-check"></i>');
    }  
}

//Situation Familiale
function validateSituation(){
    var situationFamilialeValue = '';
    for(var i=0 ; i<situationFamiliale.length ; i++ ){
        if(situationFamiliale[i].checked){
            situationFamilialeValue = situationFamiliale[i].value;
            break;
        }
    }

    if(situationFamilialeValue == ''){
        setError(situationFamiliale[0],'<i class="fa-solid fa-circle-exclamation"></i> Veuillez sélectionner votre situation.');
    }
    else{
        setSuccess(situationFamiliale[0],'<i class="fa-solid fa-circle-check"></i>');
    }
    
}

//Sexe
function validateSexe(){
    if(sexe.value == ''){
        setError(sexe,'<i class="fa-solid fa-circle-exclamation"></i> Veuillez sélectionner votre sexe.')
    }
    else{
        setSuccess(sexe,'<i class="fa-solid fa-circle-check"></i>');
    }
}

//reset
function resetClass(){
    const inputControlList = form.querySelectorAll('.input-control');
    for(let i=0 ; i<inputControlList.length ; i++ ){
    setNeutral(inputControlList[i]);
    }
}

//validation
function ValidateForm(){

    if (nom.value == '' || prenom.value == '' || email.value ==  '' || dateNaissance.value == '' || tel.value == '' || situationFamiliale.value == '' || sexe.value == '') {
        setError(reinitialiser,'<i class="fa-solid fa-circle-exclamation"></i> Une ou plusieurs informations ne sont pas saisies (ou non valides).');
       
    }
    else{
        setSuccess(reinitialiser,'<i class="fa-solid fa-circle-check"></i>');
    }
}

form.addEventListener("submit", function(event) {

    if (nom.value == '' || prenom.value == '' || email.value ==  '' || dateNaissance.value == '' || tel.value == '' || situationFamiliale.value == '' || sexe.value == '') {
        setError(reinitialiser,'<i class="fa-solid fa-circle-exclamation"></i> Une ou plusieurs informations ne sont pas saisies.');
        event.preventDefault();

        validateNom();
        validatePrenom();
        validateEmail();
        validateDateNaissance();
        validateTel();
        validateSituation();
        validateSexe();
    }  
}
);