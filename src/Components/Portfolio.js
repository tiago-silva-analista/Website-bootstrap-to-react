import React from 'react';

export const Portfolio = () => {
    let data = {
        Title: 'Portfolio',
        Description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        items: [{
            id: 1,
            Title: 'Title',
            Description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            src: 'images/p-two.jpeg',
        },
        {
            id: 2,
            Title: 'Title',
            Description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            src: 'images/p-three.jpeg',
        },
        {
            id: 3,
            Title: 'Title',
            Description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            src: 'images/p-four.jpeg',
        },
        {
            id: 4,
            Title: 'Title',
            Description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            src: 'images/p-five.jpeg',
        },
        {
            id: 5,
            Title: 'Title',
            Description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            src: 'images/p-six.jpeg',
        },
        {
            id: 6,
            Title: 'Title',
            Description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            src: 'images/p-three.jpeg',
        },
        ]
    }
    return (
        <section className="content-section text-center" id="Portfolio">
            <div className="container">
                <div className="block-heading">
                    <h2>{data.Title}</h2>
                    <p>{data.Description}</p>
                </div>
                <div className="portfolio-wrapper clearfix">
                    {
                        data.items.map((item) => (
                            <a className="each-portfolio" data-fancybox="gallery" href={item.src}>
                                <div className="content hover-cont-wrap">
                                    <div className="content-overlay"></div>
                                    <img className="content-image" src={item.src} />
                                    <div className="content-details fadeIn-bottom">
                                        <h5 className="p-title">{item.Title}</h5>
                                        <p className="p-desc">{item.Description}</p>
                                        <span className="zoom"><i className="fa fa-search-plus"></i></span>
                                    </div>
                                </div>
                            </a>                        
                        )            
                    )};
                </div>
            </div>
        </section>
    )
}