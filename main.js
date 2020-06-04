`use strict`

//FizzNum, BuzzNumに数値を入力し、実行を押したときの挙動//


//HTMLの中からIdがbtnの要素を取得
const btn = document.getElementById('btn');

//ボタン要素のクリックイベントをトリガーにコールバック処理を作成
btn.addEventListener('click', () => {


  //入力値の取得//

  //HTMLの中からIdがfizzの要素を取得
  const fizzNumber = document.getElementById('fizz');

  //fizzNumのinputに入力された数字から値を取得
  const fizzNum = fizzNumber.value;

  //HTMLの中からIdがbuzzの要素を取得
  const buzzNumber = document.getElementById('buzz');

  //BuzzNunのinputに入力された数字から値を取得
  const buzzNum = buzzNumber.value;


  //結果情報のベース作成//

  //HTMLの中からIdがoutputの要素を取得
  const outputArea = document.getElementById('output');

  //結果要素の子要素を取得
  outputArea.innerHTML = '';

  //pタグの要素を作成
  const ptag = document.createElement('p');

  //pタグの要素に結果情報ヘッダーの固定値をセット
  ptag.textContent = '【出力】';

  //結果要素の子要素としてpタグの要素を追加
  outputArea.appendChild(ptag);


  //誤った動作をし、エラーが表示された後の挙動を関数で宣言//

  //値を空にして、もう一度値を入力するための関数を用意
  function NumberClear() {

    //fizzNumの値を空にする
    fizzNumber.value = '';
    
    //buzzNumの値を空にする
    buzzNumber.value = '';
    
    //入力する際に上段部分にあたるfizzBuzzにフォーカスを合わせる
    fizzNumber.focus();
  }  
  
  //エラーが表示された後の挙動を関数で用意
  function errorMessage() {

    //pタグの要素を作成
    const checker = document.createElement('p');

    //pタグ要素の中身のテキストを作成
    checker.textContent = '整数値を入力してください';

    //親要素であるdivタグの要素を取得
    const div = document.querySelector('div');

    //divタグの子要素としてpタグの要素を追加
    outputArea.appendChild(checker);
  }
  

  //整数値が入力されない場合の処理//

  //整数以外の値が入力された場合の処理
  if (isNaN(fizzNum && buzzNum)) {

    //アラートダイアログでエラー文を表示
    alert('文字列が入力されています！');

    //値を一度クリアにする処理
    NumberClear();

    // //もう一度数値を入力するための関数を返す処理
    return errorMessage();

  }

  //値が何も入力されていない場合の処理
  if (fizzNum == 0 && buzzNum == 0) {

    //アラートダイアログでエラー文を表示
    alert('数字が入力されていません！');

    //値を一度クリアにする処理
    NumberClear();

    // もう一度数値を入力するための関数を返す処理
    return errorMessage();;
  }

  //値が小数である場合の処理
  if (fizzNum.match(/^-?[0-9]+\.[0-9]+$/) && buzzNum.match(/^-?[0-9]+\.[0-9]+$/)) {
    
    //アラートダイアログでエラー文を表示
    alert('小数値が入力されています！');

    //値を一度クリアにする処理
    NumberClear();

    //もう一度数値を入力するための関数を返す処理
    return errorMessage();
  }


  //結果情報の中身を作成//

  //fizzbuzz問題のループ文

  //変数iを定義し、iが100より小さい場合、iに1ずつ足していく処理を実行
  for (let i = 1; i < 100; i++) {

    //バリューを取得するための変数を定義
    let value = '';

    //iがfizzes、buzzesの両方の数値の倍数である場合の処理
    if (i % fizzNum === 0 && i % buzzNum === 0) {

      //ブラウザに表示するための文字列と取得した値をバリューとして用意
      value = "FizzBuzz" + " " + i;

      //がiがfizzesの倍数である場合の処理
    } else if (i % fizzNum === 0) {

      //ブラウザに表示するための文字列と取得した値をバリューとして用意
      value = "Fizz" + " " + i;

      //がiがbuzzesの倍数である場合の処理
    } else if (i % buzzNum === 0) {

      //ブラウザに表示するための文字列と取得した値をバリューとして用意
      value = "Buzz" + " " + i;

      //iがどちらの倍数でもない場合の処理
    } else {

      //何も表示させないものとして用意
      value = '';
    }

    //要素を追加するためのpタグ要素を作成
    const fizzbuzz = document.createElement('p');

    //テキストの内容に、ループ文で取得した値を入力する
    fizzbuzz.textContent = value;

    //親要素であるdivタグの要素を取得
    const div = document.querySelector('div')

    //div要素の子要素として追加
    outputArea.appendChild(fizzbuzz);


    //「実行」を押した後の挙動

    //関数を呼び、もう一度入力しやすい状態にする
    NumberClear();
  }
});