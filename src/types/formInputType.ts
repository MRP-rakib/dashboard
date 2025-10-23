export interface FormInputType{
    label: string;
  name?: string;
  type?: string;
  value?: string;
  placeholder?: string;
  className?:string
  readOnly?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}