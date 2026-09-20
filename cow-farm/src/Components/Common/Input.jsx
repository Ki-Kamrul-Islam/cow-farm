import { useId } from "react";
import FormField from "./FormField";
import { controlClass } from "./formStyles";

// className যায় বাইরের কাঠামোয় (grid-এর জায়গা ঠিক করতে), বাকি সব prop <input>-এ
function Input({ label, error, hint, required, className = "", id, ...rest }) {
    const autoId = useId();
    const inputId = id ?? autoId;

    return (
        <FormField
            id={inputId}
            label={label}
            error={error}
            hint={hint}
            required={required}
            className={className}
        >
            <input
                id={inputId}
                aria-invalid={Boolean(error)}
                aria-required={required}
                aria-describedby={error ? `${inputId}-error` : undefined}
                className={controlClass(Boolean(error))}
                {...rest}
            />
        </FormField>
    );
}

export default Input;
