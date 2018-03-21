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
