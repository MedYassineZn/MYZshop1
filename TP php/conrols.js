


function change_size_nav(){
    button = document.querySelectorAll('.initial-style')
    bts= document.getElementById('burger').checked
    nv=document.getElementById("nv")
    sec=document.getElementById("sec")
    td=document.querySelectorAll('.tdd')
    tb=document.getElementById("tbl")

    if(nv.classList.contains('nav0')){
        nv.classList.remove('nav0')
        nv.classList.add('nav1')
        sec.style.width="96vw"
        tb.style.width="4vw"
        
        
    }else{
        nv.classList.remove('nav1')
        nv.classList.add('nav0')
        sec.style.width="80vw"   
        tb.style.width="20vw"
        
    }

    for (i=0; i<td.length;i++){
        td[i].classList.toggle('tff')
        
    }

}
