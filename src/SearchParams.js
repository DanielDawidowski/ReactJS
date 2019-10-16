import React, { useState } from 'react'

const SearchParams = () => {
    const [location, setlocation] = useState('Seattle, WA')

    return (
        <div className="search-params">
            {/* {location} */}
            <form>
                <label htmlFor="location">
                    Location
                    <input id="location" value={location} placeholder='Location' onChange={e=> setlocation(e.target.value)}
                    />
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default SearchParams