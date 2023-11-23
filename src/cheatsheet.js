import { useState } from "react";

export default function CheatSheet({ syntax }) {

    const [filterTable, setFilterTable] = useState("");

    return (
        <div className="content content--cheatsheet">
            <h2>Cheat Sheet</h2>
            <SearchBar filtertable={filterTable} setfiltertable={setFilterTable}/>
            <Table syntax={syntax} filtertable={filterTable}/>
        </div>
    );
}

function SearchBar({ filtertable, setfiltertable }) {

    return (
        <>
            <input 
            type="text" 
            aria-label="search" 
            placeholder="search..."
            value={filtertable}
            onChange={e => setfiltertable(e.target.value)}>
            </input>
        </>
    );
}

function Table({ syntax, filtertable }) {

    return (
        <table>

            {filtertable !== "" &&
            <>
            <thead>
                <tr>
                    <th>element</th>
                    <th>markdown syntax</th>
                </tr>
            </thead>
            <tbody>
                {syntax.map(item => {
                    if (item.element.toLowerCase().indexOf(filtertable.toLowerCase()) === -1) {
                        console.log(item.element.toLowerCase());
                        return;
                    } else {
                        return (
                            <tr>
                                <td>{item.element}</td>
                                <td>
                                    {item.syntax.map(example => <p>{example}</p>)}
                                </td>
                            </tr>
                        )
                    }
                })}
            </tbody>
            </>
            }


        </table>
    );
}