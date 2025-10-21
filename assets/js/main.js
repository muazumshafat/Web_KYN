
document.addEventListener('DOMContentLoaded', function(){
  var pre = document.getElementById('preloader');
  if(pre) setTimeout(function(){ pre.style.opacity='0'; pre.style.pointerEvents='none'; pre.style.transition='opacity .5s'; setTimeout(()=>pre.remove(),600); }, 500);
  document.querySelectorAll('a[href^="#"]').forEach(function(a){ a.addEventListener('click', function(e){ var id=this.getAttribute('href').slice(1); var el=document.getElementById(id); if(el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth', block:'start'}); } }); });
  if(window.AOS && AOS.init) AOS.init({duration:700, once:true});
});
