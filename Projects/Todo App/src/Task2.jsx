// let todo_task = 'Go to College';
// let todo_date = '5/10/26';

function Task2(props) {
  return (
      <div class="container">
        <div class="row myrow">
          <div class="col-6">
            {props.name2}
            </div>
          <div class="col-4">
            {props.date2}
            </div>
          <div class="col-2">
            <button type="button" class="btn btn-danger mybutton">Delete</button>
            </div>
        </div>
      </div>
  )
}

export default Task2;