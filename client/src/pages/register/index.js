import React from 'react';
import { withRouter } from "react-router-dom";

import api from "../../api";
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



class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            name: '',
            err: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = async e => {
        e.preventDefault();
        
        const { name, email, password } = this.state;

        if (!name || !email || !password) {
            this.setState({ err: "Preencha todos os dados para se cadastrar" });
        } else {
            try {
                const response = await api.post("/login/register", this.state);
        
                const { error, msg, token } = response.data;

                if (error)
                    this.setState({ err: error });

                if (msg)
                    this.setState({ err: msg });

                if (token)
                    setTimeout(() => this.props.history.push("/"), 4000);
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
                    <DivGeral>CADASTRO DE USUÁRIO</DivGeral>
                    <DivGeral><Err>{this.state.err}</Err></DivGeral>
                    <form onSubmit={this.handleSubmit}>
                        <Div>
                            <label>Nome</label>
                        </Div>

                        <Input
                            name="user_name"
                            type="text"
                            required="required"
                            onChange={e => this.setState({ name: e.target.value })}
                            placeholder="Nome do Usuário"
                            autoComplete="new-name"
                        />

                        <Div>
                            <label>Email</label>
                        </Div>

                        <Input
                            name="user_mail"
                            type="email"
                            required="required"
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
                            onChange={e => this.setState({ password: e.target.value })}
                            autoComplete="new-password"
                        />

                        <Div>
                            <Button type="submit">Cadastrar</Button>
                        </Div>

                        <DivGeral>
                            <Link href="/">Login</Link>
                        </DivGeral>
                    </form>
                </Panel>
            </Container>
        )
    }
}

export default withRouter(Register);