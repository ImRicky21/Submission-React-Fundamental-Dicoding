import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import RegisterForm from "../components/RegisterForm";
import LocaleContext from "../context/LocaleContext";
import { register } from "../utils/network-data";

function RegisterPage(){
    const navigate = useNavigate();
    const{locale} = React.useContext(LocaleContext)

    async function onRegisterHandler(user){
        const { error } = await register(user)
        
        if(!error){
            Swal.fire({
                icon:"success",
                title:locale === 'en'?'Register Succes':'Berhasil Daftar'
            })
            navigate('/')
        }else{
            Swal.fire({
                icon:"error",
                title:locale === 'en'?'Register Failled':"Gagal Daftar"
            })
        }
    }


    return(
        <div className="register-page">
            <RegisterForm onRegister={onRegisterHandler} />
        </div>

    )
}

export default RegisterPage