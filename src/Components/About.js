import React from 'react';

 function About () {
    
     console.log(props.label);

      let  about = 
            {
                Id: 0,
                Title: 'About Us',
                Description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
              }                   

    return(
        <section id="About" class="content-section">
        <div class="container text-center">
          <div class="row">
            <div class="col-lg-12">
              <div class="block-heading">
                <h2>{about.Title}</h2>
              </div>
              <p class="lead">{about.Description}</p>
            </div>
          </div>
        </div>
      </section>
    )
}

export default About;