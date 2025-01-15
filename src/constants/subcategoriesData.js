export const subcategoriesData = {
    clothing: ["sweaters", "cardigans", "tops", "pants", "skirts", "socks", "hats_headbands", "scarves", "gloves"],
    accessories: ["bags", "purses", "wallets", "jewelry"],
    home: ["blankets", "pillows", "baskets", "wall_hangings", "home_decor", "kitchen_items", "cozies"],
    toys: ["stuffed_animals", "dolls", "toy_clothing", "interactive_toys", "baby_toys"]
}

export const subcategoriesUI = {
    "hats_headbands": "hats & headbands",
    "wall_hangings": "walls hangings",
    "home_decor": "home decor",
    "kitchen_items": "kitchen items",
    "stuffed_animals": "stuffed animals",
    "toy_clothing": "toy clothing",
    "interactive_toys": "interactive toys",
    "baby_toys": "baby toys",
}

export function mapToSubcategoryUI(subcategory) {
    return subcategoriesUI[subcategory] || subcategory;
}