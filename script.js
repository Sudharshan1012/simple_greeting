function display()
{
    var name = document.getElementById("sname").value;
    if(name === "")
    {
        var result2 = ("Name cannot be empty");
        document.getElementById("greet").innerHTML=result2;
    }
    else{
    var course = document.getElementById("course").value;
    var result = ("Hi,"+name+". You have successfully registered for the "+course+" course.");
    document.getElementById("greet").innerHTML=result;}
}