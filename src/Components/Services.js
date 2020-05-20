import React,{Component} from 'react'

function Services(){
    let  servicesList = 
            {
                Id: 0,
                icon:'',
                classNameColor:'',
                Title: '',
                Description: ''
            }  

        return (
            <section id="Services" className="content-section text-center">
                <div className="container">
                    <div className="block-heading">
                        <h2>What We Offer</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <div className="service-box">
                                <div className="service-icon yellow">
                                    <div className="front-content">
                                        <i className="fa fa-globe" aria-hidden="true"></i>
                                        <h3>Family Travel</h3>
                                    </div>
                                </div>
                                <div className="service-content">
                                    <h3>Family Travel</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="service-box">
                                <div className="service-icon orange">
                                    <div className="front-content">
                                        <i className="fa fa-suitcase"></i>
                                        <h3>Business Travel</h3>
                                    </div>
                                </div>
                                <div className="service-content">
                                    <h3>Business Travel</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="service-box ">
                                <div className="service-icon red">
                                    <div className="front-content">
                                        <i className="fa fa-male" aria-hidden="true"></i>
                                        <h3>Solo Travel</h3>
                                    </div>
                                </div>
                                <div className="service-content">
                                    <h3>Solo Travel</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="service-box">
                                <div className="service-icon grey">
                                    <div className="front-content">
                                        <i className="fa fa-users"></i>
                                        <h3>Camping</h3>
                                    </div>
                                </div>
                                <div className="service-content">
                                    <h3>Camping</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
export default Services