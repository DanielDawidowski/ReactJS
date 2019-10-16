import React, { useState } from 'react'
import { ANIMALS } from '@frontendmasters/pet'

const SearchParams = () => {
    const [location, setlocation] = useState('Seattle, WA')
    const [animal, setAnimal] = useState('dog')

    return (
        <div className="search-params">
            {/* {location} */}
            <form>
                <label htmlFor="location">
                    Location
                    <input id="location" value={location} placeholder='Location' onChange={e=> setlocation(e.target.value)}
                    />
                </label>
                <label htmlFor="animal">
                    animal
                    <select 
                        id="animal"
                        value={animal}
                        onChange={e => setAnimal(e.target.value)}
                        onBlur={e => setAnimal(e.target.value)}
                    >
                        <option>All</option>
                        {ANIMALS.map(animal => (
                            <option value={animal}>{animal}</option>
                        ))}
                    </select>
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default SearchParams