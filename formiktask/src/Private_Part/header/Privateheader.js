import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import {Navbar,Nav, NavDropdown,Form} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { SidebarData } from './SidebarData';
import 'antd/dist/antd.css';
import Profile from '../../IMG/ProfileIcon.png';

const { Sider } = Layout;

export const Privateheader = ({ children }) => {
  console.log(children);
  const [state, setState] = useState(false);
  const onCollapse = () => setState(!state);
  const history = useHistory();

  const logout = () => {
    localStorage.clear();
    history.push('/login');
  };
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        collapsible
        collapsed={state}
        onCollapse={() => {
          onCollapse();
        }}
      >
        <div className="logo" />

        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          {SidebarData() &&
            SidebarData().map((item, index) => {
              return (
                <>
                  <Menu.Item key={index + 1} icon={item.icon}>
                    <Link to={item.path}>
                      <span>{item.title}</span>
                    </Link>
                  </Menu.Item>
                </>
              );
            })}
        </Menu>
      </Sider>
      <Layout>
        <Navbar bg="light">
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/dash">Home</Nav.Link>
              <Nav.Link href="#link"></Nav.Link>
            </Nav>
            <Form inline>
              <Nav className="mr-sm-2">
                <Nav.Link href="/createblog">Create Blog</Nav.Link>
                <NavDropdown title=" User Profile" icon={Profile}>
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="#logout"
                    className="btn btn-success"
                    onClick={logout}
                  >
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Form>
          </Navbar.Collapse>
        </Navbar>
        {children}
      </Layout>
    </Layout>
  );
};

export default Privateheader;
