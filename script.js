const nav = document.getElementById('nav');
  const reveal = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')});
  },{threshold:.12});
  document.querySelectorAll('.reveal').forEach(el=>reveal.observe(el));
  window.addEventListener('scroll',()=>nav.classList.toggle('scrolled',window.scrollY>30),{passive:true});