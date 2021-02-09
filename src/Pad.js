import React from 'react';
import styled from 'styled-components';

function Pad(props) {
    return (
        <div>
            <StyledDiv1>
                <StyledButton1 onClick={props.onMemoryRecallButtonClick}>
                    MR
                </StyledButton1>
                <StyledButton1 onClick={props.onMemoryClearButtonClick}>
                    MC
                </StyledButton1>
                <StyledButton1 onClick={props.onMemoryPlusButtonClick}>
                    M+
                </StyledButton1>
                <StyledButton1 onClick={props.onMemoryMinusButtonClick}>
                    M-
                </StyledButton1>
                <StyledButton1 onClick={props.onAllClearButtonClick}>
                    AC
                </StyledButton1>
                <StyledButton1 onClick={props.onClearEntryButtonClick}>
                    C
                </StyledButton1>
                <StyledButton1 onClick={props.onChangeSignButtonClick}>
                    -/+
                </StyledButton1>
                <StyledButton1
                    onClick={(e) => props.onOperatorButtonClick(e.target.value)}
                    value='÷'>
                    ÷
                </StyledButton1>
                <StyledButton1
                    onClick={(e) => props.onDigitButtonClick(e.target.value)}
                    value='9'>
                    9
                </StyledButton1>
                <StyledButton1
                    onClick={(e) => props.onDigitButtonClick(e.target.value)}
                    value='8'>
                    8
                </StyledButton1>
                <StyledButton1
                    onClick={(e) => props.onDigitButtonClick(e.target.value)}
                    value='7'>
                    7
                </StyledButton1>
                <StyledButton1
                    onClick={(e) => props.onOperatorButtonClick(e.target.value)}
                    value='*'>
                    x
                </StyledButton1>
                <StyledButton1
                    onClick={(e) => props.onDigitButtonClick(e.target.value)}
                    value='4'>
                    4
                </StyledButton1>
                <StyledButton1
                    onClick={(e) => props.onDigitButtonClick(e.target.value)}
                    value='5'>
                    5
                </StyledButton1>
                <StyledButton1
                    onClick={(e) => props.onDigitButtonClick(e.target.value)}
                    value='6'>
                    6
                </StyledButton1>
                <StyledButton1
                    onClick={(e) => props.onOperatorButtonClick(e.target.value)}
                    value='-'>
                    -
                </StyledButton1>
                <StyledButton1
                    onClick={(e) => props.onDigitButtonClick(e.target.value)}
                    value='1'>
                    1
                </StyledButton1>
                <StyledButton1
                    onClick={(e) => props.onDigitButtonClick(e.target.value)}
                    value='2'>
                    2
                </StyledButton1>
                <StyledButton1
                    onClick={(e) => props.onDigitButtonClick(e.target.value)}
                    value='3'>
                    3
                </StyledButton1>
                <StyledButton1
                    onClick={(e) => props.onOperatorButtonClick(e.target.value)}
                    value='+'>
                    +
                </StyledButton1>
                <StyledButton1
                    onClick={(e) => props.onDigitButtonClick(e.target.value)}
                    value='0'>
                    0
                </StyledButton1>
                <StyledButton1
                    onClick={(e) => props.onPointButtonClick(e.target.value)}
                    value='.'>
                    .
                </StyledButton1>
                <StyledButton1></StyledButton1>
                <StyledButton1
                    onClick={() => props.onEqualButtonClick()}
                    value='='>
                    =
                </StyledButton1>
            </StyledDiv1>
        </div>
    );
}

export default Pad;

const StyledDiv1 = styled.div`
    max-width: 500px;
    margin: 10px;
    display: grid;
    gap: 0;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
    justify-items: center;
`;

const StyledButton1 = styled.button`
    min-width: 100px;
    min-height: 100px;
`;
