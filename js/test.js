const $h_form = document.querySelector('#h-form');
const $body_form = document.querySelector('.modal-body');
const $nameActive = document.getElementById("nameActive");
const $put_act = document.getElementById("put-act");
const $put_act_main = document.getElementById("put_act_main");

const act = {};
const actives = {};


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


$put_act_main.addEventListener('click', function(e){

  <? echo "console.log('sdvvesd');"?>
  e.preventDefault();
  const $money = createElement('button', 'btn', 'btn-success');
  const $not_money = createElement('button', 'btn', 'btn-success');
  $body_form.appendChild($money);
  $body_form.appendChild($not_money);
  $money.style.width = '49.5%';
  $money.innerText = 'Денежный';
  $not_money.style.width = '49.5%';
  $not_money.style.float = 'right';
  $not_money.innerText = 'Неденежный';
  for (var i in act) delete act[i];



  $money.addEventListener('click', function(e){
    e.preventDefault();

    act.name = $nameActive.value;

    act.type = 'Денежный';
    console.log('Hello', act);
    $nameActive.remove();
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
      console.log(act);


    });

    $v_kasse.addEventListener('click', function(e){
      e.preventDefault();
      $v_banke.remove();
      $v_kasse.remove();

      const $currency = createElement('input', 'mb-3');
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


  $not_money.addEventListener('click', function(e){
      e.preventDefault();
      act.name = $nameActive.value;
      act.type = 'Неденежный';
      console.log('Hello', act);
      $nameActive.remove();
      $money.remove();
      $not_money.remove();
  });



  $put_act.addEventListener('click', function(e){
    e.preventDefault();
    let item = Object.keys(actives).length;
    console.log(item);
    actives[item] = act;

    $body_form.innerHTML = '';
    console.log(actives);
  });


});
