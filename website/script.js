/* INVITE TOKEN */
const params = new URLSearchParams(window.location.search);
if(params.get("token")==="EXEC"){
  document.getElementById("gate").style.display="none";
}

/* ACCESS */
function unlock(){
  const box=document.getElementById("terminal");
  if(document.getElementById("pass").value==="haz"){
    document.getElementById("granted").style.display="flex";
    setTimeout(()=>{
      document.getElementById("granted").style.display="none";
      document.getElementById("gate").style.display="none";
    },1500);
  }else{
    box.classList.add("shake");
    setTimeout(()=>box.classList.remove("shake"),300);
  }
}

/* PARTICLES */
const particles=document.getElementById("particles");
for(let i=0;i<60;i++){
  let p=document.createElement("div");
  p.className="particle";
  p.style.left=Math.random()*100+"vw";
  p.style.top=Math.random()*100+"vh";
  p.style.animationDuration=20+Math.random()*40+"s";
  particles.appendChild(p);
}

/* MODALS */
function openModal(id){document.getElementById(id).style.display="flex"}
function closeModal(){document.querySelectorAll(".modal").forEach(m=>m.style.display="none")}

/* SCROLL ANIMATION */
const secs=document.querySelectorAll("section");
const obs=new IntersectionObserver(e=>{
  e.forEach(v=>v.isIntersecting&&v.target.classList.add("visible"))
},{threshold:.2});
secs.forEach(s=>obs.observe(s));

/* COUNTERS */
document.querySelectorAll("[data-target]").forEach(el=>{
  let o=new IntersectionObserver(e=>{
    if(e[0].isIntersecting){
      let t=+el.dataset.target,c=0,step=t/120;
      let i=setInterval(()=>{
        c+=step;el.textContent=Math.ceil(c);
        if(c>=t){el.textContent=t;clearInterval(i)}
      },16);
      o.disconnect();
    }
  },{threshold:.6});
  o.observe(el);
});

/* TYPE */
const typed=document.getElementById("typed");
const txt="Discord Staff and Bot Developer";
let i=0;
setInterval(()=>{if(i<=txt.length)typed.textContent=txt.slice(0,i++)},90);

/* SCROLL BAR */
window.addEventListener("scroll",()=>{
  let h=document.documentElement;
  document.getElementById("scrollbar").style.width=
    (h.scrollTop/(h.scrollHeight-h.clientHeight))*100+"%";
});
