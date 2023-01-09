import React from "react";
import { getActiveNotes, deleteNote, archiveNote } from '../utils/network-data';
import Swal from "sweetalert2";
import NoteList from "../components/NoteList";
import { useSearchParams } from "react-router-dom";
import SpinnerLoading from "../components/SpinnerLoading";
import SearchInput from "../components/SearchInput";
import LocaleContext from "../context/LocaleContext";



function NotePageWrapper() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [notes, setNotes] = React.useState([]);
    const [query, setQuery] = React.useState(searchParams.get('query')||'')
    const [fetching, setFetch] = React.useState(true)
    const {locale} = React.useContext(LocaleContext)
    const changeSearchParams = (query) => setSearchParams({ query });
  

    React.useEffect(() => {
      async function fetchActiveNote() {
        const { data } = await getActiveNotes();
        setNotes(data);
        setFetch(false);
      }
      fetchActiveNote();
    }, []);
  
    React.useEffect(() => {
      changeSearchParams(query)
    },[query])

    function onSearchNotesHandler(query) {
      setQuery(query);
    }

    async function onDeleteHandler(id){
      const { error } = await deleteNote(id)
      if(error){
        Swal.fire({
          icon:'error',
          title:locale === 'en'?'Delete Failed':'Gagal Menghapus'
        })
      }else{
        Swal.fire({
          icon:'success',
          tittle:locale === 'en'?'Delete succes':'Berhasil Menghapus'
        })
        const { data } = await getActiveNotes();
        setNotes(data);
      }
    }

    async function onArchiveHandler(id) {
      const { error } = await archiveNote(id);
      if(error){
        Swal.fire({
          icon:'error',
          tittle:locale === 'en'?'Archived Failed':'Gagal Arsip'
        })
      }else{
        Swal.fire({
          icon:'success',
          tittle: locale === 'en'?'Archived Succes':'Berhasil Arsip'
        })
      }

    const { data } = await getActiveNotes();
    setNotes(data);
  }
  return (
    <>
      <SearchInput
        searchNotes={onSearchNotesHandler}
        activeQuery={query}
      />
      {fetching ? (
        <SpinnerLoading/>
      ):(
      <NoteList
        notes={notes.filter((note) =>
          note.title.toLowerCase().includes(query.toLowerCase()),
        )}
        onDelete={onDeleteHandler}
        onToggleArchive={onArchiveHandler}
      />)
      }
      
    </>
  );
  }

export default NotePageWrapper