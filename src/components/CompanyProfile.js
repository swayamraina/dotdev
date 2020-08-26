import React from 'react';

import '../styles/CompanyProfile.css'



function CompanyProfile (props) {

    return (
        <div className="company-main">
            <div className="company-logo" style={{backgroundImage: `url(${props.logo})`}} />
        </div>
    );

}

export default CompanyProfile;