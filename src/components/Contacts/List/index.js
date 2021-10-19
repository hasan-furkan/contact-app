import {useState} from 'react'

function List({contacts}) {
    const [filterText, setFilterText] = useState("")
    const filtered = contacts.filter((item) => {
        return Object.keys(item).some((key)=> 
            item[key]
            .toString().toLowerCase().includes(filterText.toLocaleLowerCase())
        );
    });
    console.log(filtered);
    return (
        <div>
            <input type="text" placeholder="Filter Contact" value={filterText} onChange={(e)=> setFilterText(e.target.value)} />
            <ul className="list">
                {filtered.map((contact, key)=> (
                    <li key={key} >
                        <span>{contact.fullname} </span>
                        <span>{contact.phone_number}</span>
                    </li>
                ))}
            </ul>

            
           <h5>Total Contacts ({filtered.length})</h5>
            
        </div>
    )
}

export default List
