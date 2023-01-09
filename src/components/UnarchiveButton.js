import React from "react";
import PropTypes from 'prop-types'
import LocaleContext from "../context/LocaleContext";

function UnarchivedButton({id, onUnarchive}) {
    const {locale} = React.useContext(LocaleContext)
    return(
        <button className="archive-btn" onClick={()=> onUnarchive(id)}>
            {locale === 'en'?'Unarchive':'keluarkan dari arsip'}
        </button>
    )
}

UnarchivedButton.propTypes = {
    id: PropTypes.string.isRequired,
    onUnarchive: PropTypes.func.isRequired
}

export default UnarchivedButton