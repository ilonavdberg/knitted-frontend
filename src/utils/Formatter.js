
export function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('nl-NL');
}

export function formatPrice(price) {
    return `€${price.toFixed(2)}`;
}