

function getUser(id){
  return fetch(`https://reqres.in/api/users?id=${id}`)
  .then(data => data.json())
  .catch((err)=> console.log(err))
}
async function showUser(id){ 
try {
    const user = await getUser(id)
    console.log(` o nome do usuario é : ${user.data.first_name}`)

} catch (error) {
     console.log(`erro de execucao`)
}
}
showUser(3)