import {useCallback, useRef, useState} from 'react';

function useFormBuilderHook(init: InputFieldProps[]) {
  const initialState = useRef<InputFieldProps[]>(init);
  const [formState, setFormState] = useState<InputFieldProps[]>(
    initialState.current
  );
  const resetForm = useCallback(() => setFormState(initialState.current), []);
  // const onChange = useCallback((idx) =>(value) => setFormState(ps=>{
  //   const updatedArray = [...ps];
  //   updatedArray[idx].value = value;
  //   return u
  // }), []);

  const propsToPass = useCallback(
    (props: InputFieldProps) => ({
      ...props,

    }),
    []
  );

  return {
    resetForm,
    propsToPass,
    controlledFormState:formState,
  };
}

export default useFormBuilderHook;
