import React, { useState } from 'react';
import FilterIcon from '../../src/assets/Vector (1).svg'
import CategoryIcon from '../../src/assets/Vector (2).svg'

function FilterCategories() {
  const [showFilter, setShowFilter] = useState(false);
  const [showCategories, setShowCategories] = useState(false);

  return (
    <div className="flex flex-col md:flex-row gap-4 py-4 px-4 flex-grow">
      {/* Filter Button */}
      <div className="relative">
        <button
          onClick={() => setShowFilter(!showFilter)}
          className="flex items-center px-3 py-2 bg-white border rounded-md text-sm md:text-base"
        >
          <img src={FilterIcon} alt="" className="w-4 h-4 mr-2" />
          Filter
        </button>
        {showFilter && (
          <div className="absolute top-full mt-2 w-48 bg-white border rounded-md shadow-lg p-3 z-10">
            <label className="block mb-2">
              <input type="checkbox" className="mr-2" />
              In Stock
            </label>
            <label className="block mb-2">
              <input type="checkbox" className="mr-2" />
              On Sale
            </label>
            <label className="block">
              <input type="checkbox" className="mr-2" />
              Free Shipping
            </label>
          </div>
        )}
      </div>

      {/* Categories Button */}
      <div className="relative">
        <button
          onClick={() => setShowCategories(!showCategories)}
          className="flex items-center px-3 py-2 bg-white border rounded-md text-sm md:text-base"
        >
          <img src={CategoryIcon} alt="" className="w-4 h-4 mr-2" />
          Categories
        </button>
        {showCategories && (
          <div className="absolute top-full mt-2 w-48 bg-white border rounded-md shadow-lg p-3 z-10">
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-600">Electronics</a></li>
              <li><a href="#" className="hover:text-blue-600">Fashion</a></li>
              <li><a href="#" className="hover:text-blue-600">Home</a></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
export default FilterCategories;