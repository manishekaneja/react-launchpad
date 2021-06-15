type LayoutProps = {
  withFlex?: boolean;
  classname?: string;
};
type InputFieldProps = {
  value: string;
  type?: 'text' | 'password';
  identifier?: string;
  label?: string;
  onChange: (string) => void;
  error: string;
  placeholder?: string;
};
