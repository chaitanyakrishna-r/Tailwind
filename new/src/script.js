
const navDialog = document.getElementById('nav-dialog');

function handleMenu(){
   navDialog.classList.toggle('hidden');
}

// intersction ka part
const initialTranlateLTR =  -48*4;
const initialTranlateRTL = 36*4;


function setupIntersectionObserver(element ,isLTR, speed){
   const intersectionCallback =(entries)=>{
      const isIntersecting = entries[0].isIntersecting;
     
      if(isIntersecting){
         document.addEventListener('scroll',scrollHandler);
      }else{
         document.removeEventListener('scroll',scrollHandler)
      }
   }

   const intersectionObserver = new IntersectionObserver(intersectionCallback);

   intersectionObserver.observe(element);

   function scrollHandler(){
      const translateX = (window.innerHeight - element.getBoundingClientRect().top) *speed;

      let totalTranslate = 0;
      if(isLTR){
         totalTranslate=translateX + initialTranlateLTR;
      }else{
         totalTranslate = -(translateX + initialTranlateRTL);
      }
      element.style.transform = `translateX(${totalTranslate}px)`
      
   }

}
const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');
const line3 = document.getElementById('line3');
const line4 = document.getElementById('line4');
// const line3 = document.querySelector('#line3')




setupIntersectionObserver(line1, true, 0.15);
setupIntersectionObserver(line2, false, 0.15);
setupIntersectionObserver(line3, true, 0.15);
setupIntersectionObserver(line4, false, 0.8)



// intersection part ends here

// faqs

const dtElement = document.querySelectorAll('dt');

dtElement.forEach(element=>{
   element.addEventListener('click',()=>{
      const ddIds = element.getAttribute('aria-controls');
      const ddElements = document.getElementById(ddIds);
      const ddArrowIcons = element.querySelector('i');

      ddElements.classList.toggle('hidden')
      ddArrowIcons.classList.toggle('-rotate-180')
      
   })
})




