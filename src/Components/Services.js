import React, { Component } from 'react'

export const Services = () => {
    let service = {
        Title: 'What We Offer',
        Description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        items: [{
            Id: 0,
            icon: 'fa fa-globe',
            classNameColor: 'service-icon yellow',
            Title: 'Family Travel',
            Description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text'
        }, {
            Id: 1,
            icon: 'fa fa-suitcase',
            classNameColor: 'service-icon orange',
            Title: 'Business Travel',
            Description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text'
        }, {
            Id: 2,
            icon: 'fa fa-male',
            classNameColor: 'service-icon red',
            Title: 'Solo Travel',
            Description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text'
        }, {
            Id: 3,
            icon: 'fa fa-users',
            classNameColor: 'service-icon grey',
            Title: 'Camping',
            Description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text'
        },]
    }

    return (
        <section id="Services" className="content-section text-center">
            <div className="container">
                <div className="block-heading">
                    <h2>{service.Title}</h2>
                    <p>{service.Description}</p>
                </div>
                <div className="row">
                    {
                        service.items.map((item) => (
                            <div className="col-md-3 col-sm-6">
                                <div className="service-box">
                                    <div className={item.classNameColor}>
                                        <div className="front-content">
                                            <i className={item.icon} aria-hidden="true"></i>
                                            <h3>{item.Title}</h3>
                                        </div>
                                    </div>
                                    <div className="service-content">
                                        <h3>{item.Title}</h3>
                                        <p>{item.Description}</p>
                                    </div>
                                </div>
                            </div>)

                        )};
                    </div>
            </div>
        </section>
    )
}
