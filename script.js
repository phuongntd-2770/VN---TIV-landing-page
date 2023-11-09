// Scrolled - Header
document.addEventListener('scroll', ()=> {
    const header = document.querySelector('.header');
    if (window.scrollY > 0) {
        header.classList.add('scrolled'); 
    } else {
        header.classList.remove('scrolled');
    }
});

// Active Navbar & Why-us animate
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar__link');
const value = document.querySelector('.value')
window.onscroll = () => {
    sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 74;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');
        if(top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                const activeLink = document.querySelector('a[href*=' + id + ']')
                activeLink.classList.add('active')
            })
        }
    })

    const top = window.scrollY;
    const valueOffset = value.offsetTop - 74;
    if(top >= valueOffset/2) {
        value.classList.add('show-animate');
    }

    // const howWhyOffset = howWhy.offsetTop - 74;
    // console.log(howWhyOffset)
    // console.log(top)
    // if(top >= howWhyOffset) {
    //     const refreshInterval = setInterval(()=> {howWhyNextBtn.click()}, 7000);
    // }
}

// How-why switch
const howWhyBtn = document.querySelectorAll('.how-why__btn')
const howWhyDisplay = document.querySelectorAll('.how-why__display')
howWhyBtn.forEach((btn, index) => {
    btn.addEventListener('click', (e) => {
        howWhyBtn.forEach(btn => {
            btn.classList.remove('active')
        })
        e.target.classList.add('active')
        howWhyDisplay.forEach(display => {
            display.classList.remove('display-block')
        })
        howWhyDisplay[index].classList.add('display-block')
        console.log(howWhyDisplay[index])
    })
})

// How slider
const howDetailList = document.querySelector('.how .frame__details-list')
const howDetailItems = document.querySelectorAll('.how .frame__details-item')
const howIndicators = document.querySelectorAll('.nav-indicator')
const howPrevBtn = document.querySelector('.how .stages__prev-btn')
const howNextBtn = document.querySelector('.how .stages__next-btn')
const howIndicatorBullets = document.querySelectorAll('.indicator__bullet')
let activeHowIndex = 0

howNextBtn.addEventListener('click', () => {
    if (activeHowIndex + 1 >= howDetailItems.length) {
        activeHowIndex = 0
    } else {
        activeHowIndex ++
    }
    reloadHowSlider();
})
howPrevBtn.addEventListener('click', () => {
    if (activeHowIndex - 1 < 0) {
        activeHowIndex = howDetailItems.length - 1
    } else {
        activeHowIndex --
    }
    reloadHowSlider();
})
howIndicatorBullets.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        activeHowIndex = index
        reloadHowSlider();
    })
})

let refreshHowInterval = setInterval(()=> {howNextBtn.click()}, 7000);

const reloadHowSlider = () => {
    const checkLeft = howDetailItems[activeHowIndex].offsetLeft
    howDetailList.style.left = -checkLeft + 'px'

    const activeIndicator = document.querySelector('.how__nav .active')
    activeIndicator.classList.remove('active')
    howIndicators[activeHowIndex].classList.add('active')

    const beforeActiveStages = document.querySelectorAll('.how__nav .before-active')
    beforeActiveStages.forEach(stage => {
        stage.classList.remove('before-active')
    })
    const beforeActiveIndicators = Array.from(howIndicators).slice(0,activeHowIndex)
    beforeActiveIndicators.forEach(indicator => {
        indicator.classList.add('before-active')
    })
    clearInterval(refreshHowInterval);
    refreshHowInterval = setInterval(()=> {howNextBtn.click()}, 7000);
}

// Why slider
const whyDetailList = document.querySelector('.why .frame__details-list')
const whyDetailItems = document.querySelectorAll('.why .frame__details-item')
const whyPrevBtn = document.querySelector('.why .stages__prev-btn')
const whyNextBtn = document.querySelector('.why .stages__next-btn')
let activeWhyIndex = 0

