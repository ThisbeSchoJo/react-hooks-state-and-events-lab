import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  //Set the useState to All bc that is what will show all categories without filtering
  const [selectedCategory, setSelectedCategory] = useState("All")

  //Filter the items to only display the items if their category matches the selected Category
  const filteredItems = items.filter(item => {
    if(selectedCategory === "All"){
      return true
    }
    return item.category === selectedCategory
  })
  console.log(filteredItems)

  return (
    <div className="ShoppingList" items={filteredItems}>
      <div className="Filter">
        <select onChange={(event) => setSelectedCategory(event.target.value)} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
            <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;





// function PetPage(){

//   const [searchText, setSearchText] = useState("")

//   const filteredPets = pets.filter(pet => {
//       return pet.name.toUpperCase().includes(searchText.toUpperCase())
//   })
//   console.log(filteredPets)

//   return (
//       <main>
//           <div className="searchbar">
//               <label htmlFor="search">Search Pets:</label>
//               <input
//                   type="text"
//                   id="search"
//                   placeholder="Type a name to search..."
//                   onChange={(event) => setSearchText(event.target.value)}
//               />
//           </div>
//           <PetList pets={filteredPets}/>
//       </main>
//   );
// }