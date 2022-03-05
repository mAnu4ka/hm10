//тут я создаю элемент
let thro = document.querySelectorAll('.throw')
let png = document.querySelector('.one')
let pngs = document.querySelectorAll('.offer__slide')
let start = document.querySelector('#current')
let mobal = document.querySelectorAll('.btn-mob')
let modal = document.querySelector('.modal')
let modal_cl = document.querySelector('.modal__close')

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
