const name="john"
const repocount=50
//method 1 to add both strings
console.log(name + repocount);

//second method BEST WAY
console.log(`hello my name is ${name} and my repo count is ${repocount}`);

const gameName=new String(`John-ycsm`)

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('n'));

const newString=gameName.substring(0,4)
console.log(newString);

const anotherString=gameName.slice(-8,4)
console.log(anotherString);


const finalString="      underTaker     "
console.log(finalString);
console.log(finalString.trim());

const url="https://www.youtube.com/watch?v=Ip6cw8gfHHI&ab_channel=d4vdVEVO"
console.log(url.replace('=','$'));
console.log(url.includes('HERE_WITH_ME'));