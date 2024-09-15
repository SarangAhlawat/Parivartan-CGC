window.addEventListener('scroll', function() {
    const abtSection = document.getElementById('abt-section');
    const sectionPosition = abtSection.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    console.log('Section position:', sectionPosition);
    console.log('Screen height:', screenHeight); 

    // is in view
    if (sectionPosition < screenHeight && sectionPosition > 0) {
      console.log('Section in view, adding active class');
      abtSection.classList.add('active'); //up and fade in
    } else {
      console.log('Section out of view, removing active class');
      abtSection.classList.remove('active'); // down and fade out
    }
  });