import { NumberInputType } from 'types/components';
import { InputContainer, Label, Help, Container } from './style';

import CurrencyInput from 'react-currency-input-field';

const NumberInput = ({ label, help, currency, maxValue, maxLength, onChange}: NumberInputType) => {

  const onValueChange = (value: string | undefined) => {
    const numberValue = Number(value?.replace(',','.'));
    onChange(numberValue);
  }

  return (
    <Container>
      <Label>{label} *</Label>
      <InputContainer hasHelp={!!help}>
        <CurrencyInput
          allowNegativeValue={false}
          max={maxValue}
          decimalsLimit={2}
          maxLength={maxLength}
          onValueChange={(value) => onValueChange(value)}
          intlConfig= { currency ? { locale: 'pt-BR', currency: 'BRL' } : undefined} 
        />
      </InputContainer>

      {help && <Help>{help}</Help>}
    </Container>
  );
}

export default NumberInput;