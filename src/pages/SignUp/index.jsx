import { api } from '../../services/api';
import { Container, Form } from './styles';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function handleSingUp() {
        if (!name || !email || !password) {
            alert("Preencha todos os campos!");
        } else {
            api.post("/users", { name, email, password }).then(() => {
                alert("Usuário cadastrado com sucesso!");
                navigate("/");

            }).catch(error => {
                if (error.response) {
                    alert(error.response.data.message);
                } else {
                    alert("Não foi possível cadastrar");
                }
            })
        }
    }

    return (
        <Container>
            <div>
                <svg width="26" height="31" viewBox="0 0 26 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 0.866394L25.9904 8.36639V23.3664L13 30.8664L0.00961876 23.3664V8.36639L13 0.866394Z" fill="#065E7C" />
                </svg>
                <h1>food explorer</h1>
            </div>
            <Form>
                <h2>Crie sua conta</h2>

                <div>
                    <label htmlFor="inputName">Nome</label>
                    <Input
                        id="inputName"
                        placeholder="Nome do Usuário"
                        size="40"
                        type="name"
                        autoComplete="off"
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="inputMail">Email</label>
                    <Input
                        id="inputMail"
                        placeholder="exemplo@exemplo.com" size="40"
                        type="email"
                        autoComplete="email"
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="inputPassword">Senha</label>
                    <Input
                        id="inputPassword"
                        placeholder="No mínimo 6 caracteres"
                        size="40"
                        autoComplete="new-password"
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>

                <Button
                    title="Criar conta"
                    onClick={handleSingUp}
                />

                <Link to="/">Ja tenho uma conta</Link>
            </Form>
        </Container>
    )
}