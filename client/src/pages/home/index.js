import React from 'react';
import { withRouter } from "react-router-dom";


import { logout } from "../../auth";

import logo from '../../assets/logo.png';


import {
    Logo,
    GlobalStyle,
    Container,
    Link
} from '../home/styles';



class Home extends React.Component {
    constructor(props) {
        super(props);
        this.deslogar = this.deslogar.bind(this);
    }

    deslogar() {
        logout();
        this.props.history.push("/");
    }


    render() {
        return (
            <Container>
                <GlobalStyle whiteColor />

                <Logo><img src={logo} alt="LOGO GESTÃO DE CLÍNICAS" width="140" /></Logo>

                <Link onClick={this.deslogar}>Sair</Link>

            </Container>
        )
    }
}

export default withRouter(Home);