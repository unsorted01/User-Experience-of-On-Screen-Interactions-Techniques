function loadJSON(jsonfile,callback) {                                        // loading the json file

var xobj = new XMLHttpRequest();
xobj.overrideMimeType("application/json");
xobj.open('GET', jsonfile, true);
xobj.onreadystatechange = function () {
if (xobj.readyState == 4 && xobj.status == "200") {

// .open will NOT return a value but simply returns undefined in async mode so use a callback
callback(xobj.responseText);

}
}
xobj.send(null);

}

// Call to function with anonymous callback
function wrapText(id, re,t){                                        // annotates every recognised entity
 $("#"+id).html(function(i,val) {                                   // select all the text (val)
    			
  var newl=0;                                                       // new lenght = 0
  var j=0;
  var tlength;                                                  
  for ( j =0; j < re.length  ; j++) {                               // select every recognised entity

    var abst=re[j]["@abstract"];                                    // insert to variable abst the specific abstract
    if (abst) {                                                     // if abstract exists for the specific entity
          tlength=val.length;                                       // tlenght equals the lenght of the text
				  var sfName = re[j]["@surfaceForm"];                       // sfName takes the name of the entity
          var offset = parseInt(re[j]["@offset"])+newl;             // offset is the point in the text where the first letter of the entity can be found
          var vlength = parseInt(sfName.length);                    // vlenght is the lenght of the specific entity
              
         val =  val.substr(0,offset) +                              // tag "entity" is inserting between every recognised entity
               "<entity>" +
               val.substr(offset,vlength) +
               "</entity>" +
               val.substr(offset + vlength);
             
               newl=newl+val.length-tlength;                        // newl is the new lenght of the text
    }}
 return val ;                                                       // function returns the final annotated text 
})}