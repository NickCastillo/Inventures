import { React, useEffect, useState } from 'react';
import './App.css';
import './styles/fonts.css';
import './styles/navbar.css';
import './styles/list-element.css';
import Navbar from './components/navbar';
import LoadingComponent from './components/loading';
import ErrorComponent from './components/error';
import getMedicine from './services/api';
import ListElement from './components/list-element';


function App() {
  
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const [error, setError] = useState(false)

  useEffect(() => {
    getMedicine().then((res) => {
      if (res){
        setData(res['payload'])
        setLoading(false)
      } else { setError(true) }
    })
    }, [])

  return (

    <div className="App">

      <header className="Navbar">
        <Navbar />
      </header>

      <div className="upper_container"> 
        <p className="emoji"> 💊 </p>
        <h1> Revisa tus compras </h1>
        <h2> Agrega al carro si necesitas reponer </h2>
      </div>
  
  {error && <ErrorComponent/>} 

  {!error && loading && <LoadingComponent/>}

  {!error && !loading && data.length === 0 && 
    <div>
      <p className="blue"> 
        Actualmente no tienes medicinas 
      </p>
    </div>
  }

  {!error && !loading && data.length > 0 &&

      <div className='list-container'>
        <div className='title-container'> 
          <p> Te queda </p>
        </div>


        <div className='scroll'>
          {data.map(d => (
              <ListElement key={d.id} 
                           name={d.name} 
                           concentration={d.concentration}
                           price={d.price}
                           img = {d.imagesUrl}
                           display = {d.display}/>
          ))}

          {data.map(d => (
              <ListElement key={d.id} 
                           name={d.name} 
                           concentration={d.concentration}
                           price={d.price}
                           img = {d.imagesUrl}
                           display = {d.display}/>
          ))}
        </div>
  
      </div>
  }

    </div>

  );
}

export default App;
