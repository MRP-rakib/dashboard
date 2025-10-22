export interface FormInputType{
    label: string;
  name?: string;
  type?: string;
  value?: string;
  placeholder?: string;
  className?:string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}