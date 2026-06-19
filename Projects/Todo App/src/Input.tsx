function UserInput() {
  return (
     <div className ="container text-center">
        <div className ="row myrow">
          <div className ="col-6">
            <input type = "text" placeholder="Enter the Todo Here"></input>
            </div>
          <div className ="col-4">
            <input type="date"></input>
            </div>
          <div className ="col-2">
            <button type="button" className="btn btn-success mybutton">Add</button>
            </div>
        </div>
      </div>
    )
}

export default UserInput;