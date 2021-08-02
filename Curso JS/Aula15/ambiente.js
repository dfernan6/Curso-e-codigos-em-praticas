let num = [2,1,4,3]
num.sort()
num.push(5)

for ( var index = 0 ; index < 1 ; index++ )
{
console.log(`Estes são os números ${num} 
e essa é a posição do número 2 a posição número ${num.indexOf(2)}.` )
}
