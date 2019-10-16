import React, { useState } from 'react'
import { ANIMALS } from '@frontendmasters/pet'
import useDropdown from './useDropdown'

const SearchParams = () => {
    const [location, setlocation] = useState('Seattle, WA')
    const [breeds, setBreed] = useState([])
    const [animal, AnimalDropdown] = useDropdown('Animal',"dog", ANIMALS)
    const [breed, BreedDropdown] = useDropdown('Breed',"dog", breeds)

    return (
        <div className="search-params">
            {/* {location} */}
            <form>
                <label htmlFor="location">
                    Location
                    <input id="location" value={location} placeholder='Location' onChange={e=> setlocation(e.target.value)}
                    />
                </label>
                <AnimalDropdown />
                <BreedDropdown />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default SearchParams