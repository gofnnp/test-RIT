const $h_form = document.querySelector('#staticBackdropLabel');
const $body_form = document.querySelector('.modal-body');
const $put_act = document.getElementById("put-act");
const $put_act_main = document.getElementById("put_act_main");
const $edit = document.getElementById("edit_act");
const $actives = document.querySelector('.actives');


const ws = new WebSocket('ws://localhost:2346');
console.log(ws);

let act = {};
let actives = {};


const createElement = (tag, className, className1) => {
  const $tag = document.createElement(tag);
  if (className) {
    $tag.classList.add(className);
  }
  if (className1) {
    $tag.classList.add(className1);
  }
  return $tag;
};


function main() {
  $body_form.innerHTML = '';

  const $put_name = createElement('input', 'inp_name', 'mb-3');
  $put_name.placeholder = 'Введите имя';
  $put_name.style.marginRight = '34%';
  const $put_val = createElement('input', 'inp_name', 'mb-3');
  $put_val.placeholder = 'Введите количество';
  $put_val.style.marginRight = '34%';
  const $money = createElement('button', 'btn', 'btn-success');
  const $not_money = createElement('button', 'btn', 'btn-success');
  $body_form.appendChild($put_name);
  $body_form.appendChild($put_val);
  $body_form.appendChild($money);
  $body_form.appendChild($not_money);
  $money.style.width = '49.5%';
  $money.innerText = 'Денежный';
  $not_money.style.width = '49.5%';
  $not_money.style.float = 'right';
  $not_money.innerText = 'Неденежный';



  $money.addEventListener('click', function(e){
    e.preventDefault();

    act.name = $put_name.value;
    act.val = $put_val.value;
    act.type = 'Денежный';
    console.log('Hello', act);
    $put_name.remove();
    $put_val.remove();
    $money.remove();
    $not_money.remove();

    $h_form.innerText = 'Выберите место хранения';

    const $v_kasse = createElement('button', 'btn', 'btn-success');
    $v_kasse.style.width = '49.5%';
    $v_kasse.innerText = 'В кассе';
    $body_form.appendChild($v_kasse);

    const $v_banke = createElement('button', 'btn', 'btn-success');
    $v_banke.style.width = '49.5%';
    $v_banke.style.float = 'right';
    $v_banke.innerText = 'В Банке';
    $body_form.appendChild($v_banke);



    $v_banke.addEventListener('click', function(e){
      e.preventDefault();
      $v_banke.remove();
      $v_kasse.remove();

      $h_form.innerText = 'Введите имя банка, счёт в нём и валюту Вашего актива';
      act.place = 'В Банке';

      const $put_nameBank = createElement('input', 'inp_name', 'mb-3');
      $put_nameBank.placeholder = 'Введите имя';
      $put_nameBank.style.marginRight = '46%';
      $body_form.appendChild($put_nameBank);

      const $put_valBank = createElement('input', 'inp_name', 'mb-3');
      $put_valBank.placeholder = 'Введите счёт';
      $put_valBank.style.marginRight = '46%';
      $body_form.appendChild($put_valBank);

      const $put_curBank = createElement('input', 'inp_name', 'mb-3');
      $put_curBank.placeholder = 'Введите валюту';
      $put_curBank.style.marginRight = '67%';
      $body_form.appendChild($put_curBank);

      const $put_bank = createElement('button', 'btn', 'btn-success');
      $put_bank.style.width = '300px';
      $body_form.appendChild($put_bank);
      $put_bank.innerText = 'Ввести';

      $put_bank.addEventListener('click', function(e){
        act.currency = $put_curBank.value;
        act.valBank = $put_valBank.value;
        act.nameBank = $put_nameBank.value;
      });
      console.log(act);
    });

    $v_kasse.addEventListener('click', function(e){
      e.preventDefault();
      $v_banke.remove();
      $v_kasse.remove();

      const $currency = createElement('input', 'mb-3');
      $currency.classList.add('mr-3');
      $currency.style.padding = '6px 0 4px 10px';
      $currency.style.border = '1px solid #cecece';
      $currency.style.background = '#F6F6f6';
      $currency.style.borderRadius = '8px';
      $currency.placeholder = 'Валюта';
      $body_form.appendChild($currency);

      const $put_currency = createElement('button', 'btn', 'btn-success');
      $body_form.appendChild($put_currency);

      $put_currency.innerText = 'Ввести';
      $h_form.innerText = 'Введите валюту Вашего актива';

      act.place = 'В кассе';

      $put_currency.addEventListener('click', function(e){
        e.preventDefault();
        act.currency = $currency.value;
        console.log(act);
      });
    });

  });


  $put_act.addEventListener('click', function(e){
    $body_form.innerHTML = '';
    ws.send(JSON.stringify(act));
  });

  $not_money.addEventListener('click', function(e){
      e.preventDefault();
      act.name = $put_name.value;
      act.type = 'Неденежный';
      console.log('Hello', act);
      $put_name.remove();
      $money.remove();
      $not_money.remove();
      $put_val.remove();

      const $put_startVal = createElement('input', 'inp_name', 'mb-3');
      $put_startVal.placeholder = 'Введите начальную балансовую стоимость';
      $put_startVal.style.marginRight = '46%';
      $put_startVal.style.width = '350px'
      $body_form.appendChild($put_startVal);

      const $put_ostVal = createElement('input', 'inp_name', 'mb-3');
      $put_ostVal.placeholder = 'Введите остаточную балансовую стоимость';
      $put_ostVal.style.marginRight = '46%';
      $put_ostVal.style.width = '350px'
      $body_form.appendChild($put_ostVal);

      const $put_markVal = createElement('input', 'inp_name', 'mb-3');
      $put_markVal.placeholder = 'Введите оценочную стоимость';
      $put_markVal.style.marginRight = '67%';
      $put_markVal.style.width = '350px'
      $body_form.appendChild($put_markVal);

      const $put_notMoney = createElement('button', 'btn', 'btn-success');
      $put_notMoney.style.width = '350px';
      $body_form.appendChild($put_notMoney);
      $put_notMoney.innerText = 'Ввести';

      $put_notMoney.addEventListener('click', function(e){
        act.startVal = $put_startVal.value;
        act.ostVal = $put_ostVal.value;
        act.markVal = $put_markVal.value;
        $put_startVal.remove();
        $put_ostVal.remove();
        $put_markVal.remove();
        $put_notMoney.remove();
        console.log(act);

        const $put_har = createElement('input', 'inp_name', 'mb-3');
        const $h_har = createElement('h3');
        $h_har.innerText = 'Введите описание';
        $put_har.style.width = '100%';
        $put_har.style.height = '50%';
        $body_form.appendChild($h_har);
        $body_form.appendChild($put_har);

        const $but_har = createElement('button', 'btn', 'btn-success');
        $but_har.style.width = '100%';
        $body_form.appendChild($but_har);
        $but_har.innerText = 'Ввести';

        $but_har.addEventListener('click', function(e){
          act.har = $put_har.value;
        })
      });
  });

};

