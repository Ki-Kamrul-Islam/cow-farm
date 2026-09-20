import { useId } from "react";
import FormField from "./FormField";
import { controlClass } from "./formStyles";

function Textarea({
    label,
    error,
    hint,
    required,
    className = "",
    id,
    rows = 3,
    ...rest
}) {
    const autoId = useId();
    const textareaId = id ?? autoId;

    return (
        <FormField
            id={textareaId}
            label={label}
            error={error}
            hint={hint}
            required={required}
            className={className}
        >
            <textarea
                id={textareaId}
                rows={rows}
                aria-invalid={Boolean(error)}
                aria-describedby={error ? `${textareaId}-error` : undefined}
                className={controlClass(Boolean(error))}
                {...rest}
            />
        </FormField>
    );
}

export default Textarea;
