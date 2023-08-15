const deger = document.querySelector('#veri');
const ul = document.querySelector('ul');
const li = document.querySelector('li');
const sil = document.querySelector('.silici');
const ekle = document.querySelector('#todoAddButton');
ekle.addEventListener('click',e =>{
    e.preventDefault();
    if(deger.value === ""){
        alert("Lütfen Boş Değer Girmeyiniz !");
    }
    else{
        const li = document.createElement('LI');
        li.textContent += deger.value;
        ul.append(li);
    }
});
        ul.addEventListener('click',c =>{   
        if(c.target.tagName=== 'LI')
            {
            c.target.remove();
            }
     })
     li.addEventListener('mousemove',d =>{
        
        if(d.target.tagName=== 'LI')
        {
            li.getAttribute('class');
            li.setAttribute('class','sucses');
        }
     })

     li.addEventListener('mouseleave',c =>{
        if(c.target.tagName=== 'LI')
        {
            li.getAttribute('class');
            li.setAttribute('class','li');
        }
       
     })
deger.addEventListener('mousemove',e =>{

        e.target.textContent="";

})