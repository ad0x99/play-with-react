import { FC, InputHTMLAttributes } from 'react';

import { FormInputLabel, Group, Input } from './FormInput.styles';

type FormInputProps = {
  label: string;
  inputOptions: InputHTMLAttributes<HTMLInputElement>;
};

const FormInput: FC<FormInputProps> = ({ label, inputOptions }) => {
  return (
    <Group className="group">
      <Input {...inputOptions} />

      {label && (
        <FormInputLabel
          shrink={Boolean(
            inputOptions.value &&
              typeof inputOptions.value === 'string' &&
              inputOptions.value.length
          )}
        >
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
