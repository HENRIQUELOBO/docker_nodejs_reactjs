import React from 'react';
import { withRouter } from "react-router-dom";


import api from "../../api";
import { login } from "../../auth";

import logo from '../../assets/logo.png';


import {
    Logo,
    GlobalStyle,
    Container,
    Panel,
    Input,
    Button,
    Div,
    Link,
    DivGeral,
    Err
} from '../login/styles';



class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            err: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = async e => {
        e.preventDefault();
    
        const { email, password } = this.state;

        if (!email || !password) {
            this.setState({ err: "Preencha todos os dados para se cadastrar" });
        } else {
            try {
                const response = await api.post("/login/auth", this.state);
                
                const { error, token } = response.data;

                if (error)
                    this.setState({ err: error });

                if (typeof token !== "undefined") {
                    login(token);
                    this.props.history.push("/home");
                }
            } catch (err) {
                if (err)
                    this.setState({ err: err });
            }
        }
    }

    render() {
        return (
            <Container>
                <GlobalStyle whiteColor />
                <Panel>
                    <Logo><img src={logo} alt="LOGO GESTÃO DE CLÍNICAS" width="140" /></Logo>
                    <DivGeral>LOGIN</DivGeral>
                    <DivGeral><Err>{this.state.err}</Err></DivGeral>
                    <form onSubmit={this.handleSubmit}>

                        <Div>
                            <label>Email</label>
                        </Div>

                        <Input
                            name="user_mail"
                            type="email"
                            required="required"
                            value={this.state.name}
                            onChange={e => this.setState({ email: e.target.value })}
                            placeholder="Usuário"
                            autoComplete="new-email"
                        />

                        <Div>
                            <label>Password</label>
                        </Div>

                        <Input
                            name="user_password"
                            type="password"
                            placeholder="Senha"
                            required="required"
                            value={this.state.password}
                            onChange={e => this.setState({ password: e.target.value })}
                            autoComplete="new-password"
                        />

                        <Div>
                            <Button type="submit">Cadastrar</Button>
                        </Div>

                        <DivGeral>
                            <Link href="/register">Não tem conta?</Link>
                        </DivGeral>
                    </form>
                </Panel>
            </Container>
        )
    }
}

export default withRouter(Login);