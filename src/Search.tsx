import React, {useState} from 'react'
import Select from 'react-select';
import { AppContext } from './AppContext';
import AsyncSelect from 'react-select/async'
import axios from 'axios';
//docs using react-select
const Search:React.FC=()=>{
    const [search, setSearch] = useState(null); 
    const {geoCityApi} = React.useContext(AppContext);

    const getAllCities=()=>{
    axios.request(geoCityApi).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
    }

    const aquaticCreatures = [
        { label: 'Shark', value: 'Shark' },
        { label: 'Dolphin', value: 'Dolphin' },
        { label: 'Whale', value: 'Whale' },
        { label: 'Octopus', value: 'Octopus' },
        { label: 'Crab', value: 'Crab' },
        { label: 'Lobster', value: 'Lobster' },
      ];
    //   const loadOptions = (inputValue, callback) => {
    //     setTimeout(()=>{
    //         const filter = options.filter
    //     },2000)
    //   }
  return (
    <div style={{color:"black"}}>
    {/* <AsyncSelect
        loadOptions={loadOptions}
      /> */}
    </div>
  )
}

export default Search