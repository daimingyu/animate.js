/**
	 * [buildInRuleList 内建规则表]
	 * @type {Array}
	 */
var buildInRuleList = [
		'bounce',
		'flash',
		'pulse',
		'rubberBand',
		'shake',
		'swing',
		'tada',
		'wobble',
		'jello',
		'bounceIn',
		'bounceInUp',
		'bounceInLeft',
		'bounceInRight',
		'bounceInDown',
		'bounceOut',
		'bounceOutDown',
		'bounceOutLeft',
		'bounceOutRight',
		'bounceOutUp',
		'fadeIn',
		'fadeInDown',
		'fadeInLeft',
		'fadeInRight',
		'fadeInUp',
		'fadeOut',
		'fadeOutDown',
		'fadeOutLeft',
		'fadeOutRight',
		'fadeOutUp',
		'filp',
		'filpInX',
		'filpInY',
		'filpOutX',
		'filpOutY',
		'lightSpeedIn',
		'lightSpeedOut',
		'rotateIn',
		'rotateInDownLeft',
		'rotateInDownRight',
		'rotateInUpLeft',
		'rotateInUpRight',
		'rotateOut',
		'rotateOutDownLeft',
		'rotateOutDownRight',
		'rotateOutUpLeft',
		'rotateOutUpRight',
		'hinge',
		'rollIn',
		'rollOut',
		'zoomIn',
		'zoomInDown',
		'zoomInLeft',
		'zoomInRight'
		'zoomInUp',
		'zoomOut',
		'zoomOutDown',
		'zoomOutLeft',
		'zoomOutRight',
		'zoomOutUp',
		'slideInDown',
		'slideInLeft',
		'slideInRight',
		'slideInUp',
		'slideOutDown',
		'slideOutLeft',
		'slideOutRight',
		'slideOutUp'
	]

