
export function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('nl-NL');
}

export function formatPrice(price) {
    if (!price) {
        return '';
    }
    return `€${price.toFixed(2)}`;
}

export function formatRating(number) {
    if (!number) {
        return '';
    }
    return number.toFixed(1);
}

export function formatAddressToString(address) {
    return `${address.street} ${address.houseNumber}${address.door ?? ''}, ${address.zipcode} ${address.city}`
}