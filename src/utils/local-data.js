function getLocaleValue() {
  return localStorage.getItem('localeValue');
}

function putLocaleValue(localeValue) {
  return localStorage.setItem('localeValue', localeValue);
}

function getThemeValue() {
  return localStorage.getItem('themeValue');
}

function putThemeValue(themeValue) {
  return localStorage.setItem('themeValue', themeValue);
}

export { getLocaleValue, putLocaleValue, putThemeValue, getThemeValue };
