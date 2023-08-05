const animation_elements = [document.querySelectorAll('.about-me'),document.querySelectorAll(".skills"),document.querySelectorAll("#navbar")];
function skillAnimationAdder(skillGrid,animationName,duration=2,animationFillMode="forwards"){
    skillGrid.style.animationName = animationName;
    skillGrid.style.animationDuration = `${duration}s`;
    skillGrid.style.animationFillMode = animationFillMode;
    skillGrid.style.opacity = 0.5;

}


function aboutMeSlide(){
    if(window.innerWidth>=768){
        window.scrollTo(0,350);
    }
    else{
        window.scrollTo(0,360);
    }
}
function skillsSlide(){
    if(window.innerWidth>=768){
    window.scrollTo(0,1350);
    }
    else{
        window.scrollTo(0,1400);
    }
}
function contactSlide(){
    if(window.innerWidth>=768)
    {window.scrollTo(0,3250);}
    else{
        window.scrollTo(0,2000);
    }
}
function goTopSlide(){
    window.scrollTo(0,0);
}

function experienceSlide(){
    if(window.innerWidth>=768){
        window.scrollTo(0,2300)
    }
    else{
        window.scrollTo(0,2000)
    }
}

const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        // if(window.innerWidth<=768){
        //     entry.target.classList.add('skill-grid-first-row');
        //         entry.target.classList.add('skill-grid-second-row');
        //         entry.target.classList.add('skill-grid-third-row');
        //         entry.target.classList.add('skill-grid-fourth-row');
        //         entry.target.classList.add('skill-grid-fifth-row');
        //         skillGridFirst = document.getElementById(`${entry.target.classList[1]}`);
        //         skillGridSecond = document.getElementById(`${entry.target.classList[2]}`);
        //         skillGridThird = document.getElementById(`${entry.target.classList[3]}`);
        //         skillGridFourth = document.getElementById(`${entry.target.classList[4]}`);
        //         skillGridFifth = document.getElementById(`${entry.target.classList[5]}`);
        //         skillAnimationAdder(skillGridFirst,'skills-left-login');
        //         skillAnimationAdder(skillGridSecond,'skills-right-login');
        //         skillAnimationAdder(skillGridThird,'skills-left-login');
        //         skillAnimationAdder(skillGridFourth,'skills-right-login');
        //         skillAnimationAdder(skillGridFifth,'skills-left-login');
        // }
        if(entry.isIntersecting){
            if(entry.target.classList[0] === "about-me"){
                entry.target.classList.add('about-me-slideIn');
                entry.target.classList.remove('about-me-slideOut');
            }
            else if(entry.target.classList[0] === "skills"){
                entry.target.classList.add('skill-grid-first-row');
                entry.target.classList.add('skill-grid-second-row');
                entry.target.classList.add('skill-grid-third-row');
                entry.target.classList.add('skill-grid-fourth-row');
                entry.target.classList.add('skill-grid-fifth-row');
                skillGridFirst = document.getElementById(`${entry.target.classList[1]}`);
                skillGridSecond = document.getElementById(`${entry.target.classList[2]}`);
                skillGridThird = document.getElementById(`${entry.target.classList[3]}`);
                skillGridFourth = document.getElementById(`${entry.target.classList[4]}`);
                skillGridFifth = document.getElementById(`${entry.target.classList[5]}`);
                skillAnimationAdder(skillGridFirst,'skills-left-login');
                skillAnimationAdder(skillGridSecond,'skills-right-login');
                skillAnimationAdder(skillGridThird,'skills-left-login');
                skillAnimationAdder(skillGridFourth,'skills-right-login');
                skillAnimationAdder(skillGridFifth,'skills-left-login');
            }
        }
        else{
            if(entry.target.classList[0] === "about-me"){
            entry.target.classList.remove('about-me-slideIn');
            entry.target.classList.add('about-me-slideOut');
            }
            else if(entry.target.classList[0] === "skills"){
                console.log('hello')
                skillGridFirst = document.getElementById(`${entry.target.classList[1]}`);
                skillGridSecond = document.getElementById(`${entry.target.classList[2]}`);
                skillGridThird = document.getElementById(`${entry.target.classList[3]}`);
                skillGridFourth = document.getElementById(`${entry.target.classList[4]}`);
                skillAnimationAdder(skillGridFirst,'skills-out',duration=0.5);
                skillAnimationAdder(skillGridSecond,'skills-out',duration=0.5);
                skillAnimationAdder(skillGridThird,'skills-out',duration=0.5);
                skillAnimationAdder(skillGridFourth,'skills-out',duration=0.5);
                skillAnimationAdder(skillGridFifth,'skills-out',duration=0.5);
            }
            
        }
    })
},{threshold:0.5});

for(let i = 0; i<animation_elements.length;i++){
    const el = animation_elements[i][0];
    observer.observe(el);

}
