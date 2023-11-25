import { useState } from "react";

export default function CheatSheet({ syntax, neon, setneon, prevstate }) {

    const [filterTable, setFilterTable] = useState("");

    return (
        <div className={neon === "cheatsheet" ? "content content--cheatsheet neon" : "content content--cheatsheet"}>
            <h2>Cheat Sheet</h2>
            <p className='content__subheading'>Just in case you need it.</p>
            <SearchBar filtertable={filterTable} setfiltertable={setFilterTable} setneon={setneon} prevstate={prevstate}/>
            <Table syntax={syntax} filtertable={filterTable}/>
        </div>
    );
}

function SearchBar({ filtertable, setfiltertable, setneon, prevstate }) {

    return (
        <>
            <input 
            type="text" 
            aria-label="search" 
            placeholder="Search..."
            value={filtertable}
            onChange={e => setfiltertable(e.target.value)}
            onFocus={() => setneon("cheatsheet")}
            onBlur={prevstate}>
            </input>
        </>
    );
}

function Table({ syntax, filtertable }) {

    return (
        <div>

            {filtertable !== "" &&
            <table>
            <thead>
                <tr>
                    <th>Element</th>
                    <th>Markdown Syntax</th>
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
            </table>
            }


        </div>
    );
}