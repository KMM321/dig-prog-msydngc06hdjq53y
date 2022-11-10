'use strict'
// 1行目に記載している 'use strict' は削除しないでください

// 胸　クリックして記載変更
const mune = document.getElementById('mune');
mune.addEventListener('click', () => {
    mune.textContent = '胸は(みんな大好き)ベンチプレス！';
});

// 肩　クリックして記載変更
const kata = document.getElementById('kata');
kata.addEventListener('click', () => {
    kata.textContent = '肩はフロントプレス！(腰に気を付けて)';
});

// 背中　クリックして記載変更
const senaka = document.getElementById('senaka');
senaka.addEventListener('click', () => {
    senaka.textContent = '背中はベントオーバーロー！(角度が肝だよ)';
});

// 足　クリックして記載変更
const ashi = document.getElementById('ashi');
ashi.addEventListener('click', () => {
    ashi.textContent = '足はスクワット！(リトルマツはレッグプレス派かな～)';
});

// 二頭筋　クリックして記載変更
const nito = document.getElementById('nito');
nito.addEventListener('click', () => {
    nito.textContent = '二頭はインクラインダンベルカール！(アームカールもセットでね)';
});

// 三頭筋　クリックして記載変更
const santo = document.getElementById('santo');
santo.addEventListener('click', () => {
    santo.textContent = '三頭はスカルクラッシャー！(何より響きがかっこいい)';
});

// 鍛えない　アラート
const none = document.getElementById('none');
none.addEventListener('click', () => {
    window.alert('ほんとにいいの？\n筋肉のための休息日かな？'); 
});
