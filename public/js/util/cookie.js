/**
 * Created by lin on 2017/4/10.
 */
let getCookie = function (c_name)
{
    if (document.cookie.length>0)
    {
        let c_start=document.cookie.indexOf(c_name + "=")
        if (c_start != -1)
        {
            c_start = c_start + c_name.length+1
            let c_end=document.cookie.indexOf(";",c_start)
            if (c_end==-1) c_end=document.cookie.length
            return (document.cookie.substring(c_start,c_end))
        }
    }
    return ""
}

let setCookie = function setCookie(c_name,value,expiredays)
{
    let exdate=new Date()
    exdate.setDate(exdate.getDate()+expiredays)
    document.cookie=c_name+ "=" +encodeURI(value)+
        ((expiredays==null) ? "" : ";expires="+exdate.toGMTString())
}
module.exports = {
    "getCookie":getCookie,
    "setCookie" : setCookie
}
