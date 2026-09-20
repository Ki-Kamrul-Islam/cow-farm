// অনন্য আইডি বানায়।
// crypto.randomUUID শুধু নিরাপদ পরিবেশে (localhost/https) চলে, তাই বিকল্পও রাখলাম।
export function generateId() {
    if (typeof crypto !== "undefined" && crypto.randomUUID) {
        return crypto.randomUUID();
    }
    return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}
