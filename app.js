const left = document.querySelector(".left");
const rigth = document.querySelector(".right");
const bar = document.querySelector(".bar");
const editor = document.querySelector(".editor");
const run = document.querySelector(".run")
const iframe = document.querySelector(".iframe");


const drag = (e)=>{
    e.preventDefault();
    document.selection ? document.selection.empty() : window.getSelection().removeAllRanges();

    left.style.width = (e.pageX - bar.offsetWidth /3) + "px";
    editor.resize();
    console.log(e)
    console.log("clocked")
}

bar.addEventListener("mousedown" , ()=>{
    document.addEventListener("mousesmove" , drag);
})
bar.addEventListener("mouseup" , ()=>{
    document.removeEventListener("mousesmove" , drag);
})
/*
run.addEventListener("click" , ()=>{
    console.log("run")
    // iframe.src = "data:text/html;charset=utf-8" + encodeURI(html);
})

*/

run.addEventListener("click" , ()=>{
    let html = editor.textContent
    // console.log(html);
    iframe.src = "data:text/html;chatset=utf-8," + encodeURI(html);

})

document.getElementById("live").onclick = ()=>{
    // console.log("came3----")
    if(this.checked){
        console.log("came2----")
        editor.addEventListener("keyup" , ()=>{
            console.log("came----")
           const html = editor.textContent;
           iframe.src = "data:text/html;charset=utf-8," + encodeURI(html);
        })
   }else{
        this.onwebkitanimationstart
        console.log("returning");
        return;
   }
}
 
