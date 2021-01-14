// Add your code here
const dogObj = {
    dogName: "Jacobo",
    dogBreed: "Mutt"
  };

  let configObj = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify(dogObj)
};

fetch('http://localhost:3000/dogs', configObj)
.then(function(response) {
    return response.json();
})
.then(function(data) {
    console.log(data)
})
.catch(function(error) {
    alert('This was not supposed to happen!');
    console.log(error.message)
});










// const personData = {
//     name: "Jacob",
//     email: "abc123@example.com"
// }

// let userObj = {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//     },
//     body: JSON.stringify(personData)
// };


// function createAnimal(animalObj) {
//     return fetch('http://localhost:3000/animals', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(animalObj),
//     })
//       .then(response => response.json())
//   }




// const animalObj = {
//     name: event.target.name.value,
//     imageUrl: event.target.image_url.value,
//     description: event.target.description.value,
//     donations: 0
//   }





function submitData(name, email) {
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({name, email})
    })
    .then(response => response.json())
    .then(data => rendernewPerson(data))
    .catch(error => {
        displayTheError(error)
    })
}

function displayTheError(error) {
    const notification = document.createElement("h1")
    notification.innerHTML = `${error.message}`
    document.body.append(notification)
}

function rendernewPerson(data) {
    const card = document.createElement("h1")
    card.innerHTML = `${data.id}`
    document.body.append(card)
  }



