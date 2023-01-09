import React from "react";
import PropType from "prop-types"
import Swal from "sweetalert2";
import InputLogin from "../components/loginInput";
import { login } from "../utils/network-data";
// import NavigatorBar from "../components/Navigator";
import SwitchButton from "../components/SwitchBtn";
import ThemeContext from "../context/ThemeContext";
import LocaleContext from "../context/LocaleContext";
import LocalSwitchBtn from "../components/localSwitchbtn";

function LoginPage({loginSucces}){
  const { theme, toggleTheme } = React.useContext(ThemeContext);
  const { locale, toggleLocale } = React.useContext(LocaleContext);

    async function onLoginHandler(user){
        const response = await login(user)
        if(!response.error){
            Swal.fire({
                icon:'success',
                title: locale === 'en'?'Log in Succes':'Berhasil Log in'
            })
            loginSucces(response.data)
        }else{
            Swal.fire({
                icon:'error',
                title: locale === 'en' ? 'Log in Failed':'Gagal Log in'
            })
        }
    }
    return(
        <div className="login-page">
            <SwitchButton
              active={theme === 'light' ? 'left' : 'right'}
              label={{
                left: 'light',
                right: 'dark',
              }}
              onToggle={toggleTheme}
            />

             <LocalSwitchBtn
            active={locale === 'en' ? 'en' : 'id'}
            onToggle={toggleLocale}
            />
             
            <InputLogin onLogin={onLoginHandler}/>

        </div>
    )
}
LoginPage.propTypes ={
    loginSucces:PropType.func.isRequired
}

export default LoginPage