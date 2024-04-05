import "./style.css";
import { InputHTMLAttributes } from "react";
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  register?: any;
  name: string;
  error?: any;
  label?: string;
}

export const BGradio = ({
  label,
  register,
  name,
  placeholder,
  error,
  ...rest
}: InputProps) => {
  return (
    <div className="radio-form">
      {label && <div className="radio-label">{label}</div>}
      <div className={!!error ? "radio-field borded" : "radio-field"}>
        <input
          {...(register && { ...register(name) })}
          {...rest}
          className={!!error ? "error" : "radio-input"}
          type="radio"
        />
      </div>
    </div>
  );
};
