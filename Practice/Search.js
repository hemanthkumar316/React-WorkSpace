import React,{useState} from 'react'
 const jsondata=[{"id":1,"first_name":"Hester","last_name":"Rentenbeck","email":"hrentenbeck0@marriott.com"},
 {"id":2,"first_name":"Neville","last_name":"Chessill","email":"nchessill1@google.co.uk"},
 {"id":3,"first_name":"Tanya","last_name":"Notman","email":"tnotman2@wikipedia.org"},
 {"id":4,"first_name":"Beaufort","last_name":"Stienton","email":"bstienton3@themeforest.net"},
 {"id":5,"first_name":"Cirilo","last_name":"Mellanby","email":"cmellanby4@ameblo.jp"},
 {"id":6,"first_name":"Arvy","last_name":"Lapenna","email":"alapenna5@cbsnews.com"},
 {"id":7,"first_name":"Yasmeen","last_name":"Hoyes","email":"yhoyes6@e-recht24.de"},
 {"id":8,"first_name":"Hilario","last_name":"Saunter","email":"hsaunter7@tinypic.com"},
 {"id":9,"first_name":"Wilmar","last_name":"Simonds","email":"wsimonds8@umich.edu"},
 {"id":10,"first_name":"Ad","last_name":"Kester","email":"akester9@ucla.edu"},
 {"id":11,"first_name":"Susie","last_name":"Drakes","email":"sdrakesa@sphinn.com"},
 {"id":12,"first_name":"Lilli","last_name":"Nell","email":"lnellb@hao123.com"},
 {"id":13,"first_name":"Roby","last_name":"Plessing","email":"rplessingc@joomla.org"},
 {"id":14,"first_name":"Isabelita","last_name":"Brangan","email":"ibrangand@cbslocal.com"},
 {"id":15,"first_name":"Lavena","last_name":"Cornewall","email":"lcornewalle@4shared.com"},
 {"id":16,"first_name":"Kippy","last_name":"Janczyk","email":"kjanczykf@census.gov"},
 {"id":17,"first_name":"Celinka","last_name":"Jewess","email":"cjewessg@toplist.cz"},
 {"id":18,"first_name":"Jody","last_name":"Ivel","email":"jivelh@google.com.hk"},
 {"id":19,"first_name":"Koralle","last_name":"Clewes","email":"kclewesi@amazon.com"},
 {"id":20,"first_name":"Andres","last_name":"Paolino","email":"apaolinoj@last.fm"}]
 const Search = () => {
    const [data,setData]=useState(jsondata)
    const [search,setSearch]=useState('')
  return (
    <div style={{textAlign:'center'}}>
    <h1>Search arrary items</h1>
    <input type='text' value={search} onChange={(e)=>setSearch(e.target.value)} placeholder='search...'/>
        {
            data.filter(user=>user.last_name.toLowerCase().includes(search.toLowerCase())).map(user=>{
                return(
                    <div>
                        {user.last_name}
                    </div>
                )
            })
        }
    </div>
  )
}
export default Search
