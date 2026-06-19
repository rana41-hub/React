let todo_task = 'Buy Milk';
let todo_date = '4/10/26';

function Task1() {
  return (
      <div class="container">
        <div class="row myrow">
          <div class="col-6">
            {todo_task}
            </div>
          <div class="col-4">
            {todo_date}
            </div>
          <div class="col-2">
            <button type="button" class="btn btn-danger mybutton">Delete</button>
            </div>
        </div>
      </div>
  )
}

export default Task1;