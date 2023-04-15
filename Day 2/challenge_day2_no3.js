// 1. 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.

const word =
  "Love is the best thing in this world. Some found their love and some are still looking for their love.";

const word_lower = word.toLowerCase();

console.log(word_lower.match(/love/gi));
console.log(word_lower.match(/love/gi).length);

// 2. Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

const text =
  "You cannot end a sentence with because because because is a conjunction";
const text_lower = text.toLowerCase();

console.log(text_lower.match(/because/gi));
console.log(text_lower.match(/because/gi).length);

// 3. Clean the following text and find the most frequent word(hint, use replace and regular expressions).

const sentence =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";

//[^a-zA-Z ] is for the wrong formatted

const sentence_clean = sentence.replace(/[^a-zA-Z ]/g, "");
console.log(sentence_clean);

// 4. Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

const text_2 =
  "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";
console.log(text_2.match(/\d+/g));

//d+ is for digits or number

let salary_1 = parseInt(text_2.match(/\d+/g)[0]);
let salary_2 = parseInt(text_2.match(/\d+/g)[1]);
let salary_3 = parseInt(text_2.match(/\d+/g)[2]);

console.log(salary_1 + salary_2 + salary_3);
