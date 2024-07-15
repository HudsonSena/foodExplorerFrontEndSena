import { Container } from './styles';

export function ButtonText({ icon: Icon, title, value, ...rest }) {
    return(
        <Container {...rest}>
            {Icon && <Icon size={25} />}
            {title}
            {value}
        </Container>
    )
}