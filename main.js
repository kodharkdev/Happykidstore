

    //  a simple method  on how to add and remove class 

    // we target the element by calling the id 
        const header = document.getElementById('home')

        // we write a function and save it in a const call {handleScroll} 
        const handleScroll = () => {
            // next we write the conditional statement 
            if (window.scrollY > 50 ) {

                // we add and remove the class once the argument is met 
                header.classList.add('header--scrolled')
            } else {header.classList.remove('header--scrolled')}
            //  done 
        }
    //  we add an event listener that run the function {handleScroll} 
    //  when the conditions are met the class will be added or removed 
        document.addEventListener('scroll', handleScroll);

        // we call the function so it load when we load the page 

        handleScroll()

        // this is the typewriter animation 
        // we add an event lister that is when the {DOMContentLoaded} is loaded  this function should run 
 document.addEventListener('DOMContentLoaded', () => {

    // this section we call on the loader and text element that we want to display before the website

    const loader = document.getElementById('loader')
    const span = document.querySelector('.typetext')

    // we innicially leave the paragraph in the element  blank so we can write it here and use the loop logic  
    const text = 'Welcome to HappyKids' 

    // after we write the text, we write a function that renders the {text} to the {span} we use {index to track the letters } 
    //  we pass {span} {text} and {i = 0} as parameter inside the fnction so we can use them inside 

    function typeWriter(span, text, i = 0) {
        if (i >= text.length)
            return;

        // we add a condition to return so the loop can come to an end at some point 
            // we add the text to the initial span element 

        span.textContent += text[i];
            // we set a timer for the animation to run 

        setTimeout(() => {
            typeWriter(span, text, i + 1)
        }, 80)
    }
//  we call the function so it run when the page load 
    typeWriter(span, text)
    //  we set a timer to also stop and hide the loader animation after 3s 
    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.classList.add('hidden')
        }, 3000)
    })
 })

// document.addEventListener('DOMContentLoaded', () => {

//             const loader = document.getElementById('loader');
//             const span = document.querySelector('.typetext')
//             const text = 'Welcome to HappyKids'

//             function typeWriter(span, text, i = 0) {
//                 span.textContent += text[i];

//                 if(i === text.length - 1) {
//                 return;
//                 }
//                 setTimeout(() => {
//                 typeWriter(span, text, ++i)
//                 }, 80)
//             }
//             typeWriter(span, text)
            
//             window.addEventListener('load', () => {
//                 setTimeout(() => {
//                     loader.classList.add('hidden');
//                 }, 3000);
//             });
//         });
