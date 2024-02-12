import React, { useState } from 'react'
import "./Pagination.css"
const data = [
    { id: 1, name: 'Item 1', description: 'Description of Item 1' },
    { id: 2, name: 'Item 2', description: 'Description of Item 2' },
    { id: 3, name: 'Item 3', description: 'Description of Item 3' },
    { id: 4, name: 'Item 4', description: 'Description of Item 4' },
    { id: 5, name: 'Item 5', description: 'Description of Item 5' },
    { id: 6, name: 'Item 6', description: 'Description of Item 6' },
    { id: 7, name: 'Item 7', description: 'Description of Item 7' },
    { id: 8, name: 'Item 8', description: 'Description of Item 8' },
    { id: 9, name: 'Item 9', description: 'Description of Item 9' },
    { id: 10, name: 'Item 10', description: 'Description of Item 10' },
    { id: 11, name: 'Item 11', description: 'Description of Item 11' },
    { id: 12, name: 'Item 12', description: 'Description of Item 12' },
    { id: 13, name: 'Item 13', description: 'Description of Item 13' },
    { id: 14, name: 'Item 14', description: 'Description of Item 14' },
    { id: 15, name: 'Item 15', description: 'Description of Item 15' },
    { id: 16, name: 'Item 16', description: 'Description of Item 16' },
    { id: 17, name: 'Item 17', description: 'Description of Item 17' },
    { id: 18, name: 'Item 18', description: 'Description of Item 18' },
    { id: 19, name: 'Item 19', description: 'Description of Item 19' },
    { id: 20, name: 'Item 20', description: 'Description of Item 20' },
    { id: 21, name: 'Item 21', description: 'Description of Item 21' },
    { id: 22, name: 'Item 22', description: 'Description of Item 22' },
    { id: 23, name: 'Item 23', description: 'Description of Item 23' },
    { id: 24, name: 'Item 24', description: 'Description of Item 24' },
    { id: 25, name: 'Item 25', description: 'Description of Item 25' },
    { id: 26, name: 'Item 26', description: 'Description of Item 26' },
    { id: 27, name: 'Item 27', description: 'Description of Item 27' },
    { id: 28, name: 'Item 28', description: 'Description of Item 28' },
    { id: 29, name: 'Item 29', description: 'Description of Item 29' },
    { id: 30, name: 'Item 30', description: 'Description of Item 30' }
];

const Pagination = () => {
    const [items, setItems] = useState(data);
    const [currentPage, setCurrentPage] = useState(1);
    const [ItemsPerPage, setItemsPerPage] = useState(5)

    const fetchItemsOnPageClick = (selectedPage) => {
        if (selectedPage >= 1 &&
            selectedPage <= items.length / 10 &&
            selectedPage !== currentPage
        )
            setCurrentPage(selectedPage)
    }
    return (
        <div>
            {items.slice(currentPage * 10 - 10, currentPage * 10).map((item) => {
                return (
                    <div key={item.id} style={{ display: "flex", gap: 6 }}>
                        <p><b>{item.id} . </b></p>
                        <p>{item.name} -</p>
                        <p>{item.description}</p>
                    </div>
                )
            })}

            <div style={{ display: "flex", padding: "10px", justifyContent: "center", margin: "15px 0" }}>
                <button
                    //className={currentPage > 1 ? " " : "disableButton"}
                    disabled={currentPage > 1 ? false : true}
                    onClick={() => fetchItemsOnPageClick(currentPage - 1)}
                >⏮️</button>
                {[...Array(items.length / 10)].map((_, i) => {
                    return <span
                        key={i}
                        style={{
                            cursor: "pointer",
                            border: "1px solid",
                            padding: "10px",
                            background: i + 1 === currentPage ? "lightblue" : "inherit",

                        }}
                        onClick={() => fetchItemsOnPageClick(i + 1)}
                    >
                        {i + 1}
                    </span>
                })}
                <button
                    onClick={() => fetchItemsOnPageClick(currentPage + 1)}
                    //className={currentPage < items.length / 10 ? " " : "disableButton"}
                    disabled={currentPage < items.length / 10 ? false : true}
                >⏭️</button>
            </div>
        </div>
    )
}

export default Pagination