import React,{useEffect, useState, useMemo, useCallback} from 'react'
import Table from './Table'

function SearchSort() {
    const [apiData, setApiData] = useState([])
    const [inputValue, setInputValue] = useState({id:'',first_name:'',last_name:'',email:''})
    const [filterData, setFilterData] = useState([])

    useEffect(()=>{
      async function getData(){
       const fetchData = await fetch('https://reqres.in/api/users?page=2')
       const data = await fetchData.json()
       setApiData(data?.data)
       setFilterData(data?.data)
      }
      getData()
    },[])

    const searchData = useCallback((input, column) => {
      setInputValue(input)
      const filterApiData = apiData.filter((data)=>data[column].toString().toLowerCase().includes(input.toLowerCase()))
      setFilterData(filterApiData) 
    },[apiData])
    const memoizedFilterData = useMemo(() => filterData, [filterData]);
  return (
    <div>
       {/* <Search inputValue={inputValue} searchData={searchData} /> */}
       <Table apiData = {memoizedFilterData} inputValue={inputValue} searchData={searchData}/>
    </div>
  )
}

export default SearchSort