import React, {Component} from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import {routes} from '../../Constants/routes'
import {NavLink} from "react-router-dom";

class SideNavbar extends Component {

    downloadFile(route) {
        console.log("clicked");
        if (route.type === 'download') {

        } else if (route.type === 'route') {
            //redirect user here.
        }
    }
    render() {
        return (
            <SideNav
                onSelect={(selected) => { }}>
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="home">
                    {routes.map(route=>(
                        <NavItem id={route.label} eventKey={route.label}>
                            <NavIcon>
                                <i className="fa-heart" style={{ fontSize: '1.75em' }} />
                            </NavIcon>
                            <NavText onClick={() => this.downloadFile(route)}>
                                {route.label}
                            </NavText>
                            {route.extras && route.extras.map(extra => (
                                <NavItem>
                                    <NavText>
                                        {extra.label}
                                    </NavText>
                                </NavItem>
                            )) }

                        </NavItem>
                    ))}
                </SideNav.Nav>
            </SideNav>
        );
    }
}

export default SideNavbar;