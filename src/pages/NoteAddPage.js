import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import NoteForm from "../components/NoteForm";
import LocaleContext from "../context/LocaleContext";
import { addNote } from "../utils/network-data";

function NoteAddPage() {
    const navigate = useNavigate();
    const {locale} = React.useContext(LocaleContext)

    async function onAddNoteHandler(noteData) {
      const { error } = await addNote(noteData);
      if (error) {
        Swal.fire({
          icon: 'error',
          title: locale === 'en' ? 'Failed':'Tambah Catatan Gagal',
          text: locale === 'en' ? 'Connection trouble':'Permasalah Jaringan',
        });
      } else {
        Swal.fire({
          icon: 'success',
          title: locale === 'en' ? 'Add note succes':'Tambah Catatan Berhasil',
          text: locale === 'en' ?'New notes added':'Catan Baru berada di Halaman Catatan',
        });
        navigate('/');
      }
    }
    return(
        <>
        <NoteForm addNote={onAddNoteHandler}/>
        </>
    )
}

export default NoteAddPage