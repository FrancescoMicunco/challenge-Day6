const deleteProp = function(obj, str) {

    delete obj.str;
    console.log(obj)
    return obj
}
let stringa = "name"
let object = {
    name: "Stephan",
    surname: "Oliver",
    dateOfBirth: "31-09-1990"
}
deleteProp(object, stringa)