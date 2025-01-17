export const BASE_URL = "http://localhost:8080/v1/";

export function buildUrl(table, params=[]) {
    const url = new URL(BASE_URL + table);

    Object.entries(params).forEach(([key, value]) => {
        if (value) {
            url.searchParams.append(key, value);
        }
    });

    return url.toString();
}