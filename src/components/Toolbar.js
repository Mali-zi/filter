function Toolbar({ filters, selected, onSelectFilter }) {
  const filterButtons = filters.map((item) => {
    return (
      <button 
        type="button" 
        value={item} 
        onClick={onSelectFilter}
        selected={ item === selected ? true : false }
        className={ item === selected ? "selected-btn" : "unselected-btn" }
      >
        {item}
      </button>
    )
  })
  return (
    <div>
      {filterButtons}
    </div>
  )
};

export default Toolbar;