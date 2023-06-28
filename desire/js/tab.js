const btn1 = document.querySelector('.pagination_first'),
 btn2 = document.querySelector('.pagination_second'),
 btn3 = document.querySelector('.pagination_third'),
 tab1 = document.querySelector('.list_first'),
 tab2 = document.querySelector('.list_second'),
 tab3 = document.querySelector('.list_third');

function showTab() {
    btn1.addEventListener('click', () => {
      tab1.style.display = 'block'
      tab2.style.display = 'none'
      tab3.style.display = 'none'
      btn1.style.background = '#FFEF35'
      btn2.style.background = '#000'
      btn3.style.background = '#000'
    })
    
    btn2.addEventListener('click', () => {
      tab2.style.display = 'block'
      tab1.style.display = 'none'
      tab3.style.display = 'none'
      btn2.style.background = '#FFEF35'
      btn1.style.background = '#000'
      btn3.style.background = '#000'
    })
    
    btn3.addEventListener('click', () => {
      tab3.style.display = 'block'
      tab1.style.display = 'none'
      tab2.style.display = 'none'
      btn3.style.background = '#FFEF35'
      btn1.style.background = '#000'
      btn2.style.background = '#000'
    })
  }
   showTab()