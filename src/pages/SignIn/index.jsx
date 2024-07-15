import { useState } from 'react';
import { Container, Form } from './styles';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';

export function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { signIn } = useAuth();

    function handleSignIn() {
        signIn({ email, password });
    }

    function handleKeyDown(event) {
        if (event.key === "Enter") {
            handleSignIn();
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
                <h2>Faça login</h2>

                <div>
                    <label htmlFor="inputMail">Email</label>
                    <Input
                        id="inputMail"
                        placeholder="Email"
                        type="email"
                        size="40"
                        onChange={e => setEmail(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                    <p>
                        *Adm: hudson@gmail.com <br /> *Comum User: sena@gmail.com
                    </p>
                </div>
                <div>
                    <label htmlFor="inputPassword">Senha</label>
                    <Input
                        id="inputPassword"
                        placeholder="Senha"
                        type="password"
                        size="40"
                        onChange={e => setPassword(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                    <p>
                        *Adm: 12345h <br />
                        *Comum User: 12345s
                    </p>
                </div>

                <Button
                    title="Entrar"
                    className="enter"
                    onClick={handleSignIn}
                />

                <Link to="/register">Criar uma conta</Link>
            </Form>
        </Container>
    )
}