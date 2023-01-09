import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


function
ForNoteDetail({ title, body, id, createdAt }) {
    return (
      <div className="wrapper-note">
         <Link to={`/detail/${id}`}>
                <div className="note-item_container"> 
                <h3 className="">{title}</h3>
                <p className="">{body}</p>
                <p className="date-note">{moment(createdAt).format('LL')}</p>
                </div>
            </Link> 
      </div>
    );
  }
  
  ForNoteDetail.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
  };
  
  export default ForNoteDetail;
  