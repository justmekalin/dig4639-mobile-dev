function Sum (a, b) {
  let result = undefined
  if(typeof a =="number" && typeof b == "number") {
    return a+b
  }
  return result;
}
//AddList function
function AddList (arr){
  let result = undefined;
  if(Array.isArray(arr) && arr.length > 0){
    let result = 0;
  for(var i = 0;i <arr.length; i++){
    if(typeof arr[i] != "number"){
      result = undefined;
      break
    }
    result = result + arr[i];
  }
}
return result;
}

export { Sum, AddList };
