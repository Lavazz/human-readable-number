module.exports = function toReadable (number) {
    const units = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
    const tens = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
    const scale = ['', 'thousand', 'million', 'billion', 'trillion'];
    let word = '';
  
    if(number == ''){
        word = 'zero' ;
    }else{
    for (let i = 0; i < scale.length; i++) {
      let tempValue = Math.floor(number%(100*Math.pow(1000,i))/Math.pow(1000,i));
      if (tempValue !== 0) {
        if (tempValue < 20) {
          word = units[tempValue] + scale[i] + ' ' + word;
        } else {
          word = tens[Math.floor(number%(100*Math.pow(1000,i))/(10*Math.pow(1000,i)))] + ' ' + units[Math.floor(tempValue/Math.pow(1000,i))%10] + scale[i] + ' ' + word;
        }
      }
  
      tempValue = Math.floor(number%(Math.pow(1000,i+1))/(100*Math.pow(1000,i)));
      if (tempValue !== 0) {
        word = units[tempValue] + 'hundred ' + word;
      }
    }
}
      return word.trim();
}

