
document.addEventListener('DOMContentLoaded' , function () {

    //Selectores del menu 
    const planetMenu = document.querySelector('#planets-menu'); 
    const subMenu = document.querySelector('#sub-menu'); 
    const menuBtn = document.querySelector('#menu-btn'); 
    const menuList = document.querySelector('#menu-list'); 

    /*efecto para los planetas 
      effects of the planets */
    const planetMercurySection = document.querySelector('#mercury'); 
    const planetVenusSection = document.querySelector('#venus'); 
    const planetEarthSection = document.querySelector('#earth'); 
    const planetMarsSection = document.querySelector('#mars'); 
    const planetJupiterSection = document.querySelector('#jupiter'); 
    const planetSaturnSection = document.querySelector('#saturn'); 
    const planetUranusSection = document.querySelector('#uranus');
    const planetNeptuneSection = document.querySelector('#neptune'); 
    const planetPlutoSection = document.querySelector('#pluto');  

    const mercury = document.querySelector('#mercury .planet-info .planet-mercury'); 
    const venus = document.querySelector('#venus .planet-info .planet-venus'); 
    const earth = document.querySelector('#earth .planet-info .planet-earth'); 
    const mars = document.querySelector('#mars .planet-info .planet-mars'); 
    const jupiter = document.querySelector('#jupiter .planet-info .planet-jupiter'); 
    const saturn = document.querySelector('#saturn .planet-info .planet-saturn'); 
    const uranus = document.querySelector('#uranus .planet-info .planet-uranus'); 
    const neptune = document.querySelector('#neptune .planet-info .planet-neptune'); 
    const pluto = document.querySelector('#pluto .planet-info .planet-pluto'); 


    //Flechas
    const back = document.querySelector('#back'); 
    const netx = document.querySelector('#next'); 

    //Secciones de personas
    const personOneContent = document.querySelector('#person-1-content'); 
    const personTwoContent = document.querySelector('#person-2-content'); 
  
    //Bonton scroll
    const btnScroll = document.querySelector('#btn-scroll'); 
    const header = document.querySelector('header'); 
    let intervalo = null; 

    
    
    
  

    /*Funciones */

    //Animacion person info
    back.addEventListener('click', () => {


        if(personOneContent.style.left == '-100%' ) {
            personOneContent.style.left = 0 +'%'; 
            personTwoContent.style.left = 100 + '%';
        }else {
            personOneContent.style.left = -100 +'%'; 
            personTwoContent.style.left = 0 + '%'; 
        }

    })

    netx.addEventListener('click', () => {

        if(personOneContent.style.left == '-100%' ) {
            personOneContent.style.left = 0 +'%'; 
            personTwoContent.style.left = 100 + '%';
        }else {
            personOneContent.style.left = -100 +'%'; 
            personTwoContent.style.left = 0 + '%'; 
        }

    })

    //Animacion de los planetas 
    const planetSection = [planetMercurySection, planetVenusSection, planetEarthSection, planetMarsSection, planetJupiterSection, planetSaturnSection, planetUranusSection, planetNeptuneSection, planetPlutoSection]; 

    const planetScroll = [mercury, venus, earth, mars, jupiter, saturn, uranus, neptune, pluto]; 

    let posicionScroll = 0; 

    function efectoParallax () {
        
        planetScroll.forEach( (planet, i) => {
            
            if(planet == mercury || planet == earth || planet == jupiter || planet == uranus || planet == pluto) {
                posicionScroll =  window.pageYOffset; 
            
                if(posicionScroll > planetSection[i].offsetTop) {
            
                    planet.style.marginLeft = -15 +'em'; 
                }else {
                    planet.style.marginLeft =  posicionScroll/planetSection[i].offsetTop - 20 +'em'; 
                }
            }else {
                if(posicionScroll > planetSection[i].offsetTop) {
            
                    planet.style.marginRight = -15 +'em'; 
                }else {
                    planet.style.marginRight =  posicionScroll/planetSection[i].offsetTop - 20 +'em'; 
                }
            }
            
        });


    }


    //Control de animacion del header menu
    menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active'); 
    menuList.classList.toggle('hide');
        
    })



    //Animacion de header info

    let info1 = document.querySelector('.info-1 '),
    info2 = document.querySelector('.info-2');

    let cambiarTexto = setInterval(() => {
    
        const cambiaTexto = () => {

            if(info2.classList.contains('animate')) {

                info2.classList.remove('animate')
                info1.classList.add('animate')

                info1.style.opacity = '1'
                info2.style.opacity = '0'
            }else {

                info1.classList.remove('animate')
                info2.classList.add('animate')

                info1.style.opacity = '0'
                info2.style.opacity = '1'
            }
        }   
            
        cambiaTexto();

    }, 9000);

    //Scroll submenu planets
    let enlace = null; 
    let destinoEnlace = null; 
    subMenu.addEventListener('click', e => {
        e.preventDefault(); 
        enlace = e.target.getAttribute('href'); 
        destinoEnlace = document.querySelector(enlace).offsetTop; 
        console.log(destinoEnlace)
        intervalo = setInterval(() => {

            if(posicionScroll < destinoEnlace) {

                posicionScroll+= 100

                if(posicionScroll >= destinoEnlace) {
                    posicionScroll = destinoEnlace; 
                    clearInterval(intervalo); 
                }

            }else {
                posicionScroll-= 100

                if(posicionScroll <= destinoEnlace) {
                    posicionScroll = destinoEnlace; 
                    clearInterval(intervalo); 
                }
            }

            window.scrollTo(0, posicionScroll);
        }, 20);

    })



const mediaBp = matchMedia('(min-width: 767px)'); 

    const changeSize = mql => {
        if(mql.matches) {

                //Animacion scroll
        document.addEventListener('scroll', e => {
            
        
            posicionScroll = window.pageYOffset; 

            if(posicionScroll > header.offsetHeight) {

                btnScroll.style.opacity = '1'; 
                btnScroll.style.transform = 'scale(1)'; 
                
            }else {
                btnScroll.style.transform = 'scale(0)'; 
                btnScroll.style.opacity = '0'; 
            }

        })
        btnScroll.addEventListener('click', () => {

            intervalo = setInterval(function() {

                posicionScroll -= 100; 

                if(posicionScroll === header.offsetTop || posicionScroll < 0) {
                    posicionScroll = 0; 
                    clearInterval(intervalo)
                }
                window.scrollTo(0, posicionScroll);

            }, 20)
        
        })
           
            /*Efectos del sub menu */

            subMenu.style.display ='flex'

            planetMenu.addEventListener('mouseover', e => {
                subMenu.classList.add('show'); 
            
            })
            
            planetMenu.addEventListener('mouseleave', e => {
                subMenu.classList.remove('show'); 
            
            })

            

            /*Ejecucion Efectos Planetas Scroll*/
            document.addEventListener('scroll',  efectoParallax); 


          }else {

            document.removeEventListener('scroll',  efectoParallax); 

            subMenu.style.display ='none'
            subMenu.classList.remove('show'); 

            planetMenu.addEventListener('click', e => {

                console.log(subMenu.style.display)

                if(subMenu.style.display === 'flex') {
                    subMenu.style.display ='none'
                }else {
                    subMenu.style.display ='flex'
                     
                }
        
            })
          }
      }

      mediaBp.addListener(changeSize); 
      changeSize(mediaBp);
})