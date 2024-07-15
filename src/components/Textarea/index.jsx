import { Container } from './styles';

export function Textarea({ defaultValue, ...rest }) {
    return (
        <Container {...rest}>
            {defaultValue}
        </Container>
    )
}