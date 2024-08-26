const comparaisonContainer = document.querySelector('.comparaison_container')
document.querySelector('.slider-range').addEventListener('input', (e)=>{
  comparaisonContainer.style.setProperty('--position',`${e.target.value}%`);
})
