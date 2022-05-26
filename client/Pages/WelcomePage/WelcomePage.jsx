import React, {useState, useEffect} from 'react'
import './styles.css'
function WelcomePage() {

  const [pokemon, setPokemon] = useState([]); // [{name, URL}, ...]
  const [pageNum, setPageNum] = useState(0)
  const [displayData, setDisplayData] = useState({name:'None Selected', id:'N/A', height:'N/A', weight:'N/A', order:'N/A'})

  const LIMIT = 40

  useEffect(() => {
    async function getPokemon() {
      try{
        const fetchData = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${LIMIT}&offset=${LIMIT*pageNum}`);
        const results = await fetchData.json()
        console.log(results)
        setPokemon(results.results)
      } catch (err){
        console.log('fetch didn\'t wrok')  
      } 
    } 
    getPokemon()
  }, [pageNum]);

  async function getDetails(pokemon){
    const fetched = await fetch(pokemon.url)
    const result = await fetched.json()
    const newState = (({name, id, height, weight, order}) => ({name, id, height, weight, order}))(result)
    setDisplayData(newState)
  }

  const renderedContent = pokemon.map(s => <li><div onClick={()=>getDetails(s)}>{s.name}</div></li>)
  
  const displayContent = Object.entries(displayData).map(s => <p id='item'>{s[0]} = {s[1]}</p>)

  return (
    <div id="container">
      <div id="pagination">
        <div id="pagination_list">
          <ul>
            {renderedContent}
          </ul>
        </div>
        <div id='page_selector'>
          {pageNum !== 0 && (<button onClick={() => setPageNum(prev => prev-1)}>{'<'}</button>)}
          {pageNum === 0 && (<button disabled>{'<'}</button>)}
          <span> Page {pageNum+1} </span>
          <button onClick={() => setPageNum(prev => prev+1)}>{'>'}</button>
        </div>
      </div>
      <div id="show_pokemon">
        <div id="show_pokemon_header"><h2>{displayData.name}</h2></div>
        <div id="show_pokemon_body">
          {displayContent}
        </div>
      </div>
    </div>
  )
}

export default WelcomePage