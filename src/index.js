/**
 * const let の変数宣言
 */
//  var val1 = 'var変数';
//  console.log(val1);

// //var変数は上書き可能
// val1 = 'var変数を上書き';
// console.log(val1);

// //var変数は再宣言可能
// var val1 = 'var変数を再宣言';
// console.log(val1);

// let val2 = 'let変数';
// console.log(val2);

// //letは上書きが可能
// val2 = 'let変数を上書き';
// console.log(val2);

//letは再宣言不可
// let val2 = 'let変数を再宣言';

//const変数は上書き、再宣言不可
// const val3 = 'const変数';
// console.log(val3);

// val3 = 'constを上書き';
// const val3 = 'const変数を再宣言';

//constで定義したオブジェクトは、プロパティの変更が可能
// const val4 = {
//   name: 'じゃけえ',
//   age: 28,
// };
// val4.name = 'jake';
// val4.from = 'Osaka';
// console.log(val4);

//constで定義した配列は、プロパティの変更が可能
// const val5 = ['dog','cat'];
// val5[0] = 'bird';
// val5.push('monkey');
// console.log(val5);

/**
 * テンプレート文字列
 */
// const name = 'じゃけえ';
// const age = 28;
// //[私の名前はじゃけえです。年齢は28歳です。]

// //従来の方法
// const message = '私の名前は' + name + 'です。年齢は' + age + 'です。';
// console.log(message);

// //テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/**
 * アロー関数
 */
//従来の関数の書き方
// function func1(str) {
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// //アロー関数
// const func2 = (str) => {
//   return str;
// }
// console.log(func2("func2です"));

// //アロー関数の特徴
// //引数が1つのときは()を省略可能
// //処理が一行で完結する場合は{}とreturnも省略可能

// const func3 = (num1,num2) => num1 + num2;
// console.log(func3(10, 20));

/**
 * 分割代入
 */
// const myProfile = {
//   name: 'しほ',
//   age: 22,
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);
//オブジェクトの量が増えると記述内容が増えて大変。

//オブジェクトなので{}で受け取る
// const {name, age} = myProfile;
// const message2 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

// const myProfile = ['しほ', 22];
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(message3);

//配列なので[]で受け取る
//プロパティの様に名前がないので、順番に代入される
// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message4);

/**
 * デフォルト値,引数など
 */
// const sayHello = (name = 'ゲスト') => console.log(`こんにちは！${name}さん！`);
// sayHello('しほ');
//引数が渡されていない時は、デフォルトで設定した'ゲスト'が表示される

/**
 * スプレッド構文 ...
 */
//配列の展開
// const arr1 = [1, 2];
// console.log(arr1); //[1, 2]
// console.log(...arr1); // 1 2 → 配列の中身を順番に処理して展開

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

//展開の反対で、まとめる → 分割代入と一緒に使われる事が多い
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1, num2, arr3);

//配列のコピー,結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);
// //arr4と同じ要素を持ったarr6を生成できる

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);
//arr4とarr5を合わせた配列を生成できる

// const arr8 = arr4;
// console.log(arr8);
// arr8[0] = 100;
// console.log(arr4);
//イコールで配列をコピーしてしまうと参照元が同じなので、元の配列の値も変わってしまう
//そのため、配列をコピーしたい場合はスプレッド構文を用いる

/**
 * mapやfilterを使った配列の処理
 */

 //map 配列の要素を1つずつ処理して取り出す
// const nameArr = ['田中', '山田', '岡本'];
// for(let i = 0; i < nameArr.length; i++){
//   console.log(`${i + 1}番目は${nameArr[i]}です。`);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);
//returnされた結果に基づいて新しい配列nameArr2を生成

//引数２つめにはインデックス番号が入ってくる
// nameArr.map((name, index) => {
//  console.log(`${index + 1}番目は${name}です。`); 
// });
//nameArrの要素を1つずつ処理する


//filter 配列の中から条件に一致したものだけ取り出す
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 0;
// });
// console.log(newNumArr);

//ちょっと応用
// const newNameArr = nameArr.map((name) => {
//   if(name === '岡本'){
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });

// console.log(newNameArr);

/**
 * 三項演算子
 */
//if else みたいなことを一行で表現できる
//ある条件 ? 条件がtrueの時 : 条件がfalseの時
// const val1 = 1 < 0 ? 'trueです' : 'falseです';
// console.log(val1);

// const num = 1300;
// //toLocaleString() → 3桁区切りでカンマを入れてくれる関数
// const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください';
// console.log(formattedNum);

//関数のreturn部分で三項演算子を使用
// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? '100を超えています' : '許容範囲内です';
// }
// console.log(checkSum(50, 60));

/**
 * 論理演算子の本当の意味を知ろう && ||
 */
// const flag1 = true;
// const flag2 = false;

// if(flag1 || flag2){
//   console.log('１か２はtrueです');
// }
// if(flag1 && flag2){
//   console.log('１も２もtrueです');
// }

// || → 左側がfalseのとき右側を返す (左がtrueなら左を返す)
// const num = null; //　→　nullはfalse判定
// const fee = num || '金額未設定です';
// console.log(fee); // → 金額未設定です が返されている

// && → 左側がtrueなら右側を返すtrue判定
// (左側がfalseなら左側を返すfalse判定)
// const num2 = null;
// const fee2 = num2 && '何か設定されました';
// console.log(fee2);