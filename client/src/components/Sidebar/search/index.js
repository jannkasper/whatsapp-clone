import React from "react";
import { Search } from "../../icons"

import styles from "./search.module.scss";


function SearchBar({ placeHolder, searchText, setSearchText }) {

    return (
        <div className={styles.searchContainer}>
            <button className={styles.searchIcon}>
                <Search />
            </button>

            <div className={styles.searchInput}>
                <input placeholder={placeHolder} value={searchText} onChange={e => setSearchText(e.target.value)} />
            </div>

        </div>
    )
}

export default SearchBar