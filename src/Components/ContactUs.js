import React, {useState} from 'react';

export default function ContactUs(){
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [message, setMessage] = useState('');


    const data = {
        title: 'Contact Us',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        contact: {
            FirstName: firstName,
            LastName: lastName,
            Email: email,
            Mobile: mobile,
        },
        companyContact: [{
                    title: 'Headquaters',
                    address: '35 Street - Cheyenne, CO 80810',
                    phone: '+123 4567 898',
                    email: 'email@yourdomain.com',
                    className: 'address-block border-bottom',
                },
                {   title: 'Branch',
                    address: '35 Street - Cheyenne, CO 80810 address 2',
                    phone: '+123 4567 999',
                    email: 'email2@yourdomain.com',
                    className: 'address-block',
                }],
        message: message,   
        }

        function onClick(){
            alert("TESTE data: "+ data.contact.FirstName + " "
                                + data.contact.LastName + " "
                                + data.contact.Email + " "
                                + data.contact.Mobile + " "
                                + data.message + " .");
        }

        return (
            <section id="Contact" className="content-section">
                <div className="container">
                    <div className="block-heading">
                        <h2>{data.title}</h2>
                        <p>{data.description}</p>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <div className="contact-wrapper">
                            {
                                data.companyContact.map((item) => (
                                    <div className={item.className}>
                                        <h3 className="add-title">{item.title}</h3>
                                        <div className="c-detail">
                                            <span className="c-icon"><i className="fa fa-map-marker" aria-hidden="true"></i></span><span className="c-info">{item.address}</span>
                                        </div>
                                        <div className="c-detail">
                                            <span className="c-icon"><i className="fa fa-phone" aria-hidden="true"></i></span><span className="c-info">{item.phone}</span>
                                        </div>
                                        <div className="c-detail">
                                            <span className="c-icon"><i className="fa fa-envelope" aria-hidden="true"></i></span><span className="c-info">{item.email}</span>
                                        </div>
                                    </div>)
                                )
                            }
                               
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <div className="form-wrap">
                                <form action="javascript:void(0)" method="post">
                                    <div className="fname floating-label">
                                        <input type="text" className="floating-input"
                                         value={firstName}
                                         onChange={ e => setFirstName(e.target.value)}
                                         name="full name" />
                                        <label for="title">First Name</label>
                                    </div>
                                    <div className="fname floating-label">
                                        <input type="text" className="floating-input" 
                                        value = {lastName}
                                        onChange={e => setLastName(e.target.value)}
                                        name="full name" />
                                        <label for="title">Last Name</label>
                                    </div>
                                    <div className="email floating-label">
                                        <input type="email" className="floating-input" 
                                        value = {email}
                                        onChange = {e => setEmail(e.target.value)}
                                        name="email" />
                                        <label for="email">Email</label>
                                    </div>
                                    <div className="contact floating-label">
                                        <input type="tel" className="floating-input" 
                                        value = {mobile}
                                        onChange = {e => setMobile(e.target.value)}
                                        name="contact" />
                                        <label for="email">Mobile</label>
                                    </div>
                                    <div className="company floating-label">
                                        <textarea type="text" className="floating-input" 
                                        value ={message}
                                        onChange = {e => setMessage(e.target.value)}
                                        name="company" />
                                        <label for="email">Message</label>
                                    </div>
                                    <div className="submit-btn">
                                        <button type="submit" onClick={onClick}>Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
