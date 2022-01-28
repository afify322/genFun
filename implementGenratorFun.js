/**Create an iterable object by implementing @@iterator method 
i.e. Symbol.iterator, so that you can use for..of and retrieve its 
properties.  retrieving the object properties and its values. */


var person = {
  fname:"3afify",
  age:25
}
person.name = "hamada";




var EvenIt=function(){
    var start = -1;
    var keys=Object.keys(this)
    var values=Object.values(this)
    console.log(values);
    var it = {
        next :function(){
            start = start+1;
            if(start<keys.length){

                return {
                    value:{key:keys[start],value:values[start]},
                    done:false
                }
            }
            else{
                return{
                    value:undefined,
                    done:true
                }
            }
        }
    }
    return it;
}
 var it=EvenIt()
 person[Symbol.iterator] = EvenIt;
[...person]
