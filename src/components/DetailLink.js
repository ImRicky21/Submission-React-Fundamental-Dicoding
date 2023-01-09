import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types"


function DetailLink({to}){
    return(
        <Link to={ to === 'notes' ? '/' : '/archive'} className="back-to">
            <p className="back-to">kembali ke {`${to}`} </p>
        </Link>
    )
}

DetailLink.propTypes = {
    to: PropTypes.string.isRequired
}

export default DetailLink