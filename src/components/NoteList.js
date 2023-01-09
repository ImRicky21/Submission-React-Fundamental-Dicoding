import React from "react";
import PropTypes from 'prop-types'
import NoteItem from "./NoteItem";
import LocaleContext from "../context/LocaleContext";


function NoteList({notes, onDelete, onToggleArchive}) {
    const {locale} = React.useContext(LocaleContext)

    if(notes.length !== 0){
        return(
            <div className="note-list">
                {notes.map((note)=>{
                    return(
                        <NoteItem
                        key={note.id}
                        onDelete={onDelete}
                        onToggleArchive={onToggleArchive}
                        {...note}
                        />
                    )
                })}
            </div>
        )
    }else{
        return(
            <div className="wrapper-note">
                <h1 className="note-list-empty">{locale === 'en'?'Note is Empty':'Catatan Kosong'}</h1>
            </div>
        )
    }
}

NoteList.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.object).isRequired,
    onDelete: PropTypes.func.isRequired,
    onToggleArchive: PropTypes.func.isRequired,
};

export default NoteList