whyNextBtn.addEventListener('click', () => {
    if (activeWhyIndex + 1 >= whyDetailItems.length) {
        activeWhyIndex = 0
    } else {
        activeWhyIndex ++
    }
    reloadWhySlider()
})
whyPrevBtn.addEventListener('click', () => {
    if (activeWhyIndex - 1 < 0) {
        activeWhyIndex = whyDetailItems.length - 1
    } else {
        activeWhyIndex --
    }
    reloadWhySlider()
})

let refreshWhyInterval = setInterval(()=> {whyNextBtn.click()}, 7000);

const reloadWhySlider = () => {
    const checkLeft = whyDetailItems[activeWhyIndex].offsetLeft
    whyDetailList.style.left = -checkLeft + 'px'

    clearInterval(refreshWhyInterval);
    refreshWhyInterval = setInterval(()=> {whyNextBtn.click()}, 7000);
}
// Program slider
const programList = document.querySelector ('.programs-list')
const programItems = document.querySelectorAll('.programs-item')
const programIndicators = document.querySelectorAll('.programs-indicators__dot')
const programPrevBtn = document.querySelector('.programs-prev')
const programNextBtn = document.querySelector('.programs-next')
let activeProgramIndex = 0
console.log(programPrevBtn)
programNextBtn.onclick = (e) => {
    if (activeProgramIndex + 1 >= programItems.length) {
        activeProgramIndex = 0
    } else {
        activeProgramIndex ++
    }
    reloadProgramSlider()
}
programPrevBtn.onclick = (e) => {
    if (activeProgramIndex - 1 < 0) {
        activeProgramIndex = programItems.length - 1
    } else {
        activeProgramIndex --
    }
    reloadProgramSlider()
}

let refreshProgramInterval = setInterval(()=> {programNextBtn.click()}, 7000)
const reloadProgramSlider = () => {
    const programsListLeft = programItems[activeProgramIndex].offsetLeft
    programList.style.left = -programsListLeft + 'px'

    clearInterval(refreshProgramInterval);
    refreshProgramInterval = setInterval(()=> {programNextBtn.click()}, 7000)
    const activeIndicator = document.querySelector('.programs-indicators__dot.active')
    activeIndicator.classList.remove('active')
    programIndicators[activeProgramIndex].classList.add('active')
}
programIndicators.forEach((indicator, index) => {
    indicator.onclick = () => {
        activeProgramIndex = index
        reloadProgramSlider()
    }
})

// Trainer slider
const trainerList = document.querySelector('.trainers-list')
const trainerGroup = document.querySelectorAll('.trainers-group')
const trainerPrevBtn = document.querySelector('.trainers__prev-btn')
const trainerNextBtn = document.querySelector('.trainers__next-btn')
let activeGroupIndex = 0

trainerNextBtn.onclick = (e) => {
    if (activeGroupIndex + 1 >= trainerGroup.length) {
        activeGroupIndex = 0
    } else {
        activeGroupIndex ++
    }
    reloadTrainerSlider()
}
trainerPrevBtn.onclick = (e) => {
    if (activeGroupIndex - 1 < 0 ) {
        activeGroupIndex = trainerGroup.length - 1
    } else {
        activeGroupIndex --
    }
    reloadTrainerSlider()
}
const reloadTrainerSlider = () => {
    const trainersListLeft = trainerGroup[activeGroupIndex].offsetLeft
    trainerList.style.left = -trainersListLeft + 'px'

    clearInterval(refreshTrainersInterval);
    refreshTrainersInterval =  setInterval(()=> {trainerNextBtn.click()}, 7000)
}
let refreshTrainersInterval = setInterval(()=> {trainerNextBtn.click()}, 7000)

// // Our Partners
// const partnersImages = document.querySelectorAll('.partners-logos img')
// partnersImages.forEach(image => {
//     let imageWidth = image.naturalWidth
//     image.style.width = (imageWidth / 2) + "px"
// })

// Snapshots
const snapshotImages = document.querySelectorAll('.snapshots-list .picture')
snapshotImages.forEach(img => {
    img.onclick = (e) => {
        snapshotImages.forEach( img => {
            img.style.width = 110 + 'px'
        })
        e.target.style.width = 452 + 'px'
    }
})

// Reaload and go on top
if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
} else {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
}