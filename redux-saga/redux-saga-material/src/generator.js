console.log('learning generator function');

function* helloGeneratorFunction() {
    //cậu lệnh 1
    yield 2019; //dừng
    //chạy lạị
    //câu lệnh 2
    return 'tự học lập trình redux saga'; //kết thúc => throw error
    yield 2020;
}

const result = helloGeneratorFunction(); //interator
console.log('result 1: ', result.next());// 2019 - done: false
console.log('result 2: ', result.next()); //done: true
console.log('result 3: ', result.next());