import { ButtonsContainer } from './styles';

const Buttons = ({label, onClick}) => {
  return (
    <ButtonsContainer onClick={onClick} type="button">
      { label }
    </ButtonsContainer>
  );
}

export default Buttons;
  