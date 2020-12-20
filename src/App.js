import Map from './components/Map'

function App() {
    require('dotenv').config()
    console.log(process.env)
    return ( 
        <div>
            <Map/>
        </div>
    );
}

export default App;