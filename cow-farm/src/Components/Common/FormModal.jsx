import Modal from "./Modal";
import Button from "./Button";
import { useLanguage } from "../../hooks/useLanguage";

// Form বসানোর Modal: শিরোনাম + ভেতরে Form + নিচে "বাতিল" ও "সংরক্ষণ করুন"।
// formId: ভেতরের <form>-এর id। Save বোতাম Form-এর বাইরে, তাই এই id দিয়ে Form-কে চেনে।
// পেছনে চাপলে বন্ধ হয় না, ভুল করে লেখা হারানো আটকাতে।
function FormModal({ isOpen, onClose, title, formId, size = "lg", children }) {
    const { t } = useLanguage();

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title={title}
            size={size}
            closeOnOverlayClick={false}
            footer={
                <>
                    <Button variant="secondary" onClick={onClose}>
                        {t("common.cancel")}
                    </Button>
                    <Button type="submit" form={formId}>
                        {t("common.save")}
                    </Button>
                </>
            }
        >
            {children}
        </Modal>
    );
}

export default FormModal;
