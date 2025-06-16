// var checkbox = document.querySelector('input[name=mode]');

// checkbox.addEventListener('change', function () {
//     if (this.checked) {
//         trans()
//         document.documentElement.setAttribute('data-theme', 'dark')
//     } else {
//         trans()
//         document.documentElement.setAttribute('data-theme', 'light')
//     }
// })

// let trans = () => {
//     document.documentElement.classList.add('transition');
//     window.setTimeout(() => {
//         document.documentElement.classList.remove('transition');
//     }, 1000)
// }

// const switchInput = document.getElementById('switch-1');

// switchInput.addEventListener('change', () => {
//   const html = document.documentElement;

//   html.classList.add('transition'); // スムーズな切り替えアニメーション
//   if (switchInput.checked) {
//     html.setAttribute('data-theme', 'dark');
//   } else {
//     html.removeAttribute('data-theme');
//   }

//   // 一定時間後にトランジションを削除（不要なら削除してOK）
//   window.setTimeout(() => {
//     html.classList.remove('transition');
//   }, 500);
// });