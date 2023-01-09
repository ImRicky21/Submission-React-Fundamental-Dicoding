import moment from "moment/moment";
import React from "react";
import { Link } from "react-router-dom";
import ArchiveButton from "./ArchiveButton";
import DeleteButton from "./DeleteButton";
import UnarchivedButton from "./UnarchiveButton";
import PropTypes from 'prop-types'


function NoteItem ({
    id,
    title,
    body,
    createdAt,
    onDelete,
    archived,
    onToggleArchive,
}) {
    return(
        <div className="wrapper-note">
            <Link to={`/detail/${id}`}>
                <div className="note-item_container"> 
                <h3 className="">{title}</h3>
                <p className="">{body}</p>
                <p className="date-note">{moment(createdAt).format('LL')}</p>
                </div>
            </Link>
            <div className="button-group">
                <DeleteButton id={id} onDelete={onDelete}/>
                {archived ?(
                    <UnarchivedButton id={id} onUnarchive={onToggleArchive}/>
                ):(
                    <ArchiveButton id={id} onArchive={onToggleArchive}/>
                )
                }

            </div>
        </div>
    )
}

NoteItem.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    archived: PropTypes.bool.isRequired,
    onDelete: PropTypes.func.isRequired,
    onToggleArchive: PropTypes.func.isRequired,
}

export default NoteItem