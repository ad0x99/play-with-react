import { FormInputLabel, Group, Input } from './FormInput.styles';

const FormInput = ({ label, inputOptions }) => {
  return (
    <Group className="group">
      <Input {...inputOptions} />

      {label && (
        <FormInputLabel shrink={inputOptions.value.length}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
