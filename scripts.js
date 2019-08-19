document.addEventListener("DOMContentLoaded", function(){
    let newDiv = document.createElement('div');

    newDiv.className = 'header-container';
    
    let header1 = document.createElement('h1');
    let headerText1 = document.createTextNode('This is an h1');

    header1.className = "h1";

    let header2 = document.createElement('h2');
    let headerText2 = document.createTextNode('This is an h2');

    header2.className = "h2";

    let header3 = document.createElement('h3');
    let headerText3 = document.createTextNode('This is an h3');

    header3.className = "h3";

    let header4 = document.createElement('h4');
    let headerText4 = document.createTextNode('This is an h4');

    header4.className = "h4";

    let header5 = document.createElement('h5');
    let headerText5 = document.createTextNode('This is an h5');

    header5.className = "h5";

    let header6 = document.createElement('h6');
    let headerText6 = document.createTextNode('This is an h6');

    header1.className = "h6";
    
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

    var c = document.getElementsByClassName("header-container");

    for (var i = 0; i < c.length; i++){
        c[i].addEventListener('dblclick', function(){
            document.getElementsByClassName(c[i]).style.color = randomItem 
        })
       
    }

    GamepadButton.addEventListener("click", function(){
        let list = document.createElement('h1');
        let listText = document.createTextNode("This is list item 1");
        Text.appendChild(listText);
        document.body.appendChild(list);
    })

})

