//取a-b的绝对值
function abSO(a, b) {
	if (isNaN(a) || isNaN(b)) {
		console.info("输入错误!");
		return 0;
	}
	if (a > b) {
		return a - b;
	} else {
		return b - a;
	}


}

//取a,b两个数的最小值
function abMin(a, b) {
	if (isNaN(a) || isNaN(b)) {
		console.info("输入错误!");
		return 0;
	}
	if (a < b) {
		return a;
	} else {
		return b;
	}
}


var LuckNum = 6;
var a = 0;
var ranNum = 0;
while (ranNum != LuckNum) {
	a++;
	ranNum = Math.ceil(Math.random() * 10);
	console.info(ranNum);
}
console.info("抽到了,执行" + a + "次");

//字符串
var str01 = "yuanxin";
//字符串有没有下标?
var array01 = [0, 1, 2, 3, 4, 5];
console.info(array01[4]);

//字符串检索 indexOf()
console.info(str01.indexOf("n"));
console.info(str01.lastIndexOf("n"));
console.info(str01.indexOf("o")); //返回-1,未找到

//判断字符串长度
console.info("字符串长度为:" + str01.length);

//去掉字符串首尾的空字符( 如 换行符 空格) trim()
var str02 = "    我有一只  小毛驴   \n";
console.info(str02);
console.info("trim()操作后:\n" + str02.trim());

//字符串转换成小写 toLowerCase();  toUpperCase();
//"\n\r" 在Windows环境中,表示换行
var str03 = "sfdgsDADasDDaf";
console.info(
	"原来" + str03 + "\n\r" +
	"大写" + str03.toUpperCase() + "\n\r" +
	"小写" + str03.toLowerCase()
);

//课堂练习,在下面数组中,筛选出有特殊标记的元素
var array002 = ["joun-pro", "fang-NEW", "wang-NEW", "smith-ex", "prter-new", "day-pro", "jimy-new"]
//写一个循环,筛选出这几个人中,筛选出new级别的人,返回它

//for
for (var i = 0; i < array002.length; i++) {
	var upper = array002[i].toLowerCase();
	if (upper.indexOf("new") >= 0) {
		console.info(array002[i] + "下标" + i);
	}
}

///while
var i = 0;
while (i < array002.length) {
	if (array002[i].indexOf("new") >= 0) {
		console.info(array002[i]);
	}
	i++;
}

//do...while
var i = 0;
do {
	if (array002[i].indexOf("new") >= 0) {
		console.info(array002[i]);
	}
	i++;
} while (i < array002.length);

//数组 //在js中,数组是邪恶的!
var arr03 = [1, 2, 3, 4, 5, {
	nme: "yuan",
	age: 32
}];
//在js中,数组元素不要求数据类型一致,有序的一组变量
var arr04 = [0, "fang", true, function() {}, "li", "张"];

var string004 = [1, 2, 3, 4, 5, 6, 7];
string004.join(",");

//数组下标  坑 超出过多,中间会留下empty位置
var arr005 = [1, 2, 3, 4, 5];
arr005[8] = 8;
for (var i = 0; i < arr005.length; i++) {
	console.info(arr005[i] + "---" + i);
}


//js 脚本语言  弱类型  3坑  变量(布尔)  数字  字符串  
//数组  对象  函数  排序,定时器和计时器,构造函数
//  dom  dom操作  dom事件  小游戏  事件补充(监听 鼠标和键盘)

//JQUERY
//webServer 网站和交互
//node.js   后台
//egg.js    后台(交互)
//vue框架
//补充营养   react  响应式的高级应用
//应用阶段  微信程序   移动端程序  WPE桌面应用等


//关联数组 - 对象
//数组的下标可以是字符串!  关联数组!
//for in 遍历对象
arr005["fang"] = "fangwentao";
arr005["yang"] = "yangqingwen";
arr005["li"] = "lichunpeng";
for (var p in arr005) {
	console.info(arr005[p]);
}

//排序
var arr006 = [11, 21, 33, 42, 9, 23];
for (var i = 0; i < arr006.length - 1; i++) {
	for (var j = 0; j < arr006.length - 1 - i; j++) {
		if (arr006[j] > arr006[j + 1]) {
			var t = arr006[j];
			arr006[j] = arr006[j + 1];
			arr006[j + 1] = t;
		}
	}
}
console.info(arr006);
arr006.sort(function(a, b) {
	return a - b;
});
console.info(arr006.reverse());


//去重
//indexOf()
var arr007 = [11, 11, 9, 23, 21, 33, 42, 9, 23];
var n = [111,111,222,222,22,22,11,11];
function quchong(arr007) {
	var arr008 = [];
	for (var i = 0; i < arr007.length; i++) {
		if (arr008.indexOf(arr007[i]) == -1) {
			arr008.push(arr007[i]);
		}
	}
	return arr008;
}
console.info(quchong(arr007));
//splice()
arr007.sort(function(a, b) {
	return a - b;
});
for (var i = 0; i < arr007.length; i++) {
	if (arr007[i] === arr007[i + 1]) {
		arr007.splice(i, 1);
		i--;
	}
}

console.info(arr007);

//输出共有元素
var arr009 = [2, 3, 4, 6, 8];
var arr0010 = [9, 1, 0, 3, 7, 4];
var a = [];
for (var i = 0; i < arr009.length; i++) {
	for (var j = 0; j < arr0010.length; j++) {
		if (arr009[i] == arr0010[j]) {
			a.push(arr009[i]);
		}
	}
}
console.info(a);
