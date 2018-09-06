const BASE_URL = 'http://api.reactprototypes.com';
const API_KEY = '?key=318';

//get list of all todo items
axios.get(`${BASE_URL}/todos${API_KEY}`).then(getTodoData);

function getTodoData(response){
    console.log(response)
}

//Geet single todo Item
//axios.get(`${BASE_URL}/todos/${idToGet}${API_KEY});

// const newItem = {
//     title: 'yay',
//     details: 'i\'m a month behind! 418 for life!'
// };

//add new to do item
// axios.post(`${BASE_URL}/todos${API_KEY}`, newItem).then( resp=>{
//     console.log('addItem', resp);
// });


//delete todo item
// let idToDelete = '5b91b496e3e0f45f2ed5ccf4';
// axios.delete(`${BASE_URL}/todos/${idToDelete}${API_KEY}`).then(resp => {
//     console.log('Delete Response:', resp);
// })


//toggle todo item
//axios.put(`${BASE_URL}/todos/${idToToggle}${API_KEY}`)


