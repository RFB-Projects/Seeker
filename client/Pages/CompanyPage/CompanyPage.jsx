import React, { useEffect, useState } from 'react'
import './styles.css'

const URL = 'https://api.jikan.moe/v4/characters'
const LIMIT = 5;

function CompanyPage({userId}) {
  // STATE - page number, basic character info
  const [pageNum, setPageNum] = useState(1);
  const [characters, setCharacters] = useState([]);

  // fetch request on render (5 to start)
  useEffect( () => {
    async function getChars () {
      const fetchResults = await fetch(URL+`?page=${pageNum}`);
      const results = await fetchResults.json();
      const newState = results.data.map(s => {
        const leanObj = {};
        leanObj.mal_id = s.mal_id;
        leanObj.url = s.url;
        leanObj.name=s.name
        return leanObj
      });
    console.log(newState)
    setCharacters(newState);
    }
    getChars();
  }, 
  [pageNum]); 
  // create array with components to render
  const renderedContent = characters.map((s, i) => <Item key={i} name={s.name} mal_id={s.mal_id}/>)
  return ( 
    
    <div>
      <div id="outer">
        <h3>CHARACTERS</h3>
        <div>
          {renderedContent}
        </div>
      </div>
      <button onClick={() => setPageNum(s=>s-1)}>{'<'}</button>
      <span>Page {`${pageNum}`}</span>
      <button onClick={() => setPageNum(s=>s+1)}>{'>'}</button>
    </div>

  )
}

// MAKE RESUSABLE CHILD COMPONENT (PROPS: name (maybe id for query))
// STATE - open/closed, detailsObj
const Item = ({name, mal_id}) => {
  const [open, setOpen] = useState(false);
  const [details, setDetails] = useState({})
  // useEffect fetch...
  async function getDetails () {
    if (!open){
      const fetched = await fetch(URL+`/${mal_id}`)
      const results = await fetched.json();
      console.log('details req', results)
      const newState = {}
      newState.nickname = results.data.nicknames[0];
      newState.about = results.data.about;
      setDetails(newState)
    }
    setOpen(prev=>!prev)
  }
 
  return (
    <div id="check">
      <span>{name + mal_id}</span><button onClick={getDetails}>Get Details</button>
      {open && (
        <div id='expanded'> 
          <p>Nickname {details.nickname}</p>
          <p>ABOUT: {details.about}</p>
        </div>
      )}
    </div>
  )
}

export default CompanyPage  






    // <div id="company_CB">
    //   Company page
    //   <div id="outer_company_CB">
    //     <h3 id="header">POKEMON</h3>
    //     <div id="body">
    //         <div class="color" id="red">Red</div><div class="color" id="blue">Blue</div><div class="color" id="green">Green</div>
    //         <div class="color" id="red">Red</div><div class="color" id="blue">Blue</div><div class="color" id="green">Green</div>
    //     </div>
    //   </div>
    // </div>