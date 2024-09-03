const input = document.getElementById('taskInput');
const button = document.getElementById('addTaskButton');
const list = document.getElementById('tasklist');

function addtask() {
    const addtext = input.value;

    if (addtext === '') {
        alert('Please enter a task!');
        return;
    }

 
    const newtask = document.createElement('li');
    newtask.textContent = addtext;
    newtask.style.margin = '10px 0'; 
    newtask.style.padding = '10px'; 
    newtask.style.border = '1px solid #ddd'; 
    newtask.style.borderRadius = '5px'; 
    newtask.style.display = 'flex'; 
    newtask.style.justifyContent = 'space-between'; 

    
    const dltbtn = document.createElement('button');
    dltbtn.textContent = 'Delete';
    dltbtn.className = 'Delete';
    dltbtn.style.backgroundColor = '#ff4d4d'; 
    dltbtn.style.color = '#fff'; 
    dltbtn.style.border = 'none'; 
    dltbtn.style.borderRadius = '5px'; 
    dltbtn.style.padding = '5px 10px'; 
    dltbtn.style.cursor = 'pointer'; 

    
    dltbtn.onclick = function () {
        list.removeChild(newtask);
    };

    
    newtask.appendChild(dltbtn);
    list.appendChild(newtask);

   
    input.value = '';
}

button.onclick = addtask;
