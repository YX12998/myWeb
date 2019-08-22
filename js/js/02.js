
//写一段代码，存取两个学生信息
var student01 = {
	name:"li",
	grade:"大三",
	id:16060201,
	"class":"计算机科学与技术2班",
	"house":"17#104",
	total:70
}

var student02 = {
	name:"wang",
	grade:"大三",
	id:16060202,
	"class":"计算机科学与技术2班",
	"house":"17#105",
	total:90
}

var student03 = {
	name:"zeng",
	grade:"大三",
	id:16060203,
	"class":"计算机科学与技术2班",
	"house":"17#105",
	total:88
}

var arrayTemp = [student01,student02,student03];

var topOne = {
	name:"",
	id:0,
	total: 0
};

//不要污染源数据

for(var i=0; i<arrayTemp.length;i++){
	if(arrayTemp[i].total>topOne.total){
		topOne.total = arrayTemp[i].total;
		topOne.name = arrayTemp[i].name;
		topOne.id = arrayTemp[i].id;
	}
}


console.info(topOne);