import { Container, Content, Row } from "./styles";
import  Input  from './components/Input';
import Buttons from './components/Buttons';
import { useState } from 'react';


const App = () => {
    const [currentNumber, setCurrentNumber] = useState('0');
    const [firstNumber, setFirstNumber] = useState('0');
    const [operation, setOperation] = useState('');


    const handleEquals = () => {
        if (firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
            const num1 = parseFloat(firstNumber);
            const num2 = parseFloat(currentNumber);
            let result = 0;

            switch (operation) {
                case '+':
                    result = num1 + num2;
                    break;
                case '-':
                    result = num1 - num2;
                    break;
                case '*':
                    result = num1 * num2;
                    break;
                case '/':
                    if (num2 === 0) {
                        alert('Não é possível dividir por zero');
                        handleClear();
                        return;
                    }
                    result = num1 / num2;
                    break;
                default:
                    return;
            }

            setCurrentNumber(String(result));
            setFirstNumber('0');
            setOperation('');
        }
    }   

    const handleClear = () => {
        setCurrentNumber('0');
        setFirstNumber('0');
        setOperation('');
    }

    const handleAddNumber = (num) => {
        if (num === '.' && currentNumber.includes('.')) return;
        setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`);
    }

    const handleOperation = (op) => {
        if (firstNumber === '0') {
            setFirstNumber(currentNumber);
            setCurrentNumber('0');
        } else if (currentNumber !== '0') {
            handleEquals();
        }
        setOperation(op);
    }
    
    return (
        <Container>
  <Content>
    <h1>iCalc</h1>
    <Input value={currentNumber} />

    <Row>
      <Buttons label="C" onClick={() => handleClear('C')} />
      <Buttons label="/" onClick={() => handleOperation('/')} />
      <Buttons label="*" onClick={() => handleOperation('*')} />
      <Buttons label="." onClick={() => handleAddNumber('.')} />
    </Row>

    <Row>
      <Buttons label="7" onClick={() => handleAddNumber('7')} />
      <Buttons label="8" onClick={() => handleAddNumber('8')} />
      <Buttons label="9" onClick={() => handleAddNumber('9')} />
      <Buttons label="+" onClick={() => handleOperation('+')} />
    </Row>

    <Row>
      <Buttons label="4" onClick={() => handleAddNumber('4')} />
      <Buttons label="5" onClick={() => handleAddNumber('5')} />
      <Buttons label="6" onClick={() => handleAddNumber('6')} />
      <Buttons label="-" onClick={() => handleOperation('-')} />

    </Row>

    <Row>
      <Buttons label="1" onClick={() => handleAddNumber('1')} />
      <Buttons label="2" onClick={() => handleAddNumber('2')} />
      <Buttons label="3" onClick={() => handleAddNumber('3')} />
      <Buttons label="=" onClick={() => handleEquals('=')} />
      
    </Row>

    <Row>
      <Buttons label="0" onClick={() => handleAddNumber('0')} />
    </Row>
            </Content>
        </Container>
    );
}

export default App;