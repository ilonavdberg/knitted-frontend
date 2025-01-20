import './Menu.css';
import { Link } from "react-router-dom";
import { FunnelSimple, SortAscending } from "@phosphor-icons/react";

import Button from "@/components/button/Button.jsx";
import LinkButton from "@/components/linkbutton/LinkButton.jsx";
import { mapToSubcategoryUI, subcategoriesData } from "@/constants/subcategoriesData.js";
import { useState } from "react";


function Menu({ category, setSearchParams}) {
    const [selectedSubcategory, setSelectedSubcategory] = useState('');
    const [showFilters, setShowFilters] = useState(false);
    const [showSorting, setShowSorting] = useState(false);
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [targetGroup, setTargetGroup] = useState('');
    const [size, setSize] = useState('');

    function updateSubcategory(subcategory) {
        setSearchParams(prev => ({
            ...Object.fromEntries(prev),
            subcategory: subcategory,
        }));

        setSelectedSubcategory(subcategory);
    }

    function updateFilters() {
        setSearchParams(prev => {
            const updatedParams = { ...Object.fromEntries(prev) };

            if (minPrice !== '' || maxPrice !== '') {
                updatedParams.price = `${minPrice},${maxPrice}`;
            }

            if (targetGroup) {
                updatedParams.target = targetGroup;
            }

            if (size) {
                updatedParams.size = size;
            }

            return updatedParams;
        });
    }

    function toggleShowFilters() {
        setShowFilters(prev => !prev);
    }

    function toggleShowSorting() {
        setShowSorting(prev => !prev);
    }

    return (
        <header className="menu">
            {category ? (
                <>
                    <Link to="/product-catalog" className="menu__product-catalog-link">View all products</Link>
                    <h1 className="menu__category-name">{category}</h1>
                    <nav>
                        <ul className="menu__filters">
                            {subcategoriesData[category].map(subcategory => {
                                return (
                                    <LinkButton
                                        key={subcategory}
                                        onClick={() => updateSubcategory(subcategory)}
                                        selected={selectedSubcategory === subcategory}
                                    >
                                        {mapToSubcategoryUI(subcategory)}
                                    </LinkButton>
                                )
                            })}
                        </ul>
                    </nav>
                </>
            ) : (
                <>
                    <h1 className="menu__category-name">All products</h1>
                </>
            )}
            <div className="menu__sort-and-filter">
                <Button
                    onClick={toggleShowSorting}
                    skin="transparent"
                >
                    <span>Sort</span>
                    <SortAscending size={32}/>
                </Button>
                <Button
                    onClick={toggleShowFilters}
                    skin="transparent"
                >
                    <FunnelSimple size={32}/>
                    <span>Filter</span>
                </Button>
            </div>

            {showFilters && (
                <form className="menu__filter-options" action="">
                    <fieldset>
                        <legend>Price</legend>
                        <label htmlFor="min-price-field">
                            From
                            <input
                                type="number"
                                id="min-price-field"
                                name="min-price"
                                onChange={(e) => setMinPrice(e.target.value)}
                            />
                        </label>
                        <label htmlFor="max-price-field">
                            To
                            <input
                                type="number"
                                id="max-price-field"
                                name="max-price"
                                onChange={(e) => setMaxPrice(e.target.value)}
                            />
                        </label>
                    </fieldset>
                    {category === "clothing" && (
                        <>
                            <fieldset>
                                <legend>Target Group</legend>
                                <select
                                    id="target-group-select"
                                    name="target-group"
                                    onChange={(e) => setTargetGroup(e.target.value)}
                                >
                                    <option value="">-- select a target group --</option>
                                    <option value="females">females</option>
                                    <option value="males">males</option>
                                    <option value="unisex">unisex</option>
                                    <option value="kids">kids</option>
                                    <option value="babies">babies</option>
                                </select>
                            </fieldset>

                            <fieldset>
                                <legend>Size</legend>
                                <select
                                    name="size"
                                    id="size-select"
                                    onChange={(e) => setSize(e.target.value)}
                                >
                                    {/*TODO: get sizes from backend*/}
                                    <option value="">-- select a size --</option>
                                    <option value="XS">XS</option>
                                    <option value="S">S</option>
                                    <option value="M">M</option>
                                    <option value="L">L</option>
                                    <option value="XL">XL</option>
                                    <option value="XXL">XXL</option>
                                    <option value="3XL">3XL</option>
                                    <option value="Kids 50">Kids 50</option>
                                    <option value="Kids 56">Kids 56</option>
                                    <option value="Kids 62">Kids 62</option>
                                    <option value="ids 68">Kids 68</option>
                                    <option value="Kids 7">Kids 74</option>
                                    <option value="Kids 80">Kids 80</option>
                                    <option value="Kids 86">Kids 86</option>
                                    <option value="Kids 92">Kids 92</option>
                                    <option value="Kids 98">Kids 98</option>
                                    <option value="Kids 104">Kids 104</option>
                                    <option value="Kids 110">Kids 110</option>
                                    <option value="Kids 116">Kids 116</option>
                                    <option value="Kids 122">Kids 122</option>
                                    <option value="Kids 128">Kids 128</option>
                                    <option value="Kids 134">Kids 134</option>
                                    <option value="Kids 140">Kids 140</option>
                                    <option value="Kids 146">Kids 146</option>
                                    <option value="Kids 152">Kids 152</option>
                                    <option value="Kids 158">Kids 158</option>
                                    <option value="Kids 164">Kids 164</option>
                                    <option value="Kids 170">Kids 170</option>
                                    <option value="Kids 152">Kids 152</option>
                                    <option value="Kids 152">Kids 152</option>
                                    <option value="Socks 22-24">Socks 22-24</option>
                                    <option value="Socks 25-27">Socks 25-27</option>
                                    <option value="Socks 28-30">Socks 28-30</option>
                                    <option value="Socks 31-34">Socks 31-34</option>
                                    <option value="Socks 35-38">Socks 35-38</option>
                                    <option value="Socks 39-42">Socks 39-42</option>
                                    <option value="Socks 43-46">Socks 43-46</option>

                                </select>
                            </fieldset>
                        </>
                    )}
                    <Button
                        onClick={() => updateFilters()}
                        skin="transparent"
                    >
                        Save filters
                    </Button>
                </form>
            )}

            {showSorting && (
                <form className="menu__sort-options" action="">
                    <fieldset>
                        <legend>Sort by</legend>
                        {/*TODO: change names of the sorting methods*/}
                        <select name="sort-by" id="sort-by-select">
                            <option value="price-asc">price ascending</option>
                            <option value="price-dsc">price descending</option>
                            <option value="date-asc">date ascending</option>
                            <option value="date-dsc">date descending</option>
                        </select>
                    </fieldset>
                    <Button skin="transparent">Sort now</Button>
                </form>
            )}
        </header>)
}

export default Menu;