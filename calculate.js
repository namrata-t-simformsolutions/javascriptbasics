
    function calc(a){
         var x = parseInt(document.getElementById("no1").value);
         var y = parseInt(document.getElementById("no2").value);
         var z = document.getElementById("operator").value;
         
         if(z=='+')
         {
             alert(x+y);
         }
         else if(z=='-')
         {
             alert(x-y);
         }
         else if(z=='*')
         {
             alert(x*y);
         }
         else if(z=='/')
         {
             prompt(x/y);
         }
    } 
