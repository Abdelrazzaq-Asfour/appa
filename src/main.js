import CardComp from './card';
import './main.css';
import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Main (){
    let [items, setItems] = useState([]);

   async function getData(){

    const url = 'www.themealdb.com/api/json/v1/1/search.php?f=a';
    const options = {
      method: 'GET',
      headers: {
       // 'X-RapidAPI-Key': '0f2abd4395msh6ce1c28ccac1aacp178ddbjsn9cd63c10ba80',
        //'X-RapidAPI-Host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com'
      }
    };
    
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setItems(result.meals)
    } catch (error) {
      console.error(error);
    }
}

useEffect(function (){getData()}, [])

 
    return(
        <>
          <Form className="d-flex"  id="myform">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              name="search"
              />
            <Button variant="outline-success" type='submit'>Search</Button>
          </Form>
        <div id="container">
        {items.map(function(item){
            return(
              <>
              <CardComp image={item.strMealThumb[0]} title={item.strMeal} description= {item.strInstructions} price={item.price} />
                </>
            )
        }
    )
        }
        </div>
        </>
    )
}

export default Main;