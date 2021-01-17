// // Add your code here
// const dogObj = {
//     dogName: "Jacobo",
//     dogBreed: "Mutt"
//   };

//   let configObj = {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//     },
//     body: JSON.stringify(dogObj)
// };

// fetch('http://localhost:3000/dogs', configObj)
// .then(function(response) {
//     return response.json();
// })
// .then(function(data) {
//     console.log(data)
// })
// .catch(function(error) {
//     alert('This was not supposed to happen!');
//     console.log(error.message)
// });










// // const personData = {
// //     name: "Jacob",
// //     email: "abc123@example.com"
// // }

// // let userObj = {
// //     method: 'POST',
// //     headers: {
// //         'Content-Type': 'application/json',
// //         'Accept': 'application/json'
// //     },
// //     body: JSON.stringify(personData)
// // };


// // function createAnimal(animalObj) {
// //     return fetch('http://localhost:3000/animals', {
// //       method: 'POST',
// //       headers: {
// //         'Content-Type': 'application/json',
// //       },
// //       body: JSON.stringify(animalObj),
// //     })
// //       .then(response => response.json())
// //   }




// // const animalObj = {
// //     name: event.target.name.value,
// //     imageUrl: event.target.image_url.value,
// //     description: event.target.description.value,
// //     donations: 0
// //   }





// function submitData(name, email) {
//     return fetch('http://localhost:3000/users', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'Accept': 'application/json'
//         },
//         body: JSON.stringify({name, email})
//     })
//     .then(response => response.json())
//     .then(data => rendernewPerson(data))
//     .catch(error => {
//         displayTheError(error)
//     })
// }

// function displayTheError(error) {
//     const notification = document.createElement("h1")
//     notification.innerHTML = `${error.message}`
//     document.body.append(notification)
// }

// function rendernewPerson(data) {
//     const card = document.createElement("h1")
//     card.innerHTML = `${data.id}`
//     document.body.append(card)
//   }









// <form action="http://localhost:3000/dogs" method="POST">
//   <label> Dog Name: <input type="text" name="dogName" id="dogName" /></label><br />
//   <label> Dog Breed: <input type="text" name="dogBreed" id="dogBreed" /></label><br />
//   <input type="submit" name="submit" id="submit" value="Submit" />
// </form>




// const data = { dogName: event.target.dogName, dogBreed: event.target.dogBreed };

// fetch('http://localhost:3000/dogs', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     'Accept': 'application/json'
//   },
//   body: JSON.stringify(data),
// })
// .then(response => response.json())
// .then(data => {
//   console.log('Success:', data);
// })
// .catch((error) => {
//   console.error('Error:', error);
// });



// let formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle"
//   };
  
//   let configObj = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json"
//     },
//     body: JSON.stringify(formData)
//   };
  
//   fetch("http://localhost:3000/dogs", configObj)
//     .then(function(response) {
//       return response.json();
//     })
//     .then(function(object) {
//       console.log(object);
//     });
function submitData (name, email) {

    const data = { 
        name: name,
        email: email
     };

    return fetch('http://localhost:3000/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
          appendToDom(data);
        })
        .catch((error) => {
          appendError();
        });
    
}
    
    
function appendToDom(data) {
    let newHead = document.createElement('h1')
    newHead.textContent = data.id
    document.body.append(newHead)
}
    
    
function appendError() {
    let newP = document.createElement('p')
    newP.textContent = 'Unauthorized Access'
    document.body.append(newP)
}





