import React from "react"

function FormInput(props:{
    label: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    id: number;
    value:string;
    expression:RegExp;
    errorClass:string;
    errorMessage:string;
}){

    const {label , onChange , id , value , expression , errorClass , errorMessage , ...inputProps} = props;

    return(
        <div className={`formInputDiv ${errorClass}`}>
            <label>{label}</label><br/>
            <input {...inputProps}  onChange={onChange} className="formInput not-area"/><br/>
            <span><i className="fa-solid fa-circle-exclamation"></i><i className="fa-solid fa-circle-check"></i>{errorMessage}</span>
        </div>
    )
}

export default FormInput