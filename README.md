# animate.js

![Alt text](https://raw.githubusercontent.com/daimingyu/photos/master/type.jpg)

## 一、前言

Animate.css项目地址：[Daniel Eden - Animate.css](https://daneden.github.io/animate.css/)
项目地址：[Dai Mingyu - Animate.js](https://raw.githubusercontent.com/daimingyu/photos)

## 二、项目功能

* 自定义动画
* 贝塞尔曲线
* 回调函数
* 动画暂停和开始
* 按需调用

## 三、使用

### (一)引入animate.js文件
```
<script type="text/javascript" src="animate.js"></script>
```
### (二)一个例子

```
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>例子</title>
	<script type="text/javascript" src="animate.js"></script>
</head>
<body>
	<div id="div"></div>
	<button id="button">开始动画</button>
	<style>
	#div{
		width: 300px;
		height: 300px;
		background-color: blue;
		margin : 100px;
		opacity: 0;
	}
	</style>
	<script type="text/javascript">
		var oDiv = document.getElementById('div');
		var oButton = document.getElementById('button');
		oButton.onclick = function(){
			oDiv.animate({
				stringRule : `
					from {
						width:300px;
				  	}
				  	to {
				  		width:400px;
				  	}
				`,
				durtation : '1s',
				count:1,
			});
		}
	</script>
</body>
</html>
```
## 四、API

### (一)animate(params)

#### 1、作用对象

通过以下方法选择出来的所有原生DOM对象

* getElementById() 
* getElementsByTagName() 
* getElementsByClassName() 
* getElementsByName() 
* querySelect() 
* querySelectAll()

#### 2、参数

```
params:
{
	durtation : '1s',
	easing : 'linear',
	delay : '0s',
	count : 1,
	direction : 'normal',
	mode : 'both',
	callback : null,
	buildInRule : '',
	stringRule : '',
	jsonRule : null
}
```
#### 3、durtation
参数意义：动画完成一个周期所花费的秒或毫秒
是否必传：否
参数类型：字符串
参数可选值 : 任意数值 + s || 任意数值 + ms
默认值 ： 1s
#### 4、easing
参数意义：规定动画的速度曲线
是否必传：否
参数类型：字符串
参数可选值 : linear || ease || ease-in || ease-out || ease-in-out || cubic-bezier(n,n,n,n) 
默认值 ： linear
#### 5、delay
参数意义：规定动画何时开始
是否必传：否
参数类型：字符串
参数可选值 : 任意数值 + s || 任意数值 + ms
默认值 ： 0s
#### 6、count
参数意义：规定动画被播放的次数
是否必传：否
参数类型：数值
参数可选值 : n || infinite
默认值 ： 1
#### 7、direction
参数意义：规定动画是否在下一周期逆向地播放
是否必传：否
参数类型：字符串
参数可选值 : normal || alternate
默认值 ： normal
#### 8、mode
参数意义：规定对象动画时间之外的状态。
是否必传：否
参数类型：字符串
参数可选值 : none || forwards || backwards || both
默认值 ： both
#### 9、callback
参数意义：规定动画结束时的回调函数
是否必传：否
参数类型：函数
参数可选值 : 函数 || null
默认值 ： null
#### 10、stringRule
参数意义：规定动画使用字符串规则
是否必传：如果没有传jsonRule则该参数为必传
参数类型：字符串
参数可选值 : 自定义
默认值 ： 空串
#### 11、jsonRule
参数意义：规定动画使用json对象规则
是否必传：如果没有传stringRule则该参数为必传
参数类型：json对象
参数可选值 : 自定义
默认值 ： null

### (二)pause()

#### 1、作用对象

通过以下方法选择出来的所有原生DOM对象

* getElementById() 
* getElementsByTagName() 
* getElementsByClassName() 
* getElementsByName() 
* querySelect() 
* querySelectAll()

#### 2、无参数

#### 3、使用举例

```
oDiv.pause();
```

### (三)start()

#### 1、作用对象

通过以下方法选择出来的所有原生DOM对象

* getElementById() 
* getElementsByTagName() 
* getElementsByClassName() 
* getElementsByName() 
* querySelect() 
* querySelectAll()

#### 2、无参数

#### 3、使用举例

```
oDiv.start();
```


## 五、Animate.css动画规则

### (一)Attention Seekers

#### bounce(弹跳)

##### 1、字符串规则

```
stringRule : `
	from, 20%, 53%, 80%, to {
		-webkit-transform: translate3d(0,0,0);
		transform: translate3d(0,0,0);
	}	
	40%, 43% {
		-webkit-transform: translate3d(0, -30px, 0);
		transform: translate3d(0, -30px, 0);
	}
	70% {
		-webkit-transform: translate3d(0, -15px, 0);
		transform: translate3d(0, -15px, 0);
	}
	90% {
		-webkit-transform: translate3d(0,-4px,0);
		transform: translate3d(0,-4px,0);
	}
`
```
##### 2、json规则
```
jsonRule : {
	"from, 20%, 53%, 80%, to" : {
		"-webkit-transform" : "translate3d(0,0,0)",
		"transform" : "translate3d(0,0,0)",
	},
	"40%, 43%" : {
		"-webkit-transform" : "translate3d(0, -30px, 0)",
		"transform" : "translate3d(0, -30px, 0)",
	},
	"70%" : {
		"-webkit-transform" : "translate3d(0, -15px, 0)",
		"transform" : "translate3d(0, -15px, 0)",
	},
	"90%" : {
		"-webkit-transform" : "translate3d(0,-4px,0)",
		"transform" : "translate3d(0,-4px,0)",
	}
}
```

#### flash(闪烁)

##### 1、字符串规则

```
stringRule : `
	from, 50%, to {
    	opacity: 1;
	}
	25%, 75% {
		opacity: 0;
	}
`
```
##### 2、json规则
```
jsonRule : {
	"from, 50%, to" : {
		"opacity" : 1,
	},
	"25%, 75%" : {
		"opacity" : 0,
	}
}
```

#### pluse(脉冲)

##### 1、字符串规则

```
stringRule : `
	from {
	    -webkit-transform: scale3d(1, 1, 1);
	    transform: scale3d(1, 1, 1);
	}
	50% {
	    -webkit-transform: scale3d(1.05, 1.05, 1.05);
	    transform: scale3d(1.05, 1.05, 1.05);
	}
	to {
	    -webkit-transform: scale3d(1, 1, 1);
		transform: scale3d(1, 1, 1);
	}
`
```
##### 2、json规则
```
jsonRule : {
	"from" : {
	    "-webkit-transform" : "scale3d(1, 1, 1)",
	    "transform" : "scale3d(1, 1, 1)",
	},
	"50%" : {
	    "-webkit-transform" : "scale3d(1.05, 1.05, 1.05)",
	    "transform" : "scale3d(1.05, 1.05, 1.05)"
	},
	"to" : {
	    "-webkit-transform" : "scale3d(1, 1, 1)",
		"transform" : "scale3d(1, 1, 1)"
	}
}
```

#### rubberBand(橡皮筋)

##### 1、字符串规则

```
stringRule : `
	from {
	    -webkit-transform: scale3d(1, 1, 1);
	    transform: scale3d(1, 1, 1);
	}
	30% {
	    -webkit-transform: scale3d(1.25, 0.75, 1);
	    transform: scale3d(1.25, 0.75, 1);
	}
	40% {
	    -webkit-transform: scale3d(0.75, 1.25, 1);
	    transform: scale3d(0.75, 1.25, 1);
	}
	50% {
	    -webkit-transform: scale3d(1.15, 0.85, 1);
	    transform: scale3d(1.15, 0.85, 1);
	}
	65% {
	    -webkit-transform: scale3d(.95, 1.05, 1);
	    transform: scale3d(.95, 1.05, 1);
	}
	75% {
	    -webkit-transform: scale3d(1.05, .95, 1);
	    transform: scale3d(1.05, .95, 1);
	}
	to {
	    -webkit-transform: scale3d(1, 1, 1);
		transform: scale3d(1, 1, 1);
    }
`
```
##### 2、json规则
```
jsonRule : {
	"from" : {
	    "-webkit-transform" : "scale3d(1, 1, 1)",
	    "transform" : "scale3d(1, 1, 1)"
	},
	"30%" : {
	    "-webkit-transform" : "scale3d(1.25, 0.75, 1)",
	    "transform" : "scale3d(1.25, 0.75, 1)"
	},
	"40%" : {
	    "-webkit-transform" : "scale3d(0.75, 1.25, 1)",
	    "transform" : "scale3d(0.75, 1.25, 1)"
	},
	"50%" : {
	    "-webkit-transform" : "scale3d(1.15, 0.85, 1)",
	    "transform" : "scale3d(1.15, 0.85, 1)"
	},
	"65%" : {
	    "-webkit-transform" : "scale3d(.95, 1.05, 1)",
	    "transform" : "scale3d(.95, 1.05, 1)"
	},
	"75%" : {
	    "-webkit-transform" : "scale3d(1.05, .95, 1)",
	    "transform" : "scale3d(1.05, .95, 1)"
	},
	"to" : {
	    "-webkit-transform" : "scale3d(1, 1, 1)",
		"transform" : "scale3d(1, 1, 1)"
    }
}
```

#### headShake(摇头)

##### 1、字符串规则

```
stringRule : `
	0% {
	    -webkit-transform: translateX(0);
	    transform: translateX(0);
	}
	6.5% {
	    -webkit-transform: translateX(-6px) rotateY(-9deg);
	    transform: translateX(-6px) rotateY(-9deg);
	}
	18.5% {
	    -webkit-transform: translateX(5px) rotateY(7deg);
	    transform: translateX(5px) rotateY(7deg);
	}
	31.5% {
	    -webkit-transform: translateX(-3px) rotateY(-5deg);
	    transform: translateX(-3px) rotateY(-5deg);
	}
	43.5% {
	    -webkit-transform: translateX(2px) rotateY(3deg);
	    transform: translateX(2px) rotateY(3deg);
	}
	50% {
	    -webkit-transform: translateX(0);
	    transform: translateX(0);
	}
`
```
##### 2、json规则
```
jsonRule : {
	"0%" : {
	    "-webkit-transform" : "translateX(0)",
	    "transform" : "translateX(0)"
	},
	"6.5%" : {
	    "-webkit-transform" : "translateX(-6px) rotateY(-9deg)",
	    "transform" : "translateX(-6px) rotateY(-9deg)"
	},
	"18.5%" : {
	    "-webkit-transform" : "translateX(5px) rotateY(7deg)",
	    "transform" : "translateX(5px) rotateY(7deg)"
	},
	"31.5%" : {
	    "-webkit-transform" : "translateX(-3px) rotateY(-5deg)",
	    "transform" : "translateX(-3px) rotateY(-5deg)"
	},
	"43.5%" : {
	    "-webkit-transform" : "translateX(2px) rotateY(3deg)",
	    "transform" : "translateX(2px) rotateY(3deg)"
	},
	"50%" : {
	    "-webkit-transform" : "translateX(0)",
	    "transform" : "translateX(0)"
	}
}
```

#### swing(摇摆)

##### 1、字符串规则
```
stringRule : `
	20% {
	    -webkit-transform: rotate3d(0, 0, 1, 15deg);
	    transform: rotate3d(0, 0, 1, 15deg);
	}
	40% {
	    -webkit-transform: rotate3d(0, 0, 1, -10deg);
	    transform: rotate3d(0, 0, 1, -10deg);
	}
	60% {
	    -webkit-transform: rotate3d(0, 0, 1, 5deg);
	    transform: rotate3d(0, 0, 1, 5deg);
	}
	80% {
	    -webkit-transform: rotate3d(0, 0, 1, -5deg);
	    transform: rotate3d(0, 0, 1, -5deg);
	}
	to {
	    -webkit-transform: rotate3d(0, 0, 1, 0deg);
	    transform: rotate3d(0, 0, 1, 0deg);
	}
`
```
##### 2、json规则
```
jsonRule : {
	"20%" : {
	    "-webkit-transform" : "rotate3d(0, 0, 1, 15deg)",
	    "transform" : "rotate3d(0, 0, 1, 15deg)"
	},
	"40%" : {
	    "-webkit-transform" : "rotate3d(0, 0, 1, -10deg)",
	    "transform" : "rotate3d(0, 0, 1, -10deg)"
	},
	"60%" : {
	    "-webkit-transform" : "rotate3d(0, 0, 1, 5deg)",
	    "transform" : "rotate3d(0, 0, 1, 5deg)"
	},
	"80%" : {
	    "-webkit-transform" : "rotate3d(0, 0, 1, -5deg)",
	    "transform" : "rotate3d(0, 0, 1, -5deg)"
	},
	"to" : {
	    "-webkit-transform" : "rotate3d(0, 0, 1, 0deg)",
	    "transform" : "rotate3d(0, 0, 1, 0deg)"
	}
}
```

#### 惊讶(tada)

##### 1、字符串规则
```
stringRule : `
	from {
	    -webkit-transform: scale3d(1, 1, 1);
	    transform: scale3d(1, 1, 1);
	}
	10%, 20% {
	    -webkit-transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);
	    transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);
	}
	30%, 50%, 70%, 90% {
	    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
	    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
	}
	40%, 60%, 80% {
	    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
	    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
	}
	to {
	    -webkit-transform: scale3d(1, 1, 1);
	    transform: scale3d(1, 1, 1);
	}
`
```
##### 2、json规则
```
jsonRule : {
	"from" : {
	    "-webkit-transform" : "scale3d(1, 1, 1)",
	    "transform" : "scale3d(1, 1, 1)"
	},
	"10%, 20%" : {
	    "-webkit-transform" : "scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg)",
	    "transform" : "scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg)"
	},
	"30%, 50%, 70%, 90%" : {
	    "-webkit-transform" : "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)",
	    "transform" : "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"
	},
	"40%, 60%, 80%" :{
	    "-webkit-transform" : "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)",
	    "transform" : "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"
	},
	"to" : {
	    "-webkit-transform" : "scale3d(1, 1, 1)",
	    "transform" : "scale3d(1, 1, 1)"
	}
}
```

#### wobble(颤动)
##### 1、字符串规则
```
stringRule : `
	from {
	    -webkit-transform: none;
	    transform: none;
	}
	15% {
	    -webkit-transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
	    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
	}
	30% {
	    -webkit-transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
	    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
	}
	45% {
	    -webkit-transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
	    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
	}
	60% {
	    -webkit-transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
	    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
	}
	75% {
	    -webkit-transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
	    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
	}
	to {
	    -webkit-transform: none;
	    transform: none;
	}
`
```

##### 2、json规则
```
jsonRule : {
	"from" : {
	    "-webkit-transform" : "none",
	    "transform" : "none"
	},
	"15%" : {
	    "-webkit-transform" : "translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)",
	    "transform" : "translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)"
	},
	"30%" : {
	    "-webkit-transform" : "translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)",
	    "transform" : "translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)",
	},
	"45%" : {
	    "-webkit-transform" : "translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)",
	    "transform" : "translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)"
	},
	"60%" : {
	    "-webkit-transform" : "translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)",
	    "transform" : "translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)"
	},
	"75%" :  {
	    "-webkit-transform" : "translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)",
	    "transform" : "translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)"
	},
	"to" : {
	    "-webkit-transform" : "none",
	    "transform" : "none"
	}
}
```

#### jello(果动)

##### 1、字符串规则
```
stringRule : `
	from, 11.1%, to {
	    -webkit-transform: none;
	    transform: none;
	}
	22.2% {
	    -webkit-transform: skewX(-12.5deg) skewY(-12.5deg);
	    transform: skewX(-12.5deg) skewY(-12.5deg);
	}
	33.3% {
	    -webkit-transform: skewX(6.25deg) skewY(6.25deg);
	    transform: skewX(6.25deg) skewY(6.25deg);
	}
	44.4% {
	    -webkit-transform: skewX(-3.125deg) skewY(-3.125deg);
	    transform: skewX(-3.125deg) skewY(-3.125deg);
	}
	55.5% {
	    -webkit-transform: skewX(1.5625deg) skewY(1.5625deg);
	    transform: skewX(1.5625deg) skewY(1.5625deg);
	}
	66.6% {
	    -webkit-transform: skewX(-0.78125deg) skewY(-0.78125deg);
	    transform: skewX(-0.78125deg) skewY(-0.78125deg);
	}
	77.7% {
	    -webkit-transform: skewX(0.390625deg) skewY(0.390625deg);
	    transform: skewX(0.390625deg) skewY(0.390625deg);
	}
	88.8% {
	    -webkit-transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
	    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
	}
`
```
##### 2、json规则

```
jsonRule : {
	"from, 11.1%, to" : {
	    "-webkit-transform" : "none",
	    "transform" : "none"
	},
	"22.2%" : {
	    "-webkit-transform" : "skewX(-12.5deg) skewY(-12.5deg)",
	    "transform" : "skewX(-12.5deg) skewY(-12.5deg)"
	},
	"33.3%" : {
	    "-webkit-transform" : "skewX(6.25deg) skewY(6.25deg)",
	    "transform" : "skewX(6.25deg) skewY(6.25deg)"
	},
	"44.4%" : {
	    "-webkit-transform" : "skewX(-3.125deg) skewY(-3.125deg)",
	    "transform" : "skewX(-3.125deg) skewY(-3.125deg)"
	},
	"55.5%" : {
	    "-webkit-transform" : "skewX(1.5625deg) skewY(1.5625deg)",
	    "transform" : "skewX(1.5625deg) skewY(1.5625deg)"
	},
	"66.6%" : {
	    "-webkit-transform" : "skewX(-0.78125deg) skewY(-0.78125deg)",
	    "transform" : "skewX(-0.78125deg) skewY(-0.78125deg)"
	},
	"77.7%" : {
	    "-webkit-transform" : "skewX(0.390625deg) skewY(0.390625deg)",
	    "transform" : "skewX(0.390625deg) skewY(0.390625deg)"
	},
	"88.8%" : {
	    "-webkit-transform" : "skewX(-0.1953125deg) skewY(-0.1953125deg)",
	    "transform" : "skewX(-0.1953125deg) skewY(-0.1953125deg)"
	}
}
```
### (二)Bouncing Entrances

#### bounceIn(弹跳进入)

##### 1、字符串规则

```
stringRule : `
	0% {
	    opacity: 0;
	    -webkit-transform: scale3d(.3, .3, .3);
	    transform: scale3d(.3, .3, .3);
	}
	20% {
	    -webkit-transform: scale3d(1.1, 1.1, 1.1);
	    transform: scale3d(1.1, 1.1, 1.1);
	}
	40% {
	    -webkit-transform: scale3d(.9, .9, .9);
	    transform: scale3d(.9, .9, .9);
	}
	60% {
	    opacity: 1;
	    -webkit-transform: scale3d(1.03, 1.03, 1.03);
	    transform: scale3d(1.03, 1.03, 1.03);
	}
	80% {
	    -webkit-transform: scale3d(.97, .97, .97);
	    transform: scale3d(.97, .97, .97);
	}
	to {
	    opacity: 1;
	    -webkit-transform: scale3d(1, 1, 1);
	    transform: scale3d(1, 1, 1);
	}
`
```

##### 2、json规则

```
jsonRule : {
	"0%" : {
	    "opacity" : 0,
	    "-webkit-transform" : "scale3d(.3, .3, .3)",
	    "transform" : "scale3d(.3, .3, .3)"
	},
	"20%" :  {
	    "-webkit-transform" : "scale3d(1.1, 1.1, 1.1)",
	    "transform" : "scale3d(1.1, 1.1, 1.1)"
	},
	"40%" : {
	    "-webkit-transform" : "scale3d(.9, .9, .9)",
	    "transform" : "scale3d(.9, .9, .9)"
	},
	"60%" : {
	    "opacity" : 1,
	    "-webkit-transform" : "scale3d(1.03, 1.03, 1.03)",
	    "transform" : "scale3d(1.03, 1.03, 1.03)"
	},
	"80%" : {
	    "-webkit-transform" : "scale3d(.97, .97, .97)",
	    "transform" : "scale3d(.97, .97, .97)"
	},
	"to" : {
	    "opacity" : 1,
	    "-webkit-transform" : "scale3d(1, 1, 1)",
	    "transform" : "scale3d(1, 1, 1)"
	}
}
```


#### bounceInUp(向上弹跳进入)

##### 1、字符串规则

```
stringRule : `
	from {
	    opacity: 0;
	    -webkit-transform: translate3d(0, 3000px, 0);
	    transform: translate3d(0, 3000px, 0);
	}
	60% {
	    opacity: 1;
	    -webkit-transform: translate3d(0, -20px, 0);
	    transform: translate3d(0, -20px, 0);
	}
	75% {
	    -webkit-transform: translate3d(0, 10px, 0);
	    transform: translate3d(0, 10px, 0);
	}
	90% {
	    -webkit-transform: translate3d(0, -5px, 0);
	    transform: translate3d(0, -5px, 0);
	}
	to {
	    -webkit-transform: translate3d(0, 0, 0);
	    transform: translate3d(0, 0, 0);
	}
`
```

##### 2、json规则

```
jsonRule : {
	"from" : {
	    "opacity" : 0,
	    "-webkit-transform" : "translate3d(0, 3000px, 0)",
	    "transform" : "translate3d(0, 3000px, 0)"
	},
	"60%" : {
	    "opacity" : 1,
	    "-webkit-transform" : "translate3d(0, -20px, 0)",
	    "transform" : "translate3d(0, -20px, 0)"
	},
	"75%" : {
	    "-webkit-transform" : "translate3d(0, 10px, 0)",
	    "transform" : "translate3d(0, 10px, 0)"
	},
	"90%" : {
	    "-webkit-transform" : "translate3d(0, -5px, 0)",
	    "transform" : "translate3d(0, -5px, 0)"
	},
	"to" : {
	    "-webkit-transform" : "translate3d(0, 0, 0)",
	    "transform" : "translate3d(0, 0, 0)"
	}
}
```

#### bounceInLeft(从左侧弹跳进入)

##### 1、字符串规则

```
stringRule : `
	0% {
	    opacity: 0;
	    -webkit-transform: translate3d(-3000px, 0, 0);
	    transform: translate3d(-3000px, 0, 0);
	}
	60% {
	    opacity: 1;
	    -webkit-transform: translate3d(25px, 0, 0);
	    transform: translate3d(25px, 0, 0);
	}
	75% {
	    -webkit-transform: translate3d(-10px, 0, 0);
	    transform: translate3d(-10px, 0, 0);
	}
	90% {
	    -webkit-transform: translate3d(5px, 0, 0);
	    transform: translate3d(5px, 0, 0);
	}
	to {
	    -webkit-transform: none;
	    transform: none;
	}
`
```

##### 2、json规则

```
jsonRule : {
	"0%" : {
	    "opacity" : 0,
	    "-webkit-transform" : "translate3d(-3000px, 0, 0)",
	    "transform" : "translate3d(-3000px, 0, 0)"
	},
	"60%" : {
	    "opacity" : 1,
	    "-webkit-transform" : "translate3d(25px, 0, 0)",
	    "transform" : "translate3d(25px, 0, 0)"
	},
	"75%" : {
	    "-webkit-transform" : "translate3d(-10px, 0, 0)",
	    "transform" : "translate3d(-10px, 0, 0)"
	},
	"90%" : {
	    "-webkit-transform" : "translate3d(5px, 0, 0)",
	    "transform" : "translate3d(5px, 0, 0)"
	},
	"to" : {
	    "-webkit-transform" : "none",
	    "transform" : "none"
	}
}
```

#### bounceInRight(从右侧弹跳进入)

##### 1、字符串规则

```
stringRule : `
	from {
	    opacity: 0;
	    -webkit-transform: translate3d(3000px, 0, 0);
	    transform: translate3d(3000px, 0, 0);
	}
	60% {
	    opacity: 1;
	    -webkit-transform: translate3d(-25px, 0, 0);
	    transform: translate3d(-25px, 0, 0);
	}
	75% {
	    -webkit-transform: translate3d(10px, 0, 0);
	    transform: translate3d(10px, 0, 0);
	}
	90% {
	    -webkit-transform: translate3d(-5px, 0, 0);
	    transform: translate3d(-5px, 0, 0);
	}
	to {
	    -webkit-transform: none;
	    transform: none;
	}
`
```

##### 2、json规则

```
jsonRule : {
    "from" : {
	    "opacity" : 0,
	    "-webkit-transform" : "translate3d(3000px, 0, 0)",
	    "transform" : "translate3d(3000px, 0, 0)"
	},
	"60%" : {
	    "opacity" : 1,
	    "-webkit-transform" : "translate3d(-25px, 0, 0)",
	    "transform" : "translate3d(-25px, 0, 0)"
	},
	"75%" : {
	    "-webkit-transform" : "translate3d(10px, 0, 0)",
	    "transform" : "translate3d(10px, 0, 0)"
	},
	"90%" : {
	    "-webkit-transform" : "translate3d(-5px, 0, 0)",
	    "transform" : "translate3d(-5px, 0, 0)",
	},
	"to" : {
	    "-webkit-transform" : "none",
	    "transform" : "none"
	}
}
```

#### bounceInDown(向下方弹跳进入)

##### 1、字符串规则

```
stringRule : `
	0% {
	    opacity: 0;
	    -webkit-transform: translate3d(0, -3000px, 0);
	    transform: translate3d(0, -3000px, 0);
	}
	60% {
	    opacity: 1;
	    -webkit-transform: translate3d(0, 25px, 0);
	    transform: translate3d(0, 25px, 0);
	}
	75% {
	    -webkit-transform: translate3d(0, -10px, 0);
	    transform: translate3d(0, -10px, 0);
	}
	90% {
	    -webkit-transform: translate3d(0, 5px, 0);
	    transform: translate3d(0, 5px, 0);
	}
	to {
	    -webkit-transform: none;
	    transform: none;
	}
`
```

##### 2、json规则

```
jsonRule : {
    "0%" : {
	    "opacity" : 0,
	    "-webkit-transform" : "translate3d(0, -3000px, 0)",
	    "transform" : "translate3d(0, -3000px, 0)"
	},
	"60%" : {
	    "opacity" : 1,
	    "-webkit-transform" : "translate3d(0, 25px, 0)",
	    "transform" : "translate3d(0, 25px, 0)",
	},
	"75%" : {
	    "-webkit-transform" : "translate3d(0, -10px, 0)",
	    "transform" : "translate3d(0, -10px, 0)"
	},
	"90%" : {
	    "-webkit-transform" : "translate3d(0, 5px, 0)",
	    "transform" : "translate3d(0, 5px, 0)"
	},
	"to" : {
	    "-webkit-transform" : "none",
	    "transform" : "non"
	}				
}
```
