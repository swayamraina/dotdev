import React from 'react';

import CompanyProfile from '../components/CompanyProfile'

import '../styles/WorkProfile.css'



function WorkProfile () {

    return (
        <div>
            <div className="work-profile-main">
                <CompanyProfile 
                    logo="https://media-exp1.licdn.com/dms/image/C560BAQEt-eaBNoeUUQ/company-logo_200_200/0?e=2159024400&v=beta&t=ST99V6SnnMbKnGQteACr5gKaqGoDAxn6XSgPlGtN90E"
                    name="Belzabar Software Design"
                    end="July 2015"
                    start="June 2015"
                    link="https://www.linkedin.com/company/belzabar-software-design-india-private-limited/"
                />
                <CompanyProfile 
                    logo="https://s3-ap-southeast-1.amazonaws.com/bsy/iportal/images/airtel-logo1.png"
                    name="Airtel X Labs"
                    end="January 2019"
                    start="April 2018"
                    link="https://www.linkedin.com/company/airtel-x-labs/"
                />
                <CompanyProfile 
                    logo="https://s3-us-west-2.amazonaws.com/termsheet-uploadcare-assets/trackervc/e2250043-7d54-4b59-9756-6fa62b056783/swiggy.jpg"
                    name="Swiggy"
                    end="present"
                    start="Feburary 2019"
                    link="https://www.linkedin.com/company/swiggy-in/"
                />
            </div>
            <div className="vertical-line"/>
        </div>
    );

}

export default WorkProfile;