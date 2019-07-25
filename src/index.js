import  {getUsers, deleteUser} from './api/userApi';

console.log(getUsers());
//populate table of users via API call
getUsers().then(result => {
	let usersBody="";
	
	result.forEach(user=>{
		usersBody+= `<tr>
			<td><a href="#" data-id="${user.Id}" class="deleteUser">Delete</a></td>
			<td>${user.id}</td>
			<td>${user.firstName}</td>
			<td>${user.lastName}</td>
			<td>${user.email}</td>
			</tr>`
		});
		
		globalThis.document.getElementById('users').innerHTML = usersBody; // eslint-disable-line no-undef

  const deleteLinks = global.document.getElementsByClassName('deleteUser');

  // Must use array.from to create a real array from a DOM collection
  // getElementsByClassname only returns an "array like" object
  Array.from(deleteLinks, link => {
    link.onclick = function(event) {
      const element = event.target;
      event.preventDefault();
      deleteUser(element.attributes["data-id"].value);
      const row = element.parentNode.parentNode;
      row.parentNode.removeChild(row);
    };
  });
});