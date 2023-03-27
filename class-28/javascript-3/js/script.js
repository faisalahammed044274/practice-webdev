var something = new Object();

something.first = "This is our first line";

something.second = "This is the 2nd line";

something.allData= function(){
   return this.first + " and " + this.second;
}


console.log(something.allData());

function adsClose(){
    document.getElementById("advertisement").innerHTML="";
}
