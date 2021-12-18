import {Link } from 'react-router-dom'
import React from 'react';
import '../style/style.css'
class NavBar extends React.Component {
    constructor() {
        super();
        this.state = { 
            ulbarOpen: "ulbar",
            isOpen : false,
            hamp : "hamp_line"
        }
    }
    log(){
        console.log(this.state.isOpen);
    }
    OpenAndClose(){ 
        const openUlBar=()=>{
            this.setState({isOpen : true})
            this.setState({hamp : "hamblineOpen"})
            this.setState({ulbarOpen : "ulbar ulbarOpen"})
        }
        const closeUlBar=()=>{
            this.setState({isOpen : false})
            this.setState({hamp : "hamp_line"})
            this.setState({ulbarOpen : "ulbar"})
        }
        if(this.state.isOpen === false){
            openUlBar();
        }else{
            closeUlBar();
        }
    }
    linkClick(){
        this.setState({isOpen:false})
        this.setState({hamp: "hamp_line"})
        this.setState({ulbarOpen: "ulbar"})
    }
    render() { 
        return ( 
            <nav className="navbar">
                <Link to="/" className="Home_link">Fake Store</Link>
                <div onClick={()=>this.OpenAndClose()} className="hamp">
                    <span className={this.state.hamp}></span>
                    <span className={this.state.hamp}></span>
                    <span className={this.state.hamp}></span>
                </div>
                <ul className={this.state.ulbarOpen}>
                    <li className="liLins">
                        <Link onClick={()=>this.linkClick()} to="/" className="ulbar_links">Home</Link>
                    </li>
                    <li className="liLins">
                        <Link onClick={()=>this.linkClick()} to="/shop" className="ulbar_links">Shop</Link>
                    </li>
                    {/* <li className="liLins">
                        <Link onClick={()=>this.linkClick()} to="/info" className="ulbar_links">Info</Link>
                    </li> */}
                    <li className="liLins">
                        <Link onClick={()=>this.linkClick()} to="/about" className="ulbar_links">About</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}
export default NavBar;