import React from 'react';
import {connect} from 'react-redux';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Dropdown, 
  DropdownToggle, 
  DropdownMenu, 
  DropdownItem} from 'reactstrap';
import './navBar.css';
// import ntTumbler from '../staticAssets/9Ttumblr-icon.jpg';
// import NTTwitter from '../staticAssets/NTtwitter.jpg';
// import NTFB from '../staticAssets/NTfacebook.jpg';
export class NavBar extends React.Component {
  constructor(props){
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      modal: false,
      dropdown: false,
      currentCart: ''
    };
    this.toggle = this.toggle.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  toggleModal(){
    this.setState({
      modal: !this.state.modal
    });
  }

  toggleDropdown(){
    this.setState({
      dropdown: !this.state.dropdown
    });
  }



  render() {
    return (
      <div className='navBarMain'>
      <Navbar className='navBarBody' color="faded" light expand="md">

        <NavbarToggler onClick={this.toggle} id="NavbarToggler" className='mr-auto'/>
        <Collapse isOpen={this.state.isOpen} navbar>

        <Nav className="mr-auto" navbar>

          <NavItem className='sparkley'>
            <NavLink className='navClickables' href="/home">HOME</NavLink>
          </NavItem>  
          <NavItem>
            <NavLink className='navClickables' href="/latest">Latest</NavLink>
          </NavItem>
          
          <NavItem>
            <NavLink className='navClickables' href='/archive'>Archive</NavLink>          
          </NavItem>
          <NavItem>
            <NavLink className='navClickables' href='/cast'>Cast</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className='navClickables' href='/about'>About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className='navClickables' href='/team'>Team</NavLink>
          </NavItem>
             {/*     <section className='mediaRight'>
                   <NavItem>
                    <img className='socialMedia' src={NTFB} alt='' />
                   </NavItem>
                   <NavItem>
                    <img className='socialMedia' src={NTTwitter} alt=''/>
                  </NavItem>
                  <NavItem>
                    <img className='socialMedia' src={ntTumbler} alt=''/>
                  </NavItem>
                  </section>*/}
         
         
        </Nav>

        
        </Collapse>

        </Navbar>


      </div>
    );
      
  }

}

// const mapStateToProps = state => ({

// });

export default connect()(NavBar);