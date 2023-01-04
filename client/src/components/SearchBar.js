
export default function SearchBar({setSearchedItems}){

        function handleSearch(event) {
            setSearchedItems(event.target.value)
        }

    return(
        <>
             <div className="search-bar"  >
            <input
                type="text"
                className="searchTerm"
                onChange={handleSearch}
                placeholder= "Search feed ..."
                style={{paddingTop: "10px", paddingBottom: "10px", paddingLeft: "50px", paddingRight:"50px", border: "2px solid #8A0505"}}
            />
        </div>
        </>
    )
}
