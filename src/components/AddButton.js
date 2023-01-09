import React from "react";
import LocaleContext from "../context/LocaleContext";

function AddButton(){
    const {locale} = React.useContext(LocaleContext)
    return(
        <button type="submit" className="add-btn">
            {locale === 'en' ? 'Add Note' : 'Tambahkan'}
        </button>
    )
}

export default AddButton