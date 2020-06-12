import React from 'react';
import styled from 'styled-components/macro';
import calculatorImage from 'assets/calculator.webp';
//@ts-ignore
import WebpImage from 'react-webp-image';
import TextInput from 'components/UI/TextInput';


const SSwapper = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
`

const SFormSection = styled.section`
    flex: 1;
`

const SWebpImage = styled(WebpImage)`
    width: 100%;
    height: 100%;
`

const SImageSection = styled.section`
    flex: 2;
    object-fit: fill;
`

const Login = React.memo(() => {
    return (
        <SSwapper>
            <SImageSection>
                <SWebpImage webp={calculatorImage} alter={'background'} />
            </SImageSection>
            <SFormSection>
                 <TextInput label={'Email'} placeholder={'example@gmail.com'}/>
                 <TextInput label={'Password'} placeholder={'********'}/>
            </SFormSection>
        </SSwapper>
    )
})


export default Login;