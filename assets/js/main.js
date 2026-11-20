const h=document.querySelector('header'),on=()=>h.classList.toggle('s',scrollY>40);on();addEventListener('scroll',on,{passive:true});
const tg=document.getElementById('tg'),ul=document.querySelector('.nav ul');tg.onclick=()=>{const o=ul.classList.toggle('o');tg.setAttribute('aria-expanded',o)};
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('on');io.unobserve(e.target)}}),{threshold:.15});
document.querySelectorAll('.rv').forEach((e,i)=>{e.style.transitionDelay=(i%4)*90+'ms';io.observe(e)});
const yr=document.getElementById('yr');if(yr&&!matchMedia('(prefers-reduced-motion:reduce)').matches){new IntersectionObserver((es,o)=>{if(es[0].isIntersecting){o.disconnect();const t=performance.now();(function f(n){const p=Math.min((n-t)/1400,1);yr.textContent=Math.round(2000+22*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(f)})(t)}}).observe(yr)}
const f=document.getElementById('qf');if(f){const m=document.getElementById('fm'),say=(c,t)=>{m.className=c;m.textContent=t};
f.addEventListener('submit',async e=>{e.preventDefault();if(f._gotcha.value)return;if(!f.checkValidity()){f.reportValidity();return}
if(f.action.includes('YOUR_FORM_ID')){say('er','This form is not connected yet, so your request was not sent. Please call or email us directly.');return}
try{const r=await fetch(f.action,{method:'POST',body:new FormData(f),headers:{Accept:'application/json'}});if(r.ok){f.reset();say('ok','Thank you. Your quote request was sent. We will contact you soon.')}else say('er','Your request could not be sent. Please try again or contact us directly.')}catch(x){say('er','Network error. Your request was not sent. Please try again.')}})}
