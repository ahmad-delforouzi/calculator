var counter = 0;

 //function that display value
function charValue(val)
{
    document.getElementById("result").value+=val;
}

//function that clear the last char display
function clrLast()
{
    document.getElementById("result").value = document.getElementById("result").value.slice(0, -1);
}

//function for test of a pushbutton
function mean()
{    
    document.getElementById("result").value+="00";
}


//function that clear the display
function clr()
{
    document.getElementById("result").value = "";
}

//function for communication
function result()
{
    $.ajax({
        type : 'POST',
        url : "/",
        contentType: 'application/json;charset=UTF-8',
        data : JSON.stringify({"data" : document.getElementById("result").value}),
        success: function(response){
           data = JSON.parse(response);
           document.getElementById("result").value = data['result'];
        },
        error: function(response){
           document.getElementById("result").value = response;
        }
    });
}

//function for mean
function rst()
{
    var value = document.getElementById("result").value;
    if ( value === "")
    {
       document.getElementById("result").value = "Enter some value atleast!!";
       setTimeout(() => { clr(); }, 500);
    }
    else
    {
        if (value.indexOf(',') > -1 && value.slice(-1) !== ",")
        {

            $.ajax(
            {
                    type : 'POST',
                    url : "/mean",
                    contentType: 'application/json;charset=UTF-8',
                    data : JSON.stringify({"data" : document.getElementById("result").value}),
                    success: function(response){
                        data = JSON.parse(response);
                        document.getElementById("result").value = data['result'];
                    },
                    error: function(response){
                        document.getElementById("result").value = response;
                    }
            });
        }
        else
        {
            document.getElementById("result").value = "Just hover over M.";
            setTimeout(() => { clr(); }, 500);
        }
    }

}




