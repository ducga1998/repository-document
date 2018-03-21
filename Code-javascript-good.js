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
