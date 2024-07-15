import { Container } from './styles';

export function Input({ icon: Icon, ...rest }) {
    return (
        <Container>
            {Icon && <Icon size={40} />}
            <input {...rest} />
        </Container>
    )
}