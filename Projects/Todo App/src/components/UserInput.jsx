function UserInput({handleOnChange , onAddButtonClick , handleOnDateChange , taskName , taskDate}) {
  return (
     <div className ="container text-center">
        <div className ="row myrow">
          <div className ="col-6">
            <input type = "text" placeholder="Enter the Todo Here" onChange={(event) => handleOnChange(event)} value={taskName}></input>
            </div>
          <div className ="col-4">
            <input type="date" onChange={(event) => handleOnDateChange(event)} value={taskDate}></input>
            </div>
          <div className ="col-2">
            <button type="button" className="btn btn-success mybutton" onClick={onAddButtonClick}>Add</button>
            </div>
        </div>
      </div>
    )
}

export default UserInput;