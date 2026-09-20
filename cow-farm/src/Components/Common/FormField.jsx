// প্রতিটি ঘরের চারপাশের কাঠামো: label + (ঘর) + hint অথবা error
function FormField({
    id,
    label,
    required,
    error,
    hint,
    className = "",
    children,
}) {
    return (
        <div className={className}>
            <label
                htmlFor={id}
                className="mb-1 block text-sm font-medium text-content"
            >
                {label}
                {required && (
                    <span className="ml-0.5 text-danger" aria-hidden="true">
                        *
                    </span>
                )}
            </label>

            {children}

            {error ?
                <p
                    id={`${id}-error`}
                    role="alert"
                    className="mt-1 text-xs text-danger"
                >
                    {error}
                </p>
            :   hint && <p className="mt-1 text-xs text-muted">{hint}</p>}
        </div>
    );
}

export default FormField;
