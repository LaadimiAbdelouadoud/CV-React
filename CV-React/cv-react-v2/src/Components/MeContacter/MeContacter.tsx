import React from "react"
import { useState } from "react";
import "./MeContacter.css"
import {NavLink} from 'react-router-dom'
import FormInput from "./FormComponents/FormInput";
import FormTextArea from "./FormComponents/FormTextArea";

function MeContacter(){

    const [errorClass, setErrorClass] = useState("neutral")

    const initialInputState = [
        {
          id: 1,
          name: "nom",
          type: "text",
          placeholder: "Laadimi",
          label: "Nom",
          expression: /^[A-Z][a-z]*$/,
          errorClass: "neutral",
          errorMessage: "Forme non valide",
        },
        {
          id: 2,
          name: "prenom",
          type: "text",
          placeholder: "Abdelouadoud",
          label: "Prenom",
          expression: /^[A-Z][a-z]*$/,
          errorClass: "neutral",
          errorMessage: "Forme non valide",
        },
        {
          id: 3,
          name: "mail",
          type: "email",
          placeholder: "abcd@exemple.xyz",
          label: "Mail",
          expression: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          errorClass: "neutral",
          errorMessage: "Forme non valide",
        },
        {
            id: 4,
            name: "message",
            type: "message",
            placeholder: "Bonjour, je voudrais",
            label: "Message",
            expression: /^[a-zA-Z0-9._%+- ]+$/,
            errorClass: "neutral",
            errorMessage: "Forme non valide",
          },
      ];
      
    
      const [input, setInput] = useState(initialInputState);
      const [values, setValues] = useState({
        nom: "",
        prenom: "",
        mail: "",
        message: "",
      });

    const[validateErrorClass , setValidateErrorClass] = useState("neutral");
    const[validateErrorMessage , setValidateErrorMessage] = useState("nonAffiche");
    const[affiche , setAffiche] = useState("nonAffiche");
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        let isFormValid = true;

        input.forEach((inputItem) => {
            if (inputItem.errorClass !== "success") {
                isFormValid = false;
            }
        });

        if (isFormValid) {
            setValidateErrorClass("success");
            setValidateErrorMessage("Parfait!");
            setAffiche("affiche")
        } else {
            setValidateErrorClass("error");
            setValidateErrorMessage("Une ou plusieurs informations manquent ou incorrectes!");
            setAffiche("nonAffiche")
        }
    };

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });

        const updatedInput = input.find((inputItem) => inputItem.name === name);
            if (updatedInput) {
                if (value==""){
                    updatedInput.errorClass = "error";
                    updatedInput.errorMessage = "Veuillez remplir ce champs!";
                }
                else if (updatedInput.expression.test(value)) {
                    updatedInput.errorClass = "success";
                    updatedInput.errorMessage = "";

                } 
                else {
                    updatedInput.errorClass = "error";
                    updatedInput.errorMessage = "Forme non valide!";

                }
                setInput([...input]);
            }
    };

    const onChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });

        const updatedInput = input.find((inputItem) => inputItem.name === name);
            if (updatedInput) {
                if (value==""){
                    updatedInput.errorClass = "error";
                    updatedInput.errorMessage = "Veuillez remplir ce champs!";
                }
                else if (updatedInput.expression.test(value)) {
                    updatedInput.errorClass = "success";
                    updatedInput.errorMessage = "";

                } 
                else {
                    updatedInput.errorClass = "error";
                    updatedInput.errorMessage = "Forme non valide!";

                }
                setInput([...input]);
            }
    };

    const handleReset = () => {
        setInput(initialInputState);
        setValidateErrorClass("neutral");
        setAffiche("nonAffiche");
        values.nom="";
        values.prenom="";
        values.mail="";
        values.message="";
    };

    const firstThreeInput = input.slice(0, 3);
    const lastInput = input[3];

    return(
        <div className="MeContacter">
            <NavLink to='/'><i className="fa-solid fa-circle-chevron-left"></i></NavLink>
            <form className="Formulaire">
                <h1>Contactez moi</h1>
                {firstThreeInput.map((input) => (
                    <FormInput key={input.id}
                     {...input} value={values[input.name  as keyof typeof values]}
                      onChange={onChange}
                    />
                ))
                }

                
                <FormTextArea key={lastInput.id}
                     {...lastInput} value={values[lastInput.name  as keyof typeof values]}
                      onChange={onChangeText}
                />

                <div className={`buttons ${validateErrorClass}`}>
                    <button className="envoyer" onClick={handleSubmit}>Envoyer</button>
                    <button className="reinitialiser" type="reset" onClick={handleReset}>Reinitialiser</button><br/>
                    <span><i className="fa-solid fa-circle-exclamation"></i><i className="fa-solid fa-circle-check"></i>{validateErrorMessage}</span>
                </div>
                <div className={`mailAffiche ${affiche}`}>
                    <h3>Voici votre mail:</h3>
                    <pre>{values.nom}  {values.prenom}<br/>
                    {values.mail}<br/>
                    {values.message}
                    </pre>
                </div>
            </form>
        </div>
    )
} 

export default MeContacter