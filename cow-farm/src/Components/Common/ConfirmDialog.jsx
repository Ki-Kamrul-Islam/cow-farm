import Modal from "./Modal";
import Button from "./Button";
import { useLanguage } from "../../hooks/useLanguage";

// "আপনি কি নিশ্চিত?" বাক্স। বিপজ্জনক কাজের আগে ব্যবহার হয়।
// শুরুতে cursor থাকে "বাতিল"-এ, তাই ভুল করে Enter চাপলেও কিছু মুছে যায় না।
function ConfirmDialog({
    isOpen,
    title,
    message,
    confirmLabel,
    cancelLabel,
    variant = "danger",
    onConfirm,
    onCancel,
}) {
    const { t } = useLanguage();

    return (
        <Modal
            isOpen={isOpen}
            onClose={onCancel}
            title={title}
            size="sm"
            footer={
                <>
                    <Button
                        variant="secondary"
                        onClick={onCancel}
                        data-autofocus
                    >
                        {cancelLabel ?? t("common.cancel")}
                    </Button>
                    <Button variant={variant} onClick={onConfirm}>
                        {confirmLabel ?? t("common.delete")}
                    </Button>
                </>
            }
        >
            <p className="text-sm leading-relaxed text-content">{message}</p>
        </Modal>
    );
}

export default ConfirmDialog;
