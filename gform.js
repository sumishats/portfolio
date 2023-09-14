function namecheck()
{
    let name=document.getElementById("name").value
    let nm=null
     nm = name.trim()
    var spc=/^[!@#$%^&()_+\-=\[\]{};':"\\|,.<>\/?]+[A-Za-z]$/;
    document.getElementById("name").value = nm;
    if(nm==""||name==null)
    {
        document.getElementById("lbname").style.display="block"
        return false
    }
    else if(!isNaN(nm[0]))
    {
        document.getElementById("lbname").style.display="none"
        document.getElementById("lbname-01").style.display="block"
        return false
    }
    else if(nm.match(spc))
    {
        document.getElementById("lbname").style.display="none" 
        document.getElementById("lbname-01").style.display="none"  
        document.getElementById("lbname-02").style.display="block"
        return false
    }
    else{
        document.getElementById("lbname").style.display="none" 
        document.getElementById("lbname-01").style.display="none" 
        document.getElementById("lbname-02").style.display="none"
        return true

    }
}
function emailcheck()
{
    var val=document.getElementById("email").value
    var v=null
     v = val.trim()
    document.getElementById("email").value = v;
    if(v==""||val==null)
    {
        document.getElementById("lbemail").style.display="block"
        return false
    }
    else if(!isNaN(v[0]))
    {
        document.getElementById("lbemail-01").style.display="block"
        return false
    }


    else if (!/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(v))
  {
    document.getElementById("lbemail-02").style.display="block"
    return false
  }
   
  else{
        document.getElementById("lbemail").style.display="none" 
        document.getElementById("lbemail-01").style.display="none"
        document.getElementById("lbemail-02").style.display="none" 
        return true

    }
}

function sub()
{
    var val=document.getElementById("subject").value
    var v=null
     v = val.trim()
    document.getElementById("subject").value = v;
    var n=v.length
    console.log(n)
    if(v==""||val==null)
    {
        document.getElementById("lbsub").style.display="block"
        return false
    }
    else{
        
        return true

    }

}

function msgcheck()
{

    var val=document.getElementById("mesge").value
    var v=null
     v = val.trim()
    document.getElementById("mesge").value = v;
    var n=v.length
    console.log(n)
    if(v==""||val==null)
    {
        document.getElementById("lbmes").style.display="block"
        return false
    }
    else{
        
        return true

    }
}