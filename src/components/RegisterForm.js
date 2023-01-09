import React from "react";
import Swal from "sweetalert2";
import useInput from "../hooks/useInput";
import PropTypes from "prop-types"
import { Link } from "react-router-dom";
import LocaleContext from "../context/LocaleContext";

function RegisterForm({onRegister}){
    const [name, onChangeName] = useInput('');
    const [email, onChangeEmail] = useInput('');
    const [password, onChangePassword] = useInput('');
    const [confirmPassword, onChangeConfirmPassword] = useInput('');
    const {locale} = React.useContext(LocaleContext)

    function checkInputEmpty(){
       return name === '' || email===''|| password ==='' || confirmPassword === ''
        ?false
        :true;
    }

    function checkConfirmPass(){
        return password === confirmPassword
    }

    function onSubmit(event){
        event.preventDefault()
        if (!checkInputEmpty()){
            Swal.fire({
                icon:'error',
                title:locale === 'en' ?' Input still empty':'Input Kosong'
            })
        }else if (!checkConfirmPass()){
            Swal.fire({
                icon:'error',
                title:locale === 'en'? 'Password is different':'Password tidak sama'
            })
        }else{
            onRegister({name, email, password})
        }
      }

      return(
          <form onSubmit={onSubmit} className="register-form">
            <h1>{locale === 'en' ?'Register' :'Daftar Akun'}</h1>
            <input
            className="register-form__input"
            type="text"
            value={name}
            placeholder="Name"
            onChange={onChangeName}
            />
            <input
            className="register-form__input"
            type="text"
            value={email}
            placeholder="Email"
            onChange={onChangeEmail}
            />
            <input
            className="register-form__input"
            type="password"
            value={password}
            placeholder="Password"
            onChange={onChangePassword}
            />
             <input
             className="register-form__input"
            type="password"
            value={confirmPassword}
            placeholder="Password"
            onChange={onChangeConfirmPassword}
            />
            <div>  
            <button type="submit" className="login-form__btn add-btn">
                {locale === 'en' ?'Register':'Daftar'}
            </button>
            <Link to='/'>
                <button className="login-form__btn add-btn">
                {locale === 'en' ? 'Log In' : 'Masuk'}
                </button>
            </Link>
            </div>
        </form>
      )
    }

    RegisterForm.propTypes = {
        onRegister : PropTypes.func.isRequired
    }

export default RegisterForm