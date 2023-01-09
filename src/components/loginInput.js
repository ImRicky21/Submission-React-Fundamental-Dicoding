/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import Swal from "sweetalert2";
import useInput from "../hooks/useInput";
import PropTypes from "prop-types"
import { Link } from "react-router-dom";
import LocaleContext from "../context/LocaleContext";

function InputLogin({onLogin}){
    const [email, onEmailChange] = useInput('');
    const [password, onPasswordChange] = useInput('');
    const {locale} = React.useContext(LocaleContext)

    function checkInputIsEmpty(){
    return email === '' || password === '' ? false : true;
    }

    function onSubmitHandler(event){
        event.preventDefault()
        if (checkInputIsEmpty()){
            onLogin({ email, password})
        }else{
            Swal.fire({
                icon:'error',
                title:'Input kosong'
      })
     }
    }

    return(
        <form className="login-form" onSubmit={onSubmitHandler}>
           <h2 className="login-form__title">
                {locale === 'en' ? 'Log in Account' : 'Masukkan Akun'}
            </h2>
            <input
            type="text"
            className="login-form__input"
            value={email}
            onChange={onEmailChange}
            placeholder="Email"
            />
            <input
            type="password"
            className="login-form__input"
            value={password}
            onChange={onPasswordChange}
            placeholder="Password"
            />
            <div>  
            <button type="submit" className="login-form__btn add-btn">
            {locale === 'en' ? 'Log in' : 'Masuk'}
            </button>
            <Link to='/register'>
                <button className="login-form__btn add-btn">
                {locale === 'en' ? 'Register' : 'Daftar'}
                </button>
            </Link>
            </div>
        </form>
    )
}

InputLogin.propTypes = {
    onLogin: PropTypes.func.isRequired
}

export default InputLogin