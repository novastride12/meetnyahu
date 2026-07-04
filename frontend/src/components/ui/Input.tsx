import type { InputHTMLAttributes } from "react";
import { cn } from "../../lib/cn";

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  helperText?: string;
}

export default function Input({
  label,
  id,
  error,
  helperText,
  className,
  required,
  ...props
}: InputProps) {
  return (
    <div className="form-group">
      <label htmlFor={id}>
        {label}
        {required && (
          <span
            style={{
              color: "#EF4444",
              marginLeft: 4,
            }}
          >
            *
          </span>
        )}
      </label>

      <input
        id={id}
        className={cn(className)}
        required={required}
        {...props}
      />

      {helperText && !error && (
        <small>{helperText}</small>
      )}

      {error && (
        <small
          style={{
            color: "#EF4444",
            fontWeight: 500,
          }}
        >
          {error}
        </small>
      )}
    </div>
  );
}