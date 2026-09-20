// সব জায়গার সাদা/surface বাক্স। রঙ, border, ছায়া এক জায়গায়।
// padded={false}: ভেতরে padding নেই (Table-এর মতো পুরো চওড়া জিনিসের জন্য)
function Card({ children, className = "", padded = true }) {
    return (
        <div
            className={`rounded-2xl border border-line bg-surface shadow-sm ${
                padded ? "p-5" : ""
            } ${className}`}
        >
            {children}
        </div>
    );
}

export default Card;
