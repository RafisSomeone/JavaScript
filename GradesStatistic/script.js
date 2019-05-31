var inputs = new Array();

class Row {


    constructor(name,grade,subject){
        this.name = name;
        this.grade = parseFloat(grade,10);
        this.subject = subject;

    }


}

class Data {
constructor(form1,form2,form3)
{
    this.form1=form1;
    this.form2=form2;
    this.form3=form3;
}


}

class AVG {

    constructor(name)
    {
        this.name = name;
        this.val =0;
        this.counter=0;
    }

}


function clear(table){

    var table = document.getElementById(table);
    while(table.childNodes[2]){
        table.removeChild(table.childNodes[2]);
    }



}

function deleteRow(e){
    
  var tr = e.parentElement.parentElement;
  tr.parentNode.removeChild(tr);



}

function avgSub() {
 var subject = new Array();
 var table = document.getElementById("table1");
 for (var i = 1, row; row = table.rows[i]; i++) {
    var flag =0;
    for(y in subject)
    {

        
        if( subject[y].name == row.cells[2].childNodes.item(0).value)
        {
            flag = 1;
            subject[y].val=subject[y].val +parseInt(row.cells[1].childNodes.item(0).value,10);
            subject[y].counter++;
        }
    }
    if(flag === 0){
        var newAvg = new AVG(row.cells[2].childNodes.item(0).value)
        newAvg.val=parseInt(row.cells[1].childNodes.item(0).value);
        newAvg.counter++;
        subject.push(newAvg);
    }



 }

for(x in subject){

    var newTr = document.createElement("tr");
    var newTd1 = document.createElement("td");
    var newTd2 = document.createElement("td");
    newTd1.textContent = subject[x].name;
    newTd2.textContent = subject[x].val/subject[x].counter;
    newTr.appendChild(newTd1);
    newTr.appendChild(newTd2);
    var table = document.getElementById("table2");
    table.appendChild(newTr);
}


}



function avgStudent() {
    var student = new Array();
    var table = document.getElementById("table1");
    for (var i = 1, row; row = table.rows[i]; i++) {
       var flag =0;
       for(y in student)
       {
   
           
           if( student[y].name == row.cells[0].childNodes.item(0).value)
           {
               flag = 1;
               student[y].val=student[y].val +parseFloat(row.cells[1].childNodes.item(0).value,10);
               student[y].counter++;
           }
       }
       if(flag === 0){
           var newAvg = new AVG(row.cells[0].childNodes.item(0).value)
           newAvg.val=parseFloat(row.cells[1].childNodes.item(0).value);
           newAvg.counter++;
           student.push(newAvg);
       }
   
   
   
    }
   
    console.log(student);
   
    for(x in student){

        var newTr = document.createElement("tr");
        var newTd1 = document.createElement("td");
        var newTd2 = document.createElement("td");
        newTd1.textContent = student[x].name;
        newTd2.textContent = student[x].val/student[x].counter;
        newTr.appendChild(newTd1);
        newTr.appendChild(newTd2);
        var table = document.getElementById("table3");
        table.appendChild(newTr);
    }
    
   }




function add(){
input = window.prompt("Wpisz imię nazwisko ucznia ocene i przedmiot");
if(input !== null){
var array = input.split(" ");
var subject="";
for( i = 3;i<array.length; i++){
    subject=subject + array[i]+" ";

}
let newRow = new Row(array[0]+" "+array[1],array[2],subject);
addForm(newRow);
}
}


function addForm(newRow) {

   
    var newTr = document.createElement("tr");
    var newTd1 = document.createElement("td");
    var newTd2 = document.createElement("td");
    var newTd3 = document.createElement("td");
    var newTd4 = document.createElement("td");
    var form1 = document.createElement("input");
    var form2 = document.createElement("input");
    var form3 = document.createElement("input");
    var button = document.createElement("button");
    button.textContent="delete";
  
    button.onclick=function() {deleteRow(button)};
    form1.value=newRow.name;
    form2.value=newRow.grade;
    form3.value=newRow.subject;
    form1.type="text";
    var data = new Data(form1,form2,form3);
    inputs.push(data);
    newTr.appendChild(newTd1);
    newTr.appendChild(newTd2);
    newTr.appendChild(newTd3);
    newTd1.appendChild(form1);
    newTd2.appendChild(form2);
    newTd3.appendChild(form3);
    newTd4.appendChild(button);
    newTr.appendChild(newTd4);
    var table = document.getElementById("table1");
   
    table.appendChild(newTr);

}

document.getElementById("avg").onclick= function(){clear("table2");clear("table3");avgStudent();avgSub();

var table = document.getElementById("table2");
var x = new Array(); 
var y = new Array();
for (var i = 1, row; row = table.rows[i]; i++) {

 x.push(row.cells[0].childNodes.item(0).data);
 var tmp2 = row.cells[1].childNodes.item(0).data;
 if(tmp2.length>3){
     tmp2 = tmp2.substring(0,4);
 }
 y.push(tmp2);
}
var canvas = document.getElementById("canvas");

draw(x,y,canvas.width,canvas.height,5,"canvas")

var table = document.getElementById("table3");
var x2 = new Array(); 
var y2 = new Array();
for (var i = 1, row; row = table.rows[i]; i++) {

 x2.push(row.cells[0].childNodes.item(0).data);
 var tmp = row.cells[1].childNodes.item(0).data;
 if(tmp.length>3){
     tmp = tmp.substring(0,4);
 }
 y2.push(tmp);
}
var canvas2 = document.getElementById("canvas2");
draw(x2,y2,canvas2.width,canvas2.height,5,"canvas2")

}



function draw(x,y,size_x,size_y,max_y,canvas)
{ 

    var x_percent = size_x/100;
    var y_percent = (size_y)/max_y;

    
    var canvas = document.getElementById(canvas);
    var ctx = canvas.getContext('2d');
    var left_corner_x =0;
    var left_corner_y =0;
    var gradient = ctx.createLinearGradient(0, 0, size_x, 0);
    gradient.addColorStop("0", "rgb(255,174,30)");
    gradient.addColorStop("0.5", "rgb(232,119,42)");
    gradient.addColorStop("1.0", "rgb(255,73,42)");
    var gradient2 = ctx.createLinearGradient(0, 0, size_x, size_y);
    gradient2.addColorStop(0, 'rgb(255,255,53)');
    gradient2.addColorStop(0.6, 'rgb(232,192,9)');
    ctx.fillStyle = gradient2;
    ctx.fillRect(0, 0, size_x,size_y);
       
    for(var i=0;i<x.length;i++){
        var width =  (size_x/x.length)/2
        left_corner_x = left_corner_x +size_x/(x.length+1);
        left_corner_y = size_y-(y_percent*y[i]-10);
        ctx.fillStyle = gradient;
        ctx.fillRect(left_corner_x-width/2,left_corner_y,width, y_percent*y[i]-40);
        ctx.fillStyle = "rgb(255,255,255)";
        ctx.fillText(y[i],left_corner_x-width/4, left_corner_y+(y_percent*y[i]-20)/2,width);
        ctx.fillText(x[i],left_corner_x-width/3, size_y-10,width);
    }
   


}
