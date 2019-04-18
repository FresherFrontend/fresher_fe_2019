const olapic = {
    olapic_menu: () => {
        var viewall = document.querySelector('.viewall');
        var a = document.querySelector('.viewall a');
        var ul = document.querySelector('.olapic-desktop');
        var li = document.querySelectorAll('.olapic-mobile li');
        viewall.onclick = () =>{
            if( ul.style.display == 'none'){
                ul.style.display = 'block';
            } else{
                ul.style.display = 'none';
            }
            a.setAttribute('class','change_color');
        }
    },
    olapic_change_text: () =>{
        var the_a = document.querySelectorAll('.olapic-desktop a');
        var a_change = document.querySelector('.viewall a');
        var li_desktop = document.querySelectorAll('.olapic-desktop li');   
        for(let i=0 ; i<li_desktop.length ; i++){
            li_desktop[i].onclick = ()=>{
                var active = document.getElementsByClassName("active");
                active[0].className = active[0].className.replace("active","");
                li_desktop[i].classList.add('active');
                var current = document.getElementsByClassName("active1");
                current[0].className = current[0].className.replace("active1", "");
                li_desktop[i].classList.add('active1');
                a_change.innerHTML = the_a[i].text;
            }
        }
    },
    olapic_fancybox: ()=>{
        $('.image-gallery').fancybox({
            loop:true
        });
    }
}
export default olapic;