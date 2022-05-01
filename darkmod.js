// const checkbox = document.getElementById('checkbox');
const checkbox = document.querySelector('.checkbox');

checkbox.addEventListener('click', toggleClick);

//function click() {
    //if(document.body.classList.contains('dark')){
        //document.body.classList.remove('dark');//
        //console.log('convert into Light Mode');
//조건문 쓰는 법과, classlist 사용법 숙지하기 //
    //} else{
      //  document.body.classList.add('dark');
       // console.log('convert into Dark Mode')
    //}
//}
//자스에서 이벤트 잘 실행되는지 확인 하는 방법 = console.log ('메시지')//

//함수 작성법 숙지하기 //

function toggleClick() {
    document.body.classList.toggle('dark');
    console.log('Working!');
}