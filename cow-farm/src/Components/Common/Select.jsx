import { useId } from "react";
import FormField from "./FormField";
import { controlClass } from "./formStyles";

// options: [{ value: 'active', label: 'সক্রিয়' }, ...]
function Select({
    label,
    error,
    hint,
    required,
    options,
    className = "",
    id,
    ...rest
}) {
    const autoId = useId();
    const selectId = id ?? autoId;

    return (
        <FormField
            id={selectId}
            label={label}
            error={error}
            hint={hint}
            required={required}
            className={className}
        >
            <select
                id={selectId}
                aria-invalid={Boolean(error)}
                aria-describedby={error ? `${selectId}-error` : undefined}
                className={controlClass(Boolean(error))}
                {...rest}
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </FormField>
    );
}

export default Select;
