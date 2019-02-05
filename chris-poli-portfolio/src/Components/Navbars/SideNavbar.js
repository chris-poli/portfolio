import React, {Component} from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import {routes} from '../../Constants/routes'
import {NavLink, withRouter} from "react-router-dom";


class SideNavbar extends Component {

    downloadFile(route) {
        console.log("clicked");
        if (route.type === 'download') {
            var win = window.open(route.resource,'_blank');
            win.focus();
        } else if (route.type === 'route') {
            //redirect user here.
            this.props.history.push(`/${route.route}`);
        }
    }

    render() {
        return (

            <SideNav
                onSelect={(selected) => { }}>
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="home">
                    {routes.map(route=>(
                        <NavItem key={route.label} onClick={() => this.downloadFile(route)} oid={route.label} eventKey={route.label}>
                            <NavIcon>
                                {console.log(route.icon)}
                                <i className={route.icon} style={{ fontSize: '1.75em' }} />
                            </NavIcon>
                            <NavText>{route.label}</NavText>
                            {route.extras && route.extras.map(extra => (
                                <NavItem>
                                    <NavText>{extra.label}</NavText>
                                </NavItem>
                            )) }

                        </NavItem>
                    ))}
                </SideNav.Nav>
            </SideNav>
        );
    }
}

export default withRouter(SideNavbar);