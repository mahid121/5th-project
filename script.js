const bg = document.querySelector('.bg')
const loadText =  document.querySelector('.load-text')
let load = 1
var int = setInterval(blurring,30)
function blurring(){
    load++
    if(load>99){
        clearInterval(int)
    }
   loadText.innerHTML = `${load}%`
   loadText.style.opacity = scale(load, 0, 100, 1 ,0)
   bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}


//map for the load opacity in each number

const scale = (num, in_min, in_max, out_min, out_max)=>{
    return ((num-in_max)*(out_max-out_min))/((in_max-in_min)+out_min)
}