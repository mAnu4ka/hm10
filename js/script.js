//тут я создаю элемент
let thro = document.querySelectorAll('.throw')
let pngs = document.querySelectorAll('.offer__slide')
let start = document.querySelector('#current')
let mobal = document.querySelectorAll('.btn__call')
let modal = document.querySelector('.modal')
let modal_cl = document.querySelector('div[data-close]')
let total = document.querySelector('#total')
let butons = document.querySelectorAll('.tabheader__item')
let tabcontent = document.querySelectorAll('.tabcontent')

total.innerText = `/0${pngs.length}`
for (const item of mobal) {
    item.onclick = () => {
        modal.classList.remove('none')

    }
    modal_cl.onclick = () => {
        modal.classList.add('none')
    }
}

// этот цыкл получает атрибут и предаёт значение в функцию
for (const key of thro) {
    //при onclick он берет этот атребут 
    key.onclick = () => {
        //вот тут усли что
        let atr = key.getAttribute('what')
        //тут он предает этот атрибут
        funk(atr)
    }
}

// это я не знаю что
let num = 1
let num2 = 1

const funk = (a) => {
    //если атрибут равен left то хоп хоп и он проходит а если нет
    if (a == 'left') {
        // тут проверка на 01 если 01 то хоп хоп и он проходит а если нет
        if (start.innerText == '01') {
            //тут у нас добавление атрибута 
            for (const item of pngs) {
                // вот тут если что
                item.classList.add('none')
            }
            //тут унас математика я в ней хорошо не разбераюсь так-что скипаем 
            num2 = pngs.length - 1
            num = pngs.length
            //тут нахождение элемента и удаление его клааса еслми кто нибудь не понял 
            pngs[num2].classList.remove('none')
        } else {
            num--
            num2--
        }
        start.innerText = `0${num}`
        //тут у нас добавление атрибута 
        for (const item of pngs) {
            item.classList.add('none')
        }
        //тут нахождение элемента и удаление его клааса еслми кто нибудь не понял 
        pngs[num2].classList.remove('none')
        //если атрибут равен right то хоп хоп и он проходит а если нет
    } else if (a == 'right') {
        if (start.innerText == `0${pngs.length}`) {
            num = 1
            num2 = 0
            //тут у нас добавление атрибута
            for (const item of pngs) {
                // вот тут если что
                item.classList.add('none')
            }
            //тут нахождение элемента и удаление его клааса еслми кто нибудь не понял 
            pngs[num2].classList.remove('none')
        } else {
            num++
            num2++
        }
        start.innerText = `0${num}`
        //тут у нас добавление атрибута 
        for (const item of pngs) {
            // вот тут если что
            item.classList.add('none')
        }
        //тут нахождение элемента и удаление его клааса еслми кто нибудь не понял 

        pngs[num2].classList.remove('none')

    } else console.log('код не меняем');
}

$(window).scroll(function () {
    var height = $(window).scrollTop();
    if (height > 3000) {
        $(modal).removeClass('none');
    } else {
        $(modal).addClass('none');
    }
});

const clear = () => {
    for (const keys of butons) {
        keys.classList.remove('tabheader__item_active')
    }
    for (const item of tabcontent) {
        item.classList.add('none')
    }
}

for (const keys of butons) {
    keys.onclick = () => {
        clear()
        keys.classList.add('tabheader__item_active')
        let num = Number(keys.getAttribute('which')) - 1 
        tabcontent[num].classList.remove('none')
    }
}
let timer_dad = document.querySelector('.promotion__timer')

let sibling = timer_dad.children[1].children[3].children[0]
let sibling_men =  timer_dad.children[1].children[2].children[0]
let sibling_haur = timer_dad.children[1].children[1].children[0]
let sibling_day =  timer_dad.children[1].children[0].children[0]

let time = +sibling.innerText;
let menut = +sibling_men.innerText
let haur = +sibling_haur.innerText
let day = +sibling_day.innerHTML

setInterval(() => {
    time--
    if (time <= 0) {
        menut--
        time = 59
        if(menut <= 0 ){
            haur--
            menut = 59
            if (haur <= 0) {
                day--
                haur == 23
            }
        }

    }
    


    if (time <= 9) sibling.innerText = `0${time}`
    else sibling.innerText = time
    if (menut <= 9) sibling_men.innerText = `0${menut}`
    else sibling_men.innerText = menut
    if (haur <= 9) sibling_haur.innerText = `0${haur}`
    else sibling_haur.innerText = haur
    if (day <= 9) sibling_day.innerText = `0${day}`
    else sibling_day.innerText = day

}, 1000);