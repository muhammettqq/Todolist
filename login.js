const form = document.querySelector('.songlo');
const senditem = document.querySelector('#send');
const pass = document.querySelector('#yonlen');

form.addEventListener('submit',e =>{


      e.preventDefault();
      if(senditem.value == "2526"){
        
         pass.getAttribute('href');
         pass.setAttribute('href','Todo.html');
         
         
      }
      else{
         alert("şifre yanlış");
      }
      
})


