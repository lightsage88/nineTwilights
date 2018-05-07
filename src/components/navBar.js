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
  DropdownItem
} from 'reactstrap';
import './navBar.css';
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
      <div>
      <Navbar className='navBarBody' color="faded" light expand="md">
        <NavbarToggler onClick={this.toggle} id="NavbarToggler" className='mr-2'/>
        <Collapse isOpen={this.state.isOpen} navbar>

        <Nav className="ml-auto" navbar>

          <NavItem>
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