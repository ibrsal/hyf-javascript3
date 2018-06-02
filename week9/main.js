console.log('it is work');

const initialStudents = [ 'niels', 'mads' ];
const room = '3a';

function StudentsFactory(initialStudents, room){
return{
	add : function(student){
		initialStudents.push(student);
	},
	delete : function(student){
			initialStudents.pop(student);
	},
	printAll : function(){
		console.log(room);
		console.log(initialStudents);
	},
	deleteAll: function(){
		initialStudents=[];
	},
	changeRoom:function(newroom){
		room = newroom;
		console.log('room changed to');
		console.log(room);

	}
}

}
const students = StudentsFactory(initialStudents, room);
// { add, delete ...... }
console.log('initialStudents array is');
console.log(initialStudents);

students.add('younes'); 
console.log('add younes to the studens array');  // [ 'niels', 'mads', 'younes' ]
console.log(initialStudents);

students.add('johnny'); 
// same // [ 'niels', 'mads', 'younes', 'johnny' ]
console.log('add johnny to the studens array'); // [ 'niels', 'mads', 'younes' ]
console.log(initialStudents);

students.delete('younes'); 
// delete // [ 'niels', 'mads', 'johnny' ]
console.log('delete younes from the studens array');  
console.log(initialStudents);

console.log('printAll');
students.printAll();
// 3a
// niels, mads, johnny

students.deleteAll();
console.log('delete all from the studens array');  
// []
console.log('printAll');
students.printAll(); 
// 3a
//  print all the names ''

students.changeRoom('3b');
