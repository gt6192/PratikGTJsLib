var popapenddiv =  document.getElementsByTagName("body")[0];
var popdiv = document.createElement("div");
popdiv.setAttribute('id', 'pqowieuryt');
popdiv.style.right = 0;
popdiv.style.bottom = 0;
popdiv.style.position = "fixed";
popapenddiv.appendChild(popdiv);

class Pratik_GT_popNotify
{
    constructor(type, message)
    {
        this.gtnote(type, message);
    }

    //notification
    gtnote(type, gotmessage)
    {
        var popbody =  document.getElementById("pqowieuryt");
        var mess = document.createElement("div");
        var ptag = document.createElement("p");

        mess.setAttribute('class', type);
        mess.setAttribute('id', type);

        var text = document.createTextNode(gotmessage);
        var p = ptag.appendChild(text);
        mess.appendChild(ptag);
        popbody.appendChild(mess);
        var pop = mess;
        pop.addEventListener("click", function(){
            document.getElementById("pqowieuryt").removeChild(pop);
        });
        setTimeout(() => {
            try{
                document.getElementById("pqowieuryt").removeChild(pop);
            }
            catch{var temp = 0;}
        }, 5000);
    }
}