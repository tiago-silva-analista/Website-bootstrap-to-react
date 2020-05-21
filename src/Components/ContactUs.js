import React from 'react';

class ContactUs extends React.Component {

    constructor(props){
        super(props);
        const data ={Title:'',
                     Description: '',
                     Contact:{
                         FirstName:'',
                         LastName: '',
                         Email: '',
                         Mobile: '',
                     },
                     Message: '',
                }
    }

    render() {
        return (
            <section id="Contact" className="content-section">
                <div className="container">
                    <div className="block-heading">
                        <h2>Contact Us</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <div className="contact-wrapper">
                                <div className="address-block border-bottom">
                                    <h3 className="add-title">Headquaters</h3>
                                    <div className="c-detail">
                                        <span className="c-icon"><i className="fa fa-map-marker" aria-hidden="true"></i></span><span className="c-info">&nbsp;35 Street - Cheyenne, CO 80810</span>
                                    </div>
                                    <div className="c-detail">
                                        <span className="c-icon"><i className="fa fa-phone" aria-hidden="true"></i></span><span className="c-info">+123 4567 898</span>
                                    </div>
                                    <div className="c-detail">
                                        <span className="c-icon"><i className="fa fa-envelope" aria-hidden="true"></i></span><span className="c-info">email@yourdomain.com</span>
                                    </div>
                                </div>
                                <div className="address-block">
                                    <h3 className="add-title">Branch</h3>
                                    <div className="c-detail">
                                        <span className="c-icon"><i className="fa fa-map-marker" aria-hidden="true"></i></span><span className="c-info">&nbsp;98 Berry - Cheyenne, CO 80810</span>
                                    </div>
                                    <div className="c-detail">
                                        <span className="c-icon"><i className="fa fa-phone" aria-hidden="true"></i></span><span className="c-info">+123 4567 8987</span>
                                    </div>
                                    <div className="c-detail">
                                        <span className="c-icon"><i className="fa fa-envelope" aria-hidden="true"></i></span><span className="c-info">email@yourdomain.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <div className="form-wrap">
                                <form action="javascript:void(0)" method="post">
                                    <div className="fname floating-label">
                                        <input type="text" className="floating-input" name="full name" />
                                        <label for="title">First Name</label>
                                    </div>
                                    <div className="fname floating-label">
                                        <input type="text" className="floating-input" name="full name" />
                                        <label for="title">Last Name</label>
                                    </div>
                                    <div className="email floating-label">
                                        <input type="email" className="floating-input" name="email" />
                                        <label for="email">Email</label>
                                    </div>
                                    <div className="contact floating-label">
                                        <input type="tel" className="floating-input" name="contact" />
                                        <label for="email">Mobile</label>
                                    </div>
                                    <div className="company floating-label">
                                        <textarea type="text" className="floating-input" name="company" />
                                        <label for="email">Message</label>
                                    </div>
                                    <div className="submit-btn">
                                        <button type="submit">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

}

export default ContactUs;