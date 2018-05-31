/*
 * Animate.js v1.0.0
 * JavaScript Animation Engine
 * Copyright (c) 2018 Mingyu Dai
 * http://isiqi.me
 * Released under the MIT license
 */

(function(){
	
	/**
	 * [defaultSettings 默认设置]
	 * @type {Object}
	 */
	var defaultSettings = {
		durtation : '1s',
		easing : 'linear',
		delay : '0s',
		count : 1,
		direction : 'normal',
		mode : 'both',
		callback : null,
		stringRule : '',
		jsonRule : null
	}
	/**
	 * [insertAnimateStyle 插入style标签]
	 * @param  {[type]} context     [description]
	 * @param  {[type]} styleString [description]
	 * @return {[type]}             [description]
	 */
	function insertAnimateStyle(context,styleString){
		if(context.animateStyle === undefined){
			context.animateStyle = document.createElement('style');
		}else{
			//删除原来的style
			context.animateStyle.remove();
			//添加新的style
			context.animateStyle = document.createElement('style');
		}
		context.animateStyle.type = 'text/css'; 
        context.animateStyle.innerHTML = styleString; 
        document.getElementsByTagName('head')[0].appendChild(context.animateStyle);
	}
	/**
	 * [parseJson 将json对象转化为字符串形式的规则]
	 * @param  {[type]} json [description]
	 * @return {[type]}      [description]
	 */
	function parseJson(json){
		
		if(json === undefined || json === '' || json === {}) return false;

		var res = '';

		for(var k1 in json){
			res += k1.charAt(0) === '_'?k1.substr(1):k1 + '{';
			for(var k2 in json[k1]){
				res += k2 + ':' + json[k1][k2] + ';';
			};
			res += '}';
		};

		return res;
	}
	/**
	 * [confirmRule 对用户传入的规则进行处理并返回rule]
	 * @param  {[type]} stringRule  [description]
	 * @param  {[type]} jsonRule    [description]
	 * @return {[type]}             [description]
	 */
	function confirmRule(stringRule,jsonRule){

		var res = '';
		
		if(stringRule !== ''){
			//使用字符串形式的规则
			res = stringRule;
		}
		if(jsonRule !== null){
			//使用json对象形式的规则
			res = parseJson(jsonRule);
		}
		
		return res;

	}
	/**
	 * [confirmParams 确定用户传入的参数属性是否正确]
	 * @param  {[type]} params [description]
	 * @return {[type]}        [description]
	 */
	function confirmParams(params){
		for(var pKey in params){
			var flag = false;
			for(var dKey in defaultSettings){
				if(pKey === dKey){
					flag = true;
					break;
				}
			}
			if(!flag){
				throw new Error( "params don't have attribute " + pKey);
			}
		}
	}
	/**
	 * [randomClass 生成8位的随机类名]
	 * @return {[type]} [description]
	 */
	function randomClass(){
		var res = '';

		var arr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',0,1,2,3,4,5,6,7,8,9]
		res += arr[parseInt(25*Math.random())];
		for(var i=0;i<7;i++){
			res += arr[parseInt(35*Math.random())];
		}

		return res;
	}

	/**
	 * [_init 初始化函数]
	 * @param  {[type]} params [description]
	 * @return {[type]}        [description]
	 */
	function _init(params){
			
		if(typeof(params) !== "object"){
			throw new Error( params + ' is not a json object');
		}
		
		confirmParams(params);

		var name = randomClass();
		var durtation = Boolean(params.durtation) === false?defaultSettings.durtation:params.durtation;
		var easing = Boolean(params.easing) === false?defaultSettings.easing:params.easing;
		var delay = Boolean(params.delay) === false?defaultSettings.delay:params.delay;
		var count = Boolean(params.count) === false?defaultSettings.count:params.count;
		var direction = Boolean(params.direction) === false?defaultSettings.direction:params.direction;
		var mode = Boolean(params.mode) === false?defaultSettings.mode:params.mode;
		var callback = Boolean(params.callback) === false?defaultSettings.callback:params.callback;
		var stringRule = Boolean(params.stringRule) === false?defaultSettings.stringRule:params.stringRule;
		var jsonRule = Boolean(params.jsonRule) === false?defaultSettings.jsonRule:params.jsonRule;
		var rule = confirmRule(stringRule,jsonRule);
		

		if(stringRule === "" && jsonRule == null){
			throw new Error( "must have params stringRule or jsonRule");
		}


		animateString = `
			@-webkit-keyframes ${name} {
				${rule}
			}

			@keyframes ${name} {
			    ${rule}
			}

			.${name} {
				-webkit-animation-name: ${name};
				animation-name: ${name};
			  	-webkit-animation-duration: ${durtation};
			    animation-duration: ${durtation};
			    -webkit-animation-timing-function: ${easing};
			    animation-timing-function: ${easing};
				-webkit-animation-delay:${delay};
			  	animation-delay:${delay};
			  	-webkit-animation-iteration-count:${count};
			  	animation-iteration-count:${count};
			  	-webkit-animation-direction :${direction};
				animation-direction: ${direction};
			    -webkit-animation-fill-mode: ${mode};
			    animation-fill-mode: ${mode};
			}
		`;

		

		
		// 插入<style><style>
		insertAnimateStyle(this,animateString);



		//插入class
		this.setAttribute('class',name);
		

		//callback
		this.addEventListener('webkitAnimationEnd',function(){

			if(callback !== null){
				callback();
			}
	 	})

	}

	/**
	 * [_pause 动画暂停函数]
	 * @return {[type]} [description]
	 */
	function _pause(){	
		this.style.animationPlayState = 'paused';
	}

	/**
	 * [_start 动画开始函数]
	 * @return {[type]} [description]
	 */
	function _start(){	
		this.style.animationPlayState = 'running';
	}

	HTMLElement.prototype.animate = _init;

	HTMLElement.prototype.pause = _pause;
	
	HTMLElement.prototype.start = _start;

})();