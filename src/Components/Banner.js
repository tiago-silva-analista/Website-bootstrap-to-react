import React,{Component} from 'react';

class Banner extends Component{
    constructor(props){
        super(props);
        this.state = 
            {
                Id: 0,
                Title: 'Bootstrap Template - React',
                Description: 'This originally was developed only in BootStrap, but now er have  React concepts implemented...',
                Link:{Title:'Find Out More',
                        URL: '#About',}
              }                   
    }
    render(){
        return(
            <section id="Banner" class="content-section">
            <div class="container content-wrap text-center">
              <h1>{this.state.Title}</h1>
              <h3>
                <em>{this.state.Description}</em>
              </h3>
              <a class="btn btn-primary btn-xl smooth-scroll" href={this.state.Link.URL}>{this.state.Link.Title}</a>
            </div>
            <div class="overlay"></div>
          </section>
        )
    }
}

export default Banner