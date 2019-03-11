let collection = { //var collection is collection, what`s inside is document

}
//CRUD - Create, Read, Update and Delete
$(function(){

    let db = firebase.firestore().collection('restaurants');
    let resList = $('.res-container');
    
    db.get().then(res => {
       let changes = res.docChanges();// gets array of docs in my collection and checks for changes

       changes.forEach(res => {
           //Read
           console.log(res.doc.data());
           resList.append(`<li>${res.doc.data().name} - ${res.doc.data().location}</li>`)
           
           
       })
        
    }).catch(err => {
        console.log(err);
        
    })
    
    //Create
    $('.submit').click(function(){
      var name =  $('input[name=name]').val()
      var location = $('input[name=location').val()

      console.log(name);
      console.log(location);

      db.add({
          name: name,
          location: location
      }).then(res => {
          console.log(res);
          resList.append(`<li data-id="${res.id}">${name} - ${location}</li>`)
      })
      
      $('input[name=name]').val('')
      $('input[name=location').val('')
    })
})