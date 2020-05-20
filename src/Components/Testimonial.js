import React from 'react';

export const Testimonial = () => {
    let data = {
        title: 'Testimonials',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        items: [{
            id: 0,
            src: 'images/sarah.jpg',
            name: 'Sarah Oconnor',
            description: ' many variations of passages of Lorem Ipsum available',
        },
        {
            id: 1,
            src: 'images/tangelia.jpg',
            name: 'Tangelia Ekhoff',
            description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old',
        },
        {
            id: 2,
            src: 'images/john-doe.jpg',
            name: 'John Doe',
            description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. ',
        },
        {
            id: 3,
            src: 'images/amy.jpg',
            name: 'Amy Tan',
            description: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words',
        },
        {
            id: 4,
            src: 'images/daniel.jpg',
            name: 'Daniel Felsted',
            description: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy.',
        },
        ]
    }
    return (
        <section id="Testimonials" className="content-section">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="block-heading">
                            <h2>{data.title}</h2>
                            <p>{data.description}</p>
                        </div>
                        <div id="customers-testimonials" className="owl-carousel">
                            {
                                data.items.map((item) => (
                                    <div className="item">
                                        <div className="shadow-effect">
                                            <img className="img-circle" src={item.src} alt="" />
                                            <p>{item.description}</p>
                                        </div>
                                        <div className="testimonial-name">{item.name}</div>
                                    </div>
                                )
                                )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}