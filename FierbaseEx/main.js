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
           resList.append(`<li data-id="${res.doc.id}">${res.doc.data().name} - ${res.doc.data().location}
           <button class="edit">Edit</button>
           <button class="delete">Delete</button>
           </li>`)
           
           
       })
        
    }).catch(err => {
        console.log(err);
        
    })
    
    //Delete
    resList.on("click", ".delete", function(){ //we used .on so that we can select an element that didn't exist before but existed after loading the page, so we select the parent then we select delete because it didn't exist before
        // $(this).parent().attr("data-id")
        let id = $(this).parent().data("id") //Same as the one above
        db.doc(id).delete()
        $(this).parent().remove()    
    })

    resList.on("click", ".edit", function(){ 
        let id = $(this).parent().data("id")
        db.doc(id).edit()
        $(this).parent().upda()  

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
          resList.append(`<li data-id="${res.id}">${name} - ${location}
          <button class="edit">Edit</button>
          <button class="delete">Delete</button>
          </li>`)
      })
      
      $('input[name=name]').val('')
      $('input[name=location').val('')
    })
})