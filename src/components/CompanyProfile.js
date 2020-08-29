import React from 'react';

import '../styles/CompanyProfile.css'



function CompanyProfile (props) {

    return (
        <div className="company-main" onClick={ ()=> window.open(`${props.link}`, "_blank") } >
            <div className="company-logo" style={{backgroundImage: `url(${props.logo})`}} />
        </div>
    );

}

export default CompanyProfile;