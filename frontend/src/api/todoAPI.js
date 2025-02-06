const apiURL = 'http://localhost:2005'

export const fetchTodos = async () => {
    const response = await fetch(apiURL);
    if (!response.ok) throw new Error('Gagal mengambil data');
    return response.json();
  };

export const addTodos = async(title)=>{
  const response = await fetch(apiURL,{
    method: "POST",
    headers: {"Content-Type" : "application/json"},
    body: JSON.stringify({title, completed: false})
  })
  if (!response.ok) throw new Error('Gagal menambah data');
    return response.json();
}

export const toggleTodos = async(id, completed)=>{
  const response = await fetch(`${apiURL}/${id}/toggle`,{
    method : "PUT",
    headers : {"Content-Type": "application/json"},
    body: JSON.stringify({completed: !completed})
  })
  if (!response.ok) throw new Error('Gagal mengubah data');
  return response.json();
}

export const editTodos = async(id, title)=>{
  const response = await fetch(`${apiURL}/${id}`,{
    method:"PUT",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify({title})
  })
  if (!response.ok) throw new Error('Gagal mengubah data');
  return response.json();
}

export const deleteTodos = async (id)=>{
  const response = await fetch(`${apiURL}/${id}/delete`,{
    method:"DELETE"
  })
  fetchTodos()
  if (!response.ok) throw new Error('Gagal menghapus data');
  return id;
}