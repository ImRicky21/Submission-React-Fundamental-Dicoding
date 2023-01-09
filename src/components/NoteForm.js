import React from "react";
import Swal from "sweetalert2";
import PropTypes from 'prop-types'
import AddButton from "./AddButton";
import LocaleContext from "../context/LocaleContext";
import { addNote } from "../utils/network-data";

function NoteForm () {
    const [title, setTitle] = React.useState('');
    const [body, setBody] = React.useState('');
    const { locale } = React.useContext(LocaleContext);   

    function inputEmpty(){
        return title === '' || body === ''
    }
    
    function onTitleInputHandler(event){
  setTitle(event.target.value)
    }

    function onBodyInputHandler(event){
        setBody(event.target.value)
        
    }
    
    function onSubmitHandler(event) {
        event.preventDefault();
        if (inputEmpty()) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: locale === 'en'? 'Something still Empty' : 'Ada bagian kosong'
          });
        } else {
            addNote({ title, body });
        }
      }

        return(
            <div>
                <form className="add-note-form" onSubmit={onSubmitHandler}>
                    <input
                    className=""
                    placeholder="Masukan judul"
                    type="text"
                    maxLength={50}
                    onChange={onTitleInputHandler}
                    value={title}
                    />
                   <label className="add-note__form__label-max-word">
                  {`${title.length}`}
                     </label>
                    <textarea
                    className="input-desc"
                    type="text"
                    placeholder="Masukkan deskripsi"
                    onChange={onBodyInputHandler}
                    ></textarea>
                    <AddButton/>
                </form>
            </div>
        )
    }

NoteForm.propTypes = {
    addNote: PropTypes.func.isRequired
}

export default NoteForm