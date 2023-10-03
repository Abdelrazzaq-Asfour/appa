import { useEffect, useState } from "react";
import CardComp from "./card";
import Form from 'react-bootstrap/Form';


function Products () {
    let [items, setItems] = useState([])
    

    async function getData(){

        const url = 'https://www.themealdb.com/api/json/v1/1/search.php?f=b';
        
          const response = await fetch(url);
          const result = await response.json();
          console.log(result)
          setItems(result.results) 
    }

    async function handleChange(event){
    let changedValue = event.target.value
        
    const url = 'https://www.themealdb.com/api/json/v1/1/search.php?f=b';
    
      const response = await fetch(url);
      const result = await response.json();

if(changedValue==="all"){
    console.log(changedValue)
    setItems(result.results)
}
else{
    console.log(changedValue)
    let filteredItems = result.results.filter(function(item){return item.strCategory>changedValue-10 && item.strCategory<=changedValue})
    setItems(filteredItems)
}
}

    useEffect(()=>{getData()},[]);



    return (
        <>
   <Form.Select aria-label="Default select example" onChange={handleChange}>
  <option value="all"> All Menu</option>
  {items.length !== 0 && (
    items
      .map((item) => item.strCategory)
      .filter((value) => self.indexOf(value) === index) 
      .map((category) => (
        <option key={strCategory} value={strCategory}>
          {strCategory}
        </option>
      ))
  )}
</Form.Select>

    <div className="container">
    {items.length !== 0 ?items.map(function(item){
            return(
              <>
                <CardComp image={item.strMealThumb} title={item.strMeal} price={item.strCategory}/>
                </>
            )
        }
        ):<h3>No results</h3>}
        </div>
        </>
    )
}

export default Products;





