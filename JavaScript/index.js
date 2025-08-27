// console.log("Hello First Love");

document.getElementById("loginbutton").addEventListener("click",function(e)
        {
            e.preventDefault();
            const mobilenumber = 12345678999;
            const pinnumber = 143;
            const mobilenumbervalue = document.getElementById('mobile-number').value;
            const mobilenumbervalueconvert = parseInt(mobilenumbervalue);
            const pinnumbervalue = document.getElementById('pin-number').value;
            const pinnumbervalueconvert = parseInt(pinnumbervalue);
            
            if(mobilenumber.length ===mobilenumbervalueconvert.length && pinnumber ===pinnumbervalueconvert)
            {
                window.location.href="main.html";
            }
            else {alert("You don't Love Me");}
        });
