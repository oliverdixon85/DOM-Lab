document.addEventListener("DOMContentLoaded", function(){
    let newDiv = document.createElement('div');

    newDiv.className = 'header-container';


    
    let header1 = document.createElement('h1');
    let headerText1 = document.createTextNode('This is an h1');

    header1.className = "h1 headers";

    let header2 = document.createElement('h2');
    let headerText2 = document.createTextNode('This is an h2');

    header2.className = "h2 headers";

    let header3 = document.createElement('h3');
    let headerText3 = document.createTextNode('This is an h3');

    header3.className = "h3 headers";

    let header4 = document.createElement('h4');
    let headerText4 = document.createTextNode('This is an h4');

    header4.className = "h4 headers";

    let header5 = document.createElement('h5');
    let headerText5 = document.createTextNode('This is an h5');

    header5.className = "h5 headers";

    let header6 = document.createElement('h6');
    let headerText6 = document.createTextNode('This is an h6');

    header6.className = "h6 headers";
    
    header1.appendChild(headerText1);
    newDiv.appendChild(header1);

    header2.appendChild(headerText2);
    newDiv.appendChild(header2);

    header3.appendChild(headerText3);
    newDiv.appendChild(header3);

    header4.appendChild(headerText4);
    newDiv.appendChild(header4);

    header5.appendChild(headerText5);
    newDiv.appendChild(header5);

    header6.appendChild(headerText6);
    newDiv.appendChild(header6);

    document.body.appendChild(newDiv);

    var colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', '#E6B333', '#3366E6', '#999966'];

    var randomItem = colorArray[Math.floor(Math.random()*colorArray.length)];

    var c = document.getElementsByClassName("headers");

    for (let i = 0; i < c.length; i++){
        c[i].addEventListener('dblclick', function(){
            c[i].style.color = colorArray[Math.floor(Math.random()*colorArray.length)]
        })
    }

    let ul = document.createElement('ul');
    document.body.appendChild(ul);
    let counter = 1;

    document.getElementsByClassName('button')[0].addEventListener('click', function(){
       let list =  document.createElement('li') ;
       let text = document.createTextNode('This is list item '+ counter);
       counter++ //counter = counter + 1
       list.appendChild(text);
       ul.appendChild(list);
       list.addEventListener('click', function(){
           list.style.color = colorArray[Math.floor(Math.random()*colorArray.length)]

       })
       list.addEventListener('dblclick', function(){
            ul.removeChild(list)
       })
       

    
    })




})

