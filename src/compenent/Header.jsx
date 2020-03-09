import React, { Component } from 'react';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display : false
          }
    }
    render() { 
        return ( 
            <div className="bloc">
                <div className="logo">
                    <img src="logo.png"></img>
                    <h1>Docplanner <span>Group</span></h1> 
                </div>
                <div className="menu">
                    <ul>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Career</a></li>
                        <li onClick={()=>this.setState({display:!this.state.display})}><a href="#">Departments</a>
                          <ul className={!this.state.display ? "hide":"sousmenu"}>
                              <li>Marketing et PR</li>
                              <li>Customer Success et Sales</li>
                              <li>It, Product, Design, et UX Data </li>
                              <li>Finance et Administration</li>
                              <li>HR et More</li>
                          </ul>
                        </li>
                    </ul>
                </div>
            </div>
         );
    }
}
 
export default Header;