import React from 'react';

const menu = [
    {
        Id: 0,
        Title: '',
        Link: '#',
      },
    {
      Id: 1,
      Title: 'Home',
      Link: '#Banner',
    },
    {
        Id: 2,
        Title: 'About',
        Link: '#About',
    },    
    {
        Id: 3,
        Title: 'Services',
        Link: '#Services',
      },
      {
        Id: 4,
          Title: 'Portfolio',
          Link: '#Portfolio',
      },    {
        Id: 5,
        Title: 'Testimonials',
        Link: '#Testimonials',
      },
      {
          Id: 6,
          Title: 'Contact',
          Link: '#Contact',
      }]

class Header extends React.Component {

    render() {
        return (
            <>
                <div className="logo">
                    <i  className="fa fa-code" aria-hidden="true"><span>{this.props.Title}</span></i>
                </div>
                <a className="menu-toggle rounded" href="#">
                    <i className="fa fa-bars"></i>
                </a>
                <nav id="sidebar-wrapper">
                    <ul className="sidebar-nav">
                        {
                            menu.map((item) => (
                            <li key ={item.Id} className="sidebar-brand" style={{height:'50px'}}>
                                <a className="smooth-scroll" style={{fontSize:'16px'}} href={item.Link}>{item.Title}</a>
                            </li>))
                        }
                    </ul>
                </nav>
            </>
        )
    }

}

export default Header;