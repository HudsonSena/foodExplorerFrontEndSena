import { Container } from './styles';
import { Button }  from '../Button';

export function FoodItem({ isNew, value, onClick, ...rest}){
    return (
        <Container isNew={isNew}>
            <input 
                type="text"
                value={value}
                readOnly={!isNew}
                {...rest}
            />

            <Button 
                type="button"
                onClick={onClick}
                className={isNew ? 'button-add' : 'button-delete'}
                value={isNew ? '+' : 'x'}
            >
            </Button>
        </Container>
    )
}