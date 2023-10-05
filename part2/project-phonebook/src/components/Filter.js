const Filter = ({ handleFilter }) => {
    return (
        <div>
            Filter names: <input onChange={handleFilter}/>
        </div>
    )
}

export default Filter