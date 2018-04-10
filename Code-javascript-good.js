var x=document.getElementById("duc").text();


//Higher-Order Components - React
  const Hoc=(parameter)=>{
    return (element)=>{
        return element+"SUCCESS"+parameter;
        }
        }
    var functionTest=Hoc("False");
    console.log(functionTest("YES "));
    //result: YES SUCCESS False
// function HOc example
function addRemove(col) {
    return (element) => {

        col.push(element);

        return () => remove1Mutate(col, element);
        //function (){
         //   return remove1Mutate(col, element);
        }
    };

let arr=addRemove([3,4,5]);
let afterArr=arr(45); // arr:[3,4,5,45]
afterArr(); // arr:[3,4,5]
//example about get error
// from this api below
{
    "errors": {
        "email": [
            "can't be blank"
        ],
        "password": [
            "can't be blank"
        ],
        "username": [
            "can't be blank",
            "is too short (minimum is 1 character)",
            "is too long (maximum is 20 characters)"
        ]
    }
}
// i can list all error by the way
function mapValuesToList(obj, fn) {
    let ret = [];

    for (var k in obj) {
        if (obj.hasOwnProperty(k)) {
            ret.push(fn(obj[k], k));
        }
    }

    return ret;
  
}
//code in reactjs
render
(
  <ul className="error-messages">
           
            
            {
                mapValuesToList(errors, (errList, field) => (
                errList.map((errMessage, i) => (
                    <li key={i}>{field} {errMessage}</li>
                ))
            ))
}
     </ul>
)
// code goond in javascript
const len = items.length;
const itemsCopy = [];
let i;
for (i = 0; i < len; i++) {
itemsCopy[i] = items[i];
}
// Tốt
const itemsCopy = [...items];
//example we have object in javacsript  { object,object,object}   how to we handle each oject item ??
// we use before
for(item in listItem){
  FunctionHandleEachItem(listItem[item]);
}
//convert dd/mm/yyyy to yyyy/mm/dd
function formatDate(date) {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
}
