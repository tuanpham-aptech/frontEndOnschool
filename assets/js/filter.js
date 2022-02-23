$(document).ready(()=>{

$("#button").click((e)=> {
    e.preventDefault();
    var masv = $("#masv").val();
    var mahoso = $("#mahoso").val();
    var hoten = $("#hoten").val();
    if(masv || mahoso || hoten){
        console.log(
            {masv:masv,
            mahoso:mahoso,
            hoten:hoten}
        );
    }
})
})