/**
	 * [bounce 弹跳]
	 * @return {[type]} [description]
	 */
	function bounce(){
		return `
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
	}
	/**
	 * [flash 闪烁]
	 * @return {[type]} [description]
	 */
	function flash(){
		return `
			from, 50%, to {
		    	opacity: 1;
			}
			25%, 75% {
				opacity: 0;
			}
		`
	}
	/**
	 * [pluse 脉冲]
	 * @return {[type]} [description]
	 */
	function pluse(){
		return 	`
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
	}
	/**
	 * [rubberBand 橡皮筋]
	 * @return {[type]} [description]
	 */
	function rubberBand(){
		return `
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
	}
	/**
	 * [headShake 摇头]
	 * @return {[type]} [description]
	 */
	function headShake(){
		return 	`
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
	}
	/**
	 * [swing 摇摆]
	 * @return {[type]} [description]
	 */
	function swing(){
		return `
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
	}
	/**
	 * [tada 惊讶]
	 * @return {[type]} [description]
	 */
	function tada(){
		return `
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
	}
	function wobble(){
		return `
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
	}
	/**
	 * [jello 果冻]
	 * @return {[type]} [description]
	 */
	function jello(){
		return `
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
	}
	/**
	 * [bounceIn 入场动画：弹跳进入]
	 * @return {[type]} [description]
	 */
	function bounceIn(){
		return `
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
	}
	/**
	 * [bounceInUp 入场动画 ： 从上方弹跳入场]
	 * @return {[type]} [description]
	 */
	function bounceInUp(){
		return `
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
	}
	function bounceInLeft(){
		return `
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
	}
	function bounceInRight(){
		return `
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
	}
	function bounceInDown(){
		return `
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
	}
	function bounceOut(){
		return `
			20% {
			    -webkit-transform: scale3d(.9, .9, .9);
			    transform: scale3d(.9, .9, .9);
			}
			50%, 55% {
			    opacity: 1;
			    -webkit-transform: scale3d(1.1, 1.1, 1.1);
			    transform: scale3d(1.1, 1.1, 1.1);
			}
			to {
			    opacity: 0;
			    -webkit-transform: scale3d(.3, .3, .3);
			    transform: scale3d(.3, .3, .3);
			}
		`
	}
	function bounceOutDown(){
		return `
			20% {
			    -webkit-transform: translate3d(0, 10px, 0);
			    transform: translate3d(0, 10px, 0);
			}
			40%, 45% {
			    opacity: 1;
			    -webkit-transform: translate3d(0, -20px, 0);
			    transform: translate3d(0, -20px, 0);
			}
			to {
			    opacity: 0;
			    -webkit-transform: translate3d(0, 2000px, 0);
			    transform: translate3d(0, 2000px, 0);
			}
		`
	}
	function bounceOutLeft(){
		return `
			20% {
			    opacity: 1;
			    -webkit-transform: translate3d(20px, 0, 0);
			    transform: translate3d(20px, 0, 0);
			}
			to {
			    opacity: 0;
			    -webkit-transform: translate3d(-2000px, 0, 0);
			    transform: translate3d(-2000px, 0, 0);
			}
		`
	}
	function bounceOutRight(){
		return `
			20% {
			    opacity: 1;
			    -webkit-transform: translate3d(-20px, 0, 0);
			    transform: translate3d(-20px, 0, 0);
			}
			to {
			    opacity: 0;
			    -webkit-transform: translate3d(2000px, 0, 0);
			    transform: translate3d(2000px, 0, 0);
			}
		`
	}
	function bounceOutUp(){
		return `
			20% {
			    -webkit-transform: translate3d(0, -10px, 0);
			    transform: translate3d(0, -10px, 0);
			}
			40%, 45% {
			    opacity: 1;
			    -webkit-transform: translate3d(0, 20px, 0);
			    transform: translate3d(0, 20px, 0);
			}
			to {
			    opacity: 0;
			    -webkit-transform: translate3d(0, -2000px, 0);
			    transform: translate3d(0, -2000px, 0);
			}
		`
	}
	/**
	 * [fadeIn 渐显]
	 * @return {[type]} [description]
	 */
	function fadeIn(){
		return `
			from {
				opacity:0;
			}
			to {
				opacity:1;
			}
		`
	}
	function fadeInDown(){
		return `
			from {
			    opacity: 0;
			    -webkit-transform: translate3d(0, -100%, 0);
			    transform: translate3d(0, -100%, 0);
			}
			to {
			    opacity: 1;
			    -webkit-transform: none;
			    transform: none;
			}
		`
	}
	function fadeInLeft(){
		return  `
			from {
			    opacity: 0;
			    -webkit-transform: translate3d(-100%, 0, 0);
			    transform: translate3d(-100%, 0, 0);
			}
			to {
			    opacity: 1;
			    -webkit-transform: none;
			    transform: none;
			}
		`
	}
	function fadeInRight(){
		return `
			from {
			    opacity: 0;
			    -webkit-transform: translate3d(100%, 0, 0);
			    transform: translate3d(100%, 0, 0);
			}
			to {
			    opacity: 1;
			    -webkit-transform: none;
			    transform: none;
			}
		`
	}
	function fadeInUp(){
		return `
			from {
			    opacity: 0;
			    -webkit-transform: translate3d(0, 100%, 0);
			    transform: translate3d(0, 100%, 0);
			}
			to {
			    opacity: 1;
			    -webkit-transform: none;
			    transform: none;
			}
		`
	}
	function fadeOutDown(){
		return `
			from {
			    opacity: 1;
			}
			to {
			    opacity: 0;
			    -webkit-transform: translate3d(0, 100%, 0);
			    transform: translate3d(0, 100%, 0);
			}
		`
	}
	function fadeOutLeft(){
		return `
			from {
			    opacity: 1;
			}
			to {
			    opacity: 0;
			    -webkit-transform: translate3d(-100%, 0, 0);
			    transform: translate3d(-100%, 0, 0);
			}
		`
	}
	function fadeOutRight(){
		return `
			from {
			    opacity: 1;
			}

			to {
			    opacity: 0;
			    -webkit-transform: translate3d(100%, 0, 0);
			    transform: translate3d(100%, 0, 0);
			}
		`
	}
	function fadeOutUp(){
		return `
			from {
			    opacity: 1;
		 	}
			to {
			    opacity: 0;
			    -webkit-transform: translate3d(0, -100%, 0);
			    transform: translate3d(0, -100%, 0);
			}
		`
	}
	/**
	 * [fadeOut 渐隐]
	 * @return {[type]} [description]
	 */
	function fadeOut(){
		return `
			from {
				opacity:1;
			}
			to {
				opacity:0;
			}
		`
	}
	function filp(){
		return `
			from {
			    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -360deg);
			    transform: perspective(400px) rotate3d(0, 1, 0, -360deg);
			}
			40% {
			    -webkit-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);
			    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);
			}
			50% {
			    -webkit-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);
			    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);
			}
			80% {
			    -webkit-transform: perspective(400px) scale3d(.95, .95, .95);
			    transform: perspective(400px) scale3d(.95, .95, .95);
			}
			to {
			    -webkit-transform: perspective(400px);
			    transform: perspective(400px);
			}
		`
	}
	function filpInX(){
		return `
			from {
		    	-webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
		    	transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
		    	opacity: 0;
		  	}
		  	40% {
		    	-webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
			    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
		  	}
		  	60% {
		    	-webkit-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
		    	transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
		    	opacity: 1;
		  	}
		  	80% {
		    	-webkit-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
		    	transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
		  	}
		  	to {
		    	-webkit-transform: perspective(400px);
		    	transform: perspective(400px);
			}
		`
	}
	function filpInY(){
		return `
			from {
			    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
			    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
			    -webkit-animation-timing-function: ease-in;
			    animation-timing-function: ease-in;
			    opacity: 0;
			}
			40% {
			    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
			    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
			    -webkit-animation-timing-function: ease-in;
			    animation-timing-function: ease-in;
			}
			60% {
			    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
			    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
			    opacity: 1;
			}
			80% {
			    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
			    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
			}
			to {
			    -webkit-transform: perspective(400px);
			    transform: perspective(400px);
			}
		`
	}
	function filpOutX(){
		return `
			from {
			    -webkit-transform: perspective(400px);
			    transform: perspective(400px);
			}
			  30% {
			    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
			    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
			    opacity: 1;
			}
			to {
			    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
			    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
			    opacity: 0;
			}
		`
	}
	function filpOutY(){
		return `
			from {
			    -webkit-transform: perspective(400px);
			    transform: perspective(400px);
			}
			30% {
			    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
			    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
			    opacity: 1;
			}
			to {
			    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
			    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
			    opacity: 0;
			}
		`
	}
	function lightSpeedIn(){
		return `
			from {
			    -webkit-transform: translate3d(100%, 0, 0) skewX(-30deg);
			    transform: translate3d(100%, 0, 0) skewX(-30deg);
			    opacity: 0;
			}
			60% {
			    -webkit-transform: skewX(20deg);
			    transform: skewX(20deg);
			    opacity: 1;
			}
			80% {
			    -webkit-transform: skewX(-5deg);
			    transform: skewX(-5deg);
			    opacity: 1;
			}
			to {
			    -webkit-transform: none;
			    transform: none;
			    opacity: 1;
			}
		`
	}
	function lightSpeedOut(){
		return	`
			from {
			    opacity: 1;
			}
			to {
			    -webkit-transform: translate3d(100%, 0, 0) skewX(30deg);
			    transform: translate3d(100%, 0, 0) skewX(30deg);
			    opacity: 0;
			}
		`
	}





	function parseBuildIn(type){
		switch(type){
			case "bounce" :
					return bounce();
					break;
			case "flash" :
					return flash();
					break;
			case "pluse" :
					return pluse();
					break;
			case "rubberBand" :
					return rubberBand();
					break;
			case "headShake" :
					return headShake();
					break;
			case "swing" :
					return swing();
					break;
			case "tada" :
					return tada();
					break;
			case "wobble" :
					return wobble();
					break;
			case "jello" :
					return jello();
					break;
			case "bounceIn" :
					return bounceIn();
					break;
			case "bounceInUp" :
					return bounceInUp();
					break;
			case "bounceInLeft" :
					return bounceInLeft();
					break;
			case "bounceInRight" :
					return bounceInRight();
					break;
			case "bounceInDown" :
					return bounceInDown();
					break;
			case "bounceOut" :
					return bounceOut();
					break;
			case "bounceOutDown" :
					return bounceOutDown();
					break;
			case "bounceOutLeft":
					return bounceOutLeft();
					break;
			case "bounceOutRight":
					return bounceOutRight();
					break;
			case "bounceOutUp":
					return bounceOutUp();
					break;
			case "fadeIn":
					return fadeIn();
					break;
			case "fadeInDown":
					return fadeInDown();
					break;
			case "fadeInLeft":
					return fadeInLeft();
					break;
			case "fadeInRight":
					return fadeInRight();
					break;
			case "fadeInUp":
					return fadeInUp();
					break;
			case "fadeOut":
					return fadeOut();
					break;
			case "fadeOutDown":
					return fadeOutDown();
					break;
			case "fadeOutLeft":
					return fadeOutLeft();
					break;
			case "fadeOutRight":
					return fadeOutRight();
					break;
			case "fadeOutUp":
					return fadeOutUp();
					break;
			case "filp":
					return filp();
					break;
			case "filpInX":
					return filpInX();
					break;
			case "filpInY":
					return filpInY();
					break;
			case "filpOutX":
					return filpOutX();
					break;
			case "filpOutY":
					return filpOutY();
					break;
			case "lightSpeedIn":
					return lightSpeedIn();
					break;
			case "lightSpeedOut":
					return lightSpeedOut();
					break;
			case "rotateIn":
					return rotateIn();
					break;
			case "rotateInDownLeft":
					return rotateInDownLeft();
					break;
			case "rotateInDownRight":
					return rotateInDownRight();
					break;
			case "rotateInUpLeft":
					return rotateInUpLeft();
					break;
			case "rotateInUpRight":
					return rotateInUpRight();
					break;
			case "rotateOut":
					return rotateOut();
					break;
			case "rotateOutDownLeft":
					return rotateOutDownLeft();
					break;
			case "rotateOutDownRight":
					return rotateOutDownRight();
					break;
			case "rotateOutUpLeft":
					return rotateOutUpLeft();
					break;
			case "rotateOutUpRight":
					return rotateOutUpRight();
					break;
			case "rotateOutUpRight":
					return rotateOutUpRight();
					break;
			case "hinge":
					return hinge();
					break;
			case "rollIn":
					return rollIn();
					break;
			case "rollOut":
					return rollOut();
					break;
			case "zoomIn":
					return zoomIn();
					break;
			case "zoomInDown":
					return zoomInDown();
					break;
			case "zoomInLeft":
					return zoomInLeft();
					break;
			case "zoomInRight":
					return zoomInRight();
					break;
			case "zoomInUp":
					return zoomInUp();
					break;
			case "zoomOut":
					return zoomOut();
					break;
			case "zoomOutDown":
					return zoomOutDown();
					break;
			case "zoomOutLeft":
					return zoomOutLeft();
					break;
			case "zoomOutRight":
					return zoomOutRight();
					break;
			case "zoomOutUp":
					return zoomOutUp();
					break;
			case "slideInDown":
					return slideInDown();
					break;
			case "slideInLeft":
					return slideInLeft();
					break;
			case "slideInRight":
					return slideInRight();
					break;
			case "slideInUp":
					return slideInUp();
					break;
			case "slideOutDown":
					return slideOutDown();
					break;
			case "slideOutLeft":
					return slideOutLeft();
					break;
			case "slideOutRight":
					return slideOutRight();
					break;
			case "slideOutUp":
					return slideOutUp();
					break;
		}
	}