//Создание
$put_act_main.addEventListener('click', function(e){
  e.preventDefault();
  $h_form.innerText = 'Создание актива';
  $put_act.innerText = 'Добавить';
  for (var i in act) delete act[i];
  act.fn = 'put';
  $body_form.innerHTML = '';
  main();
});




//Редактирование
$edit.addEventListener('click', function(e){
  e.preventDefault();
  for (var i in act) delete act[i];
  $body_form.innerHTML = '';
  $h_form.innerText = 'Редактирование';
  $put_act.innerText = 'Редактировать';

  act.fn = 'edit';

  const $put_name = createElement('input', 'inp_name');
  $put_name.classList.add('mr-3');
  $put_name.placeholder = 'Введите имя редактируемого объекта';
  $body_form.appendChild($put_name);




  const $but_name = createElement('button', 'btn', 'btn-success');
  $body_form.appendChild($but_name);
  $but_name.innerText = 'Ввести';

  $but_name.addEventListener('click', function(e){
    console.log($put_name.value);
    act.editName = $put_name.value;
    main();
  });
});

const createAct = (objAct) => {
  let $active = createElement('div', 'new_act');
  $active.id = objAct.name.split(' ').join('');
  console.log($active.id);
  $actives.appendChild($active);
  let e = 0;
  if (objAct.name) {
    let name = createElement('div', 'act_el', `act_el_${objAct.name}`);
    name.innerText = `Имя:\n ${objAct.name}`;
    $active.appendChild(name);
    e++
  };
  if (objAct.type) {
    let type = createElement('div', 'act_el', `act_el_${objAct.name}`);
    type.innerText = `Тип:\n ${objAct.type}`;
    $active.appendChild(type);
    e++
  };
  if (objAct.place) {
    let place = createElement('div', 'act_el', `act_el_${objAct.name}`);
    place.innerText = `Место:\n ${objAct.place}`;
    $active.appendChild(place);
    e++
  };
  if (objAct.val) {
    let val = createElement('div', 'act_el', `act_el_${objAct.name}`);
    if (objAct.currency) {
      val.innerText = `Значение:\n ${objAct.val + objAct.currency}`;
    } else {
      val.innerText = `Значение:\n ${objAct.val}`;
    };
    $active.appendChild(val);
    e++
  };
  if (objAct.nameBank) {
    let nameBank = createElement('div', 'act_el', `act_el_${objAct.name}`);
    nameBank.innerText = `Название банка:\n ${objAct.nameBank}`;
    $active.appendChild(nameBank);
    e++
  };
  if (objAct.valBank) {
    let valBank = createElement('div', 'act_el', `act_el_${objAct.name}`);
    valBank.innerText = `Счёт:\n ${objAct.valBank}`;
    $active.appendChild(valBank);
    e++
  };
  if (objAct.startVal) {
    let startVal = createElement('div', 'act_el', `act_el_${objAct.name}`);
    startVal.innerText = `Начальная стоимость:\n ${objAct.startVal}`;
    $active.appendChild(startVal);
    e++
  };
  if (objAct.ostVal) {
    let ostVal = createElement('div', 'act_el', `act_el_${objAct.name}`);
    ostVal.innerText = `Остаточная стоимость:\n ${objAct.ostVal}`;
    $active.appendChild(ostVal);
    e++
  };
  if (objAct.markVal) {
    let markVal = createElement('div', 'act_el', `act_el_${objAct.name}`);
    markVal.innerText = `Оценочная стоимость:\n ${objAct.markVal}`;
    $active.appendChild(markVal);
    e++
  };
  if (objAct.har) {
    let har = createElement('div', 'act_el', `act_el_${objAct.name}`);
    har.innerText = `Описание:\n ${objAct.har}`;
    $active.appendChild(har);
    e++
  };

  e = 100 / e;
  var x = document.querySelectorAll(`.act_el_${objAct.name}`);
  console.log(x);
  for (var i = 0; i < x.length; i++) {
    x[i].style.width = `${e}%`;
  };
};


const editAct = (objAct) => {
  const $editAct = document.getElementById(objAct.editName);
  $editAct.remove();
  console.log('####:', $editAct);
  createAct(objAct);
};


ws.onmessage = response => {
  let newAct = JSON.parse(response.data);
  if (newAct.fn == 'put') {
    createAct(newAct);
  } else if (newAct.fn == 'edit') {
    editAct(newAct);
  }

  console.log(newAct);
};
