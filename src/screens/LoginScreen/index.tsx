import React, {FC, useState} from 'react';
import InputField from '../../components/InputField';
import Layout from '../../components/Layout';
import useFormBuilderHook from '../../hooks/useFormBuilderHook';

const LoginScreen: FC<NoProps> = () => {
  const [value] = useState('');
  const {controlledFormState, propsToPass, resetForm} = useFormBuilderHook([
    {
      error: 'Some Error',
      value: '',
      identifier: 'firstname',
      label: 'First Name',
      placeholder: '',
      type: 'text',
      onChange: () => {},
    },
  ]);

  return (
    <Layout withFlex>
      <form
        noValidate
        onSubmit={(event) => {
          event.preventDefault();
          console.log({
            value,
          });
        }}
        className="card  space-y-4 flex w-full max-w-sm flex-stretch flex-col "
      >
        <div>
          <h2 className="text-2xl text-center">Form</h2>
          {controlledFormState.map((singleInputProps) => (
            <InputField {...propsToPass(singleInputProps)} />
          ))}
        </div>
        <div className="flex flex-col">
          <button type="submit" className="border-2 rounded p-2">
            Login
          </button>
          <button
            type="reset"
            onClick={resetForm}
            className="text-xs p-0 mt-2 text-gray-500 hover:underline"
          >
            Reset
          </button>
        </div>
      </form>
    </Layout>
  );
};

export default LoginScreen;
