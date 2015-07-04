﻿/* 
	Написать функцию, для работы с двумя массивами данных. 
	Массивы могут содержать, например, списки имен или названий фруктов. 
	Изначально данные в массивах не должны быть отсортированы по алфавиту. 
	Эти массивы должны выводиться на html страничку в виде таблицы с двумя столбцами. 
*/

function printMas(mas1, mas2){ 
    var table = '<table border = 2><tr>';
    for (var i = 0, j = 0; i < mas1.length,j < mas2.length; i++, j++){
        table += '<td>' + mas1[i] + '</td>';
		table += '<td>' + mas2[j] + '</td>';
		table += '</tr>';
    }
	table += '</table>';
	return table;
	//document.getElementById('result').innerHTML = htm;
}

/*
Сравнение двух массивов, вывод соответствующих строк
 */
function compareMas(mas1, mas2){
	var htm = printMas(mas1, mas2);
	htm += '<p>';
	for (var i = 0; i < mas1.length; i++){
		if(mas1[i] == mas2[i])
			htm += 'Совпадение в строке ' + i + ' в слове ' + mas1[i] + '<br/>';
	}
	htm += '</p>';
	document.getElementById('result').innerHTML = htm;
}

/*
 Сравнение строк в массиве
 Выделение цветов совпадающих строк
 */

function compareMasColor(mas1, mas2){
	var htm = '<table border = 2><tr>';
	for (var i = 0, j = 0; i < mas1.length,j < mas2.length; i++, j++){
		if(mas1[i] == mas2[i]){
			htm += '<td bgcolor="#EE2C2C">' + mas1[i] + '</td>';
			htm += '<td bgcolor="#EE2C2C">' + mas2[j] + '</td>';
		} else{
			htm += '<td>' + mas1[i] + '</td>';
			htm += '<td>' + mas2[j] + '</td>';
		}
		htm += '</tr>';
	}
	htm += '</table>';
	document.getElementById('result').innerHTML = htm;
}

/*
Сортировка массива по алфавиту и в обратном порядке
*/

function sortMas(mas){
	var htm = '<p> <b>Исходный массив :</b> ' + mas + '<br/>';
	var val = +prompt("В каком порядке будем сортировать? (1 -> 2 <-)", '1');
	if(val == 1){
		htm += '<b>Отсортированный по алфавиту массив:</b> ' + mas.sort();
	} else {
		htm += '<b>Отсортированный в обратном порядке массив</b>: ' + mas.sort().reverse();
	}
	htm += '</p>';
	document.getElementById('result').innerHTML = htm;
}

/*

 */

function findStr(mas1, mas2){
	var htm = printMas(mas1, mas2);
	htm += '<p><input type="text" value="" id="str"><button onclick="findStr()">ОК</button></p>';

	document.getElementById('result').innerHTML = htm;
}

var mas1 = ['Банан', 'Яблоко', 'Клубника', 'Мандарин', 'Апельсин', 'Лимон'];
var mas2 = ['Груша', 'Маракуйя', 'Клубника', 'Апельсин', 'Земляника', 'Лимон', 'Банан'];
printMas(mas1, mas2);