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
        <NavbarBrand href="/home" id="brandType" className='brandType'>9T</NavbarBrand>
        <Collapse isOpen={this.state.isOpen} navbar>

        <Nav className="ml-auto" navbar>

          <NavItem>
            <NavLink className='navClickables' href="/">Home</NavLink>
          </NavItem>
          
          <Dropdown isOpen={this.state.dropdown}
                    toggle={this.toggleDropdown}>
            <DropdownToggle className='navClickables' caret>
              Products
            </DropdownToggle>
            <DropdownMenu>

              <DropdownItem className='navClickables' href='/products/specials'>Specials</DropdownItem>
              <DropdownItem className='navClickables' href='/products/clothing'>Clothing</DropdownItem>
              <DropdownItem className='navClickables' href='/products/food'>Food</DropdownItem>
              <DropdownItem className='navClickables' href='/products/alcohol'>Alcohol</DropdownItem>
            </DropdownMenu>
          </Dropdown>

          <NavItem>
            <NavLink className='navClickables' href="/about">About</NavLink>
          </NavItem>
          {
            localStorage.getItem('validLogin') ?
             <NavItem> 
              <NavLink className='navClickables'>
                Account
              </NavLink>
             </NavItem>
             :
             null
          }
          <NavItem>
          
          
          </NavItem>
          <NavItem>
            {localStorage.getItem('validLogin') ?
            <NavLink className='navClickables' href="/" onClick={(e)=>this.handleLogout(e)}>Log Out</NavLink>
            :
            <NavLink className='navClickables' onClick={(e)=>this.toggleModal()}>Log In/Sign Up
              <Modal isOpen={this.state.modal}>
                <ModalHeader className='navClickables' toggle={this.toggleModal}>Log In</ModalHeader>
                  <ModalBody>
                    <NavLink href='/register'><button className='loginRegisterLink'>Register</button></NavLink>
                  </ModalBody>
              </Modal>
            </NavLink>

            }
          </NavItem>
          <NavItem>
            <input className='form-control' type='search' placeholder="Search Under Construction"/>
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