let Question = document.getElementsByClassName('Question')[0];
let button1 = document.getElementById('button1');
let button2 = document.getElementById('button2');
let button3 = document.getElementById('button3');
let total = 15;
let correctAnswers = 0;
let incorrectAnswers = 0;
let quesNumber = 1;
let ans;
let bg = 'linear-gradient(#0000ff, #00ffff)';
let disbg = 'linear-gradient(#666, #555)';
let next = document.getElementById('next');

window.addEventListener("load", e => {
    button1.click();
})

document.addEventListener("click", function evl(){
    if(quesNumber === 1){
    button1.onclick = () => {
        ans = 'الجمعة';
    }
    button2.onclick = () => {
        ans = 'الإثنين';
    }
    button3.onclick = () => {
        ans = 'الأربعاء';
    }
}
if(quesNumber === 1 && ans === 'الجمعة'){
    correctAnswers++;
    button1.style.background = 'yellowgreen';
    button2.style.background = 'red';
    button3.style.background = 'red';
    button1.disabled = true;
    button2.disabled = true;
    button3.disabled = true;
    next.style.background = bg;
    next.style.pointerEvents = 'all';
    next.addEventListener("click", e => {
        quesNumber = 2;
        button1.style.background = bg;
        button2.style.background = bg;
        button3.style.background = bg;
        button1.disabled = false;
        button2.disabled = false;
        button3.disabled = false;
        next.style.background = disbg;
        next.style.pointerEvents = 'none';
    })
}else if(quesNumber === 1 && ans === 'الإثنين' || quesNumber === 1 && ans === 'الأربعاء'){
    button1.style.background = 'yellowgreen';
    button2.style.background = 'red';
    button3.style.background = 'red';
    button1.disabled = true;
    button2.disabled = true;
    button3.disabled = true;
    next.style.background = bg;
    next.style.pointerEvents = 'all';
    next.addEventListener("click", e => {
        quesNumber = 2;
        button1.style.background = bg;
        button2.style.background = bg;
        button3.style.background = bg;
        button1.disabled = false;
        button2.disabled = false;
        button3.disabled = false;
        next.style.background = disbg;
        next.style.pointerEvents = 'none';
    })
    incorrectAnswers++;
}
    if(quesNumber === 2){
    button1.value = '٦٥٨٢٢';
    button2.value = '٧٧٤٣٩';
    button3.value = '٩٤٥٦٢';
    Question.innerHTML = `:السؤال الثاني<br>كم عدد كلمات القرآن الكريم؟`;
    button1.onclick = () => {
        ans = '٦٥٨٢٢';
    }
    button2.onclick = () => {
        ans = '٧٧٤٣٩';
    }
    button3.onclick = () => {
        ans = '٩٤٥٦٢';
    }
}
if(quesNumber === 2 && ans === '٧٧٤٣٩'){
    button1.style.background = 'red';
    button2.style.background = 'yellowgreen';
    button3.style.background = 'red';
    button1.disabled = true;
    button2.disabled = true;
    button3.disabled = true;
    next.style.background = bg;
    next.style.pointerEvents = 'all';
    next.addEventListener("click", e => {
        quesNumber = 3;
        button1.style.background = bg;
        button2.style.background = bg;
        button3.style.background = bg;
        button1.disabled = false;
        button2.disabled = false;
        button3.disabled = false;
        next.style.background = disbg;
        next.style.pointerEvents = 'none';
    })
    correctAnswers++;
}else if(quesNumber === 2 && ans === '٦٥٨٢٢' || quesNumber === 2 && ans === '٩٤٥٦٢'){
    button1.style.background = 'red';
    button2.style.background = 'yellowgreen';
    button3.style.background = 'red';
    button1.disabled = true;
    button2.disabled = true;
    button3.disabled = true;
    next.style.background = bg;
    next.style.pointerEvents = 'all';
    next.addEventListener("click", e => {
        quesNumber = 3;
        button1.style.background = bg;
        button2.style.background = bg;
        button3.style.background = bg;
        button1.disabled = false;
        button2.disabled = false;
        button3.disabled = false;
        next.style.background = disbg;
        next.style.pointerEvents = 'none';
    })
    incorrectAnswers++;
}
if(quesNumber === 3){
    button1.value = '15';
    button2.value = '25';
    button3.value = '23';
    Question.innerHTML = `:السؤال الثالث<br>كم عدد الرسل الذين ذكرهم الله تعالى في القران الكريم؟`;
    button1.onclick = () => {
        ans = '15';
    }
    button2.onclick = () => {
        ans = '25';
    }
    button3.onclick = () => {
        ans = '23';
    }
}
if(quesNumber === 3 && ans === '25'){
    button1.style.background = 'red';
    button2.style.background = 'yellowgreen';
    button3.style.background = 'red';
    button1.disabled = true;
    button2.disabled = true;
    button3.disabled = true;
    next.style.background = bg;
    next.style.pointerEvents = 'all';
    next.addEventListener("click", e => {
        quesNumber = 4;
        button1.style.background = bg;
        button2.style.background = bg;
        button3.style.background = bg;
        button1.disabled = false;
        button2.disabled = false;
        button3.disabled = false;
        next.style.background = disbg;
        next.style.pointerEvents = 'none';
    })
    correctAnswers++;
}else if(quesNumber === 3 && ans === '15' || quesNumber === 3 && ans === '23'){
    button1.style.background = 'red';
    button2.style.background = 'yellowgreen';
    button3.style.background = 'red';
    button1.disabled = true;
    button2.disabled = true;
    button3.disabled = true;
    next.style.background = bg;
    next.style.pointerEvents = 'all';
    next.addEventListener("click", e => {
        quesNumber = 4;
        button1.style.background = bg;
        button2.style.background = bg;
        button3.style.background = bg;
        button1.disabled = false;
        button2.disabled = false;
        button3.disabled = false;
        next.style.background = disbg;
        next.style.pointerEvents = 'none';
    })
    incorrectAnswers++;
}
if(quesNumber === 4){
    button1.value = 'آل عمران';
    button2.value = 'الشعراء';
    button3.value = 'البقرة';
    Question.innerHTML = `:السؤال الرابع<br>ما هي أطول سورة في القرآن الكريم؟`;
    button1.onclick = () => {
        ans = 'آل عمران';
    }
    button2.onclick = () => {
        ans = 'الشعراء';
    }
    button3.onclick = () => {
        ans = 'البقرة';
    }
}
if(quesNumber === 4 && ans === 'البقرة'){
    button1.style.background = 'red';
    button2.style.background = 'red';
    button3.style.background = 'yellowgreen';
    button1.disabled = true;
    button2.disabled = true;
    button3.disabled = true;
    next.style.background = bg;
    next.style.pointerEvents = 'all';
    next.addEventListener("click", e => {
        quesNumber = 5;
        button1.style.background = bg;
        button2.style.background = bg;
        button3.style.background = bg;
        button1.disabled = false;
        button2.disabled = false;
        button3.disabled = false;
        next.style.background = disbg;
        next.style.pointerEvents = 'none';
    })
    correctAnswers++;
}else if(quesNumber === 4 && ans === 'آل عمران' || quesNumber === 4 && ans === 'الشعراء'){
    button1.style.background = 'red';
    button2.style.background = 'red';
    button3.style.background = 'yellowgreen';
    button1.disabled = true;
    button2.disabled = true;
    button3.disabled = true;
    next.style.background = bg;
    next.style.pointerEvents = 'all';
    next.addEventListener("click", e => {
        quesNumber = 5;
        button1.style.background = bg;
        button2.style.background = bg;
        button3.style.background = bg;
        button1.disabled = false;
        button2.disabled = false;
        button3.disabled = false;
        next.style.background = disbg;
        next.style.pointerEvents = 'none';
    })
    incorrectAnswers++;
}
if(quesNumber === 5){
    button1.value = '15';
    button2.value = '25';
    button3.value = '12';
    Question.innerHTML = `:السؤال الخامس<br>ما عدد علامات السجدة التي وردت في القرآن الكريم؟`;
    button1.onclick = () => {
        ans = '15';
    }
    button2.onclick = () => {
        ans = '25';
    }
    button3.onclick = () => {
        ans = '12';
    }
}
if(quesNumber === 5 && ans === '15'){
    button1.style.background = 'yellowgreen';
    button2.style.background = 'red';
    button3.style.background = 'red';
    button1.disabled = true;
    button2.disabled = true;
    button3.disabled = true;
    next.style.background = bg;
    next.style.pointerEvents = 'all';
    next.addEventListener("click", e => {
        quesNumber = 6;
        button1.style.background = bg;
        button2.style.background = bg;
        button3.style.background = bg;
        button1.disabled = false;
        button2.disabled = false;
        button3.disabled = false;
        next.style.background = disbg;
        next.style.pointerEvents = 'none';
    })
    correctAnswers++;
}else if(quesNumber === 5 && ans === '25' || quesNumber === 5 && ans === '12'){
    button1.style.background = 'yellowgreen';
    button2.style.background = 'red';
    button3.style.background = 'red';
    button1.disabled = true;
    button2.disabled = true;
    button3.disabled = true;
    next.style.background = bg;
    next.style.pointerEvents = 'all';
    next.addEventListener("click", e => {
        quesNumber = 6;
        button1.style.background = bg;
        button2.style.background = bg;
        button3.style.background = bg;
        button1.disabled = false;
        button2.disabled = false;
        button3.disabled = false;
        next.style.background = disbg;
        next.style.pointerEvents = 'none';
    })
    incorrectAnswers++;
}
if(quesNumber === 6){
    button1.value = '120';
    button2.value = '114';
    button3.value = '110';
    Question.innerHTML = `:السؤال السادس<br>كم عدد سورالقرآن الكريم؟`;
    button1.onclick = () => {
        ans = '120';
    }
    button2.onclick = () => {
        ans = '114';
    }
    button3.onclick = () => {
        ans = '110';
    }
}
if(quesNumber === 6 && ans === '114'){
    button1.style.background = 'red';
    button2.style.background = 'yellowgreen';
    button3.style.background = 'red';
    button1.disabled = true;
    button2.disabled = true;
    button3.disabled = true;
    next.style.background = bg;
    next.style.pointerEvents = 'all';
    next.addEventListener("click", e => {
        quesNumber = 7;
        button1.style.background = bg;
        button2.style.background = bg;
        button3.style.background = bg;
        button1.disabled = false;
        button2.disabled = false;
        button3.disabled = false;
        next.style.background = disbg;
        next.style.pointerEvents = 'none';
    })
    correctAnswers++;
}else if(quesNumber === 6 && ans === '120' || quesNumber === 6 && ans === '110'){
    button1.style.background = 'red';
    button2.style.background = 'yellowgreen';
    button3.style.background = 'red';
    button1.disabled = true;
    button2.disabled = true;
    button3.disabled = true;
    next.style.background = bg;
    next.style.pointerEvents = 'all';
    next.addEventListener("click", e => {
        quesNumber = 7;
        button1.style.background = bg;
        button2.style.background = bg;
        button3.style.background = bg;
        button1.disabled = false;
        button2.disabled = false;
        button3.disabled = false;
        next.style.background = disbg;
        next.style.pointerEvents = 'none';
    })
    incorrectAnswers++;
}
if(quesNumber === 7){
    button1.value = 'الفتح';
    button2.value = 'الذاريات';
    button3.value = 'الفاتحة';
    Question.innerHTML = `:السؤال السابع<br>ما هي السورة التي تعد أم الكتاب؟`;
    button1.onclick = () => {
        ans = 'الفتح';
    }
    button2.onclick = () => {
        ans = 'الذاريات';
    }
    button3.onclick = () => {
        ans = 'الفاتحة';
    }
}
if(quesNumber === 7 && ans === 'الفاتحة'){
    button1.style.background = 'red';
    button2.style.background = 'red';
    button3.style.background = 'yellowgreen';
    button1.disabled = true;
    button2.disabled = true;
    button3.disabled = true;
    next.style.background = bg;
    next.style.pointerEvents = 'all';
    next.addEventListener("click", e => {
        quesNumber = 8;
        button1.style.background = bg;
        button2.style.background = bg;
        button3.style.background = bg;
        button1.disabled = false;
        button2.disabled = false;
        button3.disabled = false;
        next.style.background = disbg;
        next.style.pointerEvents = 'none';
    })
    correctAnswers++;
}else if(quesNumber === 7 && ans === 'الفتح' || quesNumber === 7 && ans === 'الذاريات'){
    button1.style.background = 'red';
    button2.style.background = 'red';
    button3.style.background = 'yellowgreen';
    button1.disabled = true;
    button2.disabled = true;
    button3.disabled = true;
    next.style.background = bg;
    next.style.pointerEvents = 'all';
    next.addEventListener("click", e => {
        quesNumber = 8;
        button1.style.background = bg;
        button2.style.background = bg;
        button3.style.background = bg;
        button1.disabled = false;
        button2.disabled = false;
        button3.disabled = false;
        next.style.background = disbg;
        next.style.pointerEvents = 'none';
    })
    incorrectAnswers++;
}
if(quesNumber === 8){
    button1.value = 'آية الدين';
    button2.value = 'آية الكرسي';
    button3.value = 'أجمع آية';
    Question.innerHTML = `:السؤال الثامن<br>ما هي أطول آية في القرآن الكريم؟`;
    button1.onclick = () => {
        ans = 'آية الدين';
    }
    button2.onclick = () => {
        ans = 'آية الكرسي';
    }
    button3.onclick = () => {
        ans = 'أجمع آية';
    }
}
if(quesNumber === 8 && ans === 'آية الدين'){
    button1.style.background = 'yellowgreen';
    button2.style.background = 'red';
    button3.style.background = 'red';
    button1.disabled = true;
    button2.disabled = true;
    button3.disabled = true;
    next.style.background = bg;
    next.style.pointerEvents = 'all';
    next.addEventListener("click", e => {
        quesNumber = 9;
        button1.style.background = bg;
        button2.style.background = bg;
        button3.style.background = bg;
        button1.disabled = false;
        button2.disabled = false;
        button3.disabled = false;
        next.style.background = disbg;
        next.style.pointerEvents = 'none';
    })
    correctAnswers++;
}else if(quesNumber === 8 && ans === 'آية الكرسي' || quesNumber === 8 && ans === 'أجمع آية'){
    button1.style.background = 'yellowgreen';
    button2.style.background = 'red';
    button3.style.background = 'red';
    button1.disabled = true;
    button2.disabled = true;
    button3.disabled = true;
    next.style.background = bg;
    next.style.pointerEvents = 'all';
    next.addEventListener("click", e => {
        quesNumber = 9;
        button1.style.background = bg;
        button2.style.background = bg;
        button3.style.background = bg;
        button1.disabled = false;
        button2.disabled = false;
        button3.disabled = false;
        next.style.background = disbg;
        next.style.pointerEvents = 'none';
    })
    incorrectAnswers++;
}
if(quesNumber === 9){
    button1.value = 'التوبة';
    button2.value = 'الأعراف';
    button3.value = 'الأنفال';
    Question.innerHTML = `:السؤال التاسع<br>ما هي السورة التي تخلو من البسملة في بدايتها؟`;
    button1.onclick = () => {
        ans = 'التوبة';
    }
    button2.onclick = () => {
        ans = 'الأعراف';
    }
    button3.onclick = () => {
        ans = 'الأنفال';
    }
}
if(quesNumber === 9 && ans === 'التوبة'){
    button1.style.background = 'yellowgreen';
    button2.style.background = 'red';
    button3.style.background = 'red';
    button1.disabled = true;
    button2.disabled = true;
    button3.disabled = true;
    next.style.background = bg;
    next.style.pointerEvents = 'all';
    next.addEventListener("click", e => {
        quesNumber = 10;
        button1.style.background = bg;
        button2.style.background = bg;
        button3.style.background = bg;
        button1.disabled = false;
        button2.disabled = false;
        button3.disabled = false;
        next.style.background = disbg;
        next.style.pointerEvents = 'none';
    })
    correctAnswers++;
}else if(quesNumber === 9 && ans === 'الأعراف' || quesNumber === 9 && ans === 'الأنفال'){
    button1.style.background = 'yellowgreen';
    button2.style.background = 'red';
    button3.style.background = 'red';
    button1.disabled = true;
    button2.disabled = true;
    button3.disabled = true;
    next.style.background = bg;
    next.style.pointerEvents = 'all';
    next.addEventListener("click", e => {
        quesNumber = 10;
        button1.style.background = bg;
        button2.style.background = bg;
        button3.style.background = bg;
        button1.disabled = false;
        button2.disabled = false;
        button3.disabled = false;
        next.style.background = disbg;
        next.style.pointerEvents = 'none';
    })
    incorrectAnswers++;
}
if(quesNumber === 10){
    button1.value = '185';
    button2.value = '150';
    button3.value = '139';
    Question.innerHTML = `:السؤال العاشر<br>كم مرة ورد ذكر الجنة في القرآن الكريم؟`;
    button1.onclick = () => {
        ans = '185';
    }
    button2.onclick = () => {
        ans = '150';
    }
    button3.onclick = () => {
        ans = '139';
    }
}
if(quesNumber === 10 && ans === '139'){
    button1.style.background = 'red';
    button2.style.background = 'red';
    button3.style.background = 'yellowgreen';
    button1.disabled = true;
    button2.disabled = true;
    button3.disabled = true;
    next.style.background = bg;
    next.style.pointerEvents = 'all';
    next.addEventListener("click", e => {
        quesNumber = 11;
        button1.style.background = bg;
        button2.style.background = bg;
        button3.style.background = bg;
        button1.disabled = false;
        button2.disabled = false;
        button3.disabled = false;
        next.style.background = disbg;
        next.style.pointerEvents = 'none';
    })
    correctAnswers++;
}else if(quesNumber === 10 && ans === '150' || quesNumber === 10 && ans === '185'){
    button1.style.background = 'red';
    button2.style.background = 'red';
    button3.style.background = 'yellowgreen';
    button1.disabled = true;
    button2.disabled = true;
    button3.disabled = true;
    next.style.background = bg;
    next.style.pointerEvents = 'all';
    next.addEventListener("click", e => {
        quesNumber = 11;
        button1.style.background = bg;
        button2.style.background = bg;
        button3.style.background = bg;
        button1.disabled = false;
        button2.disabled = false;
        button3.disabled = false;
        next.style.background = disbg;
        next.style.pointerEvents = 'none';
    })
    incorrectAnswers++;
}
if(quesNumber === 11){
    button1.value = 'الحصان';
    button2.value = 'البراق';
    button3.value = 'الكبش';
    Question.innerHTML = `:السؤال الحادي عشر<br>ما اسم الدابة التي ركبها النبي صلى الله عليه وسلم في رحلة الإسراء والمعراج؟`;
    button1.onclick = () => {
        ans = 'الحصان';
    }
    button2.onclick = () => {
        ans = 'البراق';
    }
    button3.onclick = () => {
        ans = 'الكبش';
    }
}
if(quesNumber === 11 && ans === 'البراق'){
    button1.style.background = 'red';
    button2.style.background = 'yellowgreen';
    button3.style.background = 'red';
    button1.disabled = true;
    button2.disabled = true;
    button3.disabled = true;
    next.style.background = bg;
    next.style.pointerEvents = 'all';
    next.addEventListener("click", e => {
        quesNumber = 12;
        button1.style.background = bg;
        button2.style.background = bg;
        button3.style.background = bg;
        button1.disabled = false;
        button2.disabled = false;
        button3.disabled = false;
        next.style.background = disbg;
        next.style.pointerEvents = 'none';
    })
    correctAnswers++;
}else if(quesNumber === 11 && ans === 'الحصان' || quesNumber === 11 && ans === 'الكبش'){
    button1.style.background = 'red';
    button2.style.background = 'yellowgreen';
    button3.style.background = 'red';
    button1.disabled = true;
    button2.disabled = true;
    button3.disabled = true;
    next.style.background = bg;
    next.style.pointerEvents = 'all';
    next.addEventListener("click", e => {
        quesNumber = 12;
        button1.style.background = bg;
        button2.style.background = bg;
        button3.style.background = bg;
        button1.disabled = false;
        button2.disabled = false;
        button3.disabled = false;
        next.style.background = disbg;
        next.style.pointerEvents = 'none';
    })
    incorrectAnswers++;
}
if(quesNumber === 12){
    button1.value = '47';
    button2.value = '38';
    button3.value = '40';
    Question.innerHTML = `:السؤال الثاني عشر<br>كم كان عمر النبي صلى الله عليه وسلم عندما نزلت عليه الرسالة؟`;
    button1.onclick = () => {
        ans = '47';
    }
    button2.onclick = () => {
        ans = '38';
    }
    button3.onclick = () => {
        ans = '40';
    }
}
if(quesNumber === 12 && ans === '40'){
    button1.style.background = 'red';
    button2.style.background = 'red';
    button3.style.background = 'yellowgreen';
    button1.disabled = true;
    button2.disabled = true;
    button3.disabled = true;
    next.style.background = bg;
    next.style.pointerEvents = 'all';
    next.addEventListener("click", e => {
        quesNumber = 13;
        button1.style.background = bg;
        button2.style.background = bg;
        button3.style.background = bg;
        button1.disabled = false;
        button2.disabled = false;
        button3.disabled = false;
        next.style.background = disbg;
        next.style.pointerEvents = 'none';
    })
    correctAnswers++;
}else if(quesNumber === 12 && ans === '38' || quesNumber === 12 && ans === '47'){
    button1.style.background = 'red';
    button2.style.background = 'red';
    button3.style.background = 'yellowgreen';
    button1.disabled = true;
    button2.disabled = true;
    button3.disabled = true;
    next.style.background = bg;
    next.style.pointerEvents = 'all';
    next.addEventListener("click", e => {
        quesNumber = 13;
        button1.style.background = bg;
        button2.style.background = bg;
        button3.style.background = bg;
        button1.disabled = false;
        button2.disabled = false;
        button3.disabled = false;
        next.style.background = disbg;
        next.style.pointerEvents = 'none';
    })
    incorrectAnswers++;
}
if(quesNumber === 13){
    button1.value = 'غار ثور';
    button2.value = 'غار حراء';
    button3.value = 'يثرب';
    Question.innerHTML = `:السؤال الثالث عشر<br>أين نزل الوحي على سيدنا محمد صلى الله عليه وسلم لأول مرة؟`;
    button1.onclick = () => {
        ans = 'غار ثور';
    }
    button2.onclick = () => {
        ans = 'غار حراء';
    }
    button3.onclick = () => {
        ans = 'يثرب';
    }
}
if(quesNumber === 13 && ans === 'غار حراء'){
    button1.style.background = 'red';
    button2.style.background = 'yellowgreen';
    button3.style.background = 'red';
    button1.disabled = true;
    button2.disabled = true;
    button3.disabled = true;
    next.style.background = bg;
    next.style.pointerEvents = 'all';
    next.addEventListener("click", e => {
        quesNumber = 14;
        button1.style.background = bg;
        button2.style.background = bg;
        button3.style.background = bg;
        button1.disabled = false;
        button2.disabled = false;
        button3.disabled = false;
        next.style.background = disbg;
        next.style.pointerEvents = 'none';
    })
    correctAnswers++;
}else if(quesNumber === 13 && ans === 'غار ثور' || quesNumber === 13 && ans === 'يثرب'){
    button1.style.background = 'red';
    button2.style.background = 'yellowgreen';
    button3.style.background = 'red';
    button1.disabled = true;
    button2.disabled = true;
    button3.disabled = true;
    next.style.background = bg;
    next.style.pointerEvents = 'all';
    next.addEventListener("click", e => {
        quesNumber = 14;
        button1.style.background = bg;
        button2.style.background = bg;
        button3.style.background = bg;
        button1.disabled = false;
        button2.disabled = false;
        button3.disabled = false;
        next.style.background = disbg;
        next.style.pointerEvents = 'none';
    })
    incorrectAnswers++;
}
if(quesNumber === 14){
    button1.value = 'العام الخامس من الهجرة';
    button2.value = 'العام الأول من الهجرة';
    button3.value = 'العام الثاني من الهجرة';
    Question.innerHTML = `:السؤال الرابع عشر<br>متى فرض صيام شهر رمضان المبارك؟`;
    button1.onclick = () => {
        ans = 'العام الخامس من الهجرة';
    }
    button2.onclick = () => {
        ans = 'العام الأول من الهجرة';
    }
    button3.onclick = () => {
        ans = 'العام الثاني من الهجرة';
    }
}
if(quesNumber === 14 && ans === 'العام الثاني من الهجرة'){
    correctAnswers++;
    button1.style.background = 'red';
    button2.style.background = 'red';
    button3.style.background = 'yellowgreen';
    button1.disabled = true;
    button2.disabled = true;
    button3.disabled = true;
    next.style.background = bg;
    next.style.pointerEvents = 'all';
    next.addEventListener("click", e => {
        quesNumber = 15;
        button1.style.background = bg;
        button2.style.background = bg;
        button3.style.background = bg;
        button1.disabled = false;
        button2.disabled = false;
        button3.disabled = false;
        next.style.background = disbg;
        next.style.pointerEvents = 'none';
        next.value = 'انهاء'
    })
}else if(quesNumber === 14 && ans === 'العام الخامس من الهجرة' || quesNumber === 14 && ans === 'العام الأول من الهجرة'){
    button1.style.background = 'red';
    button2.style.background = 'red';
    button3.style.background = 'yellowgreen';
    button1.disabled = true;
    button2.disabled = true;
    button3.disabled = true;
    next.style.background = bg;
    next.style.pointerEvents = 'all';
    next.addEventListener("click", e => {
        quesNumber = 15;
        button1.style.background = bg;
        button2.style.background = bg;
        button3.style.background = bg;
        button1.disabled = false;
        button2.disabled = false;
        button3.disabled = false;
        next.style.background = disbg;
        next.style.pointerEvents = 'none';
        next.value = 'انهاء'
    })
    incorrectAnswers++;
}
if(quesNumber === 15){
    button1.value = 'الكعبة';
    button2.value = 'المسجد النبوي';
    button3.value = 'المسجد الأقصى';
    Question.innerHTML = `:السؤال الخامس عشر<br>ما هي القبلة الأولى للمسلمين؟`;
    button1.onclick = () => {
        ans = 'الكعبة';
    }
    button2.onclick = () => {
        ans = 'المسجد النبوي';
    }
    button3.onclick = () => {
        ans = 'المسجد الأقصى';
    }
}
if(quesNumber === 15 && ans === 'المسجد الأقصى'){
    correctAnswers++;
    button1.style.background = 'red';
    button2.style.background = 'red';
    button3.style.background = 'yellowgreen';
    next.style.background = bg;
    next.style.pointerEvents = 'all';
    button1.disabled = true;
    button2.disabled = true;
    button3.disabled = true;
    next.addEventListener("click", e => {
        quesNumber = 0;
        button1.style.background = bg;
        button2.style.background = bg;
        button3.style.background = bg;
        button1.disabled = false;
        button2.disabled = false;
        button3.disabled = false;
        next.remove();
    })
}else if(quesNumber === 15 && ans === 'الكعبة' || quesNumber === 15 && ans === 'المسجد النبوي'){
    incorrectAnswers++;
    button1.style.background = 'red';
    button2.style.background = 'red';
    button3.style.background = 'yellowgreen';
    next.style.background = bg;
    next.style.pointerEvents = 'all';
    button1.disabled = true;
    button2.disabled = true;
    button3.disabled = true;
    next.addEventListener("click", e => {
        quesNumber = 0;
        button1.style.background = bg;
        button2.style.background = bg;
        button3.style.background = bg;
        button1.disabled = false;
        button2.disabled = false;
        button3.disabled = false;
        next.remove();
    })
}
if(quesNumber === 0){
    document.removeEventListener('click', evl);
    button1.remove();
    button2.remove();
    button3.remove();
    const img = new Image(50, 50);
    for (let i = 0; i < 150; i++) {
        let bal = document.createElement('img');
        bal.src = 'che/paper' + Math.floor(Math.random() * 6) + '.png';
        bal.width = 10;
        bal.height = 10;
        bal.classList.add('bal')
        bal.draggable = false;
        bal.style.left = Math.floor(Math.random() * window.innerWidth) + 'px';
        document.body.append(bal);
    };
    
    for (let j = 0; j < 150; j++) {
        let img = document.getElementsByClassName('bal')[j];
        img.style.bottom = Math.floor(Math.random() * window.innerHeight) + 'px';
    };
    
    for (let x = 0; x < 150; x++) {
        let tag = document.getElementsByClassName('bal')[x];
        let t1 = +tag.style.bottom.slice(0, 4) || +tag.style.bottom.slice(0, 3) || +tag.style.bottom.slice(0, 2) || +tag.style.bottom.slice(0, 1);
        setInterval(() => {
            t1 -= Math.floor(Math.random() * 3);
            tag.style.bottom = t1 + 'px';
        }, 15);
    };
    Question.innerHTML = ``;
    if(correctAnswers >= 0 && correctAnswers <= 6){
        Question.innerHTML = `جيد<br>${total} / ${correctAnswers}`;
        img.src = 'che/blue.png'
        img.className = 'blue';
        document.getElementsByClassName('buttons')[0].append(img);
        let sc = 1;
        let int = setInterval(() => {
            sc += 0.01;
            document.getElementsByClassName('blue')[0].style.scale = sc;
            if(sc >= 1.6){
                sc = 1.6;
                clearInterval(int);
            }
        }, 100);
    }else if(correctAnswers >= 7 && correctAnswers <= 10){
        Question.innerHTML = `رائع<br>${total} / ${correctAnswers}`;
        img.src = 'che/bronze.png'
        img.className = 'bronze';
        document.getElementsByClassName('buttons')[0].append(img);
        let sc = 1;
        let int = setInterval(() => {
            sc += 0.01;
            document.getElementsByClassName('bronze')[0].style.scale = sc;
            if(sc >= 1.6){
                sc = 1.6;
                clearInterval(int);
            }
        }, 100);
    }else if(correctAnswers >= 11 && correctAnswers <= 14){
        Question.innerHTML = `أحسنت<br>${total} / ${correctAnswers}`;
        img.src = 'che/silver.png'
        img.className = 'silver';
        document.getElementsByClassName('buttons')[0].append(img);
        let sc = 1;
        let int = setInterval(() => {
            sc += 0.01;
            document.getElementsByClassName('silver')[0].style.scale = sc;
            if(sc >= 1.6){
                sc = 1.6;
                clearInterval(int);
            }
        }, 100);
    }else if(correctAnswers == 15){
        Question.innerHTML = `ممتاز<br>لقد حصلت على الدرجة النهائية`;
        img.src = 'che/gold.png'
        img.className = 'gold';
        document.getElementsByClassName('buttons')[0].append(img);
        let sc = 1;
        let int = setInterval(() => {
            sc += 0.01;
            document.getElementsByClassName('gold')[0].style.scale = sc;
            if(sc >= 1.6){
                sc = 1.6;
                clearInterval(int);
            }
        }, 100);
    }
}
});
        const ua = navigator.userAgent;
        const mobRegex = /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/;
        if(mobRegex.test(ua)){
            button1.style.fontSize = '150%';
            button2.style.fontSize = '150%';
            button3.style.fontSize = '150%';
            button1.style.height = '50px';
            button2.style.height = '50px';
            button3.style.height = '50px';
        }
        document.addEventListener('keyup', e => {
            if(e.key === 'Enter') next.click();
        })
        window.addEventListener("blur", () => {
            document.body.innerHTML = `<button id="re" onclick="location.reload();">إعادة المحاولة</button><style>#re{border:none;background:linear-gradient(#000, #111, #222, #333, #444, #555);color:#0cad1f;font-weight:900;height:10%;width:10%;font-size:100%;cursor:pointer;box-shadow:4px 4px 8px #fff;filter:brightness(200%);}#re:active{box-shadow:0px 0px 0px #fff;margin-top:4px;margin-left:4px;}</style>`;
            alert('لا تفتح أي مواقع أخرى أثناء المرحلة');
        })