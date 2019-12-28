const romToDec = (roman) => {
  const i = 1;
  const v = 5;
  const x = 10;
  const l = 50;
  const c = 100;
  const d = 500;
  const m = 1000;

  const romanSplit = roman.toLowerCase().split("");
  let length = roman.length;
  let sum = eval(romanSplit[0]);

  if (eval(romanSplit[0]) < eval(romanSplit[1])) {
      sum = eval(romanSplit[1]) - eval(romanSplit[0]);
      romanSplit[1] = 0;
  };

  for (index = length - 1; index >= 1; index--) {
      if (eval(romanSplit[index]) <= eval(romanSplit[(index - 1)])) {
        sum += eval(romanSplit[index]);
    } else {
        sum += eval(romanSplit[index]) - eval(romanSplit[index - 1]);
      index--;
    };
  };
  return sum;
};

console.log(romToDec('CMXCIX')); //999
console.log(romToDec('IM')); //999

/*
1	I	11	XI	21	XXI
2	II	12	XII	22	XXII
3	III	13	XIII	23	XXIII
4	IV	14	XIV	24	XXIV
5	V	15	XV	25	XXV
6	VI	16	XVI	26	XXVI
7	VII	17	XVII	27	XXVII
8	VIII	18	XVIII	28	XXVIII
9	IX	19	XIX	29	XXIX
10	X	20	XX	30	XXX
*/
