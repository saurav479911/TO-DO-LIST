const todoList=[{
    name:'make dishes',
    dueDate:'2023-09-06'},
{
    name:'Reading',
    dueDate:'2023-09-06'
}
];

renderTodoList();
function renderTodoList() {
    let todoListHTML = '';
for(let i=0; i<todoList.length; i++){
    const Todoobject =todoList[i];
    // const name=Todoobject.name;
    // const duedate=Todoobject.duedate;
    const{name,dueDate}=Todoobject;
    const html= `
    <div>${name}</div>
    <div> ${dueDate}</div>
<button onclick="
todoList.splice(${i}, 1);
renderTodoList();
" class="delete-todo-button">Delete</button>
`;
    todoListHTML +=html;

}
    document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;

}


function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name=inputElement.value;

    const dateInputElement=document.querySelector('.js-due-date-input');
    const dueDate=inputElement.value;

    todoList.push({
        name,
        dueDate
    });
    console.log(todoList);

    inputElement.value ='';

    
    renderTodoList();


}