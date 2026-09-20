// সব জায়গার সাদা/surface বাক্স। রঙ, border, ছায়া এক জায়গায়।
// className দিয়ে দরকারমতো বাড়তি style যোগ করা যায়।
function Card({ children, className = "" }) {
    return (
        <div
            className={`rounded-2xl border border-line bg-surface p-5 shadow-sm ${className}`}
        >
            {children}
        </div>
    );
}

export default Card;
