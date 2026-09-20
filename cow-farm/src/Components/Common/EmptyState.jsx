// তালিকা খালি থাকলে এটা দেখাই (ফাঁকা পর্দার বদলে)
// action: ঐচ্ছিক বোতাম (8B-তে "গরু যোগ করুন" বোতাম এখানে বসবে)
function EmptyState({ icon: Icon, title, description, action }) {
    return (
        <div className="flex flex-col items-center rounded-2xl border border-dashed border-line bg-surface px-6 py-16 text-center">
            {Icon && (
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon size={26} />
                </span>
            )}
            <h2 className="mt-4 font-semibold text-content">{title}</h2>
            {description && (
                <p className="mt-1 max-w-sm text-sm text-muted">
                    {description}
                </p>
            )}
            {action && <div className="mt-5">{action}</div>}
        </div>
    );
}

export default EmptyState;
