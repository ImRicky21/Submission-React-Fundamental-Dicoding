import React from "react";
import PropTypes from 'prop-types'
import LocaleContext from "../context/LocaleContext";

function DeleteButton({ id, onDelete}) {
  const { locale } = React.useContext(LocaleContext)
    return(
        <button
        className="delete-btn"
        onClick={() => onDelete(id)}
      >
{ locale === 'en' ? 'Delete':'Hapus'}
        
      </button>
      
    )
}

DeleteButton.propTypes = {
    id:PropTypes.string.isRequired,
    onDelete:PropTypes.func.isRequired
}

export default DeleteButton