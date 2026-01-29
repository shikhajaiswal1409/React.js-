/* {  
    import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const priceRanges = [
    {label: 'under Rs500', min: 0, max: 500},
    {label: 'under Rs500-Rs1000', min: 500, max: 1000},
    {label: 'Above Rs1000', min: 1000 , max: Infinity},
]



console.log(priceRanges)

const PriceFilter = ({filters, setFilters}) => {
const filters = useSelector((state) => state.items.filters);
const dispatch = useDispatch();


    
    const handleChange=(range)=>{
       const exists= filters.prices.find(
            (r)=>r.min === range.min && r.max === range.max
        ) 

        if(exists){
            setFilters({...filters, prices:filters.prices.filter(
                (r)=>r.min !== range.min
            )})
        }else{
            setFilters({...filters, prices:[...filters.prices,range]})
        }

    }
        
    const handleRatingChange=(e)=>{
setFilters({
    ...filters, rating: Number(e.target.value) 
})
    }

const handleCategoryChange=(e)=>{
    setFilters({...filters, category: e.target.value})
}
    
 return (
    <>
        <h3>Filter by Price</h3>
        {priceRanges.map((range)=>(
        <label key={range.label}>
        <input 
        type='checkbox'
        onChange={()=>handleChange(range)}
        
         />
         {range.label}
         <br /> <br />
         </label>
         ))}

         <input type="number"
         placeholder='rating'
          onChange={handleRatingChange} /> 

       /*    <h3>Filter by Rating</h3>

      {[4, 3, 2, 1].map((rating) => (
        <label key={rating}>
          <input
            type="radio"
            name="rating"
            checked={filters.rating === rating}
            onChange={() =>
              setFilters((prev) => ({
                ...prev,
                rating
              }))
            }
          />
          </label>
      ))}

         <br /><br />
         
         <input type='text'
         placeholder='Category'
         onChange={handleCategoryChange} />
    </>
  )
}


export default PriceFilter


🧠 First: Important React Truth

React does NOT run code top-to-bottom like normal JS.
It runs in phases:

Component function runs (render phase)

JSX is returned

Browser shows UI

User interacts

Event handlers run

State updates → re-render

File loads → priceRanges
Parent renders
PriceFilter renders
JSX evaluates
UI shows
User clicks
handleChange runs
State updates
Re-render

🔑 Final Golden Rule

Render phase = calculate UI
Event phase = change state

}
*/



import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFilter } from "../../redux/itemsSlice";

const priceRanges = [
  { label: "under Rs500", min: 0, max: 500 },
  { label: "under Rs500-Rs1000", min: 500, max: 1000 },
  { label: "Above Rs1000", min: 1000, max: Infinity }
];

const PriceFilter = () => {
  const filters = useSelector((state) => state.items.filters);
  const dispatch = useDispatch();

  // ✅ PRICE CHECKBOXES
  const handleChange = (range) => {
    const exists = filters.prices.some(
      (r) => r.min === range.min && r.max === range.max
    );

    const updatedPrices = exists
      ? filters.prices.filter(
          (r) => !(r.min === range.min && r.max === range.max)
        )
      : [...filters.prices, range];

    dispatch(updateFilter({ key: "prices", value: updatedPrices }));
  };

  // ✅ CATEGORY
  const handleCategoryChange = (e) => {
    dispatch(updateFilter({ key: "category", value: e.target.value }));
  };

  return (
    <>
      <h3>Filter by Price</h3>

      {priceRanges.map((range) => (
        <label key={range.label}>
          <input
            type="checkbox"
            checked={filters.prices.some(
              (r) => r.min === range.min && r.max === range.max
            )}
            onChange={() => handleChange(range)}
          />
          {range.label}
          <br />
          <br />
        </label>
      ))}

      <h3>Filter by Rating</h3>

      {[4, 3, 2, 1].map((rating) => (
        <label key={rating}>
          <input
            type="radio"
            name="rating"
            checked={filters.rating === rating}
            onChange={() =>
              dispatch(updateFilter({ key: "rating", value: rating }))
            }
          />
          {rating} ⭐ &nbsp;
        </label>
      ))}

      <br />
      <br />

      <input
        type="text"
        placeholder="Category"
        value={filters.category}
        onChange={handleCategoryChange}
      />
    </>
  );
};

export default PriceFilter;
