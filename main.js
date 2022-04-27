let sourceArray = [],
    valueInput,
    checkInput = false,
    finalArray = [];

function getRandomIntInclusive(min, max)
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function input ()
{
    valueInput = document.getElementsByTagName('input')[0].value;  // получаем значение длины массива
    let min = document.getElementsByTagName('input')[1].value;  // начало диапазона
    let max = document.getElementsByTagName('input')[2].value;  // конец диапазона
    if ((valueInput == '')||(valueInput < 2)||(valueInput > 50))    //защита от дурака
        alert ('Введите число от 2 до 50');
    else    //записываем в массив случайные числа в выбранном диапазоне
    {
        sourceArray = [];
        for (let i = 0; i < valueInput; i++)
        {
            sourceArray.push(getRandomIntInclusive(min, max));
        }
    }
    document.getElementById('array').textContent = sourceArray;    //передаем массив в html
    checkInput = true;
    //console.log(sourceArray)
}
 
function combSorting() 
{
    if(!checkInput) alert('Введите массив') //проверка на заполненность массива
    else
    {
        finalArray = sourceArray; //переносим массив в новый, чтобы сохранить значение старого массива для работы с ним, если понадобится
        let interval = Math.floor(finalArray.length / 1.247);
  	    while (interval > 0) 
        {
    	    for(let k = 0; k + interval < finalArray.length; k++) 
            {
	      	    if (finalArray[k] > finalArray[k + interval]) 
                {
		            let small = finalArray[k + interval];
		            finalArray[k + interval] = finalArray[k];
				    finalArray[k] = small;
			    }
            //console.log(finalArray)
		    }
		interval = Math.floor(interval / 1.247);
	    }
        document.getElementById('sort').textContent = finalArray;   //передаем массив в html
    }
}

document.getElementsByTagName('button')[0].onclick = input;     //при нажатии на кнопку 'Создать массив' срабатывает функция input
document.getElementsByTagName('button')[1].onclick = combSorting;   //при нажатии на кнопку 'Сортировать массив' срабатывает функция combSorting