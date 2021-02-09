import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Pad from './Pad';
import './App.css';

function App() {
    const [memory, setMemory] = useState(0);
    const [result, setResult] = useState(0);
    const [waitingForOperand, setWaitingForOperand] = useState(true);
    const [pendingOperator, setPendingOperator] = useState();
    const [display, setDisplay] = useState('0');

    useEffect(() => {
        console.log(result, 'result of useEffect');
        console.log(waitingForOperand, 'waitingForOperand');
        console.log(pendingOperator, 'pendingOperator');
        console.log(display, 'display');
        console.log(memory, 'memory of useEffect');
        console.log('***************');
    }, [result, waitingForOperand, pendingOperator, display, memory]);

    const calculate = (rightOperand, pendingOperator) => {
        let newResult = result;

        switch (pendingOperator) {
            case '+':
                newResult += rightOperand;
                break;
            case '-':
                newResult -= rightOperand;
                break;
            case '*':
                newResult *= rightOperand;
                break;
            case '÷':
                if (rightOperand === 0) {
                    return false;
                }

                newResult /= rightOperand;
                break;
        }

        setResult(newResult);
        setDisplay(newResult.toString().slice(0, 12));
        return true;
    };

    const onDigitButtonClick = (digit) => {
        let newDisplay = display;

        if ((display === '0' && digit === 0) || display.length > 12) {
            return;
        }

        if (waitingForOperand) {
            newDisplay = '';
            setWaitingForOperand(false);
        }

        if (display !== '0') {
            newDisplay = newDisplay + digit.toString();
        } else {
            newDisplay = digit.toString();
        }

        setDisplay(newDisplay);
    };

    const onOperatorButtonClick = (operator) => {
        const operand = Number(display);

        if (typeof pendingOperator !== 'undefined' && !waitingForOperand) {
            if (!calculate(operand, pendingOperator)) {
                console.log('not calculated');
                return;
            }
        } else {
            setResult(operand);
        }

        setPendingOperator(operator);
        setWaitingForOperand(true);
    };

    const onPointButtonClick = () => {
        let newDisplay = display;

        if (waitingForOperand) {
            newDisplay = '0';
        }

        if (newDisplay.indexOf('.') === -1) {
            newDisplay = newDisplay + '.';
        }

        setDisplay(newDisplay);
        setWaitingForOperand(false);
    };

    const onEqualButtonClick = () => {
        const operand = Number(display);
        if (typeof pendingOperator !== 'undefined' && !waitingForOperand) {
            if (!calculate(operand, pendingOperator)) {
                return;
            }
            setPendingOperator(undefined);
        } else {
            setDisplay(operand.toString());
        }
        // setResult(operand);
        setWaitingForOperand(true);
    };

    const onChangeSignButtonClick = () => {
        const value = Number(display);

        if (value > 0) {
            setDisplay('-' + display);
        } else if (value < 0) {
            setDisplay(display.slice(1));
        }
    };

    const onAllClearButtonClick = () => {
        setMemory(0);
        setResult(0);
        setPendingOperator(undefined);
        setDisplay('0');
        setWaitingForOperand(true);
    };

    const onClearEntryButtonClick = () => {
        setDisplay('0');
        setWaitingForOperand(true);
    };

    const onMemoryRecallButtonClick = () => {
        console.log('onMemoryRecallButtonClick');
        setDisplay(memory.toString());
        setWaitingForOperand(true);
    };

    const onMemoryClearButtonClick = () => {
        console.log('onMemoryClearButtonClick');
        setMemory(0);
        setWaitingForOperand(true);
    };

    const onMemoryPlusButtonClick = () => {
        console.log('onMemoryPlusButtonClick');
        setMemory(memory + Number(display));
        setWaitingForOperand(true);
    };

    const onMemoryMinusButtonClick = () => {
        console.log('onMemoryMinusButtonClick');
        setMemory(memory - Number(display));
        setWaitingForOperand(true);
    };

    return (
        <StyledLayout1 className='App'>
            <StyledDiv2>
                {memory !== 0 && <span>M</span>}
                <h1>
                    {typeof pendingOperator !== 'undefined'
                        ? `${result}${pendingOperator}${
                              waitingForOperand ? '' : display
                          }`
                        : ''}
                </h1>
                {display}
                <Pad
                    onMemoryRecallButtonClick={onMemoryRecallButtonClick}
                    onMemoryClearButtonClick={onMemoryClearButtonClick}
                    onMemoryPlusButtonClick={onMemoryPlusButtonClick}
                    onMemoryMinusButtonClick={onMemoryMinusButtonClick}
                    onDigitButtonClick={onDigitButtonClick}
                    onOperatorButtonClick={onOperatorButtonClick}
                    onPointButtonClick={onPointButtonClick}
                    onEqualButtonClick={onEqualButtonClick}
                    onChangeSignButtonClick={onChangeSignButtonClick}
                    onAllClearButtonClick={onAllClearButtonClick}
                    onClearEntryButtonClick={onClearEntryButtonClick}
                />
            </StyledDiv2>
        </StyledLayout1>
    );
}

export default App;

const StyledLayout1 = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px;
    height: 100vh;
`;

const StyledDiv2 = styled.div`
    padding: 50px;
`;
