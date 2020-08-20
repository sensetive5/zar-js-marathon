const firstRow = 'мама мыла раму';
const secondRow = 'собака друг человека';

function getRow (first, second) {
  const getLetters = (string = '', searchingLetter) => string
    .toLowerCase()
    .split('')
    .filter(letter => letter === searchingLetter);

  const firstStringALetters = getLetters(first, 'а');
  const secondStringALetters = getLetters(second, 'а');

  return firstStringALetters.length > secondStringALetters.length
    ? first
    : second;
}

function formattedPhone (phone) {
  const preparedPhoneNumber = phone.split('');
  const countryCode = preparedPhoneNumber.slice(0, 2).join('');
  const cityCode = preparedPhoneNumber.slice(2, 5).join('');
  const startBatch = preparedPhoneNumber.slice(5, 8).join('');
  const midBatch = preparedPhoneNumber.slice(8, 10).join('');
  const endBatch = preparedPhoneNumber.slice(10, 12).join('');

  return `${countryCode} (${cityCode}) ${startBatch}-${midBatch}-${endBatch}`;
}

console.log(getRow(firstRow, secondRow));
console.log(formattedPhone('+71234567890'));
