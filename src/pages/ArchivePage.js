import React from "react";
import { useSearchParams } from "react-router-dom";
import Swal from "sweetalert2";
import NoteList from "../components/NoteList";
import SearchInput from "../components/SearchInput";
import { deleteNote, getArchivedNotes, unarchiveNote } from "../utils/network-data";
import SpinnerLoading from "../components/SpinnerLoading";


function WrapperArchivePage(){
   const [searchParams, setSearchParams] = useSearchParams();
   const [notes, setNotes] = React.useState([]);
   const [query, setQuery] = React.useState(searchParams.get('query') || '');
   const [fetching, setFetching] = React.useState(true);
  const changeSearchParams = (query) => setSearchParams({ query });

  React.useEffect(() => {
    async function fetchArchivedNotes() {
      const { data } = await getArchivedNotes();
      setFetching(false);
      setNotes(data);
    }
    fetchArchivedNotes();
  }, []);

  React.useEffect(() => {
    changeSearchParams(query);
  },[]);

  function onSearchNotesHandler(query) {
    setQuery(query);
  }

 
  async function onDeleteHandler(id) {
    const { error } = await deleteNote(id);

    if (error) {
      Swal.fire({
        icon: 'error',
        title: 'Gagal Menghapus',
      });
    } else {
      Swal.fire({
        icon: 'success',
        title: 'Berhasil Menghapus',
      });
    }
    const { data } = await getArchivedNotes();
    setNotes(data);
  }

  async function onUnArchiveHandler(id) {
    const { error } = await unarchiveNote(id);

    if (error) {
      Swal.fire({
        icon: 'error',
        title: 'Gagal diarsipkan',
      });
    } else {
      Swal.fire({
        icon: 'success',
        title: 'Berhasil diarsipkan',
      });
    }
    const { data } = await getArchivedNotes();
    setNotes(data);
  }
  
  return (
    <>
    <SearchInput
        searchNotes={onSearchNotesHandler}
        activeQuery={query}
      />
      {fetching ? (
        <SpinnerLoading />
      ) : (
        <NoteList
          notes={notes.filter((note) =>
            note.title.toLowerCase().includes(query.toLowerCase()),
          )}
          onDelete={onDeleteHandler}
          onToggleArchive={onUnArchiveHandler}
        />
      )}
    </>
  )
}





export default WrapperArchivePage