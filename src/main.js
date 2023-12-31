import CardComp from './card';
import './main.css';
import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Main (){

    let [items, setItems] = useState([]);

   async function getData(){

    const url = 'https://www.themealdb.com/api/json/v1/1/search.php?f=m';

    
      const response = await fetch(url);
      const result = await response.json();
      console.log(result.results)
      setItems(result.results) 
    
}




useEffect(function (){
  
  getData();

}, [])

    async function handleSubmit (event){
        event.preventDefault()
        let searchedValue = event.target.search.value

        const url = 'https://www.themealdb.com/api/json/v1/1/search.php?f=b';

        
          const response = await fetch(url);
          const result = await response.json();
        
        let filteredItems = result.results.filter(function(item){return item.strMeal.toLowerCase().includes(searchedValue.toLowerCase() )})
        setItems(filteredItems); 
    }
    return(
        <>
          <Form className="d-flex"  id="myform" onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              name="search"
              required
              />
            <Button variant="outline-success" type='submit'>Search</Button>
          </Form>
        <div className="container">
        {items.length !==0 ? items.map(function(item){
          
            return(
              <>
        <CardComp image={item.strMealThumb}

                  title={item.strMeal}

                   description={item.strInstructions}

                              Category={item.strCategory} />             
   </>
            )
        }
    ) : <h3>No search results</h3>}
        </div>
        </>
    )
}

export default Main;