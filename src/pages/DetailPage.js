import React from "react";
import { useParams } from "react-router-dom";
import { getNote } from "../utils/network-data";
import NotFoundPage from "./NotFoundPage";
import DetailLink from "../components/DetailLink";
import ForNoteDetail from "../components/ForNoteDetail";
import SpinnerLoading from "../components/SpinnerLoading";


function WrapperDetailPage(){
  const { id } = useParams();
  const [notFound, setNotFound] = React.useState(false);
  const [note, setNote] = React.useState(null);
  const [initializing, setInitializing] = React.useState(true);

  React.useEffect(() => {
    async function fetchNote(params) {
      const { error, data } = await getNote(id);
      setInitializing(false);
      if (error) {
        setNotFound(true);
      } else {
        setNote(data);
      }
    }

    fetchNote(id);
  }, [id]);

  if (initializing) {
    return <SpinnerLoading />;
  }
  if (notFound) {
    return <NotFoundPage />;
  }
  return (
    <>
      <DetailLink to={note.archived ? 'archive' : 'notes'} />
      <ForNoteDetail {...note} />
    </>
  );
    }
  
export default WrapperDetailPage