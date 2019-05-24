class Student{

	constructor(name){
		this.name = name
	}

	update(msg){
		console.log(`${this.name} receive message: ${msg}`)
	}
}

class Teacher{
	constructor(name,classList){
		this.name = name
		this.classList = classList||[]
	}

	notify(msg){
		this.classList.forEach((stu,i)=>{
			console.log(1)
			stu.update(msg)
		})
	}
}

class ClassList{

	constructor(){
		this.list = []
	}

	add(student){
		this.list.push(student)
	}
}


const s1 = new Student('崔奎奎')
const s2 = new Student('贾伟远')
const s3 = new Student('周全')

const class_01 = new ClassList()

class_01.add(s1)
class_01.add(s2)
class_01.add(s3)

const teacher = new Teacher('苍老师',class_01.list)

teacher.notify('今天放假')
