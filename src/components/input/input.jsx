import InputMask from 'react-input-mask';

const Input = ({inputType, mask, id, onBlur}) => {
    if(onBlur) {
        console.log('onBlur')
        return <InputMask id={id} mask={mask} type={inputType} onBlur={onBlur}  style={{marginTop: '5px'}} />
    } else {
        console.log('normal')
        return <InputMask id={id} mask={mask} type={inputType}  style={{marginTop: '5px'}} />
    }
};

export default Input;