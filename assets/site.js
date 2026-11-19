(function(){
var b=document.querySelector('.menu-btn'),l=document.getElementById('links');
if(b)b.addEventListener('click',function(){var o=l.classList.toggle('open');b.setAttribute('aria-expanded',o)});
var pv=document.getElementById('pv');if(!pv)return;
var fr=document.getElementById('pv-frame'),tt=document.getElementById('pv-title'),nw=document.getElementById('pv-new'),last=null;
var small=window.matchMedia('(max-width: 760px)');
function close(){pv.classList.remove('open');document.body.classList.remove('noscroll');fr.src='about:blank';if(last)last.focus()}
document.addEventListener('click',function(e){
  var a=e.target.closest&&e.target.closest('a[href]');if(!a)return;
  var h=a.getAttribute('href');if(!/^docs\/.+\.pdf$/i.test(h))return;
  if(small.matches){a.setAttribute('target','_blank');return}
  e.preventDefault();last=a;
  tt.textContent=decodeURIComponent(h.replace(/^docs\//,'').replace(/\.pdf$/i,'')).replace(/^Day /,'Deliverable ');
  fr.src=h;nw.href=h;pv.classList.add('open');document.body.classList.add('noscroll');document.getElementById('pv-close').focus();
});
document.getElementById('pv-close').addEventListener('click',close);
pv.addEventListener('click',function(e){if(e.target===pv)close()});
document.addEventListener('keydown',function(e){if(e.key==='Escape'&&pv.classList.contains('open'))close()});
})();
