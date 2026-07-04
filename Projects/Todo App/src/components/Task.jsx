const Task = ({taskName , taskDate , index , onDeleteButtonClick}) => {

  return (
      <div className="container">
        <div className="row myrow">
          <div className="col-6">
            {taskName}
            </div>
          <div className="col-4">
            {taskDate}
            </div>
          <div className="col-2">
            <button type="button" className="btn btn-danger mybutton" onClick={() => onDeleteButtonClick(index)}>Delete</button>
            </div>
        </div>
      </div>
  )
}

export default Task;
