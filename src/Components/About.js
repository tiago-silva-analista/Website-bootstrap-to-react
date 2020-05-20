import React from 'react';

 function About () {
    
      let  about = 
            {
                Id: 0,
                Title: 'About Us',
                Description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
              }                   

    return(
        <section id="About" className="content-section">
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-12">
              <div className="block-heading">
                <h2>{about.Title}</h2>
              </div>
              <p className="lead">{about.Description}</p>
            </div>
          </div>
        </div>
      </section>
    )
}

export default About;