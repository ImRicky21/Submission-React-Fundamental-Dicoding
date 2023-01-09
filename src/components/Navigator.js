import React from 'react';
import { Link } from 'react-router-dom';
import LocaleContext from '../context/LocaleContext';


function NavigatorBar({onLogOut}) {
const {locale} = React.useContext(LocaleContext)


  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link to="/add-note">Add Note</Link>
        </li>
        <li>
          <Link to="/">Notes</Link>
        </li>
        <li>
          <Link to="/archive">Archive</Link>
        </li>
        <li>
          <Link onClick={onLogOut}>{locale === 'en'?'Log Out':'Keluar'}</Link>
        </li>
      </ul>
    </nav>
      
  );
}
export default NavigatorBar