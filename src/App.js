import React from 'react';
import NotePageWrapper from './pages/NotePage';
import { Route, Routes } from 'react-router-dom';
import NoteAddPage from './pages/NoteAddPage';
import NavigatorBar from './components/Navigator';
import WrapperDetailPage from './pages/DetailPage';
import NotFoundPage from './pages/NotFoundPage';
import WrapperArchivePage from './pages/ArchivePage';
import { getUserLogged, putAccessToken } from './utils/network-data';
import {path} from './utils/path';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import {  getLocaleValue, putLocaleValue, getThemeValue, putThemeValue, } from './utils/local-data';
import { ThemeProvider } from './context/ThemeContext';
import SwitchButton from './components/SwitchBtn';
import { LocaleProvider } from './context/LocaleContext';
import LocalSwitchBtn from './components/localSwitchbtn';
const { root, addNote, archive, detail, others, register } = path;


function App() {
  const [authedUser, setAuthedUser] = React.useState(null);
  const [initializing, setInitializing] = React.useState(true);
  const [theme, setTheme] = React.useState(null);
  const [locale, setLocale] = React.useState(null);


  React.useEffect(() => {
    async function fetchUser() {
      const { data } = await getUserLogged();
      setAuthedUser(data);
      setInitializing(false);
    }

    if (getLocaleValue() === null) {
      putLocaleValue('en');
      setLocale('en');
    } else {
      setLocale(getLocaleValue());
    }

    if (getThemeValue() === null) {
      putThemeValue('light');
      setTheme('light');
    } else {
      setTheme(getThemeValue());
    }

    document.documentElement.setAttribute('data-theme', getThemeValue());
    fetchUser()
  },[])

  async function onLoginSucces({ accessToken }) {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    setAuthedUser(data);
  }

  function toggleTheme() {
    setTheme((prevTheme) => {
      return prevTheme === 'light' ? 'dark' : 'light';
    });
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', nextTheme);
    putThemeValue(nextTheme);
  }

  function toggleLocale() {
    setLocale((prevLocale) => {
      return prevLocale === 'en' ? 'id' : 'en';
    });
    putLocaleValue(locale === 'en' ? 'id' : 'en');
  }

  function onLogOut() {
    setAuthedUser(null);
    putAccessToken('');
  }

  const localeContextValue = React.useMemo(() => {
    return {
      locale,
      toggleLocale,
    };
  }, [locale]);

  const themeContextValue = React.useMemo(() => {
    return {
      theme,
      toggleTheme,
    };
  }, [theme]);

if (authedUser === null){
  return(
  <>
 <ThemeProvider value={themeContextValue}>
  <LocaleProvider value={localeContextValue}> 
  <main>
    <Routes>
      <Route
        path={others}
        element={<LoginPage loginSucces={onLoginSucces} />}
        />
      <Route path={register} element={<RegisterPage />} />
    </Routes>
  </main>
  </LocaleProvider>
</ThemeProvider>
  </>
  )
}


  return (
    <>
    <ThemeProvider value={themeContextValue}>
      <LocaleProvider value={localeContextValue}>
      <header>
        <div></div>
        <NavigatorBar onLogOut={onLogOut}/>
        <div className='switch-btn'>
      <SwitchButton 
              active={theme === 'light' ? 'left' : 'right'}
              onToggle={toggleTheme}
            />
      <LocalSwitchBtn
      active={locale === 'en' ? 'en' : 'id'}
      onToggle={toggleLocale}
      />
      </div>
      </header>
      <div>
        <Routes>
          <Route path={addNote} element={<NoteAddPage/>}/>
          <Route path={archive} element={<WrapperArchivePage/>}/>
          <Route path={root} element={<NotePageWrapper/>}/>
          <Route path={detail} element={<WrapperDetailPage/>}/>  
          <Route path={others} element={<NotFoundPage/>}/>
        </Routes>
      </div>
      </LocaleProvider>
    </ThemeProvider>
    </>
      );
}

export default App;
