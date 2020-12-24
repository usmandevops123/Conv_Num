function timeconvert(num)
{
    var hour=Math.floor(num/60);
    var min=num%60;
    var sec=num%3600;
    document.write(`The given num has ${hour} hours. <br>`);
    document.write(`The given num has ${min} minutes.<br> `);
    document.write(`The given num has ${sec} seconds. <br>` );
}  
var num=prompt('Enter a number you want to convert')
console.log(timeconvert(num));