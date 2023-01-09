import React from "react";
import PropTypes from 'prop-types'
import LocaleContext from "../context/LocaleContext";

function ArchiveButton({id, onArchive}){
    const {locale} = React.useContext(LocaleContext)
    return(
        <button className="archive-btn" onClick={()=>onArchive(id)}>
            {locale === 'en' ? 'Archive' : 'Arsipkan'}
        </button>
    )
}

ArchiveButton.propTypes = {
    id: PropTypes.string.isRequired,
    onArchive: PropTypes.func.isRequired,
}

export default ArchiveButton