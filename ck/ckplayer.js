/*
	软件名称：ckplayer
	软件版本：X1
	软件作者：niandeng
	软件网站：http://www.ckplayer.com
	--------------------------------------------------------------------------------------------------------------------
	开发说明：
	使用的主要程序语言：javascript(js)及actionscript3.0(as3.0)(as3.0主要用于flashplayer部分的开发，不在该页面呈现)
	功能：播放视频
	特点：兼容HTML5-VIDEO(优先)以及FlashPlayer
	--------------------------------------------------------------------------------------------------------------------
	使用开源代码部分：
	1：flashls-http://flashls.org/
	=====================================================================================================================
*/
function ckplayerConfig() {
	return {
		flashvars: {},//用来补充flashvars里的对象
		languagePath: '',//语言包文件地址
		stylePath: '',//风格包文件地址
		config: {
			fullInteractive: true,//是否开启交互功能
			delay: 30,//延迟加载视频，单位：毫秒
			timeFrequency: 100,//计算当前播放时间和加载量的时间频率，单位：毫秒
			autoLoad: true,//视频是否自动加载
			loadNext: 0,//多段视频预加载的段数，设置成0则全部加载
			definition: true,//是否使用清晰度组件
			subtitle:false,//是否使用多字幕切换组件
			playbackRate:true,//是否使用倍速播放组件
			smartRemove: true,//是否使用智能清理，使用该功能则在多段时当前播放段之前的段都会被清除出内存，减少对内存的使用
			bufferTime: 200,//缓存区的长度，单位：毫秒,不要小于10
			rtmpBufferTime:0,//rtmp视频缓存区长度，单位：毫秒
			click: true,//是否支持屏幕单击暂停
			doubleClick: true,//是否支持屏幕双击全屏
			doubleClickInterval: 200,//判断双击的标准，即二次单击间隔的时间差之内判断为是双击，单位：毫秒
			keyDown: {
				space: true,//是否启用空格键切换播放/暂停
				left: true,//是否启用左方向键快退
				right: true,//是否启用右方向键快进
				up: true,//是否支持上方向键增加音量
				down: true //是否支持下方向键减少音量
			},
			timeJump: 10,//快进快退时的秒数
			volumeJump: 0.1,//音量调整的数量，大于0小于1的小数
			timeScheduleAdjust: 1,//是否可调节调节栏,0不启用，1是启用，2是只能前进（向右拖动），3是只能后退，4是只能前进但能回到第一次拖动时的位置，5是看过的地方可以随意拖动
			previewDefaultLoad: true,//预览图片是否默认加载，优点是鼠标第一次经过进度条即可显示预览图片
			promptSpotTime: false,//提示点文字是否在前面加上对应时间
			buttonMode: {
				player: false,//鼠标在播放器上是否显示可点击形态
				controlBar: false,//鼠标在控制栏上是否显示可点击形态
				timeSchedule: true,//鼠标在时间进度条上是否显示可点击形态
				volumeSchedule: true //鼠标在音量调节栏上是否显示可点击形态
			},
			liveAndVod: { //直播+点播=回播功能
				open: false,//是否开启，开启该功能需要设置flashvars里live=true
				vodTime: 2,//可以回看的整点数
				start: 'start' //回看请求参数
			},
			usehardwareeecoder:false,//是否采用硬件加速，只针对flashplayer有效
			errorNum: 3,//错误重连次数
			playCorrect: false,//是否需要错误修正，这是针对rtmp的
			timeCorrect: true,//http视频播放时间错误纠正，有些因为视频格式的问题导致视频没有实际播放结束视频文件就返回了stop命令
			m3u8Definition: { //m3u8自动清晰度时按关键字来进行判断
				//tags:['200k','110k','400k','600k','1000k']
			},
			m3u8MaxBufferLength: 30,//m3u8每次缓冲时间，单位：秒数
			split: '|',//当视频地址采用字符形式并且需要使用逗号或其它符号来切割数组里定义
			timeStamp: '',//一个地址，用来请求当前时间戳，用于播放器内部时间效准
			mobileVolumeBarShow: false,//在移动端是否显示音量调节按钮
			addCallback: 'adPlay,adPause,playOrPause,videoPlay,videoPause,videoMute,videoEscMute,videoClear,changeVolume,fastBack,fastNext,videoSeek,newVideo,getMetaDate,videoRotation,videoBrightness,videoContrast,videoSaturation,videoHue,videoZoom,videoProportion,videoError,addListener,removeListener,addElement,getElement,deleteElement,elementShow,animate,animateResume,animatePause,deleteAnimate,changeConfig,getConfig,openUrl,fullScreen,quitFullScreen,switchFull,screenshot,custom,changeControlBarShow,getCurrentSrc,changeDefinition,changeSubtitles,changeSubtitlesSize'//需要支持的事件
		},
		menu: { //版权名称支持
			ckkey: '',
			name: '',
			link: '',
			version: '',
			domain: '',
			more: []
		},
		style: { //风格部分内容配置，这里主要配置loading和logo以及广告的部分内容
			loading: { //视频加载前显示在播放器中间的图片，如果不需要可以删除该属性
				file: '',
				align: 'center',
				vAlign: 'middle',
				offsetX: -100,
				offsetY: -40
			},
			logo: { //显示在右上角的logo图片，如果不需要可以删除该属性
				file: '',
				align: 'right',
				vAlign: 'top',
				offsetX: -100,
				offsetY: 10
			},
			advertisement: { //广告相关的配置
				time: 5,//广告默认播放时长以及多个广告时每个广告默认播放时间，单位：秒
				method: 'get',//广告监测地址默认请求方式，get/post
				videoForce: false,//视频广告是否强制播放结束
				videoVolume: 0.8,//视频音量
				skipButtonShow: true,//是否显示跳过广告按钮
				linkButtonShow: true,//是否显示广告链接按钮，如果选择显示，只有在提供了广告链接地址时才会显示
				muteButtonShow: true,//是否在视频广告时显示静音按钮
				closeButtonShow: true,//暂停时是否显示关闭广告按钮
				closeOtherButtonShow: true,//其它广告是否需要关闭广告按钮
				frontSkipButtonDelay: 1,//前置广告跳过广告按钮延时显示的时间，单位：秒
				insertSkipButtonDelay: 0,//插入广告跳过广告按钮延时显示的时间，单位：秒
				endSkipButtonDelay: 0,//后置广告跳过广告按钮延时显示的时间，单位：秒
				frontStretched: 2,//前置广告拉伸方式，0=原始大小，1=自动缩放，2=只有当广告的宽或高大于播放器宽高时才进行缩放，3=参考播放器宽高，4=宽度参考播放器宽、高度自动，5=高度参考播放器高、宽度自动
				insertStretched: 2,//插入广告拉伸方式，0=原始大小，1=自动缩放，2=只有当广告的宽或高大于播放器宽高时才进行缩放，3=参考播放器宽高，4=宽度参考播放器宽、高度自动，5=高度参考播放器高、宽度自动
				pauseStretched: 2,//暂停广告拉伸方式，0=原始大小，1=自动缩放，2=只有当广告的宽或高大于播放器宽高时才进行缩放，3=参考播放器宽高，4=宽度参考播放器宽、高度自动，5=高度参考播放器高、宽度自动
				endStretched: 2 //结束广告拉伸方式，0=原始大小，1=自动缩放，2=只有当广告的宽或高大于播放器宽高时才进行缩放，3=参考播放器宽高，4=宽度参考播放器宽、高度自动，5=高度参考播放器高、宽度自动
			},
			video: { //视频的默认比例，当视频元数据里没有宽和高属性时默认使用该宽高
				defaultWidth: 16,//宽度
				defaultHeight: 9 //高度
			}
		}
	};
}
! (function() {
	var javascriptPath = '';
	!function() {
		var scriptList = document.scripts,
		thisPath = scriptList[scriptList.length - 1].src;
		javascriptPath = thisPath.substring(0, thisPath.lastIndexOf('/') + 1);
	} ();
	var ckplayer = function(obj) {
		/*
			javascript部分开发所用的注释说明：
			1：初始化-程序调用时即运行的代码部分
			2：定义样式-定义容器（div,p,canvas等）的样式表，即css
			3：监听动作-监听元素节点（单击-click，鼠标进入-mouseover，鼠标离开-mouseout，鼠标移动-mousemove等）事件
			4：监听事件-监听视频的状态（播放，暂停，全屏，音量调节等）事件
			5：共用函数-这类函数在外部也可以使用
			6：全局变量-定义成全局使用的变量
			7：其它相关注释
			全局变量说明：
			在本软件中所使用到的全局变量（变量（类型）包括Boolean，String，Int，Object（包含元素对象和变量对象），Array，Function等）
			下面列出重要的全局变量：
				V:Object：视频对象
				VA:Array：视频列表（包括视频地址，类型，清晰度说明）
				ID:String：视频ID
				CB:Object：控制栏各元素的集合对象
				PD:Object：内部视频容器对象
			---------------------------------------------------------------------------------------------
			程序开始
			下面为需要初始化配置的全局变量
			初始化配置
			config：全局变量定义一些基本配置
		*/
		this.config = {
			videoDbClick: true,//是否支持双击全屏/退出全屏动作
			errorTime: 100,//延迟判断失败的时间，单位：毫秒
			videoDrawImage: false,//是否使用视频drawImage功能，注意，该功能在移动端表现不了
			adSkipClick: 'javaScript->adjump' //h5环境中点击跳过广告按钮触发的功能
		};
		//全局变量：播放器默认配置，在外部传递过来相应配置后，则进行相关替换
		this.varsConfig = {
			playerID: '',//播放器ID
			container: '',//视频容器的ID
			variable: 'ckplayer',//播放函数(变量)名称
			volume: 0.8,//默认音量，范围0-1
			poster: '',//封面图片地址
			autoplay: false,//是否自动播放
			loop: false,//是否需要循环播放
			live: false,//是否是直播
			duration: 0,//指定总时间
			forceduration:0,//强制使用该时间为总时间
			seek: 0,//默认需要跳转的秒数
			drag: '',//拖动时支持的前置参数
			front: '',//前一集按钮动作
			next: '',//下一集按钮动作
			loaded: '',//加载播放器后调用的函数
			flashplayer: false,//设置成true则强制使用flashplayer
			html5m3u8: false,//PC平台上是否使用h5播放器播放m3u8
			track: null,//字幕轨道
			cktrack: null,//ck字幕
			cktrackdelay:0,//字幕显示延迟时间
			preview: null,//预览图片对象
			prompt: null,//提示点功能
			video: null,//视频地址
			config: '',//调用配置函数名称
			type: '',//视频格式
			crossorigin: '',//设置html5视频的crossOrigin属性
			crossdomain: '',//安全策略文件地址
			unescape: false,//默认flashplayer里需要解码
			mobileCkControls: false,//移动端h5显示控制栏
			mobileAutoFull: true,//移动端是否默认全屏播放
			playbackrate: 1,//默认倍速
			h5container: '',//h5环境中使用自定义容器
			debug: false,//是否开启调试模式
			overspread:true,//是否让视频铺满播放器
			//以下为广告相关配置
			adfront: '',
			adfronttime: '',
			adfrontlink: '',
			adpause: '',
			adpausetime: '',
			adpauselink: '',
			adinsert: '',
			adinserttime: '',
			adinsertlink: '',
			inserttime: '',
			adend: '',
			adendtime: '',
			adendlink: '',
			advertisements: ''
		};
		this.vars = {};//全局变量：语言配置
		this.language = {
			volume: '音量：',
			play: '点击播放',
			pause: '点击暂停',
			full: '点击全屏',
			escFull: '退出全屏',
			mute: '点击静音',
			escMute: '取消静音',
			front: '上一集',
			next: '下一集',
			definition: '点击选择清晰度',
			playbackRate: '点击选择速度',
			subtitles: '点击选择字幕',
			error: '加载出错',
			adTime: '广告{$second}秒',
			skipAd: '跳过广告',
			skipAdTime: '{$second}秒后可跳过广告',
			adLink: '查看详情',
			noLoadShockwaveFlash:'您的浏览器不支持FlashPlayer插件或没有启用该插件',
			downLoadShockwaveFlash:'点击下载FlashPlayer插件'
		};
		//全局变量：右键菜单：[菜单标题,类型(link:链接，default:灰色，function：调用函数，javascript:调用js函数),执行内容(包含链接地址，函数名称),[line(间隔线)]]
		this.contextMenu = [['ckplayer', 'link', 'http://www.ckplayer.com', '_blank'], ['version:X1', 'default', 'line']];
		//全局变量：错误提示列表
		this.errorList = [['000', 'Object does not exist'], ['001', 'Variables type is not a object'], ['002', 'Video object does not exist'], ['003', 'Video object format error'], ['004', 'Video object format error'], ['005', 'Video object format error'], ['006', '[error] does not exist '], ['007', 'Ajax error'], ['008', 'Ajax error'], ['009', 'Ajax object format error'], ['010', 'Ajax.status:[error]']];
		//全局变量：HTML5变速播放的值数组/如果不需要可以设置成null
		this.playbackRateArr = [[0.5, '0.5倍'], [1, '正常'], [1.25, '1.25倍'], [1.5, '1.5倍'], [2, '2倍速'], [4, '4倍速']];
		//全局变量：保存倍速
		this.playbackRateTemp=1;
		//全局变量：HTML5默认变速播放的值
		this.playbackRateDefault = 1;
		//全局变量：HTML5当前显示的字幕编号
		this.subtitlesTemp=-1;
		//全局变量：定义logo
		this.logo = '';
		//全局变量：是否加载了播放器
		this.loaded = false;
		//全局变量：计时器，监听视频加载出错的状态
		this.timerError = null;
		//全局变量：是否出错
		this.error = false;
		//全局变量：出错地址的数组
		this.errorUrl = [];
		//全局变量：计时器，监听全屏与非全屏状态
		this.timerFull = null;
		//全局变量：是否全屏状态
		this.full = false;
		//全局变量：计时器，监听当前的月/日 时=分=秒
		this.timerTime = null;
		//全局变量：计时器，监听视频加载
		this.timerBuffer = null;
		//全局变量：设置进度按钮及进度条是否跟着时间变化，该属性主要用来在按下进度按钮时暂停进度按钮移动和进度条的长度变化
		this.isTimeButtonMove = true;
		//全局变量：进度栏是否有效，如果是直播，则不需要监听时间让进度按钮和进度条变化
		this.isTimeButtonDown = false;
		//全局变量：用来模拟双击功能的判断
		this.isClick = false;
		//全局变量：计时器，用来模拟双击功能的计时器
		this.timerClick = null;
		//全局变量：计时器，旋转loading
		this.timerLoading = null;
		//全局变量：计时器，监听鼠标在视频上移动显示控制栏
		this.timerCBar = null;
		//全局变量：播放视频时如果该变量的值大于0，则进行跳转后设置该值为0
		this.needSeek = 0;
		//全局变量：当前音量
		this.volume = 0;
		//全局变量：静音时保存临时音量
		this.volumeTemp = 0;
		//全局变量/变量类型：Number/功能：当前播放时间
		this.time = 0;
		//全局变量：定义首次调用
		this.isFirst = true;
		//全局变量：是否使用HTML5-VIDEO播放
		this.html5Video = true;
		//全局变量记录视频容器节点的x;y
		this.pdCoor = {
			x: 0,
			y: 0
		};
		//全局变量：判断当前使用的播放器类型，html5video或flashplayer
		this.playerType = '';
		//全局变量：加载进度条的长度
		this.loadTime = 0;
		//全局变量：body对象
		this.body = document.body || document.documentElement;
		//全局变量：播放器
		this.V = null;
		//全局变量：保存外部js监听事件数组
		this.listenerJsArr = [];
		//全局变量：保存控制栏显示元素的总宽度
		this.buttonLen = 0;
		//全局变量：保存控制栏显示元素的数组
		this.buttonArr = [];
		//全局变量：保存按钮元素的宽
		this.buttonWidth = {};
		//全局变量：保存播放器上新增元件的数组
		this.elementArr = [];
		//全局变量：保存播放器上弹幕的临时数组
		this.elementTempArr = [];
		//全局变量：字幕内容
		this.track = [];
		//全局变量：字幕索引
		this.trackIndex = 0;
		//全局变量：当前显示的字幕内容
		this.nowTrackShow = {
			sn: ''
		};
		//全局变量：保存字幕元件数组
		this.trackElement = [];
		//全局变量：将视频转换为图片
		this.timerVCanvas = null;
		//全局变量：animate，缓动对象数组
		this.animateArray = [];
		//全局变量：保存animate的元件
		this.animateElementArray = [];
		//全局变量：保存需要在暂停时停止缓动的数组
		this.animatePauseArray = [];
		//全局变量：预览图片加载状态/0=没有加载，1=正在加载，2=加载完成
		this.previewStart = 0;
		//全局变量：预览图片容器
		this.previewDiv = null;
		//全局变量：预览框
		this.previewTop = null;
		//全局变量：预览框的宽
		this.previewWidth = 120;
		//全局变量：预览图片容器缓动函数
		this.previewTween = null;
		//全局变量：是否是m3u8格式，是的话则可以加载hls.js
		this.isM3u8 = false;
		//全局变量：保存提示点数组
		this.promptArr = [];
		//全局变量：显示提示点文件的容器
		this.promptElement = null;
		//全局变量：配置文件函数
		this.ckplayerConfig = {};
		//全局变量：控制栏是否显示
		this.showFace = true;
		//全局变量：是否监听过h5的错误
		this.errorAdd = false;
		//全局变量：是否发送了错误
		this.errorSend = false;
		//全局变量：控制栏是否隐藏
		this.controlBarIsShow = true;
		//全局变量，保存当前缩放比例
		this.videoScale = 1;
		//全局变量：设置字体
		this.fontFamily = '"Microsoft YaHei"; YaHei; "\5FAE\8F6F\96C5\9ED1"; SimHei; "\9ED1\4F53";Arial';
		//全局变量：设置字幕的文字大小
		this.trackFontSize=16;
		//全局变量：记录第一次拖动进度按钮时的位置
		this.timeSliderLeftTemp = 0;
		//全局变量：判断是否记录了总时间
		this.durationSendJS = false;
		//全局变量：初始化广告分析是否结束设置
		this.adAnalysisEnd = false;
		//全局变量：广告变量
		this.advertisements = {};
		//全局变量：是否是第一次播放视频
		this.isFirstTimePlay = true;
		//全局变量：当前需要播放的广告类型
		this.adType = '';
		//全局变量：播放广告计数
		this.adI = 0;
		//全局变量：要播放的临时地址
		this.videoTemp = {
			src: '',
			source: '',
			currentSrc: '',
			loop: false
		};
		//全局变量：当前要播放的广告组总时间
		this.adTimeAllTotal = 0;
		//全局变量：肖前要播放的广告时间
		this.adTimeTotal = 0;
		//全局变量：用来做倒计时
		this.adCountDownObj = null;
		//全局变量：前置，中插，结尾广告是否已开始运行
		this.adPlayStart = false;
		//全局变量：目前是否在播放广告
		this.adPlayerPlay = false;
		//全局变量：当前广告是否暂停
		this.adIsPause = false;
		//全局变量：视频广告是否静音
		this.adVideoMute = false;
		//全局变量：是否需要记录当前播放的时间供广告播放结束后进行跳转
		this.adIsVideoTime = false;
		//全局变量：后置广告是否播放
		this.endAdPlay = false;
		//全局变量：暂停广告是否在显示
		this.adPauseShow = false;
		//全局变量：是否需要重置广告以实现重新播放时再播放一次
		this.adReset = false;
		//全局变量：记录鼠标在视频上点击时的坐标
		this.videoClickXy={x:0,y:0};
		//全局变量：是否在播放广告时播放过视频广告
		this.adVideoPlay = false;
		if (obj) {
			this.embed(obj);
		}
		//全局变量：临时存储已加载时间的变量
		this.loadTimeTemp=0;
		//全局变量，临时存储hls形式下首次加载时是否需要暂停或播放的判断
		this.hlsAutoPlay=true;
	};
	ckplayer.prototype = {
		/*
			主要函数部分开始
			主接口函数：
			调用播放器需初始化该函数
		*/
		embed: function(c) {
			//c:Object：是调用接口传递的属性对象
			if (window.location.href.substr(0, 7) == 'file://') {//如果是使用的file协议打网页则弹出提示
				alert('Please use the HTTP protocol to open the page');
				return;
			}
			if (c == undefined || !c) {
				this.eject(this.errorList[0]);
				return;
			}
			if (typeof(c) != 'object') {
				this.eject(this.errorList[1]);
			}
			this.vars = this.standardization(this.varsConfig, c);
			if (!this.vars['mobileCkControls'] && this.isMobile()) {
				this.vars['flashplayer'] = false;
				this.showFace = false;
			}
			var videoString = this.vars['video'];
			if (!videoString) {
				this.eject(this.errorList[2]);
				return;
			}
			if (typeof(videoString) == 'string') {
				if (videoString.substr(0, 3) == 'CK:' || videoString.substr(0, 3) == 'CE:' || videoString.substr(8, 3) == 'CK:' || videoString.substr(8, 3) == 'CE:') {
					this.vars['flashplayer'] = true;
				}
			}
			if (typeof(videoString) == 'object') {
				if (videoString.length > 1) {
					if (videoString[0][0].substr(0, 3) == 'CK:' || videoString[0][0].substr(0, 3) == 'CE:' || videoString[0][0].substr(8, 3) == 'CK:' || videoString[0][0].substr(8, 3) == 'CE:') {
						this.vars['flashplayer'] = true;
					}
				}
			}
			if (this.vars['config']) {
				this.ckplayerConfig = eval(this.vars['config'] + '()');
			} else {
				this.ckplayerConfig = ckplayerConfig();
			}
			if ((!this.supportVideo() && this.vars['flashplayer'] != '') || (this.vars['flashplayer'] && this.uploadFlash()) || !this.isMsie()) {
				this.html5Video = false;
				this.getVideo();
			} else if (videoString) {
				//判断视频数据类型
				this.analysedVideoUrl(videoString);
				return this;
			} else {
				this.eject(this.errorList[2]);
			}
		},
		/*
			内部函数
			根据外部传递过来的video开始分析视频地址
		*/
		analysedVideoUrl: function(video) {
			var i = 0,
			y = 0;
			var thisTemp = this;
			this.VA = [];//定义全局变量VA：视频列表（包括视频地址，类型，清晰度说明）
			if (this.typeString(video) == 'string') { //如果是字符形式的则判断后缀进行填充
				if (video.substr(0, 8) != 'website:') {
					this.VA = [[video, '', '', 0]];
					var fileExt = this.getFileExt(video);
					switch (fileExt) {
					case '.mp4':
						this.VA[0][1] = 'video/mp4';
						break;
					case '.ogg':
						this.VA[0][1] = 'video/ogg';
						break;
					case '.webm':
						this.VA[0][1] = 'video/webm';
						break;
					default:
						break;
					}
					this.getVideo();
				} else {
					if (this.html5Video) {
						var ajaxObj = {
							url: video.substr(8),
							success: function(data) {
								if (data) {
									thisTemp.analysedUrl(data);
								} else {
									thisTemp.eject(thisTemp.errorList[5]);
									this.VA = video;
									thisTemp.getVideo();
								}
							}
						};
						this.ajax(ajaxObj);
					} else {
						this.VA = video;
						this.getVideo();
					}

				}
			} 
			else if(this.typeString(video)=='array'){//如果视频地址是数组
				if (!this.isUndefined(typeof(video[0].length))) { //如果视频地址是二维数组
					this.VA = video;
				}
				this.getVideo();
			}
			else if(this.typeString(video)=='object'){
				/*
					如果video格式是对象形式，则分二种
					如果video对象里包含type，则直接播放
				*/
				if (!this.isUndefined(video['type'])) {
					this.VA.push([video['file'], video['type'], '', 0]);
					this.getVideo();
				} else {
					this.eject(this.errorList[5]);
				}
			}
			else {
				this.eject(this.errorList[4]);
			}
		},
		/*
			对请求到的视频地址进行重新分析
		*/
		analysedUrl: function(data) {
			this.vars = this.standardization(this.vars, data);
			if (!this.isUndefined(data['video'])) {
				this.vars['video'] = data['video'];
			}
			this.analysedVideoUrl(this.vars['video']);
		},
		/*
			内部函数
			检查浏览器支持的视频格式，如果是则将支持的视频格式重新分组给播放列表
		*/
		getHtml5Video: function() {
			var va = this.VA;
			var nva = [];
			var mobile = false;
			var video = document.createElement('video');
			var codecs = function(type) {
				var cod = '';
				switch (type) {
				case 'video/mp4':
					cod = 'avc1.4D401E, mp4a.40.2';
					break;
				case 'video/ogg':
					cod = 'theora, vorbis';
					break;
				case 'video/webm':
					cod = 'vp8.0, vorbis';
					break;
				default:
					break;
				}
				return cod;
			};
			var supportType = function(vidType, codType) {
				if (!video.canPlayType) {
					this.html5Video = false;
					return;
				}
				var isSupp = video.canPlayType(vidType + ';codecs="' + codType + '"');
				if (isSupp == '') {
					return false
				}
				return true;
			};
			if (this.vars['flashplayer'] || !this.isMsie()) {
				this.html5Video = false;
				return;
			}
			if (this.isMobile()) {
				mobile = true;
			}
			for (var i = 0; i < va.length; i++) {
				var v = va[i];
				if (v) {
					if (v[1] != '' && !mobile && supportType(v[1], codecs(v[1])) && v[0].substr(0, 4) != 'rtmp') {
						nva.push(v);
					}
					if ((this.getFileExt(v[0]) == '.m3u8' || this.vars['type'] == 'video/m3u8' || this.vars['type'] == 'm3u8' || v[1] == 'video/m3u8' || v[1] == 'm3u8') && this.vars['html5m3u8'] && !mobile) {
						this.isM3u8 = true;
						nva.push(v);
					}
				}
			}
			if (nva.length > 0) {
				this.VA = nva;
			} else {
				if (!mobile) {
					this.html5Video = false;
				}
			}
		},
		/*
			内部函数
			根据视频地址开始构建播放器
		*/
		getVideo: function() {
			var thisTemp = this;
			var v = this.vars;
			//如果存在广告字段则开始分析广告
			if (!this.adAnalysisEnd && (v['adfront'] != '' || v['adpause'] != '' || v['adinsert'] != '' || v['adend'] != '' || v['advertisements'] != '')) {
				this.adAnalysisEnd = true;
				this.adAnalysis();
				return;
			}
			//如果存在字幕则加载
			if (this.V) { //如果播放器已存在，则认为是从newVideo函数发送过来的请求
				this.changeVideo();
				return;
			}
			if (this.vars['cktrack']) {
				this.loadTrack();
			}
			if (this.supportVideo() && !this.vars['flashplayer']) {
				this.getHtml5Video(); //判断浏览器支持的视频格式
			}
			var src = '',
			source = '',
			poster = '',
			loop = '',
			autoplay = '',
			track = '';
			var video = v['video'];
			var i = 0;
			this.CD = this.getByElement(v['container']);
			volume = v['volume'];
			if (!this.CD) {
				this.eject(this.errorList[6], v['container']);
				return false;
			}
			//开始构建播放器容器
			this.V = undefined;
			var thisPd = null;
			if (v['h5container'] != '') {
				thisPd = this.getByElement(v['h5container']);
				if (this.isUndefined(thisPd)) {
					thisPd = null;
				}
			}
			var isVideoH5 = null; //isUndefined  thisPd
			if (v['playerID'] != '') {
				isVideoH5 = this.getByElement('#' + v['playerID']);
				if (this.isUndefined(isVideoH5)) {
					isVideoH5 = null;
				}
			}
			if (thisPd != null && isVideoH5 != null) {
				this.PD = thisPd; //PD:定义播放器容器对象全局变量
			} else {
				var playerID = 'ckplayer' + this.randomString();
				var playerDiv = document.createElement('div');
				playerDiv.className = playerID;
				this.CD.innerHTML = '';
				this.CD.appendChild(playerDiv);
				this.PD = this.getByElement(playerID); //PD:定义播放器容器对象全局变量
			}
			this.css(this.CD, {
				backgroundColor: '#000000',
				overflow: 'hidden',
				position: 'relative'
			});
			this.css(this.PD, {
				backgroundColor: '#000000',
				width: '100%',
				height: '100%',
				fontFamily: this.fontFamily
			});
			if (this.html5Video) { //如果支持HTML5-VIDEO则默认使用HTML5-VIDEO播放器
				//禁止播放器容器上鼠标选择文本
				this.PD.onselectstart = this.PD.ondrag = function() {
					return false;
				};
				//播放器容器构建完成并且设置好样式
				//构建播放器
				if (this.VA.length == 1) {
					this.videoTemp['src'] = decodeURIComponent(this.VA[0][0]);
					src = ' src="' + this.videoTemp['src'] + '"';

				} else {
					var videoArr = this.VA.slice(0);
					videoArr = this.arrSort(videoArr);
					for (i = 0; i < videoArr.length; i++) {
						var type = '';
						var va = videoArr[i];
						if (va[1]) {
							type = ' type="' + va[1] + '"';
							if (type == ' type="video/m3u8"' || type == ' type="m3u8"') {
								type = '';
							}
						}
						source += '<source src="' + decodeURIComponent(va[0]) + '"' + type + '>';
					}
					this.videoTemp['source'] = source;
				}
				//分析视频地址结束
				if (v['autoplay']) {
					autoplay = ' autoplay="autoplay"';
				}
				if (v['poster']) {
					poster = ' poster="' + v['poster'] + '"';
				}
				if (v['loop']) {
					loop = ' loop="loop"';
				}
				if (v['seek'] > 0) {
					this.needSeek = v['seek'];
				}
				if (v['track'] != null && v['cktrack'] == null) {
					var trackArr = v['track'];
					var trackDefault = '';
					var defaultHave = false;
					for (i = 0; i < trackArr.length; i++) {
						var trackObj = trackArr[i];
						if (trackObj['default'] && !defaultHave) {
							trackDefault = ' default';
							defaultHave = true;
						} else {
							trackDefault = '';
						}
						track += '<track kind="' + trackObj['kind'] + '" src="' + trackObj['src'] + '" srclang="' + trackObj['srclang'] + '" label="' + trackObj['label'] + '"' + trackDefault + '>';
					}
				}
				var autoLoad = this.ckplayerConfig['config']['autoLoad'];
				var preload = '';
				if (!autoLoad) {
					preload = ' preload="meta"';
				}
				var vid = this.randomString();
				var controls = '';
				if (!this.showFace) {
					controls = ' controls="controls"';
				}
				var mobileAutoFull = v['mobileAutoFull'];
				var mobileautofull = '';
				if (!mobileAutoFull) {
					mobileautofull = ' x-webkit-airplay="true" playsinline  webkit-playsinline="true"  x5-video-player-type="h5"';
				}
				if (isVideoH5 != null && thisPd != null) {
					this.V = isVideoH5;
					if (v['poster']) {
						this.V.poster = v['poster'];
					}
				} else {
					var html = '';
					if (!this.isM3u8) {
						html = '<video id="' + vid + '"' + src + ' width="100%" height="100%"' + autoplay + poster + loop + preload + controls + mobileautofull + track + '>' + source + '</video>';
					} else {
						html = '<video id="' + vid + '" width="100%" height="100%"' + poster + loop + preload + controls + mobileautofull + track + '></video>';
					}
					this.PD.innerHTML = html;
					this.V = this.getByElement('#' + vid); //V：定义播放器对象全局变量
				}
				if (this.vars['crossorigin']) {
					this.V.crossOrigin = this.vars['crossorigin'];
				}
				try {
					this.V.volume = volume; //定义音量
					if (this.playbackRateArr && this.vars['playbackrate'] > -1) {
						if (this.vars['playbackrate'] < this.playbackRateArr.length) {
							this.playbackRateDefault = this.vars['playbackrate'];
						}
						this.V.playbackRate = this.playbackRateArr[this.playbackRateDefault][0]; //定义倍速
					}
				} catch(error) {}
				this.css(this.V, {
					width: '100%',
					height: '100%'
				});
				if (this.isM3u8) {
					var loadJsHandler = function() {
						thisTemp.embedHls(thisTemp.VA[0][0], v['autoplay']);
					};
					this.loadJs(javascriptPath + 'hls/hls.min.js', loadJsHandler);
				}
				this.css(this.V, 'backgroundColor', '#000000');
				//创建一个画布容器
				if (this.config['videoDrawImage']) {
					var canvasID = 'vcanvas' + this.randomString();
					var canvasDiv = document.createElement('div');
					canvasDiv.className = canvasID;
					this.PD.appendChild(canvasDiv);
					this.MD = this.getByElement(canvasID); //定义画布存储容器
					this.css(this.MD, {
						backgroundColor: '#000000',
						width: '100%',
						height: '100%',
						position: 'absolute',
						display: 'none',
						cursor: 'pointer',
						left: '0px',
						top: '0px',
						zIndex: '10'
					});
					var cvid = 'ccanvas' + this.randomString();
					this.MD.innerHTML = this.newCanvas(cvid, this.PD.offsetWidth, this.PD.offsetHeight);
					this.MDC = this.getByElement(cvid + '-canvas');
					this.MDCX = this.MDC.getContext('2d');
				}
				this.playerType = 'html5video';
				//播放器构建完成并且设置好样式
				//建立播放器的监听函数，包含操作监听及事件监听
				this.addVEvent();
				//根据清晰度的值构建清晰度切换按钮
				if (this.showFace) {
					this.definition();
					if (!this.vars['live'] && this.playbackRateArr && this.vars['playbackrate'] > -1) {
						this.playbackRate();
					}
					if (v['autoplay']) {
						this.loadingStart(true);
					}
					this.subtitleSwitch();
				}
				this.playerLoad();
			} else { //如果不支持HTML5-VIDEO则调用flashplayer
				this.embedSWF();
			}
		},
		/*
			分析广告数据
		*/
		adAnalysis: function() {
			var thisTemp = this;
			var v = this.vars;
			var isAdvShow = [];
			var i = 0;
			if (v['advertisements'] != '' && v['advertisements'].substr(0, 8) == 'website:') {
				var ajaxObj = {
					url: v['advertisements'].substr(8),
					success: function(data) {
						if (data) {
							var newData = {};
							var val = null;
							//对广告进行分析
							try {
								if (!thisTemp.isUndefined(data['front']) || !thisTemp.isUndefined(data['pause']) || !thisTemp.isUndefined(data['end']) || !thisTemp.isUndefined(data['insert']) || !thisTemp.isUndefined(data['other'])) {
									val = thisTemp.arrayDel(data['front']);
									if (!thisTemp.isUndefined(val)) {
										newData['front'] = val;
									}
									val = thisTemp.arrayDel(data['pause']);
									if (!thisTemp.isUndefined(val)) {
										newData['pause'] = val;
									}
									val = thisTemp.arrayDel(data['insert']);
									if (!thisTemp.isUndefined(val)) {
										newData['insert'] = val;
										if (!thisTemp.isUndefined(data['inserttime'])) {
											newData['inserttime'] = thisTemp.arrayInt(data['inserttime']);
											isAdvShow = [];
											for (i = 0; i < newData['inserttime'].length; i++) {
												isAdvShow.push(false);
											}
											newData['insertPlay'] = isAdvShow;
										}
									}
									val = thisTemp.arrayDel(data['end']);
									if (!thisTemp.isUndefined(val)) {
										newData['end'] = val;
									}
									val = thisTemp.arrayDel(data['other']);
									if (!thisTemp.isUndefined(val)) {
										newData['other'] = val;
										isAdvShow = [];
										var arrTemp = [];
										for (i = 0; i < val.length; i++) {
											isAdvShow.push(false);
											arrTemp.push(parseInt('0' + val[i]['startTime']));
										}
										newData['othertime'] = arrTemp;
										newData['otherPlay'] = isAdvShow;
									}
								}
							} catch(event) {
								thisTemp.log(event)
							}
							thisTemp.advertisements = newData;
							//对广告进行分析结束
						}
						thisTemp.getVideo();
					}
				};
				this.ajax(ajaxObj);
			} else {
				//根据广告分析
				this.adAnalysisOne('front', 'adfront', 'adfronttime', 'adfrontlink', 'adfronttype');
				this.adAnalysisOne('pause', 'adpause', 'adpausetime', 'adpauselink', 'adpausetype');
				this.adAnalysisOne('insert', 'adinsert', 'adinserttime', 'adinsertlink', 'adinserttype');
				this.adAnalysisOne('end', 'adend', 'adendtime', 'adendlink', 'adendtype');
				if (!this.isUndefined(this.advertisements['insert'])) {
					if (!this.isUndefined(v['inserttime'])) {
						thisTemp.advertisements['inserttime'] = v['inserttime'];
					}
				}
				if (!this.isUndefined(thisTemp.advertisements['inserttime'])) {
					thisTemp.advertisements['inserttime'] = thisTemp.arrayInt(thisTemp.advertisements['inserttime']);
					isInsert = [];
					for (i = 0; i < thisTemp.advertisements['inserttime'].length; i++) {
						isInsert.push(false);
					}
					thisTemp.advertisements['insertPlay'] = isInsert;
				}
				thisTemp.getVideo();
			}
		},
		/*
			将广告数组数据里不是视频和图片的去除
		*/
		arrayDel: function(arr) {
			if(this.isUndefined(arr)){
				return arr;
			}
			if (arr.length == 0) {
				return null;
			}
			var newArr = [];
			for (var i = 0; i < arr.length; i++) {
				var type = arr[i]['type'];
				if (type == 'mp4' || type == 'mov' || this.isStrImage(type)) {
					newArr.push(arr[i]);
				}
			}
			if (newArr.length > 0) {
				return newArr;
			}
			return null;
		},
		/*分析单个类型的广告*/
		adAnalysisOne: function(adType, adName, adTime, adLink, adStype) {
			var v = this.vars;
			if (this.isUndefined(v[adName])) {
				v[adName] = '';
			}
			if (this.isUndefined(v[adTime])) {
				v[adTime] = '';
			}
			if (this.isUndefined(v[adLink])) {
				v[adLink] = '';
			}
			if (this.isUndefined(v[adStype])) {
				v[adStype] = '';
			}
			if (v[adName] != '') {
				var adList = [];
				var ad = v[adName].split(',');
				var adtime = v[adTime].split(',');
				var adlink = v[adLink].split(',');
				var adstype = v[adStype].split(',');
				var i = 0;
				if (ad.length > 0) {
					var adLinkLen = adlink.length,
					adTimeLen = adtime.length;
					if (v[adLink] == '') {
						adLinkLen = 0;
						adlink = [];
					}
					if (v[adTime] == '') {
						adTimeLen = 0;
						adtime = [];
					}
					if (adLinkLen < ad.length) {
						for (i = adLinkLen; i < ad.length; i++) {
							adlink.push('');
						}
					}
					if (adTimeLen < ad.length) {
						for (i = adTimeLen; i < ad.length; i++) {
							adtime.push('');
						}
					}
					var adstypeLen = adstype.length;
					if (v[adStype] == '') {
						adstypeLen = 0;
						adstype = [];
					}
					if (adstypeLen < ad.length) {
						for (i = adstypeLen; i < ad.length; i++) {
							adstype.push(this.getFileExt(ad[i]).replace('.', ''));
						}
					}
					for (i = 0; i < ad.length; i++) {
						var type = adstype[i];
						if (type == 'mp4' || type == 'mov' || this.isStrImage(type)) {
							var obj = {
								file: ad[i],
								type: type,
								time: parseInt(adtime[i]) > 0 ? parseInt(adtime[i]) : this.ckplayerConfig['style']['advertisement']['time'],
								link: adlink[i]
							};
							adList.push(obj);
						}

					}
					if (this.isUndefined(this.advertisements)) {
						this.advertisements = {};
					}
					if (adList.length > 0) {
						this.advertisements[adType] = adList;
					}
				}
			}
		},
		/*
			内部函数
			发送播放器加载成功的消息
		*/
		playerLoad: function() {
			var thisTemp = this;
			if (this.isFirst) {
				this.isFirst = false;
				setTimeout(function() {
					thisTemp.loadedHandler();
				},1);
			}
		},
		/*
			内部函数
			建立播放器的监听函数，包含操作监听及事件监听
		*/
		addVEvent: function() {
			var thisTemp = this;
			var duration=0;
			//监听视频单击事件
			var eventVideoClick = function(event) {
				thisTemp.videoClickXy={x:event.clientX,y:event.clientY};
				thisTemp.videoClick();
			};
			this.addListenerInside('click', eventVideoClick);
			this.addListenerInside('click', eventVideoClick, this.MDC);
			//延迟计算加载失败事件
			this.timerErrorFun();
			//监听视频加载到元数据事件
			var eventJudgeIsLive = function(event) {
				thisTemp.sendJS('loadedmetadata');
				if (typeof(thisTemp.V.duration) == 'number' && thisTemp.V.duration > 1) {
					duration = thisTemp.V.duration;
					if(!duration){
						if(thisTemp.vars['duration']>0){
							duration=thisTemp.vars['duration'];
						}
					}
					if(thisTemp.vars['forceduration']>0){
						duration=thisTemp.vars['forceduration'];
					}
					thisTemp.sendJS('duration', duration);
					thisTemp.formatInserttime(duration);
					if (thisTemp.adPlayerPlay) {
						thisTemp.advertisementsTime(duration + 1);
					}
					thisTemp.durationSendJS = true;
				}
				thisTemp.judgeIsLive();
			};
			this.addListenerInside('loadedmetadata', eventJudgeIsLive);
			//监听视频播放事件
			var eventPlaying = function(event) {
				thisTemp.playingHandler();
				thisTemp.sendJS('play');
				thisTemp.sendJS('paused', false);
				if (!thisTemp.durationSendJS && typeof(thisTemp.V.duration) == 'number' && thisTemp.V.duration > 0) {
					duration = thisTemp.V.duration;
					if(!duration){
						if(thisTemp.vars['duration']>0){
							duration=thisTemp.vars['duration'];
						}
					}
					if(thisTemp.vars['forceduration']>0){
						duration=thisTemp.vars['forceduration'];
					}
					thisTemp.durationSendJS = true;
					thisTemp.sendJS('duration', duration);
					thisTemp.formatInserttime(duration);
				}
			};
			this.addListenerInside('playing', eventPlaying);
			//监听视频暂停事件
			var eventPause = function(event) {
				thisTemp.pauseHandler();
				thisTemp.sendJS('pause');
				thisTemp.sendJS('paused', true);
			};
			this.addListenerInside('pause', eventPause);
			//监听视频播放结束事件
			var eventEnded = function(event) {
				thisTemp.endedHandler();
			};
			this.addListenerInside('ended', eventEnded);
			//监听视频播放时间事件
			var eventTimeupdate = function(event) {
				if (thisTemp.timerLoading != null) {
					thisTemp.loadingStart(false);
				}
				if (thisTemp.time) {
					if (!thisTemp.adPlayerPlay) {
						thisTemp.sendJS('time', thisTemp.time);
						//监听中间插入广告是否需要播放
						if (!thisTemp.isUndefined(thisTemp.advertisements['insert'])) {
							thisTemp.checkAdInsert(thisTemp.time);
						}
						//监听其它广告
						if (!thisTemp.isUndefined(thisTemp.advertisements['other'])) {
							thisTemp.checkAdOther(thisTemp.time);
						}
						if (thisTemp.time < 3 && thisTemp.adReset) {
							thisTemp.adReset = false;
							thisTemp.endedAdReset();
						}
					} else { //如果是广告则进行广告倒计时
						thisTemp.adPlayerTimeHandler(thisTemp.time);
					}

				}
			};
			this.addListenerInside('timeupdate', eventTimeupdate);
			//监听视频缓冲事件
			var eventWaiting = function(event) {
				thisTemp.loadingStart(true);
			};
			this.addListenerInside('waiting', eventWaiting);
			//监听视频seek开始事件
			var eventSeeking = function(event) {
				thisTemp.sendJS('seek', 'start');
			};
			this.addListenerInside('seeking', eventSeeking);
			//监听视频seek结束事件
			var eventSeeked = function(event) {
				thisTemp.seekedHandler();
				thisTemp.sendJS('seek', 'ended');
			};
			this.addListenerInside('seeked', eventSeeked);
			//监听视频音量
			var eventVolumeChange = function(event) {
				try {
					thisTemp.volumechangeHandler();
					thisTemp.sendJS('volume', thisTemp.volume || thisTemp.V.volume);
				} catch(event) {}
			};
			this.addListenerInside('volumechange', eventVolumeChange);
			//监听全屏事件
			var eventFullChange = function(event) {
				var fullState = document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen;
				thisTemp.sendJS('full', fullState);
			};
			this.addListenerInside('fullscreenchange', eventFullChange);
			this.addListenerInside('webkitfullscreenchange', eventFullChange);
			this.addListenerInside('mozfullscreenchange', eventFullChange);
			//建立界面
			if (this.showFace) {
				this.interFace();
			}
		},
		/*
			内部函数
			重置界面元素
		*/
		resetPlayer: function() {
			this.timeTextHandler();
			if (this.showFace) {
				this.timeProgress(0, 1); //改变时间进度条宽
				this.changeLoad(0);
				this.initPlayPause(); //判断显示播放或暂停按钮
				this.definition(); //构建清晰度按钮
				this.showFrontNext(); //构建上一集下一集按钮
				this.deletePrompt(); //删除提示点
				this.deletePreview(); //删除预览图
				this.trackHide(); //重置字幕
				this.resetTrack();
				this.trackElement = [];
				this.track = [];
			}
		},
		/*
			内部函数
			构建界面元素
		 */
		interFace: function() {
			this.showFace = true;
			var thisTemp = this;
			var html = ''; //控制栏内容
			var i = 0;
			var bWidth = 38,//按钮的宽
			bHeight = 38; //按钮的高
			var bBgColor = '#FFFFFF',//按钮元素默认颜色
			bOverColor = '#0782F5'; //按钮元素鼠标经过时的颜色
			var timeInto = this.formatTime(0) + ' / ' + this.formatTime(this.vars['duration']); //时间显示框默认显示内容
			var randomS = this.randomString(10); //获取一个随机字符串
			/*
				以下定义界面各元素的ID，统一以ID结束
			*/
			var controlBarBgID = 'controlbgbar' + randomS,//控制栏背景
			controlBarID = 'controlbar' + randomS,//控制栏容器
			timeProgressBgID = 'timeprogressbg' + randomS,//播放进度条背景
			loadProgressID = 'loadprogress' + randomS,//加载进度条
			timeProgressID = 'timeprogress' + randomS,//播放进度条
			timeBOBGID = 'timebobg' + randomS,//播放进度按钮容器，该元素为一个透明覆盖在播放进度条上
			timeBOID = 'timebo' + randomS,//播放进度可拖动按钮外框
			timeBWID = 'timebw' + randomS,//播放进度可拖动按钮内框
			timeTextID = 'timetext' + randomS,//时间文本框
			playID = 'play' + randomS,//播放按钮
			pauseID = 'pause' + randomS,//暂停按钮
			frontID = 'front' + randomS,//前一集按钮
			nextID = 'next' + randomS,//下一集按钮
			fullID = 'full' + randomS,//全屏按钮
			escFullID = 'escfull' + randomS,//退出全屏按钮
			muteID = 'mute' + randomS,//静音按钮
			escMuteID = 'escmute' + randomS,//取消静音按钮				
			volumeID = 'volume' + randomS,//音量调节框容器
			volumeDbgID = 'volumedbg' + randomS,//音量调节框容器背景
			volumeBgID = 'volumebg' + randomS,//音量调节框背景层
			volumeUpID = 'volumeup' + randomS,//音量调节框可变宽度层
			volumeBOID = 'volumebo' + randomS,//音量调节按钮外框
			volumeBWID = 'volumebw' + randomS,//音量调节按钮内框
			definitionID = 'definition' + randomS,//清晰度容器
			definitionPID = 'definitionp' + randomS,//清晰度列表容器
			playbackRateID = 'playbackrate' + randomS,//倍速容器
			playbackRatePID = 'playbackratep' + randomS,//倍速列表容器
			subtitlesID = 'subtitles' + randomS,//多字幕容器
			subtitlesPID = 'subtitlesp' + randomS,//多字幕列表容器
			promptBgID = 'promptbg' + randomS,//提示框背景
			promptID = 'prompt' + randomS,//提示框
			dlineID = 'dline' + randomS,//分隔线共用前缀
			menuID = 'menu' + randomS,//右键容器
			pauseCenterID = 'pausecenter' + randomS,//中间暂停按钮
			loadingID = 'loading' + randomS,//缓冲
			errorTextID = 'errortext' + randomS,//错误文本框
			logoID = 'logo' + randomS,//logo
			adBackgroundID = 'background' + randomS,//广告背景图片
			adElementID = 'adelement' + randomS,//广告容器
			adBarID = 'adBar' + randomS,//广告顶部倒计时，跳过广告，静音按钮容器
			adSkipID = 'adskip' + randomS,//跳过广告按钮
			adTimeID = 'adtime' + randomS,//倒计时按钮
			adLinkID = 'adlink' + randomS,//广告链接按钮
			adMuteID = 'admute' + randomS,//广告静音按钮
			adEscMuteID = 'adescmute' + randomS,//广告取消静音按钮
			adPauseCloseID = 'adpauseclose' + randomS; //暂停广场的关闭按钮
			/*
				构建一些PD（播放器容器）里使用的元素
			*/
			var controlBarBg = document.createElement('div'),
			controlBar = document.createElement('div'),
			timeProgressBg = document.createElement('div'),
			timeBoBg = document.createElement('div'),
			pauseCenter = document.createElement('div'),
			errorText = document.createElement('div'),
			promptBg = document.createElement('div'),
			prompt = document.createElement('div'),
			menuDiv = document.createElement('div'),
			definitionP = document.createElement('div'),
			playbackrateP = document.createElement('div'),
			subtitlesP = document.createElement('div'),
			loading = document.createElement('div'),
			logo = document.createElement('div'),
			adBackground = document.createElement('div'),
			adElement = document.createElement('div'),
			adBar = document.createElement('div'),
			adLink = document.createElement('div'),
			adPauseClose = document.createElement('div');
			/*
				定义各节点的样式 
			*/
			controlBarBg.className = controlBarBgID;
			controlBar.className = controlBarID;
			timeProgressBg.className = timeProgressBgID;
			timeBoBg.className = timeBOBGID;
			promptBg.className = promptBgID;
			prompt.className = promptID;
			menuDiv.className = menuID;
			definitionP.className = definitionPID;
			playbackrateP.className = playbackRatePID;
			subtitlesP.className = subtitlesPID;
			pauseCenter.className = pauseCenterID;
			loading.className = loadingID;
			logo.className = logoID;
			errorText.className = errorTextID;
			adBackground.className = adBackgroundID;
			adElement.className = adElementID;
			adBar.className = adBarID;
			adLink.className = adLinkID;
			adPauseClose.className = adPauseCloseID;
			/*
				加载节点到播放器容器中
			*/
			this.PD.appendChild(controlBarBg);
			this.PD.appendChild(controlBar);
			this.PD.appendChild(timeProgressBg);
			this.PD.appendChild(timeBoBg);
			this.PD.appendChild(promptBg);
			this.PD.appendChild(prompt);
			this.PD.appendChild(definitionP);
			this.PD.appendChild(playbackrateP);
			this.PD.appendChild(subtitlesP);
			this.PD.appendChild(pauseCenter);
			this.PD.appendChild(loading);
			this.PD.appendChild(errorText);
			this.PD.appendChild(logo);
			this.PD.appendChild(adBackground);
			this.PD.appendChild(adElement);
			this.PD.appendChild(adBar);
			this.PD.appendChild(adLink);
			this.PD.appendChild(adPauseClose);
			this.body.appendChild(menuDiv);
			if (this.vars['live']) { //如果是直播，时间显示文本框里显示当前系统时间
				timeInto = this.getNowDate();
			}
			/*
				构建控制栏的内容 
			*/
			html += '<div class="' + playID + '" data-title="' + thisTemp.language['play'] + '">' + this.newCanvas(playID, bWidth, bHeight) + '</div>'; //播放按钮
			html += '<div class="' + pauseID + '" data-title="' + thisTemp.language['pause'] + '">' + this.newCanvas(pauseID, bWidth, bHeight) + '</div>'; //暂停按钮
			html += '<div class="' + dlineID + '-la"></div>'; //分隔线
			html += '<div class="' + frontID + '" data-title="' + thisTemp.language['front'] + '">' + this.newCanvas(frontID, bWidth, bHeight) + '</div>'; //前一集按钮
			html += '<div class="' + dlineID + '-lb"></div>'; //分隔线
			html += '<div class="' + nextID + '" data-title="' + thisTemp.language['next'] + '">' + this.newCanvas(nextID, bWidth, bHeight) + '</div>'; //下一集按钮
			html += '<div class="' + dlineID + '-lc"></div>'; //分隔线
			html += '<div class="' + timeTextID + '">' + timeInto + '</div>'; //时间文本
			html += '<div class="' + fullID + '" data-title="' + thisTemp.language['full'] + '">' + this.newCanvas(fullID, bWidth, bHeight) + '</div>'; //全屏按钮
			html += '<div class="' + escFullID + '" data-title="' + thisTemp.language['escFull'] + '">' + this.newCanvas(escFullID, bWidth, bHeight) + '</div>'; //退出全屏按钮
			html += '<div class="' + dlineID + '-ra"></div>'; //分隔线
			html += '<div class="' + definitionID + '" data-title="' + thisTemp.language['definition'] + '"></div>'; //清晰度容器
			html += '<div class="' + dlineID + '-rb"></div>'; //分隔线
			html += '<div class="' + playbackRateID + '" data-title="' + thisTemp.language['playbackRate'] + '"></div>'; //倍速
			html += '<div class="' + dlineID + '-rc"></div>'; //分隔线
			html += '<div class="' + subtitlesID + '" data-title="' + thisTemp.language['subtitles'] + '"></div>'; //字幕
			html += '<div class="' + dlineID + '-rd"></div>'; //分隔线
			html += '<div class="' + volumeID + '"><div class="' + volumeDbgID + '"><div class="' + volumeBgID + '"><div class="' + volumeUpID + '"></div></div><div class="' + volumeBOID + '"><div class="' + volumeBWID + '"></div></div></div></div>'; //音量调节框,音量调节按钮
			html += '<div class="' + muteID + '" data-title="' + thisTemp.language['mute'] + '">' + this.newCanvas(muteID, bWidth, bHeight) + '</div>'; //静音按钮
			html += '<div class="' + escMuteID + '" data-title="' + thisTemp.language['escMute'] + '">' + this.newCanvas(escMuteID, bWidth, bHeight) + '</div>'; //退出静音按钮
			html += '<div class="' + dlineID + '-re"></div>'; //分隔线
			this.getByElement(controlBarID).innerHTML = html;
			//构建进度条内容
			this.getByElement(timeProgressBgID).innerHTML = '<div class="' + loadProgressID + '"></div><div class="' + timeProgressID + '"></div>';
			this.getByElement(timeBOBGID).innerHTML = '<div class="' + timeBOID + '"><div class="' + timeBWID + '"></div></div>';
			//构建进度条内容结束
			this.getByElement(pauseCenterID).innerHTML = this.newCanvas(pauseCenterID, 80, 80); //构建中间暂停按钮
			this.getByElement(loadingID).innerHTML = this.newCanvas(loadingID, 60, 60); //构建中间缓冲时显示的图标
			this.getByElement(errorTextID).innerHTML = this.language['error']; //构建错误时显示的文本框
			//构建广告相关
			html = '<div class="' + adTimeID + '">' + this.language['adTime'].replace('{$second}', 0) + '</div>';
			html += '<div class="' + adMuteID + '">' + this.newCanvas(adMuteID, 30, 30) + '</div>';
			html += '<div class="' + adEscMuteID + '">' + this.newCanvas(adEscMuteID, 30, 30) + '</div>';
			html += '<div class="' + adSkipID + '"></div>';
			this.getByElement(adBarID).innerHTML = html;
			this.getByElement(adLinkID).innerHTML = this.language['adLink'];
			this.getByElement(adPauseCloseID).innerHTML = this.newCanvas(adPauseCloseID, 20, 20);
			if (this.ckplayerConfig['style']['logo']) {
				if (this.ckplayerConfig['style']['logo']['file']) {
					var logoFile = this.ckplayerConfig['style']['logo']['file'];
					if (logoFile.substr(0, 15) == 'data:image/png;' || logoFile.substr(0, 15) == 'data:image/jpg;' || logoFile.substr(0, 16) == 'data:image/jpeg;') {
						this.getByElement(logoID).innerHTML = '<img src="' + logoFile + '" border="0">'; //构建logo
					}
				}
			} else {
				this.getByElement(logoID).innerHTML = this.vars['logo'] || this.logo || ''; //构建logo
			}
			var pd = this.PD;
			//CB:Object：全局变量，将一些全局需要用到的元素统一放在CB对象里
			this.CB = {
				controlBarBg: this.getByElement(controlBarBgID, pd),
				controlBar: this.getByElement(controlBarID, pd),
				promptBg: this.getByElement(promptBgID, pd),
				prompt: this.getByElement(promptID, pd),
				timeProgressBg: this.getByElement(timeProgressBgID, pd),
				loadProgress: this.getByElement(loadProgressID, pd),
				timeProgress: this.getByElement(timeProgressID, pd),
				timeBoBg: this.getByElement(timeBOBGID, pd),
				timeButton: this.getByElement(timeBOID, pd),
				timeText: this.getByElement(timeTextID, pd),
				play: this.getByElement(playID, pd),
				front: this.getByElement(frontID, pd),
				next: this.getByElement(nextID, pd),
				pause: this.getByElement(pauseID, pd),
				definition: this.getByElement(definitionID, pd),
				definitionP: this.getByElement(definitionPID, pd),
				definitionLine: this.getByElement(dlineID + '-rb', pd),
				playbackrate: this.getByElement(playbackRateID, pd),
				playbackrateP: this.getByElement(playbackRatePID, pd),
				playbackrateLine: this.getByElement(dlineID + '-rc', pd),
				subtitles: this.getByElement(subtitlesID, pd),
				subtitlesP: this.getByElement(subtitlesPID, pd),
				subtitlesLine: this.getByElement(dlineID + '-rd', pd),
				full: this.getByElement(fullID, pd),
				escFull: this.getByElement(escFullID, pd),
				mute: this.getByElement(muteID, pd),
				escMute: this.getByElement(escMuteID, pd),
				volume: this.getByElement(volumeID, pd),
				volumeBg: this.getByElement(volumeBgID, pd),
				volumeUp: this.getByElement(volumeUpID, pd),
				volumeBO: this.getByElement(volumeBOID, pd),
				pauseCenter: this.getByElement(pauseCenterID, pd),
				menu: this.getByElement(menuID),
				loading: this.getByElement(loadingID, pd),
				loadingCanvas: this.getByElement(loadingID + '-canvas', pd),
				errorText: this.getByElement(errorTextID, pd),
				logo: this.getByElement(logoID, pd),
				playLine: this.getByElement(dlineID + '-la', pd),
				frontLine: this.getByElement(dlineID + '-lb', pd),
				nextLine: this.getByElement(dlineID + '-lc', pd),
				fullLine: this.getByElement(dlineID + '-ra'),
				muteLine: this.getByElement(dlineID + '-re', pd),
				adBackground: this.getByElement(adBackgroundID, pd),
				adElement: this.getByElement(adElementID, pd),
				adBar: this.getByElement(adBarID, pd),
				adSkip: this.getByElement(adSkipID, pd),
				adTime: this.getByElement(adTimeID, pd),
				adLink: this.getByElement(adLinkID, pd),
				adMute: this.getByElement(adMuteID, pd),
				adEscMute: this.getByElement(adEscMuteID, pd),
				adPauseClose: this.getByElement(adPauseCloseID, pd)
			};
			this.buttonWidth = {
				play: bWidth,
				full: bWidth,
				front: bWidth,
				next: bWidth,
				mute: bWidth
			};
			//定义界面元素的样式
			//控制栏背景
			this.css(controlBarBgID, {
				width: '100%',
				height: bHeight + 'px',
				backgroundColor: '#000000',
				position: 'absolute',
				bottom: '0px',
				filter: 'alpha(opacity:0.8)',
				opacity: '0.8',
				zIndex: '990'
			});
			//控制栏容器
			this.css(controlBarID, {
				width: '100%',
				height: bHeight + 'px',
				position: 'absolute',
				bottom: '0px',
				zIndex: '990'
			});
			//中间暂停按钮
			this.css(pauseCenterID, {
				width: '80px',
				height: '80px',
				borderRadius: '50%',
				position: 'absolute',
				display: 'none',
				cursor: 'pointer',
				zIndex: '996'
			});
			//loading
			this.css(loadingID, {
				width: '60px',
				height: '60px',
				position: 'absolute',
				display: 'none',
				zIndex: '996'
			});
			//出错文本框
			this.css(errorTextID, {
				width: '120px',
				height: '30px',
				lineHeight: '30px',
				color: '#FFFFFF',
				fontSize: '14px',
				textAlign: 'center',
				position: 'absolute',
				display: 'none',
				zIndex: '101',
				cursor: 'default',
				zIndex: '996'
			});
			//定义logo文字的样式
			this.css(logoID, {
				height: '30px',
				lineHeight: '30px',
				color: '#FFFFFF',
				fontFamily: 'Arial',
				fontSize: '28px',
				textAlign: 'center',
				position: 'absolute',
				float: 'left',
				left: '-1000px',
				top: '20px',
				zIndex: '996',
				filter: 'alpha(opacity:0.8)',
				opacity: '0.8',
				cursor: 'default'
			});

			this.css(this.CB['loadingCanvas'], {
				transform: 'rotate(0deg)',
				msTransform: 'rotate(0deg)',
				mozTransform: 'rotate(0deg)',
				webkitTransform: 'rotate(0deg)',
				oTransform: 'rotate(0deg)'
			});
			//定义提示语的样式
			this.css([promptBgID, promptID], {
				height: '30px',
				lineHeight: '30px',
				color: '#FFFFFF',
				fontSize: '14px',
				textAlign: 'center',
				position: 'absolute',
				borderRadius: '5px',
				paddingLeft: '5px',
				paddingRight: '5px',
				bottom: '0px',
				display: 'none',
				zIndex: '995'
			});
			this.css(promptBgID, {
				backgroundColor: '#000000',
				filter: 'alpha(opacity:0.5)',
				opacity: '0.5'
			});
			//时间进度条背景容器
			this.css(timeProgressBgID, {
				width: '100%',
				height: '6px',
				backgroundColor: '#3F3F3F',
				overflow: 'hidden',
				position: 'absolute',
				bottom: '38px',
				zIndex: '888'
			});
			//加载进度和时间进度
			this.css([loadProgressID, timeProgressID], {
				width: '1px',
				height: '6px',
				position: 'absolute',
				bottom: '38px',
				top: '0px',
				zIndex: '991'
			});
			this.css(loadProgressID, 'backgroundColor', '#6F6F6F');
			this.css(timeProgressID, 'backgroundColor', bOverColor);
			//时间进度按钮
			this.css(timeBOBGID, {
				width: '100%',
				height: '14px',
				overflow: 'hidden',
				position: 'absolute',
				bottom: '34px',
				cursor: 'pointer',
				zIndex: '992'
			});
			this.css(timeBOID, {
				width: '14px',
				height: '14px',
				overflow: 'hidden',
				borderRadius: '50%',
				backgroundColor: bBgColor,
				cursor: 'pointer',
				position: 'absolute',
				top: '0px',
				zIndex: '200'
			});
			this.css(timeBWID, {
				width: '8px',
				height: '8px',
				overflow: 'hidden',
				borderRadius: '50%',
				position: 'absolute',
				backgroundColor: bOverColor,
				left: '3px',
				top: '3px'
			});
			this.css(timeTextID, {
				lineHeight: bHeight + 'px',
				color: '#FFFFFF',
				fontFamily: 'arial',
				fontSize: '16px',
				paddingLeft: '10px',
				float: 'left',
				overflow: 'hidden',
				cursor: 'default'
			});
			//分隔线
			this.css([dlineID + '-la', dlineID + '-lb', dlineID + '-lc', dlineID + '-ra', dlineID + '-rb', dlineID + '-rc', dlineID + '-rd', dlineID + '-re'], {
				width: '0px',
				height: bHeight + 'px',
				overflow: 'hidden',
				borderLeft: '1px solid #303030',
				borderRight: '1px solid #151515',
				filter: 'alpha(opacity:0.9)',
				opacity: '0.9'
			});
			this.css([dlineID + '-la', dlineID + '-lb', dlineID + '-lc'], 'float', 'left');
			this.css([dlineID + '-ra', dlineID + '-rb', dlineID + '-rc', dlineID + '-rd', dlineID + '-re'], 'float', 'right');
			this.css([dlineID + '-lb', dlineID + '-lc', dlineID + '-rb', dlineID + '-rc', dlineID + '-rd'], 'display', 'none');
			//播放/暂停/上一集/下一集按钮
			this.css([playID, pauseID, frontID, nextID], {
				width: bWidth + 'px',
				height: bHeight + 'px',
				float: 'left',
				overflow: 'hidden',
				cursor: 'pointer'
			});
			this.css([frontID, nextID], 'display', 'none');
			//初始化判断播放/暂停按钮隐藏项
			this.initPlayPause();

			//设置静音/取消静音的按钮样式
			this.css([muteID, escMuteID], {
				width: bWidth + 'px',
				height: bHeight + 'px',
				float: 'right',
				overflow: 'hidden',
				cursor: 'pointer'
			});
			if (this.vars['volume'] > 0) {
				this.css(escMuteID, 'display', 'none');
			} else {
				this.css(muteID, 'display', 'none');
			}
			if (!this.ckplayerConfig['config']['mobileVolumeBarShow'] && this.isMobile()) {
				this.css([muteID, escMuteID, volumeID, volumeDbgID, dlineID + '-re'], {
					display: 'none'
				});
			}
			//音量调节框
			this.css([volumeID, volumeDbgID], {
				width: '70px',
				height: bHeight + 'px',
				overflow: 'hidden',
				float: 'right'
			});
			this.css(volumeDbgID, {
				position: 'absolute'
			});
			this.css([volumeBgID, volumeUpID], {
				width: '60px',
				height: '6px',
				overflow: 'hidden',
				borderRadius: '5px',
				cursor: 'pointer'
			});
			this.css(volumeBgID, {
				position: 'absolute',
				top: '16px'
			});
			this.css(volumeBgID, 'backgroundColor', '#666666');
			this.css(volumeUpID, 'backgroundColor', bOverColor);
			this.buttonWidth['volume'] = 100;
			//音量调节按钮
			this.css(volumeBOID, {
				width: '12px',
				height: '12px',
				overflow: 'hidden',
				borderRadius: '50%',
				position: 'absolute',
				backgroundColor: bBgColor,
				top: '13px',
				left: '0px',
				cursor: 'pointer'
			});
			this.css(volumeBWID, {
				width: '6px',
				height: '6px',
				overflow: 'hidden',
				borderRadius: '50%',
				position: 'absolute',
				backgroundColor: bOverColor,
				left: '3px',
				top: '3px'
			});
			//清晰度容器
			this.css(definitionID, {
				lineHeight: bHeight + 'px',
				color: '#FFFFFF',
				float: 'right',
				fontSize: '14px',
				textAlign: 'center',
				overflow: 'hidden',
				display: 'none',
				cursor: 'pointer'
			});
			this.css(definitionPID, {
				lineHeight: (bHeight - 8) + 'px',
				color: '#FFFFFF',
				overflow: 'hidden',
				position: 'absolute',
				bottom: '4px',
				backgroundColor: '#000000',
				textAlign: 'center',
				zIndex: '995',
				cursor: 'pointer',
				display: 'none'
			});
			//倍速容器
			this.css(playbackRateID, {
				lineHeight: bHeight + 'px',
				color: '#FFFFFF',
				float: 'right',
				fontSize: '14px',
				textAlign: 'center',
				overflow: 'hidden',
				display: 'none',
				cursor: 'pointer'
			});
			this.css(playbackRatePID, {
				lineHeight: (bHeight - 8) + 'px',
				color: '#FFFFFF',
				overflow: 'hidden',
				position: 'absolute',
				bottom: '4px',
				backgroundColor: '#000000',
				textAlign: 'center',
				zIndex: '995',
				cursor: 'pointer',
				display: 'none'
			});
			//字幕容器
			this.css(subtitlesID, {
				lineHeight: bHeight + 'px',
				color: '#FFFFFF',
				float: 'right',
				fontSize: '14px',
				textAlign: 'center',
				overflow: 'hidden',
				display: 'none',
				cursor: 'pointer'
			});
			this.css(subtitlesPID, {
				lineHeight: (bHeight - 8) + 'px',
				color: '#FFFFFF',
				overflow: 'hidden',
				position: 'absolute',
				bottom: '4px',
				backgroundColor: '#000000',
				textAlign: 'center',
				zIndex: '995',
				cursor: 'pointer',
				display: 'none'
			});
			//设置全屏/退出全屏按钮样式
			this.css([fullID, escFullID], {
				width: bWidth + 'px',
				height: bHeight + 'px',
				float: 'right',
				overflow: 'hidden',
				cursor: 'pointer'
			});
			this.css(escFullID, 'display', 'none');
			//设置广告背景层样式
			this.css(adBackgroundID, {
				width: '100%',
				height: '100%',
				backgroundColor: '#000000',
				position: 'absolute',
				top: '0px',
				zIndex: '997',
				display: 'none'
			});
			this.css(adElementID, {
				position: 'absolute',
				overflow: 'hidden',
				top: '0px',
				zIndex: '998',
				float: 'center',
				display: 'none'
			});
			this.css(adBarID, {
				position: 'absolute',
				overflow: 'hidden',
				top: '10px',
				right: '10px',
				zIndex: '999',
				textAlign: 'right',
				display: 'none'
			});
			this.css(adTimeID, {
				backgroundColor: '#000000',
				color: '#FF0000',
				paddingLeft: '10px',
				paddingRight: '10px',
				lineHeight: (bHeight - 8) + 'px',
				marginLeft: '5px',
				float: 'right',
				cursor: 'pointer'
			});
			this.css([adMuteID, adEscMuteID], {
				backgroundColor: '#000000',
				width: '30px',
				height: '30px',
				marginLeft: '5px',
				float: 'right',
				display: 'none',
				cursor: 'pointer'
			});
			this.css(adSkipID, {
				backgroundColor: '#000000',
				lineHeight: (bHeight - 8) + 'px',
				color: '#FFFFFF',
				paddingLeft: '10px',
				paddingRight: '10px',
				float: 'right',
				display: 'none',
				cursor: 'pointer'
			});
			this.css(adLinkID, {
				backgroundColor: '#ea5503',
				lineHeight: (bHeight - 8) + 'px',
				color: '#FFFFFF',
				paddingLeft: '10px',
				paddingRight: '10px',
				position: 'absolute',
				overflow: 'hidden',
				bottom: '10px',
				right: '10px',
				zIndex: '999',
				display: 'none'
			});
			this.css(adPauseCloseID, {
				backgroundColor: '#f7f7f7',
				//f8f7f7
				widht: '20px',
				height: '20px',
				position: 'absolute',
				overflow: 'hidden',
				zIndex: '999',
				top: '60px',
				left: '30px',
				borderRadius: '20px',
				display: 'none',
				cursor: 'pointer'
			});
			//构建各按钮的形状
			//播放按钮
			var cPlay = this.getByElement(playID + '-canvas').getContext('2d');
			var cPlayFillRect = function() {
				thisTemp.canvasFill(cPlay, [[12, 10], [29, 19], [12, 28]]);
			};
			cPlay.fillStyle = bBgColor;
			cPlayFillRect();
			var cPlayOver = function(event) {
				cPlay.clearRect(0, 0, bWidth, bHeight);
				cPlay.fillStyle = bOverColor;
				cPlayFillRect();
			};
			var cPlayOut = function(event) {
				cPlay.clearRect(0, 0, bWidth, bHeight);
				cPlay.fillStyle = bBgColor;
				cPlayFillRect();
			};

			this.addListenerInside('mouseover', cPlayOver, this.getByElement(playID + '-canvas'));
			this.addListenerInside('mouseout', cPlayOut, this.getByElement(playID + '-canvas'));
			//暂停按钮
			var cPause = this.getByElement(pauseID + '-canvas').getContext('2d');
			var cPauseFillRect = function() {
				thisTemp.canvasFillRect(cPause, [[10, 10, 5, 18], [22, 10, 5, 18]]);
			};
			cPause.fillStyle = bBgColor;
			cPauseFillRect();
			var cPauseOver = function(event) {
				cPause.clearRect(0, 0, bWidth, bHeight);
				cPause.fillStyle = bOverColor;
				cPauseFillRect();
			};
			var cPauseOut = function(event) {
				cPause.clearRect(0, 0, bWidth, bHeight);
				cPause.fillStyle = bBgColor;
				cPauseFillRect();
			};
			this.addListenerInside('mouseover', cPauseOver, this.getByElement(pauseID + '-canvas'));
			this.addListenerInside('mouseout', cPauseOut, this.getByElement(pauseID + '-canvas'));
			//前一集按钮
			var cFront = this.getByElement(frontID + '-canvas').getContext('2d');
			var cFrontFillRect = function() {
				thisTemp.canvasFill(cFront, [[16, 19], [30, 10], [30, 28]]);
				thisTemp.canvasFillRect(cFront, [[8, 10, 5, 18]]);
			};
			cFront.fillStyle = bBgColor;
			cFrontFillRect();
			var cFrontOver = function(event) {
				cFront.clearRect(0, 0, bWidth, bHeight);
				cFront.fillStyle = bOverColor;
				cFrontFillRect();
			};
			var cFrontOut = function(event) {
				cFront.clearRect(0, 0, bWidth, bHeight);
				cFront.fillStyle = bBgColor;
				cFrontFillRect();
			};

			this.addListenerInside('mouseover', cFrontOver, this.getByElement(frontID + '-canvas'));
			this.addListenerInside('mouseout', cFrontOut, this.getByElement(frontID + '-canvas'));
			//下一集按钮
			var cNext = this.getByElement(nextID + '-canvas').getContext('2d');
			var cNextFillRect = function() {
				thisTemp.canvasFill(cNext, [[8, 10], [22, 19], [8, 28]]);
				thisTemp.canvasFillRect(cNext, [[25, 10, 5, 18]]);
			};
			cNext.fillStyle = bBgColor;
			cNextFillRect();
			var cNextOver = function(event) {
				cNext.clearRect(0, 0, bWidth, bHeight);
				cNext.fillStyle = bOverColor;
				cNextFillRect();
			};
			var cNextOut = function(event) {
				cNext.clearRect(0, 0, bWidth, bHeight);
				cNext.fillStyle = bBgColor;
				cNextFillRect();
			};
			this.addListenerInside('mouseover', cNextOver, this.getByElement(nextID + '-canvas'));
			this.addListenerInside('mouseout', cNextOut, this.getByElement(nextID + '-canvas'));
			//全屏按钮
			var cFull = this.getByElement(fullID + '-canvas').getContext('2d');
			var cFullFillRect = function() {
				thisTemp.canvasFillRect(cFull, [[19, 10, 9, 3], [25, 13, 3, 6], [10, 19, 3, 9], [13, 25, 6, 3]]);
			};
			cFull.fillStyle = bBgColor;
			cFullFillRect();
			var cFullOver = function() {
				cFull.clearRect(0, 0, bWidth, bHeight);
				cFull.fillStyle = bOverColor;
				cFullFillRect();
			};
			var cFullOut = function() {
				cFull.clearRect(0, 0, bWidth, bHeight);
				cFull.fillStyle = bBgColor;
				cFullFillRect();
			};
			this.addListenerInside('mouseover', cFullOver, this.getByElement(fullID + '-canvas'));
			this.addListenerInside('mouseout', cFullOut, this.getByElement(fullID + '-canvas'));
			//定义退出全屏按钮样式
			var cEscFull = this.getByElement(escFullID + '-canvas').getContext('2d');
			var cEscFullFillRect = function() {
				thisTemp.canvasFillRect(cEscFull, [[20, 9, 3, 9], [23, 15, 6, 3], [9, 20, 9, 3], [15, 23, 3, 6]]);
			};
			cEscFull.fillStyle = bBgColor;
			cEscFullFillRect();
			var cEscFullOver = function() {
				cEscFull.clearRect(0, 0, bWidth, bHeight);
				cEscFull.fillStyle = bOverColor;
				cEscFullFillRect();
			};
			var cEscFullOut = function() {
				cEscFull.clearRect(0, 0, bWidth, bHeight);
				cEscFull.fillStyle = bBgColor;
				cEscFullFillRect();
			};
			this.addListenerInside('mouseover', cEscFullOver, this.getByElement(escFullID + '-canvas'));
			this.addListenerInside('mouseout', cEscFullOut, this.getByElement(escFullID + '-canvas'));
			//定义静音按钮的样式
			var cMute = this.getByElement(muteID + '-canvas').getContext('2d');
			var cMuteFillRect = function() {
				thisTemp.canvasFill(cMute, [[10, 15], [15, 15], [21, 10], [21, 28], [15, 23], [10, 23]]);
				thisTemp.canvasFillRect(cMute, [[23, 15, 2, 8], [27, 10, 2, 18]]);
			};
			cMute.fillStyle = bBgColor;
			cMuteFillRect();
			var cMuteOver = function() {
				cMute.clearRect(0, 0, bWidth, bHeight);
				cMute.fillStyle = bOverColor;
				cMuteFillRect();
			};
			var cMuteOut = function() {
				cMute.clearRect(0, 0, bWidth, bHeight);
				cMute.fillStyle = bBgColor;
				cMuteFillRect();
			};
			this.addListenerInside('mouseover', cMuteOver, this.getByElement(muteID + '-canvas'));
			this.addListenerInside('mouseout', cMuteOut, this.getByElement(muteID + '-canvas'));
			//定义取消广告静音按钮样式
			var cEscMute = this.getByElement(escMuteID + '-canvas').getContext('2d');
			var cEscMuteFillRect = function() {
				thisTemp.canvasFill(cEscMute, [[10, 15], [15, 15], [21, 10], [21, 28], [15, 23], [10, 23]]);
				thisTemp.canvasFill(cEscMute, [[23, 13], [24, 13], [33, 25], [32, 25]]);
				thisTemp.canvasFill(cEscMute, [[32, 13], [33, 13], [24, 25], [23, 25]]);
			};
			cEscMute.fillStyle = bBgColor;
			cEscMuteFillRect();
			var cEscMuteOver = function() {
				cEscMute.clearRect(0, 0, bWidth, bHeight);
				cEscMute.fillStyle = bOverColor;
				cEscMuteFillRect();
			};
			var cEscMuteOut = function() {
				cEscMute.clearRect(0, 0, bWidth, bHeight);
				cEscMute.fillStyle = bBgColor;
				cEscMuteFillRect();
			};
			this.addListenerInside('mouseover', cEscMuteOver, this.getByElement(escMuteID + '-canvas'));
			this.addListenerInside('mouseout', cEscMuteOut, this.getByElement(escMuteID + '-canvas'));
			//定义广告静音按钮的样式
			var cAdMute = this.getByElement(adMuteID + '-canvas').getContext('2d');
			var cAdMuteFillRect = function() {
				thisTemp.canvasFill(cAdMute, [[8, 12], [12, 12], [16, 8], [16, 21], [12, 18], [8, 18]]);
				thisTemp.canvasFillRect(cAdMute, [[18, 12, 2, 6], [21, 8, 2, 14]]);
			};
			cAdMute.fillStyle = bBgColor;
			cAdMuteFillRect();
			var cAdMuteOver = function() {
				cAdMute.clearRect(0, 0, bWidth, bHeight);
				cAdMute.fillStyle = bOverColor;
				cAdMuteFillRect();
			};
			var cAdMuteOut = function() {
				cAdMute.clearRect(0, 0, bWidth, bHeight);
				cAdMute.fillStyle = bBgColor;
				cAdMuteFillRect();
			};
			this.addListenerInside('mouseover', cAdMuteOver, this.getByElement(adMuteID + '-canvas'));
			this.addListenerInside('mouseout', cAdMuteOut, this.getByElement(adMuteID + '-canvas'));
			//定义取消静音广告按钮样式
			var cAdEscMute = this.getByElement(adEscMuteID + '-canvas').getContext('2d');
			var cAdEscMuteFillRect = function() {
				thisTemp.canvasFill(cAdEscMute, [[8, 12], [12, 12], [16, 8], [16, 21], [12, 18], [8, 18]]);
				thisTemp.canvasFill(cAdEscMute, [[18, 10], [20, 10], [26, 20], [24, 20]]);
				thisTemp.canvasFill(cAdEscMute, [[25, 10], [27, 10], [20, 20], [18, 20]]);
			};
			cAdEscMute.fillStyle = bBgColor;
			cAdEscMuteFillRect();
			var cAdEscMuteOver = function() {
				cAdEscMute.clearRect(0, 0, bWidth, bHeight);
				cAdEscMute.fillStyle = bOverColor;
				cAdEscMuteFillRect();
			};
			var cAdEscMuteOut = function() {
				cAdEscMute.clearRect(0, 0, bWidth, bHeight);
				cAdEscMute.fillStyle = bBgColor;
				cAdEscMuteFillRect();
			};
			this.addListenerInside('mouseover', cAdEscMuteOver, this.getByElement(adEscMuteID + '-canvas'));
			this.addListenerInside('mouseout', cAdEscMuteOut, this.getByElement(adEscMuteID + '-canvas'));
			//定义暂停广告关闭按钮
			var adPauseClose = this.getByElement(adPauseCloseID + '-canvas').getContext('2d');
			var adPauseCloseFillRect = function() {
				thisTemp.canvasFill(adPauseClose, [[4, 6], [6, 6], [16, 15], [14, 15]]);
				thisTemp.canvasFill(adPauseClose, [[14, 6], [16, 6], [6, 15], [4, 15]]);
			};
			adPauseClose.fillStyle = '#404856';
			adPauseCloseFillRect();
			var adPauseCloseOver = function() {
				adPauseClose.clearRect(0, 0, bWidth, bHeight);
				adPauseClose.fillStyle = bOverColor;
				adPauseCloseFillRect();
			};
			var adPauseCloseOut = function() {
				adPauseClose.clearRect(0, 0, bWidth, bHeight);
				adPauseClose.fillStyle = '#404856';
				adPauseCloseFillRect();
			};
			this.addListenerInside('mouseover', adPauseCloseOver, this.getByElement(adPauseCloseID + '-canvas'));
			this.addListenerInside('mouseout', adPauseCloseOut, this.getByElement(adPauseCloseID + '-canvas'));
			//定义loading样式
			var cLoading = this.getByElement(loadingID + '-canvas').getContext('2d');
			var cLoadingFillRect = function() {
				cLoading.save();
				var grad = cLoading.createLinearGradient(0, 0, 60, 60);
				grad.addColorStop(0, bBgColor);
				var grad2 = cLoading.createLinearGradient(0, 0, 80, 60);
				grad2.addColorStop(1, bOverColor);
				var grad3 = cLoading.createLinearGradient(0, 0, 80, 60);
				grad3.addColorStop(1, '#FF9900');
				var grad4 = cLoading.createLinearGradient(0, 0, 80, 60);
				grad4.addColorStop(1, '#CC3300');
				cLoading.strokeStyle = grad; //设置描边样式
				cLoading.lineWidth = 8; //设置线宽
				cLoading.beginPath(); //路径开始
				cLoading.arc(30, 30, 25, 0, 0.4 * Math.PI, false); //用于绘制圆弧context.arc(x坐标，y坐标，半径，起始角度，终止角度，顺时针/逆时针)
				cLoading.stroke(); //绘制
				cLoading.closePath(); //路径结束
				cLoading.beginPath(); //路径开始
				cLoading.strokeStyle = grad2; //设置描边样式
				cLoading.arc(30, 30, 25, 0.5 * Math.PI, 0.9 * Math.PI, false); //用于绘制圆弧context.arc(x坐标，y坐标，半径，起始角度，终止角度，顺时针/逆时针)
				cLoading.stroke(); //绘制
				cLoading.beginPath(); //路径开始
				cLoading.strokeStyle = grad3; //设置描边样式
				cLoading.arc(30, 30, 25, Math.PI, 1.4 * Math.PI, false); //用于绘制圆弧context.arc(x坐标，y坐标，半径，起始角度，终止角度，顺时针/逆时针)
				cLoading.stroke(); //绘制
				cLoading.beginPath(); //路径开始
				cLoading.strokeStyle = grad4; //设置描边样式
				cLoading.arc(30, 30, 25, 1.5 * Math.PI, 1.9 * Math.PI, false); //用于绘制圆弧context.arc(x坐标，y坐标，半径，起始角度，终止角度，顺时针/逆时针)
				cLoading.stroke(); //绘制
				cLoading.closePath(); //路径结束
				cLoading.restore();
			};
			cLoading.fillStyle = bBgColor;
			cLoadingFillRect();
			//定义中间暂停按钮的样式
			var cPauseCenter = this.getByElement(pauseCenterID + '-canvas').getContext('2d');
			var cPauseCenterFillRect = function() {
				thisTemp.canvasFill(cPauseCenter, [[28, 22], [59, 38], [28, 58]]);
				/* 指定几个颜色 */
				cPauseCenter.save();
				cPauseCenter.lineWidth = 5; //设置线宽
				cPauseCenter.beginPath(); //路径开始
				cPauseCenter.arc(40, 40, 35, 0, 2 * Math.PI, false); //用于绘制圆弧context.arc(x坐标，y坐标，半径，起始角度，终止角度，顺时针/逆时针)
				cPauseCenter.stroke(); //绘制
				cPauseCenter.closePath(); //路径结束
				cPauseCenter.restore();
			};
			cPauseCenter.fillStyle = bBgColor;
			cPauseCenter.strokeStyle = bBgColor;
			cPauseCenterFillRect();
			var cPauseCenterOver = function() {
				cPauseCenter.clearRect(0, 0, 80, 80);
				cPauseCenter.fillStyle = bOverColor;
				cPauseCenter.strokeStyle = bOverColor;
				cPauseCenterFillRect();
			};
			var cPauseCenterOut = function() {
				cPauseCenter.clearRect(0, 0, 80, 80);
				cPauseCenter.fillStyle = bBgColor;
				cPauseCenter.strokeStyle = bBgColor;
				cPauseCenterFillRect();
			};
			this.addListenerInside('mouseover', cPauseCenterOver, this.getByElement(pauseCenterID + '-canvas'));
			this.addListenerInside('mouseout', cPauseCenterOut, this.getByElement(pauseCenterID + '-canvas'));

			//鼠标经过/离开音量调节按钮
			var volumeBOOver = function() {
				thisTemp.css(volumeBOID, 'backgroundColor', bOverColor);
				thisTemp.css(volumeBWID, 'backgroundColor', bBgColor);
			};
			var volumeBOOut = function() {
				thisTemp.css(volumeBOID, 'backgroundColor', bBgColor);
				thisTemp.css(volumeBWID, 'backgroundColor', bOverColor);
			};
			this.addListenerInside('mouseover', volumeBOOver, this.getByElement(volumeBOID));
			this.addListenerInside('mouseout', volumeBOOut, this.getByElement(volumeBOID));
			//鼠标经过/离开进度按钮
			var timeBOOver = function() {
				thisTemp.css(timeBOID, 'backgroundColor', bOverColor);
				thisTemp.css(timeBWID, 'backgroundColor', bBgColor);
			};
			var timeBOOut = function() {
				thisTemp.css(timeBOID, 'backgroundColor', bBgColor);
				thisTemp.css(timeBWID, 'backgroundColor', bOverColor);
			};
			this.addListenerInside('mouseover', timeBOOver, this.getByElement(timeBOID));
			this.addListenerInside('mouseout', timeBOOut, this.getByElement(timeBOID));

			this.addButtonEvent(); //注册按钮及音量调节，进度操作事件
			this.newMenu(); //单独设置右键的样式和事件
			this.controlBarHide(); //单独注册控制栏隐藏事件
			this.keypress(); //单独注册键盘事件
			//初始化音量调节框
			this.changeVolume(this.vars['volume']);
			//初始化判断是否需要显示上一集和下一集按钮
			this.showFrontNext();
			setTimeout(function() {
				thisTemp.elementCoordinate(); //调整中间暂停按钮/loading的位置/error的位置
			},
			100);
			this.checkBarWidth();
			var resize = function() {
				thisTemp.elementCoordinate();
				thisTemp.timeUpdateHandler();
				thisTemp.changeLoad();
				thisTemp.checkBarWidth();
				thisTemp.changeElementCoor(); //修改新加元件的坐标
				thisTemp.changePrompt();
				thisTemp.adPauseCoor();
				thisTemp.adOtherCoor();
			};
			this.addListenerInside('resize', resize, window);
		},
		/*
			内部函数
			创建按钮，使用canvas画布
		*/
		newCanvas: function(id, width, height) {
			return '<canvas class="' + id + '-canvas" width="' + width + '" height="' + height + '"></canvas>';
		},
		/*
			内部函数
			注册按钮，音量调节框，进度操作框事件
		*/
		addButtonEvent: function() {
			var thisTemp = this;
			//定义按钮的单击事件
			var playClick = function(event) {
				thisTemp.videoPlay();
				thisTemp.sendJS('clickEvent', 'actionScript->videoPlay');
			};
			this.addListenerInside('click', playClick, this.CB['play']);
			this.addListenerInside('click', playClick, this.CB['pauseCenter']);
			var pauseClick = function(event) {
				thisTemp.videoPause();
				thisTemp.sendJS('clickEvent', 'actionScript->videoPause');
			};
			this.addListenerInside('click', pauseClick, this.CB['pause']);
			var frontClick = function(event) {
				if (thisTemp.vars['front']) {
					eval(thisTemp.vars['front'] + '()');
					thisTemp.sendJS('clickEvent', 'actionScript->' + thisTemp.vars['front']);
				}
			};
			this.addListenerInside('click', frontClick, this.CB['front']);
			var nextClick = function(event) {
				if (thisTemp.vars['next']) {
					eval(thisTemp.vars['next'] + '()');
					thisTemp.sendJS('clickEvent', 'actionScript->' + thisTemp.vars['next']);
				}
			};
			this.addListenerInside('click', nextClick, this.CB['next']);
			var muteClick = function(event) {
				thisTemp.videoMute();
				thisTemp.sendJS('clickEvent', 'actionScript->videoMute');
			};
			this.addListenerInside('click', muteClick, this.CB['mute']);
			var escMuteClick = function(event) {
				thisTemp.videoEscMute();
				thisTemp.sendJS('clickEvent', 'actionScript->videoEscMute');
			};
			this.addListenerInside('click', escMuteClick, this.CB['escMute']);
			var fullClick = function(event) {
				thisTemp.fullScreen();
				thisTemp.sendJS('clickEvent', 'actionScript->fullScreen');
			};
			this.addListenerInside('click', fullClick, this.CB['full']);
			var escFullClick = function(event) {
				thisTemp.quitFullScreen();
				thisTemp.sendJS('clickEvent', 'actionScript->quitFullScreen');
			};
			this.addListenerInside('click', escFullClick, this.CB['escFull']);
			var adSkipClick = function(event) {
				if (thisTemp.CB['adSkip'].innerHTML == thisTemp.language['skipAd']) {
					thisTemp.runFunction(thisTemp.config['adSkipClick']);
				}
			};
			this.addListenerInside('click', adSkipClick, this.CB['adSkip']);
			var adMuteClick = function(event) {
				thisTemp.adMuteFunction();
			};
			this.addListenerInside('click', adMuteClick, this.CB['adMute']);
			var adEscMuteClick = function(event) {
				thisTemp.adEscMuteFunction();
			};
			this.addListenerInside('click', adEscMuteClick, this.CB['adEscMute']);
			var adPauseCloseClick = function(event) {
				thisTemp.adPauseCloseFunction();
			};
			this.addListenerInside('click', adPauseCloseClick, this.CB['adPauseClose']);
			//定义各个按钮的鼠标经过/离开事件
			var promptHide = function(event) {
				thisTemp.promptShow(false);
			};
			var playOver = function(event) {
				thisTemp.promptShow(thisTemp.CB['play']);
			};
			this.addListenerInside('mouseover', playOver, this.CB['play']);
			this.addListenerInside('mouseout', promptHide, this.CB['play']);
			var pauseOver = function(event) {
				thisTemp.promptShow(thisTemp.CB['pause']);
			};
			this.addListenerInside('mouseover', pauseOver, this.CB['pause']);
			this.addListenerInside('mouseout', promptHide, this.CB['pause']);
			var frontOver = function(event) {
				thisTemp.promptShow(thisTemp.CB['front']);
			};
			this.addListenerInside('mouseover', frontOver, this.CB['front']);
			this.addListenerInside('mouseout', promptHide, this.CB['front']);
			var nextOver = function(event) {
				thisTemp.promptShow(thisTemp.CB['next']);
			};
			this.addListenerInside('mouseover', nextOver, this.CB['next']);
			this.addListenerInside('mouseout', promptHide, this.CB['next']);
			var muteOver = function(event) {
				thisTemp.promptShow(thisTemp.CB['mute']);
			};
			this.addListenerInside('mouseover', muteOver, this.CB['mute']);
			this.addListenerInside('mouseout', promptHide, this.CB['mute']);
			var escMuteOver = function(event) {
				thisTemp.promptShow(thisTemp.CB['escMute']);
			};
			this.addListenerInside('mouseover', escMuteOver, this.CB['escMute']);
			this.addListenerInside('mouseout', promptHide, this.CB['escMute']);
			var fullOver = function(event) {
				thisTemp.promptShow(thisTemp.CB['full']);
			};
			this.addListenerInside('mouseover', fullOver, this.CB['full']);
			this.addListenerInside('mouseout', promptHide, this.CB['full']);
			var escFullOver = function(event) {
				thisTemp.promptShow(thisTemp.CB['escFull']);
			};
			this.addListenerInside('mouseover', escFullOver, this.CB['escFull']);
			this.addListenerInside('mouseout', promptHide, this.CB['escFull']);
			var definitionOver = function(event) {
				thisTemp.promptShow(thisTemp.CB['definition']);
			};
			this.addListenerInside('mouseover', definitionOver, this.CB['definition']);
			this.addListenerInside('mouseout', promptHide, this.CB['definition']);
			var playbackrateOver = function(event) {
				thisTemp.promptShow(thisTemp.CB['playbackrate']);
			};
			this.addListenerInside('mouseover', playbackrateOver, this.CB['playbackrate']);
			this.addListenerInside('mouseout', promptHide, this.CB['playbackrate']);
			var subtitlesOver = function(event) {
				thisTemp.promptShow(thisTemp.CB['subtitles']);
			};
			this.addListenerInside('mouseover', subtitlesOver, this.CB['subtitles']);
			this.addListenerInside('mouseout', promptHide, this.CB['subtitles']);
			//定义音量和进度按钮的滑块事件
			var volumePrompt = function(vol) {
				var volumeBOXY = thisTemp.getCoor(thisTemp.CB['volumeBO']);
				var promptObj = {
					title: thisTemp.language['volume'] + vol + '%',
					x: volumeBOXY['x'] + thisTemp.CB['volumeBO'].offsetWidth * 0.5,
					y: volumeBOXY['y']
				};
				thisTemp.promptShow(false, promptObj);
			};
			var volumeObj = {
				slider: this.CB['volumeBO'],
				follow: this.CB['volumeUp'],
				refer: this.CB['volumeBg'],
				grossValue: 'volume',
				pd: true,
				startFun: function(vol) {},
				monitorFun: function(vol) {
					thisTemp.changeVolume(vol * 0.01, false, false);
					volumePrompt(vol);
				},
				endFun: function(vol) {},
				overFun: function(vol) {
					volumePrompt(vol);
				}
			};
			this.slider(volumeObj);
			var volumeClickObj = {
				refer: this.CB['volumeBg'],
				grossValue: 'volume',
				fun: function(vol) {
					thisTemp.changeVolume(vol * 0.01, true, true);
				}
			};
			this.progressClick(volumeClickObj);
			this.timeButtonMouseDown(); //用单击的函数来判断是否需要建立控制栏监听
			//鼠标经过/离开音量调节框时的
			var volumeBgMove = function(event) {
				var volumeBgXY = thisTemp.getCoor(thisTemp.CB['volumeBg']);
				var eventX = thisTemp.client(event)['x'];
				var eventVolume = parseInt((eventX - volumeBgXY['x']) * 100 / thisTemp.CB['volumeBg'].offsetWidth);
				var buttonPromptObj = {
					title: thisTemp.language['volume'] + eventVolume + '%',
					x: eventX,
					y: volumeBgXY['y']
				};
				thisTemp.promptShow(false, buttonPromptObj);
			};
			this.addListenerInside('mousemove', volumeBgMove, this.CB['volumeBg']);
			this.addListenerInside('mouseout', promptHide, this.CB['volumeBg']);
			this.addListenerInside('mouseout', promptHide, this.CB['volumeBO']);
			//注册清晰度相关事件
			this.addDefListener();
			//注册倍速相关事件
			this.addPlaybackrate();
			//注册多字幕事件
			this.addSubtitles();
		},
		/*
			内部函数
			注册单击视频动作
		*/
		videoClick: function() {
			var thisTemp = this;
			var clearTimerClick = function() {
				if (thisTemp.timerClick != null) {
					if (thisTemp.timerClick.runing) {
						thisTemp.timerClick.stop();
					}
					thisTemp.timerClick = null;
				}
			};
			var timerClickFun = function() {
				clearTimerClick();
				thisTemp.isClick = false;
				thisTemp.sendJS('videoClick',thisTemp.videoClickXy);
				if (thisTemp.adPlayerPlay) {
					var ad = thisTemp.getNowAdvertisements();
					try {
						if (ad['link'] != '') {
							window.open(ad['link']);
						}
						thisTemp.ajaxSuccessNull(ad['clickMonitor']);
					} catch(event) {}
				} else {
					if (thisTemp.ckplayerConfig['config']['click']) {
						thisTemp.playOrPause();
					}
				}

			};
			clearTimerClick();
			if (this.isClick) {
				this.isClick = false;
				thisTemp.sendJS('videoDoubleClick',thisTemp.videoClickXy);
				if (thisTemp.ckplayerConfig['config']['doubleClick']) {
					if (!this.full) {
						thisTemp.fullScreen();
					} else {
						thisTemp.quitFullScreen();
					}
				}

			} else {
				this.isClick = true;
				this.timerClick = new this.timer(300, timerClickFun, 1)
				//this.timerClick.start();
			}

		},
		/*
			内部函数
			注册鼠标经过进度滑块的事件
		*/
		timeButtonMouseDown: function() {
			var thisTemp = this;
			var timePrompt = function(time) {
				if (isNaN(time)) {
					time = 0;
				}
				var timeButtonXY = thisTemp.getCoor(thisTemp.CB['timeButton']);
				var promptObj = {
					title: thisTemp.formatTime(time),
					x: timeButtonXY['x'] - thisTemp.pdCoor['x'] + thisTemp.CB['timeButton'].offsetWidth * 0.5,
					y: timeButtonXY['y'] - thisTemp.pdCoor['y']
				};
				thisTemp.promptShow(false, promptObj);
			};
			var timeObj = {
				slider: this.CB['timeButton'],
				follow: this.CB['timeProgress'],
				refer: this.CB['timeBoBg'],
				grossValue: 'time',
				pd: false,
				startFun: function(time) {
					thisTemp.isTimeButtonMove = false;
				},
				monitorFun: function(time) {},
				endFun: function(time) {
					if (thisTemp.V) {
						if (thisTemp.V.duration > 0) {
							thisTemp.needSeek = 0;
							thisTemp.videoSeek(parseInt(time));
						}
					}
				},
				overFun: function(time) {
					timePrompt(time);
				}
			};
			var timeClickObj = {
				refer: this.CB['timeBoBg'],
				grossValue: 'time',
				fun: function(time) {
					if (thisTemp.V) {
						if (thisTemp.V.duration > 0) {
							thisTemp.needSeek = 0;
							thisTemp.videoSeek(parseInt(time));
						}
					}
				}
			};
			var timeBoBgmousemove = function(event) {
				var timeBoBgXY = thisTemp.getCoor(thisTemp.CB['timeBoBg']);
				var eventX = thisTemp.client(event)['x'];
				var duration=thisTemp.V.duration;
				if (isNaN(duration) || parseInt(duration) < 0.2) {
					duration = thisTemp.vars['duration'];
				}
				if(thisTemp.vars['forceduration']>0){
					duration=thisTemp.vars['forceduration'];
				}
				var eventTime = parseInt((eventX - timeBoBgXY['x']) * duration / thisTemp.CB['timeBoBg'].offsetWidth);
				var buttonPromptObj = {
					title: thisTemp.formatTime(eventTime),
					x: eventX,
					y: timeBoBgXY['y']
				};
				thisTemp.promptShow(false, buttonPromptObj);
				var def = false;
				if (!thisTemp.isUndefined(thisTemp.CB['definitionP'])) {
					if (thisTemp.css(thisTemp.CB['definitionP'], 'display') != 'block') {
						def = true;
					}
				}
				if (thisTemp.vars['preview'] != null && def) {
					buttonPromptObj['time'] = eventTime;
					thisTemp.preview(buttonPromptObj);
				}
			};
			var promptHide = function(event) {
				thisTemp.promptShow(false);
				if (thisTemp.previewDiv != null) {
					thisTemp.css([thisTemp.previewDiv, thisTemp.previewTop], 'display', 'none');
				}
			};
			if (!this.vars['live']) { //如果不是直播
				this.isTimeButtonDown = true;
				this.addListenerInside('mousemove', timeBoBgmousemove, this.CB['timeBoBg']);
				this.addListenerInside('mouseout', promptHide, this.CB['timeBoBg']);
			} else {
				this.isTimeButtonDown = false;
				timeObj['removeListenerInside'] = true;
				timeClickObj['removeListenerInside'] = true;
			}
			this.slider(timeObj);
			this.progressClick(timeClickObj);

		},
		/*
			内部函数
			注册调节框上单击事件，包含音量调节框和播放时度调节框
		*/
		progressClick: function(obj) {
			/*
				refer:参考对象
				fun:返回函数
				refer:参考元素，即背景
				grossValue:调用的参考值类型
				pd:
			*/
			//建立参考元素的mouseClick事件，用来做为鼠标在其上按下时触发的状态
			var thisTemp = this;
			var referMouseClick = function(event) {
				var referX = thisTemp.client(event)['x'] - thisTemp.getCoor(obj['refer'])['x'];
				var rWidth = obj['refer'].offsetWidth;
				var grossValue = 0;
				if (obj['grossValue'] == 'volume') {
					grossValue = 100;
				} else {
					if (thisTemp.V) {
						grossValue = thisTemp.V.duration;
						if (isNaN(grossValue) || parseInt(grossValue) < 0.2) {
							grossValue = thisTemp.vars['duration'];
						}
						if(thisTemp.vars['forceduration']>0){
							grossValue=thisTemp.vars['forceduration'];
						}
					}
				}
				var nowZ = parseInt(referX * grossValue / rWidth);
				if (obj['fun']) {
					if (obj['grossValue'] === 'time') {
						var sliderXY = thisTemp.getCoor(thisTemp.CB['timeButton']);
						sliderLeft = sliderXY['x'];
						if (!thisTemp.checkSlideLeft(referX, sliderLeft, rWidth)) {
							return;
						}
						var bimeButtonWB = thisTemp.CB['timeButton'].offsetWidth * 0.5;
						thisTemp.css(thisTemp.CB['timeButton'], 'left', (referX - bimeButtonWB) + 'px');
						thisTemp.css(thisTemp.CB['timeProgress'], 'width', (referX) + 'px');
					}
					obj['fun'](nowZ);
				}
			};
			if (this.isUndefined(obj['removeListenerInside'])) {
				this.addListenerInside('click', referMouseClick, obj['refer']);
			} else {
				this.removeListenerInside('click', referMouseClick, obj['refer']);
			}

		},

		/*
			内部函数
			共用的注册滑块事件
		*/
		slider: function(obj) {
			/*
				obj={
					slider:滑块元素
					follow:跟随滑块的元素
					refer:参考元素，即背景
					grossValue:调用的参考值类型
					startFun:开始调用的元素
					monitorFun:监听函数
					endFun:结束调用的函数
					overFun:鼠标放上去后调用的函数
					pd:是否需要修正
				}
			*/
			var thisTemp = this;
			var clientX = 0,
			criterionWidth = 0,
			sliderLeft = 0,
			referLeft = 0;
			var value = 0;
			var calculation = function() { //根据滑块的left计算百分比
				var sLeft = parseInt(thisTemp.css(obj['slider'], 'left'));
				var rWidth = obj['refer'].offsetWidth - obj['slider'].offsetWidth;
				var grossValue = 0;
				if (thisTemp.isUndefined(sLeft) || isNaN(sLeft)) {
					sLeft = 0;
				}
				if (obj['grossValue'] == 'volume') {
					grossValue = 100;
				} else {
					if (thisTemp.V) {
						grossValue = thisTemp.V.duration;
					}
				}
				return parseInt(sLeft * grossValue / rWidth);
			};
			var mDown = function(event) {
				thisTemp.addListenerInside('mousemove', mMove, document);
				thisTemp.addListenerInside('mouseup', mUp, document);
				var referXY = thisTemp.getCoor(obj['refer']);
				var sliderXY = thisTemp.getCoor(obj['slider']);
				clientX = thisTemp.client(event)['x'];
				referLeft = referXY['x'];
				sliderLeft = sliderXY['x'];
				criterionWidth = clientX - sliderLeft;
				if (obj['startFun']) {
					obj['startFun'](calculation());
				}
			};
			var mMove = function(event) {
				clientX = thisTemp.client(event)['x'];
				var newX = clientX - criterionWidth - referLeft;
				if (newX < 0) {
					newX = 0;
				}
				if (newX > obj['refer'].offsetWidth - obj['slider'].offsetWidth) {
					newX = obj['refer'].offsetWidth - obj['slider'].offsetWidth;
				}
				if (obj['slider'] === thisTemp.CB['timeButton']) {
					if (!thisTemp.checkSlideLeft(newX, sliderLeft, obj['refer'].offsetWidth)) {
						return;
					}
				}
				thisTemp.css(obj['slider'], 'left', newX + 'px');
				thisTemp.css(obj['follow'], 'width', (newX + obj['slider'].offsetWidth * 0.5) + 'px');
				var nowZ = calculation();
				if (obj['monitorFun']) {
					obj['monitorFun'](nowZ);
				}
			};
			var mUp = function(event) {
				thisTemp.removeListenerInside('mousemove', mMove, document);
				thisTemp.removeListenerInside('mouseup', mUp, document);
				if (obj['endFun']) {
					obj['endFun'](calculation());
				}
			};
			var mOver = function(event) {
				if (obj['overFun']) {
					obj['overFun'](calculation());
				}

			};
			if (this.isUndefined(obj['removeListenerInside'])) {
				this.addListenerInside('mousedown', mDown, obj['slider']);
				this.addListenerInside('mouseover', mOver, obj['slider']);
			} else {
				this.removeListenerInside('mousedown', mDown, obj['slider']);
				this.removeListenerInside('mouseover', mOver, obj['slider']);
			}
		},
		/*
			内部函数
			判断是否可以拖动进度按钮或点击进度栏
		*/
		checkSlideLeft: function(newX, sliderLeft, refer) {
			var timeSA = this.ckplayerConfig['config']['timeScheduleAdjust'];
			switch (timeSA) {
			case 0:
				return false;
				break;
			case 2:
				if (newX < sliderLeft) {
					return false;
				}
				break;
			case 3:
				if (newX > sliderLeft) {
					return false;
				}
				break;
			case 4:
				if (!this.timeSliderLeftTemp) {
					this.timeSliderLeftTemp = sliderLeft / refer;
				}
				if (newX < this.timeSliderLeftTemp * refer) {
					return false;
				}
				break;
			case 5:
				if (!this.timeSliderLeftTemp) {
					this.timeSliderLeftTemp = sliderLeft / refer;
				} else {
					var timeSliderMax = sliderLeft / refer;
					if (timeSliderMax > this.timeSliderLeftTemp) {
						this.timeSliderLeftTemp = timeSliderMax;
					}
				}
				if (newX > this.timeSliderLeftTemp * refer) {
					return false;
				}
				break;
			default:
				return true;
				break;
			}
			return true;
		},
		/*
			内部函数
			显示loading
		*/
		loadingStart: function(rot) {
			var thisTemp = this;
			if (this.isUndefined(rot)) {
				rot = true;
			}
			if (this.showFace) {
				this.css(thisTemp.CB['loading'], 'display', 'none');
			}
			if (this.timerLoading != null) {
				if (this.timerLoading.runing) {
					this.timerLoading.stop();
				}
				this.timerLoading = null;
			}
			var buffer = 0;
			var loadingFun = function() {
				var nowRotate = '0';
				try {
					nowRotate = thisTemp.css(thisTemp.CB['loadingCanvas'], 'transform') || thisTemp.css(thisTemp.CB['loadingCanvas'], '-ms-transform') || thisTemp.css(thisTemp.CB['loadingCanvas'], '-moz-transform') || thisTemp.css(thisTemp.CB['loadingCanvas'], '-webkit-transform') || thisTemp.css(thisTemp.CB['loadingCanvas'], '-o-transform') || '0';
				} catch(event) {}
				nowRotate = parseInt(nowRotate.replace('rotate(', '').replace('deg);', ''));
				nowRotate += 4;
				if (nowRotate > 360) {
					nowRotate = 0;
				}
				if (thisTemp.showFace) {
					thisTemp.css(thisTemp.CB['loadingCanvas'], {
						transform: 'rotate(' + nowRotate + 'deg)',
						msTransform: 'rotate(' + nowRotate + 'deg)',
						mozTransform: 'rotate(' + nowRotate + 'deg)',
						webkitTransform: 'rotate(' + nowRotate + 'deg)',
						oTransform: 'rotate(' + nowRotate + 'deg)'
					});
				}
				buffer++;
				if (buffer >= 99) {
					buffer = 99;
				}
				thisTemp.sendJS('buffer', buffer);
			};
			if (rot) {
				this.timerLoading = new this.timer(10, loadingFun);
				//this.timerLoading.start();
				if (this.showFace) {
					this.css(thisTemp.CB['loading'], 'display', 'block');
				}
			} else {
				thisTemp.sendJS('buffer', 100);
			}
		},
		/*
			内部函数
			判断是否需要显示上一集和下一集
		*/
		showFrontNext: function() {
			if (!this.showFace) {
				return;
			}
			if (this.vars['front']) {
				this.css([this.CB['front'], this.CB['frontLine']], 'display', 'block');
			} else {
				this.css([this.CB['front'], this.CB['frontLine']], 'display', 'none');
			}
			if (this.vars['next']) {
				this.css([this.CB['next'], this.CB['nextLine']], 'display', 'block');
			} else {
				this.css([this.CB['next'], this.CB['nextLine']], 'display', 'none');
			}
		},
		/*
			内部函数
			显示提示语
		*/
		promptShow: function(ele, data) {
			if (!this.showFace) {
				return;
			}
			var obj = {};
			if (ele || data) {
				if (!this.isUndefined(data)) {
					obj = data;
				} else {
					var offsetCoor = this.getCoor(ele);
					obj = {
						title: this.getDataset(ele, 'title'),
						x: offsetCoor['x'] + ele.offsetWidth * 0.5,
						y: offsetCoor['y']
					};
				}
				this.CB['prompt'].innerHTML = obj['title'];
				this.css(this.CB['prompt'], 'display', 'block');
				var promoptWidth = this.getStringLen(obj['title']) * 10;
				this.css(this.CB['promptBg'], 'width', promoptWidth + 'px');
				this.css(this.CB['prompt'], 'width', promoptWidth + 'px');
				promoptWidth += 10;
				var x = obj['x'] - (promoptWidth * 0.5);
				var y = this.PD.offsetHeight - obj['y'] + 8;
				if (x < 0) {
					x = 0;
				}
				if (x > this.PD.offsetWidth - promoptWidth) {
					x = this.PD.offsetWidth - promoptWidth;
				}
				this.css([this.CB['promptBg'], this.CB['prompt']], {
					display: 'block',
					left: x + 'px',
					bottom: y + 'px'
				});
			} else {
				this.css([this.CB['promptBg'], this.CB['prompt']], {
					display: 'none'
				});
			}
		},
		/*
			内部函数
			监听错误
		*/
		timerErrorFun: function() {
			var thisTemp = this;
			this.errorSend = false;
			var clearIntervalError = function(event) {
				if (thisTemp.timerError != null) {
					if (thisTemp.timerError.runing) {
						thisTemp.timerError.stop();
					}
					thisTemp.timerError = null;
				}
			};
			var errorFun = function(event) {
				clearIntervalError();
				thisTemp.error = true;
				//提取错误播放地址
				thisTemp.errorUrl = thisTemp.getVideoUrl();
				//提取错误播放地址结束
				if (!thisTemp.errorSend) {
					thisTemp.errorSend = true;
					thisTemp.sendJS('error');
				}
				if (thisTemp.showFace) {
					thisTemp.css(thisTemp.CB['errorText'], 'display', 'block');
					thisTemp.css(thisTemp.CB['pauseCenter'], 'display', 'none');
					thisTemp.css(thisTemp.CB['loading'], 'display', 'none');
				}
				thisTemp.V.removeAttribute('poster');
				thisTemp.resetPlayer();
			};
			var errorListenerFun = function(event) {
				setTimeout(function() {
					if (isNaN(thisTemp.V.duration)) {
						errorFun(event);
					}
				},
				500);

			};
			if (!this.errorAdd) {
				this.errorAdd = true;
				this.addListenerInside('error', errorListenerFun, this.V);
			}
			clearIntervalError();
			var timerErrorFun = function() {
				if (thisTemp.V && parseInt(thisTemp.V.networkState) == 3) {
					errorFun();
				}
			};
			this.timerError = new this.timer(this.config['errorTime'], timerErrorFun);
			//this.timerError.start();
		},
		/*
			内部函数
			构建判断全屏还是非全屏的判断
		*/
		judgeFullScreen: function() {
			var thisTemp = this;
			if (this.timerFull != null) {
				if (this.timerFull.runing) {
					this.timerFull.stop();
				}
				this.timerFull = null;
			}
			var fullFun = function() {
				thisTemp.isFullScreen();
			};
			this.timerFull = new this.timer(20, fullFun);
		},
		/*
			内部函数
			判断是否是全屏
		*/
		isFullScreen: function() {
			if (!this.showFace) {
				return;
			}
			var fullState = document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen || document.msFullscreenElement;
			if (fullState && !this.full) {
				this.full = true;
				this.sendJS('full', true);
				this.elementCoordinate();
				this.css(this.CB['full'], 'display', 'none');
				this.css(this.CB['escFull'], 'display', 'block');
				if (this.vars['live'] == 0) {
					this.timeUpdateHandler();
				}
				this.PD.appendChild(this.CB['menu']);
			}
			if (!fullState && this.full) {
				this.full = false;
				this.sendJS('full', false);
				this.elementCoordinate();
				this.css(this.CB['full'], 'display', 'block');
				this.css(this.CB['escFull'], 'display', 'none');
				if (this.timerFull != null) {
					if (this.timerFull.runing) {
						this.timerFull.stop();
					}
					this.timerFull = null;
				}
				if (this.vars['live'] == 0) {
					this.timeUpdateHandler();
				}
				this.body.appendChild(this.CB['menu']);
			}
		},
		/*
			内部函数
			构建右键内容及注册相关动作事件
		*/
		newMenu: function() {
			var thisTemp = this;
			var i = 0;
			this.css(this.CB['menu'], {
				backgroundColor: '#FFFFFF',
				padding: '5px',
				position: 'absolute',
				left: '10px',
				top: '20px',
				display: 'none',
				zIndex: '999',
				color: '#A1A9BE',
				boxShadow: '2px 2px 3px #AAAAAA'
			});
			var mArr = this.contextMenu;
			var cMenu = this.ckplayerConfig['menu'];
			if (cMenu['name']) {
				if (cMenu['link']) {
					mArr[0] = [cMenu['name'], 'link', cMenu['link']];
				} else {
					mArr[0] = [cMenu['name'], 'default'];
				}
			}
			if (cMenu['version']) {
				mArr[1] = [cMenu['version'], 'default', 'line'];
			}
			if (cMenu['more']) {
				if (typeof(cMenu['more']) == 'object') {
					if (cMenu['more'].length > 0) {
						var moreArr = cMenu['more'];
						for (i = 0; i < moreArr.length; i++) {
							var mTemp = moreArr[i];
							var arrTemp = [];
							if (mTemp['name']) {
								arrTemp.push(mTemp['name']);
							}
							if (mTemp['clickEvent'] && mTemp['clickEvent'] != 'none') {
								var eveObj = this.clickEvent(mTemp['clickEvent']);
								arrTemp.push(eveObj['type']);
								if (eveObj['fun']) {
									arrTemp.push(eveObj['fun']);
								}
								if (eveObj['link']) {
									arrTemp.push(eveObj['link']);
								}
								if (eveObj['target']) {
									arrTemp.push(' target="' + eveObj['target'] + '"');
								}
							}
							if (mTemp['separatorBefore']) {
								arrTemp.push('line');
							}
							mArr.push(arrTemp);
						}
					}
				}
			}
			var html = '';
			for (i = 0; i < mArr.length; i++) {
				var me = mArr[i];
				switch (me[1]) {
				case 'default':
					html += '<p>' + me[0] + '</p>';
					break;
				case 'link':
					if (me[3]) {
						me[3] = 'target="' + me[3] + '"';
					}
					html += '<p><a href="' + me[2] + '"' + me[3] + '>' + me[0] + '</a></p>';
					break;
				case 'javaScript':
					html += '<p><a href="javascript:' + me[2] + '">' + me[0] + '</a></p>';
					break;
				case 'actionScript':
					html += '<p><a href="javascript:' + this.vars['variable'] + me[2].replace('thisTemp', '') + '">' + me[0] + '</a></p>';
					break;
				default:
					break;
				}
			}
			this.CB['menu'].innerHTML = html;
			var pArr = this.CB['menu'].childNodes;
			for (i = 0; i < pArr.length; i++) {
				this.css(pArr[i], {
					height: '30px',
					lineHeight: '30px',
					margin: '0px',
					fontFamily: this.fontFamily,
					fontSize: '12px',
					paddingLeft: '10px',
					paddingRight: '30px'
				});
				if (mArr[i][mArr[i].length - 1] == 'line') {
					this.css(pArr[i], 'borderBottom', '1px solid #e9e9e9');
				}
				var aArr = pArr[i].childNodes;
				for (var n = 0; n < aArr.length; n++) {
					if (aArr[n].localName == 'a') {
						this.css(aArr[n], {
							color: '#000000',
							textDecoration: 'none'
						});
					}
				}
			}
			this.PD.oncontextmenu = function(event) {
				var eve = event || window.event;
				var client = thisTemp.client(event);
				if (eve.button == 2) {
					eve.returnvalue = false;
					var x = client['x'] + thisTemp.pdCoor['x'] - 2;
					var y = client['y'] + thisTemp.pdCoor['y'] - 2;
					thisTemp.css(thisTemp.CB['menu'], {
						display: 'block',
						left: x + 'px',
						top: y + 'px'
					});
					return false;
				}
				return true;
			};
			var setTimeOutPClose = function() {
				if (setTimeOutP) {
					window.clearTimeout(setTimeOutP);
					setTimeOutP = null;
				}
			};
			var setTimeOutP = null;
			var mouseOut = function(event) {
				setTimeOutPClose();
				setTimeOutP = setTimeout(function(event) {
					thisTemp.css(thisTemp.CB['menu'], 'display', 'none');
				},
				500);
			};
			this.addListenerInside('mouseout', mouseOut, thisTemp.CB['menu']);
			var mouseOver = function(event) {
				setTimeOutPClose();
			};
			this.addListenerInside('mouseover', mouseOver, thisTemp.CB['menu']);

		},
		/*
			内部函数
			构建控制栏隐藏事件
		*/
		controlBarHide: function(hide) {
			var thisTemp = this;
			var client = {
				x: 0,
				y: 0
			},
			oldClient = {
				x: 0,
				y: 0
			};
			var cShow = true,
			force = false;
			var oldCoor = [0, 0];
			var controlBarShow = function(show) {
				if (show && !cShow && thisTemp.controlBarIsShow) {
					cShow = true;
					thisTemp.sendJS('controlBar', true);
					thisTemp.css(thisTemp.CB['controlBarBg'], 'display', 'block');
					thisTemp.css(thisTemp.CB['controlBar'], 'display', 'block');
					thisTemp.css(thisTemp.CB['timeProgressBg'], 'display', 'block');
					thisTemp.css(thisTemp.CB['timeBoBg'], 'display', 'block');
					thisTemp.changeVolume(thisTemp.volume);
					thisTemp.changeLoad();
					if (!thisTemp.timerBuffer) {
						thisTemp.bufferEdHandler();
					}
				} else {
					if (cShow) {
						cShow = false;
						var paused = thisTemp.getMetaDate()['paused'];
						if (force) {
							paused = false;
						}
						if (!paused) {
							thisTemp.sendJS('controlBar', false);
							thisTemp.css(thisTemp.CB['controlBarBg'], 'display', 'none');
							thisTemp.css(thisTemp.CB['controlBar'], 'display', 'none');
							thisTemp.css(thisTemp.CB['timeProgressBg'], 'display', 'none');
							thisTemp.css(thisTemp.CB['timeBoBg'], 'display', 'none');
							thisTemp.promptShow(false);

						}
					}
				}
			};
			var cbarFun = function(event) {
				if (client['x'] == oldClient['x'] && client['y'] == oldClient['y']) {
					var cdH = parseInt(thisTemp.CD.offsetHeight);
					if ((client['y'] < cdH - 50 || client['y'] > cdH - 2) && cShow && !thisTemp.getMetaDate()['paused']) {
						controlBarShow(false);
					}
				} else {
					if (!cShow) {
						controlBarShow(true);
					}
				}
				oldClient = {
					x: client['x'],
					y: client['y']
				}
			};
			this.timerCBar = new this.timer(2000, cbarFun);
			var cdMove = function(event) {
				var getClient = thisTemp.client(event);
				client['x'] = getClient['x'];
				client['y'] = getClient['y'];
				if (!cShow) {
					controlBarShow(true);
				}
			};
			this.addListenerInside('mousemove', cdMove, thisTemp.CD);
			this.addListenerInside('ended', cdMove);
			this.addListenerInside('resize', cdMove, window);
			if (hide === true) {
				cShow = true;
				force = true;
				controlBarShow(false);
			}
			if (hide === false) {
				cShow = false;
				force = true;
				controlBarShow(true);
			}
		},

		/*
			内部函数
			注册键盘按键事件
		*/
		keypress: function() {
			var thisTemp = this;
			var keyDown = function(eve) {
				var keycode = eve.keyCode || eve.which;
				if (thisTemp.adPlayerPlay) {
					return;
				}
				switch (keycode) {
					case 32:
						thisTemp.playOrPause();
						break;
					case 37:
						thisTemp.fastBack();
						break;
					case 39:
						thisTemp.fastNext();
						break;
					case 38:
						now = thisTemp.volume + thisTemp.ckplayerConfig['config']['volumeJump'];
						thisTemp.changeVolume(now > 1 ? 1 : now);
						break;
					case 40:
						now = thisTemp.volume - thisTemp.ckplayerConfig['config']['volumeJump'];
						thisTemp.changeVolume(now < 0 ? 0 : now);
						break;
					default:
						break;
				}
			};
			this.addListenerInside('keydown', keyDown, window || document);
		},
		/*
			内部函数
			注册倍速相关
		*/
		playbackRate: function() {
			if (!this.showFace || !this.ckplayerConfig['config']['playbackRate']) {
				return;
			}
			var thisTemp = this;
			var vArr = this.playbackRateArr;
			var html = '';
			var nowD = ''; //当前的倍速
			var i = 0;
			if (!nowD) {
				nowD = vArr[this.playbackRateDefault][1];
			}
			if (vArr.length > 1) {
				var zlen = 0;
				for (i = 0; i < vArr.length; i++) {
					html = '<p>' + vArr[i][1] + '</p>' + html;
					var dlen = this.getStringLen(vArr[i][1]);
					if (dlen > zlen) {
						zlen = dlen;
					}
				}
				if (html) {
					html += '<p>' + nowD + '</p>';
				}
				this.CB['playbackrate'].innerHTML = nowD;
				this.CB['playbackrateP'].innerHTML = html;
				this.css([this.CB['playbackrate'], this.CB['playbackrateLine']], 'display', 'block');
				var pArr = this.CB['playbackrateP'].childNodes;
				for (var i = 0; i < pArr.length; i++) {
					var fontColor = '#FFFFFF';
					if (pArr[i].innerHTML == nowD) {
						fontColor = '#0782F5';
					}
					this.css(pArr[i], {
						color: fontColor,
						margin: '0px',
						padding: '0px',
						fontSize: '14px',
						textAlign:'center'
					});
					if (i < pArr.length - 1) {
						this.css(pArr[i], 'borderBottom', '1px solid #282828')
					}
					var defClick = function(event) {
						if (nowD != this.innerHTML) {
							thisTemp.css(thisTemp.CB['playbackrateP'], 'display', 'none');
							thisTemp.newPlaybackrate(this.innerHTML);
							thisTemp.sendJS('clickEvent', 'actionScript->newPlaybackrate');
						}
					};
					this.addListenerInside('click', defClick, pArr[i]);

				}
				var pW = (zlen * 10) + 10;
				this.css(this.CB['playbackrateP'], {
					width: pW + 'px'
				});
				this.css(this.CB['playbackrate'], {
					width: pW + 'px'
				});
				this.buttonWidth['playbackrate'] = this.CB['playbackrate'].offsetWidth;
			} else {
				this.CB['playbackrate'].innerHTML = '';
				this.CB['playbackrateP'].innerHTML = '';
				this.css([this.CB['playbackrate'], this.CB['playbackrateLine']], 'display', 'none');
			}
		},
		/*
			内部函数
			注册切换倍速播放相关事件
		*/
		addPlaybackrate: function() {
			var thisTemp = this;
			var setTimeOutP = null;
			var defClick = function(event) {
				thisTemp.css(thisTemp.CB['playbackrateP'], {
					left: thisTemp.getCoor(thisTemp.CB['playbackrate'])['x'] + 'px',
					display: 'block'
				});
			};
			this.addListenerInside('click', defClick, this.CB['playbackrate']);
			var defMouseOut = function(event) {
				if (setTimeOutP) {
					window.clearTimeout(setTimeOutP);
					setTimeOutP = null;
				}
				setTimeOutP = setTimeout(function(event) {
					thisTemp.css(thisTemp.CB['playbackrateP'], 'display', 'none');
				},
				500);
			};
			this.addListenerInside('mouseout', defMouseOut, thisTemp.CB['playbackrateP']);
			var defMouseOver = function(event) {
				if (setTimeOutP) {
					window.clearTimeout(setTimeOutP);
					setTimeOutP = null;
				}
			};
			this.addListenerInside('mouseover', defMouseOver, thisTemp.CB['playbackrateP']);
		},
		/*
			内部函数
			切换倍速后发生的动作
		*/
		newPlaybackrate: function(title) {
			var vArr = this.playbackRateArr;
			var nVArr = [];
			var i = 0;
			for (i = 0; i < vArr.length; i++) {
				var v = vArr[i];
				if (v[1] == title) {
					this.playbackRateDefault = i;
					this.V.playbackRate = v[0];
					if (this.showFace) {
						this.CB['playbackrate'].innerHTML = v[1];
						this.playbackRate();
					}
					this.sendJS('playbackRate', v);
					this.playbackRateTemp=v[0];
				}
			}
		},
		/*
			内部函数
			注册多字幕切换相关
		*/
		subtitleSwitch: function() {
			if (!this.showFace || !this.ckplayerConfig['config']['subtitle']) {
				return;
			}
			var thisTemp = this;
			var vArr = this.vars['cktrack'];//字幕数组
			if(this.typeString(vArr)!='array'){
				return;
			}
			if(vArr[0][1]==''){
				return;
			}
			var html = '';
			var nowD = ''; //当前的字幕
			var i = 0;
			if (!nowD) {
				if(this.subtitlesTemp==-1){
					var indexN=0;
					for(var i=0;i<vArr.length;i++){
						var li=vArr[i];
						if(li.length==3 && li[2]>indexN){
							indexN=li[2];
							this.subtitlesTemp=i;
						}
					}
				}
				nowD = vArr[this.subtitlesTemp][1];
			}
			if (vArr.length > 1) {
				var zlen = 0;
				for (i = 0; i < vArr.length; i++) {
					html += '<p>' + vArr[i][1] + '</p>';
					var dlen = this.getStringLen(vArr[i][1]);
					if (dlen > zlen) {
						zlen = dlen;
					}
				}
				if (html) {
					html += '<p>' + nowD + '</p>';
				}
				
				this.CB['subtitles'].innerHTML = nowD;
				this.CB['subtitlesP'].innerHTML = html;
				this.css([this.CB['subtitles'], this.CB['subtitlesLine']], 'display', 'block');
				var pArr = this.CB['subtitlesP'].childNodes;
				for (var i = 0; i < pArr.length; i++) {
					var fontColor = '#FFFFFF';
					if (pArr[i].innerHTML == nowD) {
						fontColor = '#0782F5';
					}
					this.css(pArr[i], {
						color: fontColor,
						margin: '0px',
						padding: '0px',
						fontSize: '14px'
					});
					if (i < pArr.length - 1) {
						this.css(pArr[i], 'borderBottom', '1px solid #282828')
					}
					var defClick = function(event) {
						if (nowD != this.innerHTML) {
							thisTemp.css(thisTemp.CB['subtitlesP'], 'display', 'none');
							thisTemp.newSubtitles(this.innerHTML);
							thisTemp.sendJS('clickEvent', 'actionScript->newPlaybackrate');
						}
					};
					this.addListenerInside('click', defClick, pArr[i]);

				}
				var pW = (zlen * 10) + 10;
				this.css(this.CB['subtitlesP'], {
					width: pW + 'px'
				});
				this.css(this.CB['subtitles'], {
					width: pW + 'px'
				});
				this.buttonWidth['subtitles'] = this.CB['subtitles'].offsetWidth;
			} else {
				this.CB['subtitles'].innerHTML = '';
				this.CB['subtitlesP'].innerHTML = '';
				this.css([this.CB['subtitles'], this.CB['subtitlesLine']], 'display', 'none');
			}
		},
		/*
			内部函数
			注册多字幕切换事件
		*/
		addSubtitles:function(){
			var thisTemp = this;
			var setTimeOutP = null;
			var defClick = function(event) {
				thisTemp.css(thisTemp.CB['subtitlesP'], {
					left: thisTemp.getCoor(thisTemp.CB['subtitles'])['x'] + 'px',
					display: 'block'
				});
			};
			this.addListenerInside('click', defClick, this.CB['subtitles']);
			var defMouseOut = function(event) {
				if (setTimeOutP) {
					window.clearTimeout(setTimeOutP);
					setTimeOutP = null;
				}
				setTimeOutP = setTimeout(function(event) {
					thisTemp.css(thisTemp.CB['subtitlesP'], 'display', 'none');
				},
				500);
			};
			this.addListenerInside('mouseout', defMouseOut, thisTemp.CB['subtitlesP']);
			var defMouseOver = function(event) {
				if (setTimeOutP) {
					window.clearTimeout(setTimeOutP);
					setTimeOutP = null;
				}
			};
			this.addListenerInside('mouseover', defMouseOver, thisTemp.CB['subtitlesP']);
		},
		/*
			接口函数:修改字幕，按数组编号来
			提供给外部api
		*/
		changeSubtitles: function(n) {
			if (!this.loaded || n < 0) {
				return;
			}
			var vArr = this.vars['cktrack'];//字幕数组
			if(this.typeString(vArr)!='array'){
				return;
			}
			if (this.playerType == 'flashplayer') {
				this.V.changeSubtitles(n);
				return;
			}
			if (vArr.length > n) {
				var arr = vArr[n];
				if (arr.length > 2) {
					var title = arr[1];
					if (title) {
						this.newSubtitles(title);
					}
				}
			}
		},
		/*
			接口函数：修改字幕大小
			提供给外部api
		*/
		changeSubtitlesSize:function(n){
			if (!this.loaded || n < 0) {
				return;
			}
			if (this.playerType == 'flashplayer') {
				this.V.changeSubtitlesSize(n);
				return;
			}
			this.trackFontSize=n;
			this.trackShowAgain();
		},
		/*
			当切换字幕时的动作 
		*/
		newSubtitles:function(title){
			var vArr = this.vars['cktrack'];//字幕数组
			var i = 0;
			for (i = 0; i < vArr.length; i++) {
				var v = vArr[i];
				if (v[1] == title) {
					this.subtitlesTemp=i;
					if (this.showFace) {
						this.CB['subtitles'].innerHTML = v[1];
						this.subtitleSwitch();
						this.loadTrack(i);
					}
					this.sendJS('subtitles', v);
				}
			}
		},
		/*
			内部函数
			构建清晰度按钮及切换事件(Click事件)
		*/
		definition: function() {
			if (!this.showFace || !this.ckplayerConfig['config']['definition']) {
				return;
			}
			var thisTemp = this;
			var vArr = this.VA;
			var dArr = [];
			var html = '';
			var nowD = ''; //当前的清晰度
			var i = 0;
			for (i = 0; i < vArr.length; i++) {
				var d = vArr[i][2];
				if (dArr.indexOf(d) == -1) {
					dArr.push(d);
				}
				if (this.V) {
					if (vArr[i][0] == this.V.currentSrc) {
						nowD = d;
					}
				}
			}
			if (!nowD) {
				nowD = dArr[0];
			}
			if (dArr.length > 1) {
				var zlen = 0;
				for (i = dArr.length - 1; i > -1; i--) {
					html = '<p>' + dArr[i] + '</p>' + html;
					var dlen = this.getStringLen(dArr[i]);
					if (dlen > zlen) {
						zlen = dlen;
					}
				}
				if (html) {
					html += '<p>' + nowD + '</p>';
				}
				this.CB['definition'].innerHTML = nowD;
				this.CB['definitionP'].innerHTML = html;
				this.css([this.CB['definition'], this.CB['definitionLine']], 'display', 'block');
				var pArr = this.CB['definitionP'].childNodes;
				for (var i = 0; i < pArr.length; i++) {
					var fontColor = '#FFFFFF';
					if (pArr[i].innerHTML == nowD) {
						fontColor = '#0782F5';
					}
					this.css(pArr[i], {
						color: fontColor,
						margin: '0px',
						padding: '0px',
						fontSize: '14px'
					});
					if (i < pArr.length - 1) {
						this.css(pArr[i], 'borderBottom', '1px solid #282828')
					}
					var defClick = function() {
						if (nowD != this.innerHTML) {
							thisTemp.css(thisTemp.CB['definitionP'], 'display', 'none');
							thisTemp.newDefinition(this.innerHTML);
						}
					};
					this.addListenerInside('click', defClick, pArr[i]);

				}
				var pW = (zlen * 10) + 10;
				this.css(this.CB['definitionP'], {
					width: pW + 'px'
				});
				this.css(this.CB['definition'], {
					width: pW + 'px'
				});
				this.buttonWidth['definition'] = this.CB['definition'].offsetWidth;
			} else {
				this.CB['definition'].innerHTML = '';
				this.CB['definitionP'].innerHTML = '';
				this.css([this.CB['definition'], this.CB['definitionLine']], 'display', 'none');
			}
		},
		/*
			内部函数
			注册清晰度相关事件
		*/
		addDefListener: function() {
			var thisTemp = this;
			var setTimeOutP = null;
			var defClick = function(event) {
				thisTemp.css(thisTemp.CB['definitionP'], {
					left: thisTemp.getCoor(thisTemp.CB['definition'])['x'] + 'px',
					display: 'block'
				});
			};
			this.addListenerInside('click', defClick, this.CB['definition']);
			var defMouseOut = function(event) {
				if (setTimeOutP) {
					window.clearTimeout(setTimeOutP);
					setTimeOutP = null;
				}
				setTimeOutP = setTimeout(function(event) {
					thisTemp.css(thisTemp.CB['definitionP'], 'display', 'none');
				},
				500);
			};
			this.addListenerInside('mouseout', defMouseOut, thisTemp.CB['definitionP']);
			var defMouseOver = function(event) {
				if (setTimeOutP) {
					window.clearTimeout(setTimeOutP);
					setTimeOutP = null;
				}
			};
			this.addListenerInside('mouseover', defMouseOver, thisTemp.CB['definitionP']);
		},
		/*
			接口函数
			提供给外部api
		*/
		changeDefinition: function(n) {
			if (!this.loaded || n < 0) {
				return;
			}
			if (this.playerType == 'flashplayer') {
				this.V.changeDefinition(n);
				return;
			}
			if (this.VA.length > n) {
				var arr = this.VA[n];
				if (arr.length > 3) {
					var title = arr[2];
					if (title) {
						this.newDefinition(title);
					}
				}
			}
		},
		/*
			内部函数
			切换清晰度后发生的动作
		*/
		newDefinition: function(title) {
			var vArr = this.VA;
			var nVArr = [];
			var i = 0;
			for (i = 0; i < vArr.length; i++) {
				var v = vArr[i];
				if (v[2] == title) {
					nVArr.push(v);
					this.sendJS('definitionChange', i + '');
				}
			}
			if (nVArr.length < 1) {
				return;
			}
			if (this.V != null && this.needSeek == 0) {
				this.needSeek = this.V.currentTime;
			}
			if (this.getFileExt(nVArr[0][0]) != '.m3u8') {
				this.isM3u8 = false;
			}
			if (!this.isM3u8) {
				if (nVArr.length == 1) {
					this.V.innerHTML = '';
					this.V.src = nVArr[0][0];
					this.V.currentSrc = nVArr[0][0];
				} else {
					var source = '';
					nVArr = this.arrSort(nVArr);
					for (i = 0; i < nVArr.length; i++) {
						var type = '';
						var va = nVArr[i];
						if (va[1]) {
							type = ' type="' + va[1] + '"';
						}
						source += '<source src="' + va[0] + '"' + type + '>';
					}
					this.V.removeAttribute('src');
					this.V.innerHTML = source;
					this.V.currentSrc = nVArr[0][0];
				}
			} else {
				this.embedHls(vArr[0][0], this.vars['autoplay']);
			}
			this.V.autoplay = 'autoplay';
			this.V.load();
			if (this.playbackRateTemp!=1) {
				this.V.playbackRate = this.playbackRateTemp; //定义倍速
			}
			this.timerErrorFun();
		},
		/*
			内置函数
			播放hls
		*/
		embedHls: function(url, autoplay) {
			var thisTemp = this;
			thisTemp.hlsAutoPlay=autoplay;
			if (Hls.isSupported()) {
				var hls = new Hls();
				hls.loadSource(url);
				hls.attachMedia(this.V);
				hls.on(Hls.Events.MANIFEST_PARSED,
				function() {
					thisTemp.playerLoad();
					if (autoplay) {
						thisTemp.videoPlay();
					}
				});
			}
		},
		/*
			内部函数
			构建提示点
		*/
		prompt: function() {
			if (!this.showFace) {
				return;
			}
			var thisTemp = this;
			var prompt = this.vars['promptSpot'];
			if (prompt == null || this.promptArr.length > 0) {
				return;
			}
			var showPrompt = function(event) {
				if (thisTemp.promptElement == null) {
					var random2 = 'prompte' + thisTemp.randomString(5);
					var ele2 = document.createElement('div');
					ele2.className = random2;
					thisTemp.PD.appendChild(ele2);
					thisTemp.promptElement = thisTemp.getByElement(random2);
					thisTemp.css(thisTemp.promptElement, {
						overflowX: 'hidden',
						lineHeight: '22px',
						fontSize: '14px',
						color: '#FFFFFF',
						position: 'absolute',
						display: 'block',
						zIndex: '90'
					});
				}
				var pcon = thisTemp.getPromptTest();
				var pW = pcon['pW'],
				pT = pcon['pT'],
				pL = parseInt(thisTemp.css(this, 'left')) - parseInt(pW * 0.5);
				if (pcon['pL'] > 10) {
					pL = pcon['pL'];
				}
				if (pL < 0) {
					pL = 0;
				}
				thisTemp.css(thisTemp.promptElement, {
					width: pW + 'px',
					left: ( - pW - 10) + 'px',
					display: 'block'
				});
				thisTemp.promptElement.innerHTML = thisTemp.getDataset(this, 'words');
				thisTemp.css(thisTemp.promptElement, {
					left: pL + 'px',
					top: (pT - thisTemp.promptElement.offsetHeight - 10) + 'px'
				});
			};
			var hidePrompt = function(event) {
				if (thisTemp.promptElement != null) {
					thisTemp.css(thisTemp.promptElement, {
						display: 'none'
					});
				}
			};
			var i = 0;
			for (i = 0; i < prompt.length; i++) {
				var pr = prompt[i];
				var words = pr['words'];
				var time = pr['time'];
				var random = 'prompt' + this.randomString(5);
				var ele = document.createElement('div');
				ele.className = random;
				this.CB['timeBoBg'].appendChild(ele);
				var div = this.getByElement(random);
				div.setAttribute('data-time', time);
				div.setAttribute('data-words', words);
				this.css(div, {
					width: '6px',
					height: '6px',
					backgroundColor: '#FFFFFF',
					position: 'absolute',
					top: '4px',
					left: '-100px',
					display: 'none',
					zIndex: '1',
					borderRadius: '6px'
				});

				this.addListenerInside('mouseover', showPrompt, div);
				this.addListenerInside('mouseout', hidePrompt, div);
				this.promptArr.push(div);
			}
			this.changePrompt();
		},
		/*
			内部函数
			计算提示文本的位置
		*/
		getPromptTest: function() {
			var pW = this.previewWidth,
			pT = this.getCoor(this.CB['timeButton'])['y'],
			pL = 0;
			if (this.previewTop != null) {
				pT -= parseInt(this.css(this.previewTop, 'height'));
				pL = parseInt(this.css(this.previewTop, 'left'));
			} else {
				pT -= 35;
			}
			pL += 2;
			if (pL < 0) {
				pL = 0;
			}
			if (pL > this.PD.offsetWidth - pW) {
				pL = this.PD.offsetWidth - pW;
			}
			return {
				pW: pW,
				pT: pT,
				pL: pL
			};
		},
		/*
			内部函数
			删除提示点
		*/
		deletePrompt: function() {
			var arr = this.promptArr;
			if (arr.length > 0) {
				for (var i = 0; i < arr.length; i++) {
					if (arr[i]) {
						this.deleteChild(arr[i]);
					}
				}
			}
			this.promptArr = [];
		},
		/*
			内部函数
			计算提示点坐标
		*/
		changePrompt: function() {
			if (this.promptArr.length == 0) {
				return;
			}
			var arr = this.promptArr;
			var duration = this.getMetaDate()['duration'];
			var bw = this.CB['timeBoBg'].offsetWidth;
			for (var i = 0; i < arr.length; i++) {
				var time = parseInt(this.getDataset(arr[i], 'time'));
				var left = parseInt(time * bw / duration) - parseInt(arr[i].offsetWidth * 0.5);
				if (left < 0) {
					left = 0;
				}
				if (left > bw - parseInt(arr[i].offsetWidth * 0.5)) {
					left = bw - parseInt(arr[i].offsetWidth * 0.5);
				}
				this.css(arr[i], {
					left: left + 'px',
					display: 'block'
				});
			}
		},
		/*
			内部函数
			构建预览图片效果
		*/
		preview: function(obj) {
			var thisTemp = this;
			var preview = {
				file: null,
				scale: 0
			};
			preview = this.standardization(preview, this.vars['preview']);
			if (preview['file'] == null || preview['scale'] <= 0) {
				return;
			}
			var srcArr = preview['file'];
			if (this.previewStart == 0) { //如果还没有构建，则先进行构建
				this.previewStart = 1;
				if (srcArr.length > 0) {
					var i = 0;
					var imgW = 0,
					imgH = 0;
					var random = thisTemp.randomString(10);
					var loadNum = 0;
					var loadImg = function(i) {
						srcArr[i] = thisTemp.getNewUrl(srcArr[i]);
						var n = 0;
						var img = new Image();
						img.src = srcArr[i];
						img.className = random + i;
						img.onload = function(event) {
							loadNum++;
							if (thisTemp.previewDiv == null) { //如果没有建立DIV，则建
								imgW = img.width;
								imgH = img.height;
								thisTemp.previewWidth = parseInt(imgW * 0.1);
								var ele = document.createElement('div');
								ele.className = random;
								thisTemp.PD.appendChild(ele);
								thisTemp.previewDiv = thisTemp.getByElement(random);
								var eleTop = (obj['y'] - parseInt(imgH * 0.1) + 2);
								thisTemp.css(thisTemp.previewDiv, {
									width: srcArr.length * imgW * 10 + 'px',
									height: parseInt(imgH * 0.1) + 'px',
									backgroundColor: '#000000',
									position: 'absolute',
									left: '0px',
									top: eleTop + 'px',
									display: 'none',
									zIndex: '80'
								});
								ele.setAttribute('data-x', '0');
								ele.setAttribute('data-y', eleTop);
								var ele2 = document.createElement('div');
								ele2.className = random + 'd2';
								thisTemp.PD.appendChild(ele2);
								thisTemp.previewTop = thisTemp.getByElement(ele2.className);
								thisTemp.css(thisTemp.previewTop, {
									width: parseInt(imgW * 0.1) + 'px',
									height: parseInt(imgH * 0.1) + 'px',
									position: 'absolute',
									border: '5px solid ' + thisTemp.css(thisTemp.CB['timeProgress'], 'backgroundColor'),
									left: '0px',
									top: (obj['y'] - parseInt(imgH * 0.1) + 2) + 'px',
									display: 'none',
									zIndex: '81'
								});
								var html = '';
								for (n = 0; n < srcArr.length; n++) {
									html += thisTemp.newCanvas(random + n, imgW * 10, parseInt(imgH * 0.1))
								}
								thisTemp.previewDiv.innerHTML = html;
							}
							thisTemp.previewDiv.appendChild(img);
							var cimg = thisTemp.getByElement(img.className);
							var canvas = thisTemp.getByElement(img.className + '-canvas');
							var context = canvas.getContext('2d');
							var sx = 0,
							sy = 0,
							x = 0,
							h = parseInt(imgH * 0.1);
							for (n = 0; n < 100; n++) {
								x = parseInt(n * imgW * 0.1);
								context.drawImage(cimg, sx, sy, parseInt(imgW * 0.1), h, x, 0, parseInt(imgW * 0.1), h);
								sx += parseInt(imgW * 0.1);
								if (sx >= imgW) {
									sx = 0;
									sy += h;
								}
								thisTemp.css(cimg, 'display', 'none');
							}
							if (loadNum == srcArr.length) {
								thisTemp.previewStart = 2;
							} else {
								i++;
								loadImg(i);
							}
						};
					};
				}
				loadImg(i);
				return;
			}
			if (this.previewStart == 2) {
				var isTween = true;
				var nowNum = parseInt(obj['time'] / this.vars['preview']['scale']);
				var numTotal = parseInt(thisTemp.getMetaDate()['duration'] / this.vars['preview']['scale']);
				if (thisTemp.css(thisTemp.previewDiv, 'display') == 'none') {
					isTween = false;
				}
				thisTemp.css(thisTemp.previewDiv, 'display', 'block');
				var imgWidth = thisTemp.previewDiv.offsetWidth * 0.01 / srcArr.length;
				var left = (imgWidth * nowNum) - obj['x'] + parseInt(imgWidth * 0.5),
				top = obj['y'] - thisTemp.previewDiv.offsetHeight;
				thisTemp.css(thisTemp.previewDiv, 'top', top + 2 + 'px');
				var topLeft = obj['x'] - parseInt(imgWidth * 0.5);
				var timepieces = 0;
				if (topLeft < 0) {
					topLeft = 0;
					timepieces = obj['x'] - topLeft - imgWidth * 0.5;
				}
				if (topLeft > thisTemp.PD.offsetWidth - imgWidth) {
					topLeft = thisTemp.PD.offsetWidth - imgWidth;
					timepieces = obj['x'] - topLeft - imgWidth * 0.5;
				}
				if (left < 0) {
					left = 0;
				}
				if (left > numTotal * imgWidth - thisTemp.PD.offsetWidth) {
					left = numTotal * imgWidth - thisTemp.PD.offsetWidth;
				}
				thisTemp.css(thisTemp.previewTop, {
					left: topLeft + 'px',
					top: top + 2 + 'px',
					display: 'block'
				});
				if (thisTemp.previewTop.offsetHeight > thisTemp.previewDiv.offsetHeight) {
					thisTemp.css(thisTemp.previewTop, {
						height: thisTemp.previewDiv.offsetHeight - (thisTemp.previewTop.offsetHeight - thisTemp.previewDiv.offsetHeight) + 'px'
					});
				}
				if (this.previewTween != null) {
					this.animatePause(this.previewTween);
					this.previewTween = null
				}
				var nowLeft = parseInt(thisTemp.css(thisTemp.previewDiv, 'left'));
				var leftC = nowLeft + left;
				if (nowLeft == -(left + timepieces)) {
					return;
				}
				if (isTween) {
					var obj = {
						element: thisTemp.previewDiv,
						start: null,
						end: -(left + timepieces),
						speed: 0.3
					};
					this.previewTween = this.animate(obj);
				} else {
					thisTemp.css(thisTemp.previewDiv, 'left', -(left + timepieces) + 'px')
				}
			}
		},
		/*
			内部函数
			删除预览图节点
		*/
		deletePreview: function() {
			if (this.previewDiv != null) {
				this.deleteChild(this.previewDiv);
				this.previewDiv = null;
				this.previewStart = 0;
			}
		},
		/*
			内部函数
			修改视频地址，属性
		*/
		changeVideo: function() {
			if (!this.html5Video) {
				this.getVarsObject();
				this.V.newVideo(this.vars);
				return;
			}
			var vArr = this.VA;
			var v = this.vars;
			var i = 0;
			if (vArr.length < 1) {
				return;
			}
			if (this.V != null && this.needSeek == 0) {
				this.needSeek = this.V.currentTime;
			}
			if (v['poster']) {
				this.V.poster = v['poster'];
			} else {
				this.V.removeAttribute('poster');
			}
			if (v['loop']) {
				this.V.loop = 'loop';
			} else {
				this.V.removeAttribute('loop');
			}
			if (v['seek'] > 0) {
				this.needSeek = v['seek'];
			} else {
				this.needSeek = 0;
			}
			if (this.getFileExt(vArr[0][0]) != '.m3u8') {
				this.isM3u8 = false;
			}
			if (!this.isM3u8) {
				if (vArr.length == 1) {
					this.V.innerHTML = '';
					this.V.src = vArr[0][0];
				} else {
					var source = '';
					vArr = this.arrSort(vArr);
					for (i = 0; i < vArr.length; i++) {
						var type = '';
						var va = vArr[i];
						if (va[1]) {
							type = ' type="' + va[1] + '"';
						}
						source += '<source src="' + va[0] + '"' + type + '>';
					}
					this.V.removeAttribute('src');
					this.V.innerHTML = source;
				}
				//分析视频地址结束
				if (v['autoplay']) {
					this.V.autoplay = 'autoplay';
				} else {
					this.V.removeAttribute('autoplay');
				}
				this.V.load();
			} else {
				this.embedHls(vArr[0][0], v['autoplay']);
			}
			if (!this.isUndefined(v['volume'])) {
				this.changeVolume(v['volume']);
			}
			this.resetPlayer(); //重置界面元素
			this.timerErrorFun();
			//如果存在字幕则加载
			if (this.vars['cktrack']) {
				this.loadTrack();
			}
		},
		/*
			内部函数
			调整中间暂停按钮,缓冲loading，错误提示文本框的位置
		*/
		elementCoordinate: function() {
			this.pdCoor = this.getXY(this.PD);
			try {
				this.css(this.CB['pauseCenter'], {
					left: parseInt((this.PD.offsetWidth - 80) * 0.5) + 'px',
					top: parseInt((this.PD.offsetHeight - 80) * 0.5) + 'px'
				});
			} catch(event) {}
			try {
				this.css(this.CB['loading'], {
					left: parseInt((this.PD.offsetWidth - 60) * 0.5) + 'px',
					top: parseInt((this.PD.offsetHeight - 60) * 0.5) + 'px'
				});
			} catch(event) {}
			try {
				this.css(this.CB['errorText'], {
					left: parseInt((this.PD.offsetWidth - 120) * 0.5) + 'px',
					top: parseInt((this.PD.offsetHeight - 30) * 0.5) + 'px'
				});
			} catch(event) {}
			try {
				this.css(this.CB['logo'], {
					left: parseInt(this.PD.offsetWidth - this.CB['logo'].offsetWidth - 20) + 'px',
					top: '20px'
				});
			} catch(event) {}
			this.checkBarWidth();
		},
		/*
			内部函数
			当播放器尺寸变化时，显示和隐藏相关节点
		*/
		checkBarWidth: function() {
			if (!this.showFace) {
				return;
			}
			var controlBarW = this.CB['controlBar'].offsetWidth;
			var ele = [];
			ele.push([[this.CB['full'], this.CB['escFull'], this.CB['fullLine']], this.buttonWidth['full'] + 2, 'full']);
			if (this.vars['front'] != '') {
				ele.push([[this.CB['front'], this.CB['frontLine']], this.buttonWidth['front'] + 2]);
			}
			if (this.vars['next'] != '') {
				ele.push([[this.CB['next'], this.CB['nextLine']], this.buttonWidth['next'] + 2]);
			}
			if (this.CB['definition'].innerHTML != '') {
				ele.push([[this.CB['definition'], this.CB['definitionLine']], this.buttonWidth['definition'] + 2]);
			}
			if ((this.ckplayerConfig['config']['mobileVolumeBarShow'] || !this.isMobile()) && this.css(this.CB['volume'], 'display') != 'none') {
				ele.push([[this.CB['volume']], this.buttonWidth['volume']]);
				ele.push([[this.CB['mute'], this.CB['escMute'], this.CB['muteLine']], this.buttonWidth['mute'] + 2, 'mute']);
			}
			ele.push([[this.CB['timeText']], this.buttonWidth['timeText']]);
			ele.push([[this.CB['play'], this.CB['pause'], this.CB['playLine']], this.buttonWidth['play'] + 2, 'play']);

			var i = 0;
			var len = 0;
			var isc = true;
			//计算所有要显示的节点的总宽度
			for (var i = 0; i < ele.length; i++) {
				var nlen = ele[i][1];
				if (nlen > 2) {
					len += nlen;
				} else {
					isc = false;
				}
			}
			if (isc) {
				this.buttonLen = len;
				this.buttonArr = ele;
			}
			len = this.buttonLen;
			ele = this.buttonArr;
			for (var i = 0; i < ele.length; i++) {
				if (len > controlBarW) {
					len -= ele[i][1];
					this.css(ele[i][0], 'display', 'none');
				} else {
					this.css(ele[i][0], 'display', 'block');
					if (ele[i].length == 3) {
						var name = ele[i][2];
						switch (name) {
						case 'mute':
							if (this.volume == 0) {
								this.css(this.CB['mute'], 'display', 'none');
							} else {
								this.css(this.CB['escMute'], 'display', 'none');
							}
							break;
						case 'play':
							this.playShow(this.V.paused ? false: true);
							break;
						case 'full':
							if (this.full) {
								this.css(this.CB['full'], 'display', 'none');
							} else {
								this.css(this.CB['escFull'], 'display', 'none');
							}
							break;
						}
					}
				}
			}
		},
		/*
			内部函数
			初始化暂停或播放按钮
		*/
		initPlayPause: function() {
			if (!this.showFace) {
				return;
			}
			if (this.vars['autoplay']) {
				this.css([this.CB['play'], this.CB['pauseCenter']], 'display', 'none');
				this.css(this.CB['pause'], 'display', 'block');
			} else {
				this.css(this.CB['play'], 'display', 'block');
				if (this.css(this.CB['errorText'], 'display') == 'none') {
					this.css(this.CB['pauseCenter'], 'display', 'block');
				}
				this.css(this.CB['pause'], 'display', 'none');
			}
		},

		/*
			下面为监听事件
			内部函数
			监听元数据已加载
		*/
		loadedHandler: function() {
			this.loaded = true;
			if (this.vars['loaded'] != '') {
				try {
					eval(this.vars['loaded'] + '()');
				} catch(event) {
					this.log(event);
				}
			}
		},
		/*
			内部函数
			监听播放
		*/
		playingHandler: function() {
			this.playShow(true);
			//如果是第一次播放
			if (this.isFirstTimePlay && !this.isUndefined(this.advertisements['front'])) {
				this.isFirstTimePlay = false;
				//调用播放前置广告组件
				this.adI = 0;
				this.adType = 'front';
				this.adMuteInto();
				this.adIsVideoTime = true;
				this.adPlayStart = true;
				this.adVideoPlay = false;
				this.videoPause();
				this.advertisementsTime();
				this.advertisementsPlay();
				this.adSkipButtonShow();
				//调用播放前置广告组件结束
				return;
			}
			if (this.adPlayerPlay) {
				return;
			}
			//判断第一次播放结束
			if (this.needSeek > 0) {
				this.videoSeek(this.needSeek);
				this.needSeek = 0;
			}
			if (this.animatePauseArray.length > 0) {
				this.animateResume('pause');
			}
			if (this.playerType == 'html5video' && this.V != null && this.config['videoDrawImage']) {
				this.sendVCanvas();
			}
			if (!this.isUndefined(this.advertisements['pause']) && !this.adPlayStart) { //如果存在暂停广告
				this.adPauseCloseFunction();
			}
		},
		/*暂停时播放暂停广告*/
		adPausePlayer: function() {
			this.adI = 0;
			this.adType = 'pause';
			this.adPauseShow = true;
			this.loadAdPause();
		},
		loadAdPause: function() {
			var ad = this.getNowAdvertisements();
			var type = ad['type'];
			var thisTemp = this;
			var width = this.PD.offsetWidth,
			height = this.PD.offsetHeight;
			if (this.isStrImage(type) && this.adPauseShow) {
				this.css(this.CB['adElement'], 'display', 'block');
				var imgClass = 'adimg' + this.randomString(10);
				var imgHtml = '<img src="' + ad['file'] + '" class="' + imgClass + '">';
				if (ad['link']) {
					imgHtml = '<a href="' + ad['link'] + '" target="_blank">' + imgHtml + '</a>';
				}
				this.CB['adElement'].innerHTML = imgHtml;
				this.addListenerInside('load',
				function() {
					var imgObj = new Image();
					imgObj.src = this.src;
					var imgWH = thisTemp.adjustmentWH(imgObj.width, imgObj.height);
					thisTemp.css([thisTemp.getByElement(imgClass), thisTemp.CB['adElement']], {
						width: imgWH['width'] + 'px',
						height: imgWH['height'] + 'px',
						border: '0px'
					});
					if (thisTemp.ckplayerConfig['style']['advertisement']['closeButtonShow'] && thisTemp.adPauseShow) {
						thisTemp.css(thisTemp.CB['adPauseClose'], {
							display: 'block'
						});
					}
					thisTemp.ajaxSuccessNull(ad['exhibitionMonitor']);
					thisTemp.adPauseCoor();
				},
				this.getByElement(imgClass));
				this.addListenerInside('click',
				function() {
					thisTemp.ajaxSuccessNull(ad['clickMonitor']);
				},
				this.CB['adElement']);
				var newI = this.adI;
				if (this.adI < this.advertisements['pause'].length - 1) {
					newI++;
				} else {
					newI = 0;
				}
				if (ad['time'] > 0) {
					setTimeout(function() {
						if (thisTemp.adPauseShow) {
							thisTemp.adI = newI;
							thisTemp.loadAdPause();
						}
					},
					ad['time'] * 1000);
				}
			}
		},
		/*调整暂停广告的位置*/
		adPauseCoor: function() {
			if (this.css(this.CB['adElement'], 'display') == 'block') {
				var w = this.CB['adElement'].offsetWidth,
				h = this.CB['adElement'].offsetHeight;
				var pw = this.PD.offsetWidth,
				ph = this.PD.offsetHeight;
				this.css(this.CB['adElement'], {
					top: (ph - h) * 0.5 + 'px',
					left: (pw - w) * 0.5 + 'px'
				});
				if (this.css(this.CB['adPauseClose'], 'display') == 'block') {
					this.css(this.CB['adPauseClose'], {
						top: (ph - h) * 0.5 - 10 + 'px',
						left: (pw - w) * 0.5 + w - 10 + 'px'
					});
				}
			}
		},
		/*
			关闭暂停广告
		*/
		adPauseCloseFunction: function() {
			this.CB['adElement'].innerHTML = '';
			this.css([this.CB['adElement'], this.CB['adPauseClose']], 'display', 'none');
			this.adPauseShow = false;
		},
		/*计算广告时间*/
		advertisementsTime: function(nt) {
			if (this.isUndefined(nt)) {
				nt = 0;
			}
			var ad = this.advertisements[this.adType];
			if (nt > 0) {
				ad[this.adI]['time'] = Math.ceil(nt);
			}
			this.adTimeAllTotal = 0;
			for (var i = this.adI; i < ad.length; i++) {
				if (!this.isUndefined(ad[i]['time'])) {
					this.adTimeAllTotal += Math.ceil(ad[i]['time']);
				}
			}
			if (this.adTimeAllTotal > 0) {
				this.CB['adTime'].innerHTML = this.language['adTime'].replace('{$second}', this.adTimeAllTotal > 9 ? this.adTimeAllTotal: '0' + this.adTimeAllTotal);
			}
			if (this.adPauseShow) {
				this.adPauseCloseFunction();
			}
			this.adOtherCloseAll();
			this.adTimeTotal = -1;
		},
		/*判断是否需要显示跳过广告按钮*/
		adSkipButtonShow: function() {
			var thisTemp = this;
			var skipConfig = this.ckplayerConfig['style']['advertisement'];
			var delayTimeTemp = skipConfig[this.adType + 'SkipButtonDelay'];
			var timeFun = function() {
				if (delayTimeTemp >= 0) {
					thisTemp.CB['adSkip'].innerHTML = thisTemp.language['skipAdTime'].replace('{$second}', delayTimeTemp > 9 ? delayTimeTemp: '0' + delayTimeTemp);
					setTimeout(timeFun, 1000);
				} else {
					thisTemp.CB['adSkip'].innerHTML = thisTemp.language['skipAd'];
				}
				delayTimeTemp--;
			};
			if (skipConfig['skipButtonShow']) {
				this.css(thisTemp.CB['adSkip'], 'display', 'block');
				if (skipConfig[this.adType + 'SkipButtonDelay'] > 0 && this.isUndefined(this.adSkipButtonTime)) {
					timeFun();
				} else {
					thisTemp.css(thisTemp.CB['adSkip'], 'display', 'block');
					thisTemp.CB['adSkip'].innerHTML = this.language['skipAd'];
				}
			}
		},
		/*播放广告*/
		advertisementsPlay: function() {
			this.css([this.CB['adBackground'], this.CB['adElement'], this.CB['adBar'], this.CB['adLink']], 'display', 'none');
			this.adPlayerPlay = false;
			var ad = this.advertisements[this.adType];
			if (this.adI == 0 && (this.adType == 'front' || this.adType == 'insert' || this.adType == 'end')) {
				this.sendJS('process', this.adType + ' ad play')
			}
			this.trackHide();
			if (this.adI < ad.length) {
				if (!this.isUndefined(ad[this.adI]['time'])) {
					this.adTimeTotal = parseInt(ad[this.adI]['time']);
				}
				this.loadAdvertisements();
			} else {
				this.adEnded();
			}
		},
		/*清除当前所有广告*/
		eliminateAd: function() {
			if (this.adType) {
				var ad = this.advertisements[this.adType];
				this.adI = ad.length;
				this.advertisementsPlay();
			}

		},
		/*广告播放结束*/
		adEnded: function() {
			var thisTemp = this;
			this.adPlayStart = false;
			if(this.adType=='front'){
				this.time=0;
			}
			this.adPlayerPlay = false;
			if (this.adVideoPlay) {
				if (this.videoTemp['src'] != '') {
					this.V.src = this.videoTemp['src'];
				} else {
					if (this.V.src) {
						this.V.removeAttribute('src');
					}
				}
				if (this.videoTemp['source'] != '') {
					this.V.innerHTML = this.videoTemp['source'];
				}
				if (this.videoTemp['currentSrc'] != '') {
					this.V.src = this.videoTemp['currentSrc'];
					this.V.currentSrc = this.videoTemp['currentSrc'];
				}
				if (this.videoTemp['loop']) {
					this.V.loop = true;
					this.videoTemp['loop'] = false;
				}
				if (this.adType == 'end') {
					this.endedHandler();
				} else {
					this.videoPlay();
				}
			} else {
				this.videoPlay();
			}
			this.changeVolume(this.vars['volume']);
			this.sendJS('process', this.adType + ' ad ended');
			this.changeControlBarShow(true);
		},
		/*加载广告*/
		loadAdvertisements: function() {
			//this.videoTemp
			var ad = this.getNowAdvertisements();
			var type = ad['type'];
			var thisTemp = this;
			var width = this.PD.offsetWidth,
			height = this.PD.offsetHeight;
			this.changeControlBarShow(false);
			this.adPlayerPlay = true;
			if (this.isStrImage(type)) {
				this.css([this.CB['adBackground'], this.CB['adElement'], this.CB['adBar']], 'display', 'block');
				this.css([this.CB['adMute'], this.CB['adEscMute']], 'display', 'none');
				var imgClass = 'adimg' + this.randomString(10);
				var imgHtml = '<img src="' + ad['file'] + '" class="' + imgClass + '">';
				if (ad['link']) {
					imgHtml = '<a href="' + ad['link'] + '" target="_blank">' + imgHtml + '</a>';
				}
				this.CB['adElement'].innerHTML = imgHtml;
				this.addListenerInside('load',
				function() {
					var imgObj = new Image();
					imgObj.src = this.src;
					var imgWH = thisTemp.adjustmentWH(imgObj.width, imgObj.height);
					thisTemp.css(thisTemp.getByElement(imgClass), {
						width: imgWH['width'] + 'px',
						height: imgWH['height'] + 'px',
						border: '0px'
					});
					thisTemp.css(thisTemp.CB['adElement'], {
						width: imgWH['width'] + 'px',
						height: imgWH['height'] + 'px',
						top: (height - imgWH['height']) * 0.5 + 'px',
						left: (width - imgWH['width']) * 0.5 + 'px'
					});
					thisTemp.ajaxSuccessNull(ad['exhibitionMonitor']);
				},
				this.getByElement(imgClass));
				this.addListenerInside('click',
				function() {
					thisTemp.ajaxSuccessNull(ad['clickMonitor']);
				},
				this.CB['adElement']);
				if (!this.isUndefined(ad['time'])) {
					this.adCountDown();
				}
			} else {
				this.css(this.CB['adBar'], 'display', 'block');
				//判断是否静音
				if (this.adVideoMute) {
					this.css(this.CB['adEscMute'], 'display', 'block');
					this.css(this.CB['adMute'], 'display', 'none');
				} else {
					this.css(this.CB['adEscMute'], 'display', 'none');
					this.css(this.CB['adMute'], 'display', 'block');
				}
				this.CB['adElement'].innerHTML = '';
				if (this.videoTemp['currentSrc'] == '') {
					this.videoTemp['currentSrc'] = this.getCurrentSrc();
				}
				if (this.V.loop) {
					this.videoTemp['loop'] = true;
					this.V.loop = false;
				}
				if (this.V != null && this.V.currentTime > 0 && this.adIsVideoTime && this.adType!='front') { //当有视频广告时而又没有记录下已播放的时间则进行记录
					this.adIsVideoTime = false;
					this.needSeek = this.V.currentTime;
				}
				this.V.src = ad['file'];
				this.V.currentSrc = ad['file'];
				this.V.innerHTML = '';
				this.V.play();
				this.adVideoPlay = true;
				this.ajaxSuccessNull(ad['exhibitionMonitor']);
				if (!this.adVideoMute) {
					this.adEscMuteFunction();
				}
			}
			if (ad['link']) {
				this.css(this.CB['adLink'], 'display', 'block');
				var link = '<a href="' + ad['link'] + '" target="_blank" class="ckadmorelink">' + this.language['adLink'] + '</a>';
				this.CB['adLink'].innerHTML = link;
				this.css(this.getByElement('ckadmorelink'), {
					color: '#FFFFFF',
					textDecoration: 'none'
				});
				this.addListenerInside('click',
				function() {
					thisTemp.ajaxSuccessNull(ad['clickMonitor']);
				},
				this.CB['adLink']);
			} else {
				this.css(this.CB['adLink'], 'display', 'none');
			}

		},
		/*普通广告倒计时*/
		adCountDown: function() {
			var thisTemp = this;
			if (this.adTimeTotal > 0) {
				if (!this.adIsPause) {
					this.adTimeTotal--;
					this.showAdTime();
					this.adCountDownObj = null;
					this.adCountDownObj = setTimeout(function() {
						thisTemp.adCountDown();
					},
					1000);
				}
			} else {
				this.adI++;
				this.advertisementsPlay();
			}
		},
		/*视频广告倒计时*/
		adPlayerTimeHandler: function(time) {
			var ad = this.getNowAdvertisements();
			var type = ad['type'];
			if (this.isStrImage(type)) {
				return;
			}
			if (this.adTimeTotal != parseInt(time)) {
				this.adTimeTotal = parseInt(time);
				this.showAdTime();
			}
		},
		/*格式化广告倒计时显示*/
		showAdTime: function() {
			this.adTimeAllTotal--;
			var n = this.adTimeAllTotal;
			if (n < 0) {
				n = 0;
			}
			this.CB['adTime'].innerHTML = this.language['adTime'].replace('{$second}', n < 10 ? '0' + n: n);
		},
		/*
			单独监听其它广告
		*/
		checkAdOther: function(t) {
			if (this.adPlayerPlay) {
				return;
			}
			var adTime = this.advertisements['othertime'];
			var adPlay = this.advertisements['otherPlay'];
			for (var i = 0; i < adTime.length; i++) {
				if (t >= adTime[i] && !adPlay[i]) { //如果播放时间大于广告时间而该广告还没有播放，则开始播放
					adPlay[i] = true;
					this.newAdOther(i);
				}
			}
		},
		/*
			新建其它广告 
		*/
		newAdOther: function(i) {
			var thisTemp = this;
			var ad = this.advertisements['other'][i];
			var randomS = this.randomString(10); //获取一个随机字符串
			var adDivID = 'adother' + randomS; //广告容器
			imgClassName = 'adimgother' + randomS;
			var adDiv = document.createElement('div');
			adDiv.className = adDivID;
			this.PD.appendChild(adDiv);
			ad['div'] = adDivID;
			ad['element'] = imgClassName;
			var adHtml='<img src="' + ad['file'] + '" class="' + imgClassName + '">';
			if(ad['link']){
				adHtml='<a href="' + ad['link'] + '" target="blank">'+adHtml+'</a>';
			}
			this.getByElement(adDivID).innerHTML =adHtml;
			this.css(adDivID, {
				position: 'absolute',
				overflow: 'hidden',
				zIndex: '996',
				top: '60px',
				left: '30px',
				cursor: 'pointer'
			});
			if (this.ckplayerConfig['style']['advertisement']['closeOtherButtonShow']) {
				var closeAdDivID = 'adotherclose' + randomS; //广告容器
				var closeAdDiv = document.createElement('div');
				closeAdDiv.className = closeAdDivID;
				this.PD.appendChild(closeAdDiv);
				this.getByElement(closeAdDivID).innerHTML = this.newCanvas(closeAdDivID, 20, 20);
				ad['closeDiv'] = closeAdDivID;
				ad['close'] = false;
				this.css(closeAdDivID, {
					backgroundColor: '#f7f7f7',
					//f8f7f7
					widht: '20px',
					height: '20px',
					position: 'absolute',
					overflow: 'hidden',
					zIndex: '997',
					top: '60px',
					left: '30px',
					borderRadius: '20px',
					cursor: 'pointer'
				});
				var adOtherClose = this.getByElement(closeAdDivID + '-canvas').getContext('2d');
				var adOtherCloseFillRect = function() {
					thisTemp.canvasFill(adOtherClose, [[4, 6], [6, 6], [16, 15], [14, 15]]);
					thisTemp.canvasFill(adOtherClose, [[14, 6], [16, 6], [6, 15], [4, 15]]);
				};
				adOtherClose.fillStyle = '#404856';
				adOtherCloseFillRect();
				var adOtherCloseOver = function() {
					adOtherClose.clearRect(0, 0, 20, 20);
					adOtherClose.fillStyle = '#0782F5';
					adOtherCloseFillRect();
				};
				var adOtherCloseOut = function() {
					adOtherClose.clearRect(0, 0, 20, 20);
					adOtherClose.fillStyle = '#404856';
					adOtherCloseFillRect();
				};
				this.addListenerInside('mouseover', adOtherCloseOver, this.getByElement(closeAdDivID + '-canvas'));
				this.addListenerInside('mouseout', adOtherCloseOut, this.getByElement(closeAdDivID + '-canvas'));
			}
			this.addListenerInside('load',
			function() {
				var imgObj = new Image();
				imgObj.src = this.src;
				var imgWH = thisTemp.adjustmentWH(imgObj.width, imgObj.height);
				thisTemp.css([thisTemp.getByElement(imgClassName), thisTemp.getByElement(adDivID)], {
					width: imgWH['width'] + 'px',
					height: imgWH['height'] + 'px',
					border: '0px'
				});
				thisTemp.advertisements['other'][i] = ad;
				thisTemp.ajaxSuccessNull(ad['exhibitionMonitor']);
				thisTemp.adOtherCoor();
			},
			this.getByElement(imgClassName));
			this.addListenerInside('click',
			function() {
				thisTemp.adOtherClose(i);
			},
			this.getByElement(closeAdDivID));
			this.addListenerInside('click',
			function() {
				thisTemp.ajaxSuccessNull(ad['clickMonitor']);
			},
			this.getByElement(imgClassName));
			if (ad['time'] > 0) {
				setTimeout(function() {
					thisTemp.adOtherClose(i);
				},
				ad['time'] * 1000);
			}
		},
		/*
		关闭其它广告
		*/
		adOtherClose: function(i) {
			var ad = this.advertisements['other'][i];
			if (!this.isUndefined(ad['close'])) {
				if (!ad['close']) {
					ad['close'] = true;
					this.PD.removeChild(this.getByElement(ad['div']));
					this.PD.removeChild(this.getByElement(ad['closeDiv']));
				}
			}
		},
		adOtherCloseAll: function() {
			if (!this.isUndefined(this.advertisements['other'])) {
				var ad = this.advertisements['other'];
				for (var i = 0; i < ad.length; i++) {
					this.adOtherClose(i);
				}
			}
		},
		/*
			计算其它广告的坐标
		*/
		adOtherCoor: function() {
			if (!this.isUndefined(this.advertisements['other'])) {
				var arr = this.advertisements['other'];
				for (var i = 0; i < arr.length; i++) {
					var ad = arr[i];
					if (!this.isUndefined(ad['close'])) {
						if (!ad['close']) {
							var coor = this.getPosition(ad);
							var x = coor['x'],
							y = coor['y'],
							cx = x + this.getByElement(ad['div']).offsetWidth - 10,
							cy = y - 10;
							this.css(this.getByElement(ad['div']), {
								left: x + 'px',
								top: y + 'px'
							});
							if (!this.isUndefined(ad['closeDiv'])) {
								this.css(this.getByElement(ad['closeDiv']), {
									left: cx + 'px',
									top: cy + 'px'
								});
							}
						}
					}
				}
			}
		},
		/*
			单独监听中间插入广告
		*/
		checkAdInsert: function(t) {
			if (this.adPlayerPlay) {
				return;
			}
			var adTime = this.advertisements['inserttime'];
			var adPlay = this.advertisements['insertPlay'];
			var duration = this.getMetaDate()['duration'];
			for (var i = adTime.length - 1; i > -1; i--) {
				if (t >= adTime[i] && t < duration - 2 && t > 1 && !adPlay[i]) { //如果播放时间大于广告时间而该广告还没有播放，则开始播放
					this.adI = 0;
					this.adType = 'insert';
					this.adMuteInto();
					this.adIsVideoTime = true;
					this.adPlayStart = true;
					this.adVideoPlay = false;
					this.videoPause();
					this.advertisementsTime();
					this.advertisementsPlay();
					this.adSkipButtonShow();
					adPlay[i] = true;
					for (var n = 0; n < i + 1; n++) {
						adPlay[n] = true;
					}
					break;
				}
			}
		},
		/*格式化中间插入广告的播放时间*/
		formatInserttime: function(duration) {
			if (!this.isUndefined(this.advertisements['inserttime'])) {
				var arr = this.advertisements['inserttime'];
				var newArr = [];
				for (var i = 0; i < arr.length; i++) {
					if (arr[i].toString().substr( - 1) == '%') {
						newArr.push(parseInt(duration * parseInt(arr[i]) * 0.01));
					} else {
						newArr.push(parseInt(arr[i]));
					}
				}
				this.advertisements['inserttime'] = newArr;
			}
		},
		/*获取当前的广告*/
		getNowAdvertisements: function() {
			if (this.adI == -1) {
				return {
					file: '',
					time: 0,
					link: ''
				};
			}
			return this.advertisements[this.adType][this.adI];
		},
		/*根据元件尺寸和播放器尺寸调整大小*/
		adjustmentWH: function(w, h) {
			var width = this.PD.offsetWidth,
			height = this.PD.offsetHeight;
			var nw = 0,
			nh = 0;
			if (w >= width || h >= height) {
				if (width / w > height / h) {
					nh = height - 20;
					nw = w * nh / h;
				} else {
					nw = width - 20;
					nh = h * nw / w;
				}
			} else {
				nw = w;
				nh = h;
			}
			return {
				width: nw,
				height: nh
			}
		},
		/*单独请求一次地址，但不处理返回的数据*/
		ajaxSuccessNull: function(url) {
			if (!this.isUndefined(url)) {
				var ajaxObj = {
					url: url,
					success: function(data) {}
				};
				this.ajax(ajaxObj);
			}
		},
		/*
			内部函数
			运行指定函数
		*/
		runFunction: function(s) {
			try {
				var arr = s.split('->');
				switch (arr[0]) {
				case 'javaScript':
					eval(arr[1] + '()');
					break;
				case 'actionScript':
					eval('this.' + arr[1] + '()');
					break;
				}
			} catch(event) {}
		},
		/*
			内部函数
			使用画布附加视频
		*/
		sendVCanvas: function() {
			if (this.timerVCanvas == null) {
				this.css(this.V, 'display', 'none');
				this.css(this.MD, 'display', 'block');
				var thisTemp = this;
				var videoCanvas = function() {
					if (thisTemp.MDCX.width != thisTemp.PD.offsetWidth) {
						thisTemp.MDC.width = thisTemp.PD.offsetWidth;
					}
					if (thisTemp.MDCX.height != thisTemp.PD.offsetHeight) {
						thisTemp.MDC.height = thisTemp.PD.offsetHeight;
					}
					thisTemp.MDCX.clearRect(0, 0, thisTemp.MDCX.width, thisTemp.MDCX.height);
					var coor = thisTemp.getProportionCoor(thisTemp.PD.offsetWidth, thisTemp.PD.offsetHeight, thisTemp.V.videoWidth, thisTemp.V.videoHeight);
					thisTemp.MDCX.drawImage(thisTemp.V, 0, 0, thisTemp.V.videoWidth, thisTemp.V.videoHeight, coor['x'], coor['y'], coor['width'], coor['height']);
				};
				this.timerVCanvas = new this.timer(0, videoCanvas);
			}
		},
		/*
			内部函数
			监听暂停
		*/
		pauseHandler: function() {
			var thisTemp = this;
			this.playShow(false);
			if (this.animatePauseArray.length > 0) {
				this.animatePause('pause');
			}
			if (this.playerType == 'html5video' && this.V != null && this.config['videoDrawImage']) {
				this.stopVCanvas();
			}
			if (!this.isUndefined(this.advertisements['pause']) && !this.adPlayStart && !this.adPauseShow) { //如果存在暂停广告
				setTimeout(function() {
					if (!thisTemp.isUndefined(thisTemp.advertisements['pause']) && !thisTemp.adPlayStart && !thisTemp.adPauseShow && thisTemp.time > 1) { //如果存在暂停广告
						thisTemp.adPausePlayer();
					}
				},
				300);
			}
		},
		/*
			内部函数
			停止画布
		*/
		stopVCanvas: function() {
			if (this.timerVCanvas != null) {
				this.css(this.V, 'display', 'block');
				this.css(this.MD, 'display', 'none');
				if (this.timerVCanvas.runing) {
					this.timerVCanvas.stop();
				}
				this.timerVCanvas = null;
			}
		},
		/*
			内部函数
			根据当前播放还是暂停确认图标显示
		*/
		playShow: function(b) {
			if (!this.showFace) {
				return;
			}
			if (b) {
				this.css(this.CB['play'], 'display', 'none');
				this.css(this.CB['pauseCenter'], 'display', 'none');
				this.css(this.CB['pause'], 'display', 'block');
			} else {
				this.css(this.CB['play'], 'display', 'block');
				if (this.css(this.CB['errorText'], 'display') == 'none') {
					if (!this.adPlayerPlay) {
						this.css(this.CB['pauseCenter'], 'display', 'block');
					}

				} else {
					this.css(this.CB['pauseCenter'], 'display', 'none');
				}
				this.css(this.CB['pause'], 'display', 'none');
			}
		},
		/*
			内部函数
			监听seek结束
		*/
		seekedHandler: function() {
			this.resetTrack();
			this.isTimeButtonMove = true;
			if (this.V.paused) {
				if(this.hlsAutoPlay){
					this.videoPlay();
				}
				else{
					this.hlsAutoPlay=true;
				}
			}
		},
		/*
			内部函数
			监听播放结束
		*/
		endedHandler: function() {
			if (this.adPlayerPlay) {
				this.adI++;
				this.advertisementsPlay();
				return;
			}
			if (!this.endAdPlay && !this.isUndefined(this.advertisements['end'])) {
				this.endAdPlay = true;
				this.adI = 0;
				this.adType = 'end';
				this.adMuteInto();
				this.adIsVideoTime = true;
				this.adPlayStart = true;
				this.adVideoPlay = false;
				this.videoPause();
				this.advertisementsTime();
				this.advertisementsPlay();
				this.adSkipButtonShow();
				this.adReset = true;
				return;
			}
			this.sendJS('ended');
			this.endedAdReset();
			if (this.vars['loop']) {
				this.videoSeek(0);
			}
		},
		/*
			重置结束后相关的设置
		*/
		endedAdReset: function() {
			var arr = [];
			var i = 0;
			if (!this.isUndefined(this.advertisements['insertPlay'])) {
				arr = this.advertisements['insertPlay'];
				for (i = 0; i < arr.length; i++) {
					this.advertisements['insertPlay'][i] = false;
				}
			}
			if (!this.isUndefined(this.advertisements['otherPlay'])) {
				arr = this.advertisements['otherPlay'];
				for (i = 0; i < arr.length; i++) {
					this.advertisements['otherPlay'][i] = false;
				}
			}
			//this.endAdPlay=false;
		},
		/*
			内部函数
			监听音量改变
		*/
		volumechangeHandler: function() {
			if (!this.showFace) {
				return;
			}
			if ((this.ckplayerConfig['config']['mobileVolumeBarShow'] || !this.isMobile()) && this.css(this.CB['volume'], 'display') != 'none') {
				try {
					var volume=this.volume || this.V.volume;
					if (volume > 0) {
						this.css(this.CB['mute'], 'display', 'block');
						this.css(this.CB['escMute'], 'display', 'none');
					} else {
						this.css(this.CB['mute'], 'display', 'none');
						this.css(this.CB['escMute'], 'display', 'block');
					}
				} catch(event) {}
			}
		},
		/*
			内部函数
			监听播放时间调节进度条
		*/
		timeUpdateHandler: function() {
			var duration = 0;
			if (this.playerType == 'html5video') {
				try {
					duration = this.V.duration;
				} catch(event) {}
			}
			if (isNaN(duration) || parseInt(duration) < 0.2) {
				duration = this.vars['duration'];
			}
			if(this.vars['forceduration']>0){
				duration=this.vars['forceduration'];
			}
			if (duration > 0) {
				this.time = this.V.currentTime;
				this.timeTextHandler();
				this.trackShowHandler();
				if (this.isTimeButtonMove) {
					this.timeProgress(this.time, duration);
				}
			}
		},
		/*
			内部函数
			按时间改变进度条
		*/
		timeProgress: function(time, duration) {
			if (!this.showFace) {
				return;
			}
			var timeProgressBgW = this.CB['timeProgressBg'].offsetWidth;
			var timeBOW = parseInt((time * timeProgressBgW / duration) - (this.CB['timeButton'].offsetWidth * 0.5));
			if (timeBOW > timeProgressBgW - this.CB['timeButton'].offsetWidth) {
				timeBOW = timeProgressBgW - this.CB['timeButton'].offsetWidth;
			}
			if (timeBOW < 0) {
				timeBOW = 0;
			}
			this.css(this.CB['timeProgress'], 'width', timeBOW + 'px');
			this.css(this.CB['timeButton'], 'left', parseInt(timeBOW) + 'px');
		},
		/*
			内部函数
			监听播放时间改变时间显示文本框
		*/
		timeTextHandler: function() { //显示时间/总时间
			if (!this.showFace) {
				return;
			}
			var duration = this.V.duration;
			var time = this.V.currentTime;
			if (isNaN(duration) || parseInt(duration) < 0.2) {
				duration = this.vars['duration'];
			}
			if(this.vars['forceduration']>0){
				duration=this.vars['forceduration'];
			}
			this.CB['timeText'].innerHTML = this.formatTime(time) + ' / ' + this.formatTime(duration);
			if (this.CB['timeText'].offsetWidth > 0) {
				this.buttonWidth['timeText'] = this.CB['timeText'].offsetWidth;
			}
		},
		/*
			内部函数
			监听是否是缓冲状态
		*/
		bufferEdHandler: function() {
			if (!this.showFace || this.playerType == 'flashplayer') {
				return;
			}
			var thisTemp = this;
			var clearTimerBuffer = function() {
				if (thisTemp.timerBuffer != null) {
					if (thisTemp.timerBuffer.runing) {
						thisTemp.sendJS('buffer', 100);
						thisTemp.timerBuffer.stop();
					}
					thisTemp.timerBuffer = null;
				}
			};
			clearTimerBuffer();
			var bufferFun = function() {
				if (!thisTemp.isUndefined(thisTemp.V) && thisTemp.V.buffered.length > 0) {
					var duration = thisTemp.V.duration;
					var len = thisTemp.V.buffered.length;
					var bufferStart = thisTemp.V.buffered.start(len - 1);
					var bufferEnd = thisTemp.V.buffered.end(len - 1);
					var loadTime = bufferStart + bufferEnd;
					var loadProgressBgW = thisTemp.CB['timeProgressBg'].offsetWidth;
					var timeButtonW = thisTemp.CB['timeButton'].offsetWidth;
					var loadW = parseInt((loadTime * loadProgressBgW / duration) + timeButtonW);
					if (loadW >= loadProgressBgW) {
						loadW = loadProgressBgW;
						clearTimerBuffer();
					}
					thisTemp.changeLoad(loadTime);
				}
			};
			this.timerBuffer = new this.timer(200, bufferFun);
		},
		/*
			内部函数
			单独计算加载进度
		*/
		changeLoad: function(loadTime) {
			if (this.V == null) {
				return;
			}
			if (!this.showFace) {
				return;
			}
			var loadProgressBgW = this.CB['timeProgressBg'].offsetWidth;
			var timeButtonW = this.CB['timeButton'].offsetWidth;
			var duration = this.V.duration;
			if (isNaN(duration) || parseInt(duration) < 0.2) {
				duration = this.vars['duration'];
			}
			if(this.vars['forceduration']>0){
				duration=this.vars['forceduration'];
			}
			if (this.isUndefined(loadTime)) {
				loadTime = this.loadTime;
			} else {
				this.loadTime = loadTime;
			}
			var loadW = parseInt((loadTime * loadProgressBgW / duration) + timeButtonW);
			this.css(this.CB['loadProgress'], 'width', loadW + 'px');
			this.sendJS('loadTime',loadTime);
			this.loadTimeTemp=loadTime;
		},
		/*
			内部函数
			判断是否是直播
		*/
		judgeIsLive: function() {
			var thisTemp = this;
			if (this.timerError != null) {
				if (this.timerError.runing) {
					this.timerError.stop();
				}
				this.timerError = null;
			}
			this.error = false;
			if (this.showFace) {
				this.css(this.CB['errorText'], 'display', 'none');
			}
			var timeupdate = function(event) {
				thisTemp.timeUpdateHandler();
			};
			if (!this.vars['live']) {
				if (this.V != null && this.playerType == 'html5video') {
					this.addListenerInside('timeupdate', timeupdate);
					thisTemp.timeTextHandler();
					thisTemp.prompt(); //添加提示点
					setTimeout(function() {
						thisTemp.bufferEdHandler();
					},
					200);
				}
			} else {
				this.removeListenerInside('timeupdate', timeupdate);
				if (this.timerTime != null) {
					window.clearInterval(this.timerTime);
					timerTime = null;
				}
				if (this.timerTime != null) {
					if (this.timerTime.runing) {
						this.timerTime.stop();
					}
					this.timerTime = null;
				}
				var timeFun = function() {
					if (thisTemp.V != null && !thisTemp.V.paused && thisTemp.showFace) {
						thisTemp.CB['timeText'].innerHTML = thisTemp.getNowDate();
					}
				};
				this.timerTime = new this.timer(1000, timeFun);
				//timerTime.start();
			}
			this.definition();
		},
		/*
			内部函数
			加载字幕
		*/
		loadTrack: function(def) {
			if (this.playerType == 'flashplayer' || this.vars['flashplayer'] == true) {
				return;
			}
			if(this.isUndefined(def)){
				def=-1;
			}
			var track = this.vars['cktrack'];
			var loadTrackUrl='';
			var type=this.typeString(track);
			var thisTemp = this;
			if(type=='array'){
				if(def==-1){
					var index=0;
					var indexN=0;
					for(var i=0;i<track.length;i++){
						var li=track[i];
						if(li.length==3 && li[2]>indexN){
							indexN=li[2];
							index=i;
						}
					}
				}
				else{
					index=def;
				}
				loadTrackUrl=track[index][0];
			}
			else{
				loadTrackUrl=track;
			}
			var obj = {
				method: 'get',
				dataType: 'text',
				url: loadTrackUrl,
				charset: 'utf-8',
				success: function(data) {
					if(data){
						thisTemp.track = thisTemp.parseSrtSubtitles(data);
						thisTemp.trackIndex = 0;
						thisTemp.nowTrackShow = {
							sn: ''
						}
					}
					
				}
			};
			this.ajax(obj);
		},
		/*
			内部函数
			重置字幕
		*/
		resetTrack: function() {
			this.trackIndex = 0;
			this.nowTrackShow = {
				sn: ''
			};
		},
		/*
			内部函数
			根据时间改变读取显示字幕
		*/
		trackShowHandler: function() {
			if (!this.showFace || this.adPlayerPlay) {
				return;
			}
			if (this.track.length < 1) {
				return;
			}
			if (this.trackIndex >= this.track.length) {
				this.trackIndex = 0;
			}
			var nowTrack = this.track[this.trackIndex]; //当前编号对应的字幕内容
			/*
				this.nowTrackShow=当前显示在界面上的内容
				如果当前时间正好在nowTrack时间内，则需要判断
			*/
			if (this.time >= nowTrack['startTime'] && this.time <= nowTrack['endTime']) {
				/*
				 	如果当前显示的内容不等于当前需要显示的内容时，则需要显示正确的内容
				*/
				var nowShow = this.nowTrackShow;
				if (nowShow['sn'] != nowTrack['sn']) {
					this.trackHide();
					this.trackShow(nowTrack);
					this.nowTrackTemp=nowTrack;
				}
			} else {
				/*
				 * 如果当前播放时间不在当前编号字幕内，则需要先清空当前的字幕内容，再显示新的字幕内容
				 */
				this.trackHide();
				this.checkTrack();
			}
		},
		trackShowAgain:function(){
			this.trackHide();
			this.trackShow(this.nowTrackTemp);
		},
		/*
			内部函数
			显示字幕内容
		*/
		trackShow: function(track) {
			this.nowTrackShow = track;
			var arr = track['content'];
			for (var i = 0; i < arr.length; i++) {
				var obj = {
					list: [{
						type: 'text',
						text: arr[i],
						color: '#FFFFFF',
						size: this.trackFontSize,
						font: this.fontFamily,
						lineHeight: 30
					}],
					position: [1, 2, null, -(arr.length - i) * 30 - 50]
				};
				var ele = this.addElement(obj);
				this.trackElement.push(ele);
			}
		},
		/*
			内部函数
			隐藏字字幕内容
		*/
		trackHide: function() {
			for (var i = 0; i < this.trackElement.length; i++) {
				this.deleteElement(this.trackElement[i]);
			}
			this.trackElement = [];
		},
		/*
			内部函数
			重新计算字幕的编号
		*/
		checkTrack: function() {
			var num = this.trackIndex;
			var arr = this.track;
			var i = 0;
			for (i = num; i < arr.length; i++) {
				if (this.time >= arr[i]['startTime'] && this.time <= arr[i]['endTime']) {
					this.trackIndex = i;
					break;
				}
			}
		},
		/*
		-----------------------------------------------------------------------------接口函数开始
			接口函数
			在播放和暂停之间切换
		*/
		playOrPause: function() {
			if (!this.loaded) {
				return;
			}
			if (this.V == null) {
				return;
			}
			if (this.playerType == 'flashplayer') {
				this.V.playOrPause();
				return;
			}
			if (this.V.paused) {
				this.videoPlay();
			} else {
				this.videoPause();
			}
		},
		/*
			接口函数
			播放动作
		*/
		videoPlay: function() {
			if (!this.loaded) {
				return;
			}
			if (this.playerType == 'flashplayer') {
				this.V.videoPlay();
				return;
			}
			if (this.adPlayerPlay) {
				this.eliminateAd(); //清除广告
				return;
			}
			try {
				if (this.V.currentSrc) {
					this.V.play();
				}
			} catch(event) {}
		},
		/*
			接口函数
			暂停动作
		*/
		videoPause: function() {
			if (!this.loaded) {
				return;
			}
			if (this.playerType == 'flashplayer') {
				this.V.videoPause();
				return;
			}
			try {
				this.V.pause();
			} catch(event) {}
		},
		/*
			接口函数
			跳转时间动作
		*/
		videoSeek: function(time) {
			if (!this.loaded) {
				return;
			}
			if (this.playerType == 'flashplayer') {
				this.V.videoSeek(time);
				return;
			}
			var duration = this.V.duration>0.2?this.V.duration:this.getMetaDate()['duration'];
			if (duration > 0 && time > duration) {
				if(this.vars['forceduration']>0){
					time=0;
					this.sendJS('ended');
				}
				else{
					time = duration-0.1;
				}
			}
			if (time >= 0) {
				this.V.currentTime = time;
				this.sendJS('seekTime', time);
			}
		},
		/*
			接口函数
			调节音量/获取音量
		*/
		changeVolume: function(vol, bg, button) {
			if (this.loaded) {
				if (this.playerType == 'flashplayer') {
					this.V.changeVolume(vol);
					return;
				}
			}
			if (isNaN(vol) || this.isUndefined(vol)) {
				vol = 0;
			}
			if (!this.loaded) {
				this.vars['volume'] = vol;
			}
			if (!this.html5Video) {
				this.V.changeVolume(vol);
				return;
			}
			try {
				if (this.isUndefined(bg)) {
					bg = true;
				}
			} catch(e) {}
			try {
				if (this.isUndefined(button)) {
					button = true;
				}
			} catch(e) {}
			if (!vol) {
				vol = 0;
			}
			if (vol < 0) {
				vol = 0;
			}
			if (vol > 1) {
				vol = 1;
			}
			try {
				this.V.volume = vol;
			} catch(error) {}
			this.volume = vol;
			if (bg && this.showFace) {
				var bgW = vol * this.CB['volumeBg'].offsetWidth;
				if (bgW < 0) {
					bgW = 0;
				}
				if (bgW > this.CB['volumeBg'].offsetWidth) {
					bgW = this.CB['volumeBg'].offsetWidth;
				}
				this.css(this.CB['volumeUp'], 'width', bgW + 'px');
			}

			if (button && this.showFace) {
				var buLeft = parseInt(this.CB['volumeUp'].offsetWidth - (this.CB['volumeBO'].offsetWidth * 0.5));
				if (buLeft > this.CB['volumeBg'].offsetWidth - this.CB['volumeBO'].offsetWidth) {
					buLeft = this.CB['volumeBg'].offsetWidth - this.CB['volumeBO'].offsetWidth
				}
				if (buLeft < 0) {
					buLeft = 0;
				}
				this.css(this.CB['volumeBO'], 'left', buLeft + 'px');
			}
		},
		/*
			接口函数
			静音
		*/
		videoMute: function() {
			if (!this.loaded) {
				return;
			}
			if (this.playerType == 'flashplayer') {
				this.V.videoMute();
				return;
			}
			this.volumeTemp = this.V ? (this.V.volume > 0 ? this.V.volume: this.vars['volume']) : this.vars['volume'];
			this.changeVolume(0);
		},
		/*
			接口函数
			取消静音
		*/
		videoEscMute: function() {
			if (!this.loaded) {
				return;
			}
			if (this.playerType == 'flashplayer') {
				this.V.videoEscMute();
				return;
			}
			this.changeVolume(this.volumeTemp > 0 ? this.volumeTemp: this.vars['volume']);
		},
		/*
			接口函数
			视频广告静音
		*/
		adMuteFunction: function() {
			if (!this.loaded) {
				return;
			}
			this.changeVolume(0);
			this.adVideoMute = true;
			this.css(this.CB['adEscMute'], 'display', 'block');
			this.css(this.CB['adMute'], 'display', 'none');
		},
		/*
			接口函数
			视频广告取消静音
		*/
		adEscMuteFunction: function() {
			if (!this.loaded) {
				return;
			}
			var v = this.ckplayerConfig['style']['advertisement']['videoVolume'];
			this.changeVolume(v);
			this.adMuteInto();
		},
		/*
		 	初始化广告的音量按钮
		*/
		adMuteInto: function() {
			this.adVideoMute = false;
			this.css(this.CB['adEscMute'], 'display', 'none');
			this.css(this.CB['adMute'], 'display', 'block');
		},
		/*
			接口函数
			快退
		*/
		fastBack: function() {
			if (!this.loaded) {
				return;
			}
			if (this.playerType == 'flashplayer') {
				this.V.fastBack();
				return;
			}
			var time = this.time - this.ckplayerConfig['config']['timeJump'];
			if (time < 0) {
				time = 0;
			}
			this.videoSeek(time);
		},
		/*
			接口函数
			快进
		*/
		fastNext: function() {
			if (!this.loaded) {
				return;
			}
			if (this.playerType == 'flashplayer') {
				this.V.fastNext();
				return;
			}
			var time = this.time + this.ckplayerConfig['config']['timeJump'];
			if (time > this.V.duration) {
				time = this.V.duration;
			}
			this.videoSeek(time);
		},
		/*
			接口函数
			获取当前播放的地址
		*/
		getCurrentSrc: function() {
			if (!this.loaded) {
				return;
			}
			if (this.playerType == 'flashplayer') {
				return this.V.getCurrentSrc();
			}
			return this.V.currentSrc;
		},
		/*
			内置函数
			全屏/退出全屏动作，该动作只能是用户操作才可以触发，比如用户点击按钮触发该事件
		*/
		switchFull: function() {
			if (this.full) {
				this.quitFullScreen();
			} else {
				this.fullScreen();
			}
		},
		/*
			内置函数
			全屏动作，该动作只能是用户操作才可以触发，比如用户点击按钮触发该事件
		*/
		fullScreen: function() {
			if (this.html5Video && this.playerType == 'html5video') {
				var element = this.PD;
				if (element.requestFullscreen) {
					element.requestFullscreen();
				} else if (element.mozRequestFullScreen) {
					element.mozRequestFullScreen();
				} else if (element.webkitRequestFullscreen) {
					element.webkitRequestFullscreen();
				} else if (element.msRequestFullscreen) {
					element.msRequestFullscreen();
				} else if (element.oRequestFullscreen) {
					element.oRequestFullscreen();
				}
				this.judgeFullScreen();
			} else {
				//this.V.fullScreen();
			}
		},
		/*
			接口函数
			退出全屏动作
		*/
		quitFullScreen: function() {
			if (this.html5Video && this.playerType == 'html5video') {
				if (document.exitFullscreen) {
					document.exitFullscreen();
				} else if (document.msExitFullscreen) {
					document.msExitFullscreen();
				} else if (document.mozCancelFullScreen) {
					document.mozCancelFullScreen();
				} else if (document.oRequestFullscreen) {
					document.oCancelFullScreen();
				} else if (document.requestFullscreen) {
					document.requestFullscreen();
				} else if (document.webkitExitFullscreen) {
					document.webkitExitFullscreen();
				} else {
					this.css(document.documentElement, 'cssText', '');
					this.css(document.document.body, 'cssText', '');
					this.css(this.PD, 'cssText', '');
				}
				this.judgeFullScreen();
			}
		},
		/*
		 下面列出只有flashplayer里支持的 
		 */
		videoRotation: function(n) {
			if (!this.loaded) {
				return;
			}
			if (this.playerType == 'flashplayer') {
				this.V.videoRotation(n);
				return;
			}
			if (this.isUndefined(n)) {
				n = 0;
			}
			var tf = this.css(this.V, 'transform');
			if (this.isUndefined(tf) && !tf) {
				tf = 'rotate(0deg)';
			}
			var reg = tf.match(/rotate\([^)]+\)/);
			reg = reg ? reg[0].replace('rotate(', '').replace('deg)', '') : '';
			if (reg == '') {
				reg = 0;
			} else {
				reg = parseInt(reg);
			}
			if (n == -1) {
				reg -= 90;
			} else if (n == 1) {
				reg += 90;
			} else {
				if (n != 90 && n != 180 && n != 270 && n != -90 && n != -180 && n != -270) {
					reg = 0;
				} else {
					reg = n;
				}
			}
			n = reg;
			var y90 = n % 90,
			y180 = n % 180,
			y270 = n % 270;
			var ys = false;
			if (y90 == 0 && y180 == 90 && y270 == 90) {
				ys = true;
			}
			if (y90 == 0 && y180 == 90 && y270 == 0) {
				ys = true;
			}
			if (y90 == -0 && y180 == -90 && y270 == -90) {
				ys = true;
			}
			if (y90 == -0 && y180 == -90 && y270 == -0) {
				ys = true;
			}
			tf = tf.replace(/rotate\([^)]+\)/, '').replace(/scale\([^)]+\)/, '') + ' rotate(' + n + 'deg)';
			var cdW = this.CD.offsetWidth,
			cdH = this.CD.offsetHeight,
			vW = this.V.videoWidth,
			vH = this.V.videoHeight;
			if (vW > 0 && vH > 0) {
				if (ys) {
					if (cdW / cdH > vH / vW) {
						nH = cdH;
						nW = vH * nH / vW;
					} else {
						nW = cdW;
						nH = vW * nW / vH;
					}
					this.css(this.V, 'transform', 'rotate(0deg)');
					this.css(this.V, 'transform', 'scale(' + nH / cdW + ',' + nW / cdH + ')' + tf);
				} else {
					this.css(this.V, 'transform', tf);
				}
			} else {
				this.css(this.V, 'transform', tf);
			}
			return;
		},
		videoBrightness: function(n) {
			if (!this.loaded) {
				return;
			}
			if (this.playerType == 'flashplayer') {
				this.V.videoBrightness(n);
				return;
			}
		},
		videoContrast: function(n) {
			if (!this.loaded) {
				return;
			}
			if (this.playerType == 'flashplayer') {
				this.V.videoContrast(n);
				return;
			}
		},
		videoSaturation: function(n) {
			if (!this.loaded) {
				return;
			}
			if (this.playerType == 'flashplayer') {
				this.V.videoSaturation(n);
				return;
			}
		},
		videoHue: function(n) {
			if (!this.loaded) {
				return;
			}
			if (this.playerType == 'flashplayer') {
				this.V.videoHue(n);
				return;
			}
		},
		videoZoom: function(n) {
			if (!this.loaded) {
				return;
			}
			if (this.playerType == 'flashplayer') {
				this.V.videoZoom(n);
				return;
			}
			if (this.isUndefined(n)) {
				n = 1;
			}
			if (n < 0) {
				n = 0;
			}
			if (n > 2) {
				n = 2;
			}
			var tf = this.css(this.V, 'transform');
			tf = tf.replace(/scale\([^)]+\)/, '') + ' scale(' + n + ')';
			this.videoScale = n;
			this.css(this.V, 'transform', tf);
			return;
		},
		videoProportion: function(w, h) {
			if (!this.loaded) {
				return;
			}
			if (this.playerType == 'flashplayer') {
				this.V.videoProportion(w, h);
				return;
			}
		},
		adPlay: function() {
			if (!this.loaded) {
				return;
			}
			if (this.playerType == 'flashplayer') {
				this.V.adPlay();
				return;
			}
			if (this.adPlayerPlay) {
				this.adIsPause = false;
				var ad = this.getNowAdvertisements();
				var type = ad['type'];
				if (this.isStrImage(type)) {
					this.adCountDown();
				} else {
					this.V.play();
				}
			}
		},
		adPause: function() {
			if (!this.loaded) {
				return;
			}
			if (this.playerType == 'flashplayer') {
				this.V.adPause();
				return;
			}
			if (this.adPlayerPlay) {
				this.adIsPause = true;
				var ad = this.getNowAdvertisements();
				var type = ad['type'];
				if (type != 'jpg' && type != 'jpeg' && type != 'png' && type != 'svg' && type != 'gif') {
					this.videoPause();
				}
			}
		},
		videoError: function(n) {
			if (!this.loaded) {
				return;
			}
			if (this.playerType == 'flashplayer') {
				this.V.videoError(n);
				return;
			}
		},
		changeConfig: function() {
			if (!this.loaded) {
				return;
			}
			if (this.playerType == 'flashplayer') {
				var args = Array.prototype.slice.call(arguments);
				switch(args.length){
					case 1:
						this.V.changeConfig(args[0]);
						break;
					case 2:
						this.V.changeConfig(args[0],args[1]);
						break;
					case 3:
						this.V.changeConfig(args[0],args[1],args[2]);
						break;
					case 4:
						this.V.changeConfig(args[0],args[1],args[2],args[3]);
						break;
					case 5:
						this.V.changeConfig(args[0],args[1],args[2],args[3],args[4]);
						break;
					case 6:
						this.V.changeConfig(args[0],args[1],args[2],args[3],args[4],args[5]);
						break;
					case 7:
						this.V.changeConfig(args[0],args[1],args[2],args[3],args[4],args[5],args[6]);
						break;
					case 8:
						this.V.changeConfig(args[0],args[1],args[2],args[3],args[4],args[5],args[6],args[7]);
						break;
					case 8:
						this.V.changeConfig(args[0],args[1],args[2],args[3],args[4],args[5],args[6],args[7],args[8]);
						break;
				}
				return;
			}
			var obj = this.ckplayerConfig;
			var arg = arguments;
			for (var i = 0; i < arg.length - 1; i++) {
				if (obj.hasOwnProperty(arg[i])) {
					obj = obj[arg[i]];
				} else {
					return;
				}
			}
			var val = arg[arg.length - 1];
			switch (arg.length) {
			case 2:
				this.ckplayerConfig[arg[0]] = val;
				break;
			case 3:
				this.ckplayerConfig[arg[0]][arg[1]] = val;
				break;
			case 4:
				this.ckplayerConfig[arg[0]][arg[1]][arg[2]] = val;
				break;
			case 5:
				this.ckplayerConfig[arg[0]][arg[1]][arg[2]][arg[3]] = val;
				break;
			case 6:
				this.ckplayerConfig[arg[0]][arg[1]][arg[2]][arg[3]][arg[4]] = val;
				break;
			case 7:
				this.ckplayerConfig[arg[0]][arg[1]][arg[2]][arg[3]][arg[4]][arg[5]] = val;
				break;
			case 8:
				this.ckplayerConfig[arg[0]][arg[1]][arg[2]][arg[3]][arg[4]][arg[5]][arg[6]] = val;
				break;
			case 9:
				this.ckplayerConfig[arg[0]][arg[1]][arg[2]][arg[3]][arg[4]][arg[5]][arg[6]][arg[7]] = val;
				break;
			case 10:
				this.ckplayerConfig[arg[0]][arg[1]][arg[2]][arg[3]][arg[4]][arg[5]][arg[6]][arg[7]][arg[8]] = val;
				break;
			default:
				return;
				break;
			}
			this.sendJS('configChange', this.ckplayerConfig);
		},
		custom: function() {
			if (!this.loaded) {
				return;
			}
			if (this.playerType == 'flashplayer') {
				this.V.custom(arguments);
				return;
			}
		},
		getConfig: function() {
			if (!this.loaded) {
				return null;
			}
			if (this.playerType == 'flashplayer') {
				return this.V.getConfig(arguments);
			}
			else{
				var temp=this.ckplayerConfig;
				for(var index in arguments) {  
			        try{
			        	temp=temp[arguments[index]];
			        }
			        catch(error){
			        	temp=null;
			        }
			    }; 
				return temp;
			}
		},
		openUrl: function(n) {
			if (!this.loaded) {
				return;
			}
			if (this.playerType == 'flashplayer') {
				this.V.openUrl(n);
				return;
			}
		},
		/*
			接口函数
			清除视频
		*/
		videoClear: function() {
			if (!this.loaded) {
				return;
			}
			if (this.playerType == 'flashplayer') {
				this.V.videoClear();
				return;
			}
		},
		/*
			接口函数
			向播放器传递新的视频地址
		*/
		newVideo: function(c) {
			if (this.playerType == 'flashplayer') {
				this.V.newVideo(c);
				return;
			} else {
				this.embed(c);
			}
		},
		/*
			接口函数
			截图
		*/
		screenshot: function(obj, save, name) {
			if (!this.loaded) {
				return;
			}
			if (this.playerType == 'flashplayer') {
				try {
					this.V.screenshot(obj, save, name);
				} catch(error) {
					this.log(error);
				}
				return;
			}
			if (obj == 'video') {
				var newCanvas = document.createElement('canvas');
				newCanvas.width = this.V.videoWidth;
				newCanvas.height = this.V.videoHeight;
				newCanvas.getContext('2d').drawImage(this.V, 0, 0, this.V.videoWidth, this.V.videoHeight);
				try {
					var base64 = newCanvas.toDataURL('image/jpeg');
					this.sendJS('screenshot', {
						object: obj,
						save: save,
						name: name,
						base64: base64
					});
				} catch(error) {
					this.log(error);
				}
			}
		},
		/*
			接口函数
			改变播放器尺寸
		*/
		changeSize: function(w, h) {
			if (this.isUndefined(w)) {
				w = 0;
			}
			if (this.isUndefined(h)) {
				h = 0;
			}
			if (w > 0) {
				this.css(this.CD, 'width', w + 'px');
			}
			if (h > 0) {
				this.css(this.CD, 'height', h + 'px');
			}
			if (this.html5Video) {
				this.elementCoordinate();
			}
		},
		/*
			接口函数
			改变视频播放速度
		*/
		changePlaybackRate: function(n) {
			if (this.html5Video) {
				var arr = this.playbackRateArr;
				n = parseInt(n);
				if (n < arr.length) {
					this.newPlaybackrate(arr[n][1]);
				}
			}
		},
		/*
			内部函数
			注册控制控制栏显示与隐藏函数
		*/
		changeControlBarShow: function(show) {
			if (!this.loaded) {
				return;
			}
			if (this.playerType == 'flashplayer') {
				this.V.changeControlBarShow(show);
				return;
			}
			if (show) {
				this.controlBarIsShow = true;
				this.controlBarHide(false);
			} else {
				this.controlBarIsShow = false;
				this.controlBarHide(true);
			}
		},
		/*
			-----------------------------------------------------------------------
			调用flashplayer
		*/
		embedSWF: function() {
			var vid = this.randomString();
			var flashvars = this.getFlashVars();
			var param = this.getFlashplayerParam();
			var flashplayerUrl = 'http://www.macromedia.com/go/getflashplayer';
			var html = '',
			src = javascriptPath + 'ckplayer.swf';
			id = 'id="' + vid + '" name="' + vid + '" ';
			html += '<object pluginspage="' + flashplayerUrl + '" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"  codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=11,3,0,0" width="100%" height="100%" ' + id + ' align="middle" wmode="transparent">';
			html += param['v'];
			html += '<param name="movie" value="' + src + '">';
			html += '<param name="flashvars" value="' + flashvars + '">';
			html += '<param name="wmode" value="transparent">';
			html += '<embed wmode="transparent" ' + param['w'] + ' src="' + src + '" flashvars="' + flashvars + '" width="100%" height="100%" ' + id + ' align="middle" type="application/x-shockwave-flash" pluginspage="' + flashplayerUrl + '" />';
			html += '</object>';
			this.PD.innerHTML = html;
			this.V = this.getObjectById(vid); //V：定义播放器对象全局变量
			this.playerType = 'flashplayer';
			//if(!this.checkShockwaveFlash()){
				//this.PD.innerHTML = '<p>'+this.language['noLoadShockwaveFlash']+'</p><p><a href="https://www.flash.cn/" target="_blank" style="color:#FFFFFF">'+this.language['downLoadShockwaveFlash']+'</a></p>';
				//this.css(this.PD,{color:'#FFFFFF',textAlign:'center',paddingTop:'40px'});
			//}
		},
		/*
			判断浏览器是否支持flashplayer 
		*/
		checkShockwaveFlash:function(){
			if(window.ActiveXObject) {
				try {
					var s = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
					if(s) {
						return true;
					}
				} catch(e) {}
			} else {
				try {
					var s = navigator.plugins['Shockwave Flash'];
					if(s) {
						return true;
					}
				} catch(e) {}
			}
			return false;
		},
		/*
			内置函数
			将vars对象转换成字符
		*/
		getFlashVars: function() {
			this.getVarsObject();
			var v = this.vars;
			var z = '';
			for (k in v) {
				if (k != 'flashplayer' && k != 'container' && v[k] != '') {
					if (z != '') {
						z += '&';
					}
					var vk = v[k];
					if (vk == true) {
						vk = 1;
					}
					if (vk == false) {
						vk = 0;
					}
					z += k + '=' + vk;
				}

			}
			if (!v.hasOwnProperty('volume') || !v['volume']) {
				if (z != '') {
					z += '&';
				}
				z += 'volume=0';
			}
			return z;
		},
		/*判断字符串是否是图片*/
		isStrImage: function(s) {
			if (s == 'jpg' || s == 'jpeg' || s == 'png' || s == 'svg' || s == 'gif') {
				return true;
			}
			return false;
		},
		/*
			内置函数
			将vars格式化成flash能接受的对象。再由getFlashVars函数转化成字符串或由newVideo直接使用
		*/
		getVarsObject: function() {
			var v = this.vars;
			var f = '',
			d = '',
			w = ''; //f=视频地址，d=清晰度地址,w=权重，z=最终地址
			var arr = this.VA;
			var prompt = v['promptSpot'];
			var i = 0;
			var video = this.vars['video'];
			if (typeof(video) == 'object') { //对象或数组
				if (!this.isUndefined(typeof(video.length))) { //说明是数组
					var arr = video;
					for (i = 0; i < arr.length; i++) {
						var arr2 = arr[i];
						if (arr2) {
							if (f != '') {
								f += this.ckplayerConfig['config']['split'];
								d += ',';
								w += ',';
								v['type'] += this.ckplayerConfig['config']['split'];
							}
							f += encodeURIComponent(decodeURIComponent(arr2[0]));
							d += arr2[2];
							w += arr2[3];
							v['type'] += arr2[1].replace('video/', '');
						}
					}
				} else {
					f = encodeURIComponent(decodeURIComponent(video['file']));
					if (!this.isUndefined(video['type'])) {
						v['type'] = video['type'];
					}
					d = '';
					w = '';
				}
			} else {
				f = encodeURIComponent(decodeURIComponent(video));
			}
			if (v['preview'] != null) {
				v['previewscale'] = v['preview']['scale'];
				v['preview'] = v['preview']['file'].join(',');

			}
			if (prompt != null) {
				v['promptspot'] = '';
				v['promptspottime'] = '';
				for (i = 0; i < prompt.length; i++) {
					if (v['promptspot'] != '') {
						v['promptspot'] += ',';
						v['promptspottime'] += ',';
					}
					v['promptspot'] += prompt[i]['words'];
					v['promptspottime'] += prompt[i]['time'];
				}

			}
			if (f != '') {
				v['video'] = f;
				v['definition'] = d;
				v['weight'] = w;
			}
			if (!v['volume']) {
				v['volume'] = 0;
			}
			var newV = {};

			for (var k in v) {
				if (v[k] != null) {
					newV[k] = v[k];
				}
				if (k == 'type') {
					newV[k] = v[k].replace('video/m3u8', 'm3u8');
				}
			}

			this.vars = newV;
		},
		/*
			内置函数
			将embedSWF里的param的对象进行转换
		*/
		getFlashplayerParam: function() {
			var w = '',
			v = '',
			o = {
				allowScriptAccess: 'always',
				allowFullScreen: true,
				quality: 'high',
				bgcolor: '#000'
			};
			for (var e in o) {
				w += e + '="' + o[e] + '" ';
				v += '<param name="' + e + '" value="' + o[e] + '" />';
			}
			w = w.replace('movie=', 'src=');
			return {
				w: w,
				v: v
			};
		},

		/*
			操作动作结束
			-----------------------------------------------------------------------
			
			接口函数
			获取元数据部分
		*/
		getMetaDate: function() {
			if (!this.loaded || this.V == null) {
				return false;
			}
			if (this.playerType == 'html5video') {
				var duration = 0;
				try {
					duration = !isNaN(this.V.duration) ? this.V.duration: 0;
					if (isNaN(duration) || parseInt(duration) < 0.2) {
						if(this.vars['duration']>0){
							duration=this.vars['duration'];
						}
					}
					if(this.vars['forceduration']>0){
						duration=this.vars['forceduration'];
					}
				} catch(event) {
					this.log(event);
				}
				var data = {
					duration: duration,
					volume: this.V.volume,
					playbackRate: this.V.playbackRate,
					width: this.PD.offsetWidth || this.V.offsetWidth || this.V.width,
					height: this.PD.offsetHeight || this.V.offsetHeight || this.V.height,
					streamWidth: this.V.videoWidth,
					streamHeight: this.V.videoHeight,
					videoWidth: this.V.offsetWidth,
					videoHeight: this.V.offsetHeight,
					paused: this.V.paused,
					loadTime:this.loadTimeTemp
				};
				return data;
			} else {
				try {
					return this.V.getMetaDate();
				} catch(event) {
					this.log(event);
				}
			}
			return false;
		},
		/*
			接口函数
			取当前提供给播放器播放的视频列表
		*/
		getVideoUrl: function() {
			if (this.playerType == 'flashplayer') {
				return this.V.getVideoUrl();
			}
			var arr = [];
			if (this.V.src) {
				arr.push(this.V.src);
			} else {
				var uArr = this.V.childNodes;
				for (var i = 0; i < uArr.length; i++) {
					arr.push(uArr[i].src);
				}
			}
			return arr;
		},
		/*
			内置函数
			格式化函数
		*/
		clickEvent: function(call) {
			if (call == 'none' || call == '' || call == null) {
				return {
					type: 'none'
				};
			}
			var callArr = call.split('->');
			var type = '',
			fun = '',
			link = '',
			target = '';
			if (callArr.length == 2) {
				var callM = callArr[0];
				var callE = callArr[1];
				if (!callE) {
					return {
						type: 'none'
					};
				}
				var val = '';
				var eArr = [];
				type = callM;
				switch (callM) {
				case 'actionScript':
					//trace(THIS.hasOwnProperty(callE));
					if (callE.indexOf('(') > -1) {
						eArr = callE.split('(');
						callE = eArr[0];
						val = eArr[1].replace(')', '');
					}
					if (val == '') {
						fun = 'thisTemp.' + callE + '()';
					} else {
						fun = 'thisTemp.' + callE + '(' + val + ')';
					}
					break;
				case 'javaScript':
					if (callE.substr(0, 11) == '[flashvars]') {
						callE = callE.substr(11);
						if (this.vars.hasOwnProperty(callE)) {
							callE = this.vars[callE];
						} else {
							break;
						}

					}
					if (callE.indexOf('(') > -1) {
						eArr = callE.split('(');
						callE = eArr[0];
						val = eArr[1].replace(')', '');
					}
					if (val == '') {
						fun = callE + '()';
					} else {
						fun = callE + '(' + val + ')';
					}
					break;
				case "link":
					var callLink = (callE + ',').split(',');
					if (callLink[0].substr(0, 11) == '[flashvars]') {
						var fl = callLink[0].replace('[flashvars]', '');
						if (this.vars.hasOwnProperty(fl)) {
							callLink[0] = this.vars[fl];
						} else {
							break;
						}
					}
					if (!callLink[1]) {
						callLink[1] = '_blank';
					}
					link = callLink[0];
					target = callLink[1];
					break;
				}
			}
			return {
				type: type,
				fun: fun,
				link: link,
				target: target
			}
		},
		/*
			内置函数
			根据指定的align,valign,offsetX,offsetY计算坐标
		*/
		getPosition: function(obj) {
			/*
			{
	            "align": "right",
	            "vAlign": "right",
	            "offsetX": -60,
	            "offsetY": -60
	        } 
			*/
			var pw = this.PD.offsetWidth,
			ph = this.PD.offsetHeight;
			var x = 0,
			y = 0;
			switch (obj['align']) {
			case 'left':
				x = obj['offsetX'];
				break;
			case 'center':
				x = pw * 0.5 + obj['offsetX'];
				break;
			case 'right':
				x = pw + obj['offsetX'];
				break;
			}
			switch (obj['vAlign']) {
			case 'top':
				y = obj['offsetY'];
				break;
			case 'middle':
				y = ph * 0.5 + obj['offsetY'];
				break;
			case 'bottom':
				y = ph + obj['offsetY'];
				break;
			}
			return {
				x: x,
				y: y
			};
		},
		/*
			内置函数
			向播放器界面添加一个文本
		*/
		addElement: function(attribute) {
			var thisTemp = this;
			if (this.playerType == 'flashplayer') {
				return this.V.addElement(attribute);
			}
			var i = 0;
			var obj = {
				list: null,
				x: '100%',
				y: "50%",
				position: null,
				alpha: 1,
				backgroundColor: '',
				backAlpha: 1,
				backRadius: 0,
				clickEvent: ''
			};
			obj = this.standardization(obj, attribute);
			var list = obj['list'];
			if (list == null) {
				return '';
			}
			var id = 'element' + this.randomString(10);
			var ele = document.createElement('div');
			ele.className = id;
			if (obj['x']) {
				ele.setAttribute('data-x', obj['x']);
			}
			if (obj['y']) {
				ele.setAttribute('data-y', obj['y']);
			}
			if (obj['position'] != null) {
				ele.setAttribute('data-position', obj['position'].join(','));
			}

			this.PD.appendChild(ele);
			var eid = this.getByElement(id);
			this.css(eid, {
				position: 'absolute',
				filter: 'alpha(opacity:' + obj['alpha'] + ')',
				opacity: obj['alpha'].toString(),
				width: '800px',
				zIndex: '20'
			});
			var bgid = 'elementbg' + this.randomString(10);
			var bgAlpha = obj['alpha'].toString();
			var bgColor = obj['backgroundColor'].replace('0x', '#');
			var html = '';
			var idArr = [];
			var clickArr = [];
			if (!this.isUndefined(list) && list.length > 0) {
				var textObj, returnObj, clickEvent;
				for (i = 0; i < list.length; i++) {
					var newEleid = 'elementnew' + this.randomString(10);
					switch (list[i]['type']) {
					case 'image':
					case 'png':
					case 'jpg':
					case 'jpeg':
					case 'gif':
						textObj = {
							type: 'image',
							file: '',
							radius: 0,
							//圆角弧度
							width: 30,
							//定义宽，必需要定义
							height: 30,
							//定义高，必需要定义
							alpha: 1,
							//透明度
							paddingLeft: 0,
							//左边距离
							paddingRight: 0,
							//右边距离
							paddingTop: 0,
							paddingBottom: 0,
							marginLeft: 0,
							marginRight: 0,
							marginTop: 0,
							marginBottom: 0,
							backgroundColor: '',
							clickEvent: ''
						};

						list[i] = this.standardization(textObj, list[i]);
						clickEvent = this.clickEvent(list[i]['clickEvent']);
						clickArr.push(clickEvent);
						if (clickEvent['type'] == 'link') {
							html += '<div class="' + newEleid + '" data-i="' + i + '"><a href="' + clickEvent['link'] + '" target="' + clickEvent['target'] + '"><img class="' + newEleid + '_image" src="' + list[i]['file'] + '" style="border:0;"></a></div>';
						} else {
							html += '<div class="' + newEleid + '" data-i="' + i + '"><img class="' + newEleid + '_image" src="' + list[i]['file'] + '" style="border:0;"></div>';
						}
						break;
					case 'text':
						textObj = {
							type: 'text',
							//说明是文本
							text: '',
							//文本内容
							color: '0xFFFFFF',
							size: 14,
							font: this.fontFamily,
							leading: 0,
							alpha: 1,
							//透明度
							paddingLeft: 0,
							//左边距离
							paddingRight: 0,
							//右边距离
							paddingTop: 0,
							paddingBottom: 0,
							marginLeft: 0,
							marginRight: 0,
							marginTop: 0,
							marginBottom: 0,
							backgroundColor: '',
							backAlpha: 1,
							backRadius: 0,
							//背景圆角弧度，支持数字统一设置，也支持分开设置[30,20,20,50]，对应上左，上右，下右，下左
							clickEvent: ''
						};
						list[i] = this.standardization(textObj, list[i]);
						clickEvent = this.clickEvent(list[i]['clickEvent']);
						clickArr.push(clickEvent);
						if (clickEvent['type'] == 'link') {
							html += '<div class="' + newEleid + '" data-i="' + i + '"><div class="' + newEleid + '_bg"></div><div class="' + newEleid + '_text"><a href="' + clickEvent['link'] + '" target="' + clickEvent['target'] + '">' + list[i]['text'] + '</a></div></div>';
						} else {
							html += '<div  class="' + newEleid + '" data-i="' + i + '"><div class="' + newEleid + '_bg"></div><div class="' + newEleid + '_text">' + list[i]['text'] + '</div></div>';
						}
						break;
					default:
						break;
					}
					idArr.push(newEleid);
				}
			}
			var objClickEvent = this.clickEvent(obj['clickEvent']);
			/*if(objClickEvent['type']=='link'){
				html = '<a href="'+objClickEvent['link']+'" target="'+objClickEvent['target']+'">' + html + '</a>';
			}*/
			eid.innerHTML = '<div class="' + bgid + '"></div><div class="' + bgid + '_c">' + html + '</div>';
			if (objClickEvent['type'] == 'javaScript' || objClickEvent['type'] == 'actionScript') {
				var objClickHandler = function() {
					eval(objClickEvent['fun']);
					thisTemp.sendJS('clickEvent', clk['type'] + '->' + clk['fun'].replace('thisTemp.', '').replace('()', ''));
				};
				this.addListenerInside('click', objClickHandler, this.getByElement(bgid + '_c'))
			}
			this.css(bgid + '_c', {
				position: 'absolute',
				zIndex: '2'
			});
			for (i = 0; i < idArr.length; i++) {
				var clk = clickArr[i];

				if (clk['type'] == 'javaScript' || clk['type'] == 'actionScript') {
					var clickHandler = function() {
						clk = clickArr[this.getAttribute('data-i')];
						eval(clk['fun']);
						thisTemp.sendJS('clickEvent', clk['type'] + '->' + clk['fun'].replace('thisTemp.', '').replace('()', ''));
					};
					this.addListenerInside('click', clickHandler, this.getByElement(idArr[i]))
				}
				switch (list[i]['type']) {
				case 'image':
				case 'png':
				case 'jpg':
				case 'jpeg':
				case 'gif':
					this.css(idArr[i], {
						float: 'left',
						width: list[i]['width'] + 'px',
						height: list[i]['height'] + 'px',
						filter: 'alpha(opacity:' + list[i]['alpha'] + ')',
						opacity: list[i]['alpha'].toString(),
						marginLeft: list[i]['marginLeft'] + 'px',
						marginRight: list[i]['marginRight'] + 'px',
						marginTop: list[i]['marginTop'] + 'px',
						marginBottom: list[i]['marginBottom'] + 'px',
						borderRadius: list[i]['radius'] + 'px',
						cursor: 'pointer'
					});
					this.css(idArr[i] + '_image', {
						width: list[i]['width'] + 'px',
						height: list[i]['height'] + 'px',
						borderRadius: list[i]['radius'] + 'px'
					});
					break;
				case 'text':
					this.css(idArr[i] + '_text', {
						filter: 'alpha(opacity:' + list[i]['alpha'] + ')',
						opacity: list[i]['alpha'].toString(),
						borderRadius: list[i]['radius'] + 'px',
						fontFamily: list[i]['font'],
						fontSize: list[i]['size'] + 'px',
						color: list[i]['color'].replace('0x', '#'),
						lineHeight: list[i]['leading'] > 0 ? list[i]['leading'] + 'px': '',
						paddingLeft: list[i]['paddingLeft'] + 'px',
						paddingRight: list[i]['paddingRight'] + 'px',
						paddingTop: list[i]['paddingTop'] + 'px',
						paddingBottom: list[i]['paddingBottom'] + 'px',
						whiteSpace: 'nowrap',
						position: 'absolute',
						zIndex: '3',
						cursor: 'pointer'
					});
					this.css(idArr[i], {
						float: 'left',
						width: this.getByElement(idArr[i] + '_text').offsetWidth + 'px',
						height: this.getByElement(idArr[i] + '_text').offsetHeight + 'px',
						marginLeft: list[i]['marginLeft'] + 'px',
						marginRight: list[i]['marginRight'] + 'px',
						marginTop: list[i]['marginTop'] + 'px',
						marginBottom: list[i]['marginBottom'] + 'px'
					});
					this.css(idArr[i] + '_bg', {
						width: this.getByElement(idArr[i] + '_text').offsetWidth + 'px',
						height: this.getByElement(idArr[i] + '_text').offsetHeight + 'px',
						filter: 'alpha(opacity:' + list[i]['backAlpha'] + ')',
						opacity: list[i]['backAlpha'].toString(),
						borderRadius: list[i]['backRadius'] + 'px',
						backgroundColor: list[i]['backgroundColor'].replace('0x', '#'),
						position: 'absolute',
						zIndex: '2'
					});
					break;
				default:
					break;
				}
			}
			this.css(bgid, {
				width: this.getByElement(bgid + '_c').offsetWidth + 'px',
				height: this.getByElement(bgid + '_c').offsetHeight + 'px',
				position: 'absolute',
				filter: 'alpha(opacity:' + bgAlpha + ')',
				opacity: bgAlpha,
				backgroundColor: bgColor.replace('0x', '#'),
				borderRadius: obj['backRadius'] + 'px',
				zIndex: '1'
			});
			this.css(eid, {
				width: this.getByElement(bgid).offsetWidth + 'px',
				height: this.getByElement(bgid).offsetHeight + 'px'
			});
			var eidCoor = this.calculationCoor(eid);
			this.css(eid, {
				left: eidCoor['x'] + 'px',
				top: eidCoor['y'] + 'px'
			});

			this.elementArr.push(eid.className);
			return eid;
		},
		/*
			内置函数
			获取元件的属性，包括x,y,width,height,alpha
		*/
		getElement: function(element) {
			if (this.playerType == 'flashplayer') {
				return this.V.getElement(element);
			}
			var ele = element;
			if (typeof(element) == 'string') {
				ele = this.getByElement(element);
			}
			var coor = this.getCoor(ele);
			return {
				x: coor['x'],
				y: coor['y'],
				width: ele.offsetWidth,
				height: ele.offsetHeight,
				alpha: !this.isUndefined(this.css(ele, 'opacity')) ? parseFloat(this.css(ele, 'opacity')) : 1,
				show: this.css(ele, 'display') == 'none' ? false: true
			};
		},
		/*
			内置函数
			控制元件显示和隐藏
		*/
		elementShow: function(element, show) {
			if (this.playerType == 'flashplayer') {
				this.V.elementShow(element, show);
				return;
			}
			if (typeof(element) == 'string') {
				if (element) {
					this.css(ele, 'display', show == true ? 'block': 'none');
				} else {
					var arr = this.elementTempArr;
					for (var i = 0; i < arr.length; i++) {
						this.css(arr[i], 'display', show == true ? 'block': 'none');
					}
				}
			}

		},
		/*
			内置函数
			根据节点的x,y计算在播放器里的坐标
		*/
		calculationCoor: function(ele) {
			if (this.playerType == 'flashplayer') {
				return this.V.calculationCoor(ele);
			}
			if (ele == []) {
				return;
			}
			var x, y, position = [];
			var w = this.PD.offsetWidth,
			h = this.PD.offsetHeight;
			var ew = ele.offsetWidth,
			eh = ele.offsetHeight;
			if (!this.isUndefined(this.getDataset(ele, 'x'))) {
				x = this.getDataset(ele, 'x');
			}
			if (!this.isUndefined(this.getDataset(ele, 'y'))) {
				y = this.getDataset(ele, 'y');
			}
			if (!this.isUndefined(this.getDataset(ele, 'position'))) {
				try {
					position = this.getDataset(ele, 'position').toString().split(',');
				} catch(event) {}
			}
			if (position.length > 0) {
				position.push(null, null, null, null);
				var i = 0;
				for (i = 0; i < position.length; i++) {
					if (this.isUndefined(position[i]) || position[i] == null || position[i] == 'null' || position[i] == '') {
						position[i] = null;
					} else {
						position[i] = parseFloat(position[i]);
					}
				}

				if (position[2] == null) {
					switch (position[0]) {
					case 0:
						x = 0;
						break;
					case 1:
						x = parseInt((w - ew) * 0.5);
						break;
					default:
						x = w - ew;
						break;
					}
				} else {
					switch (position[0]) {
					case 0:
						x = position[2];
						break;
					case 1:
						x = parseInt(w * 0.5) + position[2];
						break;
					default:
						x = w + position[2];
						break;
					}
				}
				if (position[3] == null) {
					switch (position[1]) {
					case 0:
						y = 0;
						break;
					case 1:
						y = parseInt((h - eh) * 0.5);
						break;
					default:
						y = h - eh;
						break;
					}
				} else {
					switch (position[1]) {
					case 0:
						y = position[3];
						break;
					case 1:
						y = parseInt(h * 0.5) + position[3];
						break;
					default:
						y = h + position[3];
						break;
					}
				}
			} else {
				if (x.substring(x.length - 1, x.length) == '%') {
					x = Math.floor(parseInt(x.substring(0, x.length - 1)) * w * 0.01);
				}
				if (y.substring(y.length - 1, y.length) == '%') {
					y = Math.floor(parseInt(y.substring(0, y.length - 1)) * h * 0.01);
				}
			}
			return {
				x: x,
				y: y
			}

		},
		/*
			内置函数
			修改新增元件的坐标
		*/
		changeElementCoor: function() {
			for (var i = 0; i < this.elementArr.length; i++) {
				if (this.getByElement(this.elementArr[i]) != []) {
					var c = this.calculationCoor(this.getByElement(this.elementArr[i]));
					if (c['x'] && c['y']) {
						this.css(this.elementArr[i], {
							top: c['y'] + 'px',
							left: c['x'] + 'px'
						});
					}
				}
			}
		},
		/*
			内置函数
			缓动效果集
		*/
		tween: function() {
			var Tween = {
				None: { //均速运动
					easeIn: function(t, b, c, d) {
						return c * t / d + b;
					},
					easeOut: function(t, b, c, d) {
						return c * t / d + b;
					},
					easeInOut: function(t, b, c, d) {
						return c * t / d + b;
					}
				},
				Quadratic: {
					easeIn: function(t, b, c, d) {
						return c * (t /= d) * t + b;
					},
					easeOut: function(t, b, c, d) {
						return - c * (t /= d) * (t - 2) + b;
					},
					easeInOut: function(t, b, c, d) {
						if ((t /= d / 2) < 1) return c / 2 * t * t + b;
						return - c / 2 * ((--t) * (t - 2) - 1) + b;
					}
				},
				Cubic: {
					easeIn: function(t, b, c, d) {
						return c * (t /= d) * t * t + b;
					},
					easeOut: function(t, b, c, d) {
						return c * ((t = t / d - 1) * t * t + 1) + b;
					},
					easeInOut: function(t, b, c, d) {
						if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
						return c / 2 * ((t -= 2) * t * t + 2) + b;
					}
				},
				Quartic: {
					easeIn: function(t, b, c, d) {
						return c * (t /= d) * t * t * t + b;
					},
					easeOut: function(t, b, c, d) {
						return - c * ((t = t / d - 1) * t * t * t - 1) + b;
					},
					easeInOut: function(t, b, c, d) {
						if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
						return - c / 2 * ((t -= 2) * t * t * t - 2) + b;
					}
				},
				Quintic: {
					easeIn: function(t, b, c, d) {
						return c * (t /= d) * t * t * t * t + b;
					},
					easeOut: function(t, b, c, d) {
						return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
					},
					easeInOut: function(t, b, c, d) {
						if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
						return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
					}
				},
				Sine: {
					easeIn: function(t, b, c, d) {
						return - c * Math.cos(t / d * (Math.PI / 2)) + c + b;
					},
					easeOut: function(t, b, c, d) {
						return c * Math.sin(t / d * (Math.PI / 2)) + b;
					},
					easeInOut: function(t, b, c, d) {
						return - c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
					}
				},
				Exponential: {
					easeIn: function(t, b, c, d) {
						return (t == 0) ? b: c * Math.pow(2, 10 * (t / d - 1)) + b;
					},
					easeOut: function(t, b, c, d) {
						return (t == d) ? b + c: c * ( - Math.pow(2, -10 * t / d) + 1) + b;
					},
					easeInOut: function(t, b, c, d) {
						if (t == 0) return b;
						if (t == d) return b + c;
						if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
						return c / 2 * ( - Math.pow(2, -10 * --t) + 2) + b;
					}
				},
				Circular: {
					easeIn: function(t, b, c, d) {
						return - c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
					},
					easeOut: function(t, b, c, d) {
						return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
					},
					easeInOut: function(t, b, c, d) {
						if ((t /= d / 2) < 1) return - c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
						return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
					}
				},
				Elastic: {
					easeIn: function(t, b, c, d, a, p) {
						if (t == 0) return b;
						if ((t /= d) == 1) return b + c;
						if (!p) p = d * .3;
						if (!a || a < Math.abs(c)) {
							a = c;
							var s = p / 4;
						} else var s = p / (2 * Math.PI) * Math.asin(c / a);
						return - (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
					},
					easeOut: function(t, b, c, d, a, p) {
						if (t == 0) return b;
						if ((t /= d) == 1) return b + c;
						if (!p) p = d * .3;
						if (!a || a < Math.abs(c)) {
							a = c;
							var s = p / 4;
						} else var s = p / (2 * Math.PI) * Math.asin(c / a);
						return (a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b);
					},
					easeInOut: function(t, b, c, d, a, p) {
						if (t == 0) return b;
						if ((t /= d / 2) == 2) return b + c;
						if (!p) p = d * (.3 * 1.5);
						if (!a || a < Math.abs(c)) {
							a = c;
							var s = p / 4;
						} else var s = p / (2 * Math.PI) * Math.asin(c / a);
						if (t < 1) return - .5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
						return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
					}
				},
				Back: {
					easeIn: function(t, b, c, d, s) {
						if (s == undefined) s = 1.70158;
						return c * (t /= d) * t * ((s + 1) * t - s) + b;
					},
					easeOut: function(t, b, c, d, s) {
						if (s == undefined) s = 1.70158;
						return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
					},
					easeInOut: function(t, b, c, d, s) {
						if (s == undefined) s = 1.70158;
						if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
						return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
					}
				},
				Bounce: {
					easeIn: function(t, b, c, d) {
						return c - Tween.Bounce.easeOut(d - t, 0, c, d) + b;
					},
					easeOut: function(t, b, c, d) {
						if ((t /= d) < (1 / 2.75)) {
							return c * (7.5625 * t * t) + b;
						} else if (t < (2 / 2.75)) {
							return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
						} else if (t < (2.5 / 2.75)) {
							return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
						} else {
							return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
						}
					},
					easeInOut: function(t, b, c, d) {
						if (t < d / 2) return Tween.Bounce.easeIn(t * 2, 0, c, d) * .5 + b;
						else return Tween.Bounce.easeOut(t * 2 - d, 0, c, d) * .5 + c * .5 + b;
					}
				}
			};
			return Tween;
		},
		/*
			接口函数
			缓动效果
			ele:Object=需要缓动的对象,
			parameter:String=需要改变的属性：x,y,width,height,alpha,
			effect:String=效果名称,
			start:Int=起始值,
			end:Int=结束值,
			speed:Number=运动的总秒数，支持小数
		*/
		animate: function(attribute) {
			if (this.playerType == 'flashplayer') {
				return this.V.animate(attribute);
			}
			var thisTemp = this;
			var animateId = 'animate_' + this.randomString();
			var obj = {
				element: null,
				parameter: 'x',
				static: false,
				effect: 'None.easeIn',
				start: null,
				end: null,
				speed: 0,
				overStop: false,
				pauseStop: false,
				//暂停播放时缓动是否暂停
				callBack: null
			};
			obj = this.standardization(obj, attribute);
			if (obj['element'] == null || obj['speed'] == 0) {
				return false;
			}
			var w = this.PD.offsetWidth,
			h = this.PD.offsetHeight;
			var effArr = (obj['effect'] + '.').split('.');
			var tweenFun = this.tween()[effArr[0]][effArr[1]];
			var eleCoor = {
				x: 0,
				y: 0
			};
			if (this.isUndefined(tweenFun)) {
				return false;
			}
			//先将该元件从元件数组里删除，让其不再跟随播放器的尺寸改变而改变位置
			var def = this.arrIndexOf(this.elementArr, obj['element'].className);
			if (def > -1) {
				this.elementTempArr.push(obj['element'].className);
				this.elementArr.splice(def, 1);
			}
			//var run = true;
			var css = {};
			//对传递的参数进行转化，x和y转化成left,top
			var pm = this.getElement(obj['element']); //包含x,y,width,height,alpha属性
			var t = 0; //当前时间
			var b = 0; //初始值
			var c = 0; //变化量
			var d = obj['speed'] * 1000; //持续时间
			var timerTween = null;
			var tweenObj = null;
			var start = obj['start'] == null ? '': obj['start'].toString();
			var end = obj['end'] == null ? '': obj['end'].toString();
			switch (obj['parameter']) {
			case 'x':
				if (obj['start'] == null) {
					b = pm['x'];
				} else {
					if (start.substring(start.length - 1, start.length) == '%') {
						b = parseInt(start) * w * 0.01;
					} else {
						b = parseInt(start);
					}

				}
				if (obj['end'] == null) {
					c = pm['x'] - b;
				} else {
					if (end.substring(end.length - 1, end.length) == '%') {
						c = parseInt(end) * w * 0.01 - b;
					} else if (end.substring(0, 1) == '-' || end.substring(0, 1) == '+') {
						if (typeof(obj['end']) == 'number') {
							c = parseInt(obj['end']) - b;
						} else {
							c = parseInt(end);
						}

					} else {
						c = parseInt(end) - b;
					}
				}
				break;
			case 'y':
				if (obj['start'] == null) {
					b = pm['y'];
				} else {
					if (start.substring(start.length - 1, start.length) == '%') {
						b = parseInt(start) * h * 0.01;
					} else {
						b = parseInt(start);
					}

				}
				if (obj['end'] == null) {
					c = pm['y'] - b;
				} else {
					if (end.substring(end.length - 1, end.length) == '%') {
						c = parseInt(end) * h * 0.01 - b;
					} else if (end.substring(0, 1) == '-' || end.substring(0, 1) == '+') {
						if (typeof(obj['end']) == 'number') {
							c = parseInt(obj['end']) - b;
						} else {
							c = parseInt(end);
						}
					} else {
						c = parseInt(end) - b;
					}
				}
				break;
			case 'alpha':
				if (obj['start'] == null) {
					b = pm['alpha'] * 100;
				} else {
					if (start.substring(start.length - 1, start.length) == '%') {
						b = parseInt(obj['start']);
					} else {
						b = parseInt(obj['start'] * 100);
					}

				}
				if (obj['end'] == null) {
					c = pm['alpha'] * 100 - b;
				} else {
					if (end.substring(end.length - 1, end.length) == '%') {
						c = parseInt(end) - b;
					} else if (end.substring(0, 1) == '-' || end.substring(0, 1) == '+') {
						if (typeof(obj['end']) == 'number') {
							c = parseInt(obj['end']) * 100 - b;
						} else {
							c = parseInt(obj['end']) * 100;
						}
					} else {
						c = parseInt(obj['end']) * 100 - b;
					}
				}
				break;
			}
			var callBack = function() {
				var index = thisTemp.arrIndexOf(thisTemp.animateElementArray, animateId);
				if (index > -1) {
					thisTemp.animateArray.splice(index, 1);
					thisTemp.animateElementArray.splice(index, 1);
				}
				index = thisTemp.arrIndexOf(thisTemp.animatePauseArray, animateId);
				if (index > -1) {
					thisTemp.animatePauseArray.splice(index, 1);
				}
				if (obj['callBack'] != null && obj['element'] && obj['callBack'] != 'callBack' && obj['callBack'] != 'tweenX' && obj['tweenY'] != 'callBack' && obj['callBack'] != 'tweenAlpha') {
					var cb = eval(obj['callBack']);
					cb(obj['element']);
					obj['callBack'] = null;
				}
			};
			var stopTween = function() {
				if (timerTween != null) {
					if (timerTween.runing) {
						timerTween.stop();
					}
					timerTween = null;
				}
			};
			var tweenX = function() {
				if (t < d) {
					t += 10;
					css = {
						left: Math.ceil(tweenFun(t, b, c, d)) + 'px'
					};
					if (obj['static']) {
						eleCoor = thisTemp.calculationCoor(obj['element']);
						css['top'] = eleCoor['y'] + 'px';
					}
					thisTemp.css(obj['element'], css);

				} else {
					stopTween();
					try {
						var defX = this.arrIndexOf(this.elementTempArr, obj['element'].className);
						if (defX > -1) {
							this.elementTempArr.splice(defX, 1);
						}
					} catch(event) {}
					thisTemp.elementArr.push(obj['element'].className);
					callBack();
				}
			};
			var tweenY = function() {
				if (t < d) {
					t += 10;
					css = {
						top: Math.ceil(tweenFun(t, b, c, d)) + 'px'
					};
					if (obj['static']) {
						eleCoor = thisTemp.calculationCoor(obj['element']);
						css['left'] = eleCoor['x'] + 'px';
					}
					thisTemp.css(obj['element'], css);
				} else {
					stopTween();
					try {
						var defY = this.arrIndexOf(this.elementTempArr, obj['element'].className);
						if (defY > -1) {
							this.elementTempArr.splice(defY, 1);
						}
					} catch(event) {}
					thisTemp.elementArr.push(obj['element'].className);
					callBack();
				}
			};
			var tweenAlpha = function() {
				if (t < d) {
					t += 10;
					eleCoor = thisTemp.calculationCoor(obj['element']);
					var ap = Math.ceil(tweenFun(t, b, c, d)) * 0.01;
					css = {
						filter: 'alpha(opacity:' + ap + ')',
						opacity: ap.toString()
					};
					if (obj['static']) {
						eleCoor = thisTemp.calculationCoor(obj['element']);
						css['top'] = eleCoor['y'] + 'px';
						css['left'] = eleCoor['x'] + 'px';
					}
					thisTemp.css(obj['element'], css);
				} else {
					stopTween();
					try {
						var defA = this.arrIndexOf(this.elementTempArr, obj['element'].className);
						if (defA > -1) {
							this.elementTempArr.splice(defA, 1);
						}
					} catch(event) {}
					thisTemp.elementArr.push(obj['element'].className);
					callBack();
				}
			};
			switch (obj['parameter']) {
			case 'x':
				tweenObj = tweenX;
				break;
			case 'y':
				tweenObj = tweenY;
				break;
			case 'alpha':
				tweenObj = tweenAlpha;
				break;
			default:
				break;
			}
			timerTween = new thisTemp.timer(10, tweenObj);
			timerTween.callBackFunction = callBack;
			if (obj['overStop']) {
				var mouseOver = function() {
					if (timerTween != null && timerTween.runing) {
						timerTween.stop();
					}
				};
				this.addListenerInside('mouseover', mouseOver, obj['element']);
				var mouseOut = function() {
					var start = true;
					if (obj['pauseStop'] && thisTemp.getMetaDate()['paused']) {
						start = false;
					}
					if (timerTween != null && !timerTween.runing && start) {
						timerTween.start();
					}
				};
				this.addListenerInside('mouseout', mouseOut, obj['element']);
			}

			this.animateArray.push(timerTween);
			this.animateElementArray.push(animateId);
			if (obj['pauseStop']) {
				this.animatePauseArray.push(animateId);
			}
			return animateId;
		},
		/*
			接口函数函数
			继续运行animate
		*/
		animateResume: function(id) {
			if (this.playerType == 'flashplayer') {
				this.V.animateResume(this.isUndefined(id) ? '': id);
				return;
			}
			var arr = [];
			if (id != '' && !this.isUndefined(id) && id != 'pause') {
				arr.push(id);
			} else {
				if (id === 'pause') {
					arr = this.animatePauseArray;
				} else {
					arr = this.animateElementArray;
				}
			}
			for (var i = 0; i < arr.length; i++) {
				var index = this.arrIndexOf(this.animateElementArray, arr[i]);
				if (index > -1) {
					this.animateArray[index].start();
				}
			}

		},
		/*
			接口函数
			暂停运行animate
		*/
		animatePause: function(id) {
			if (this.playerType == 'flashplayer') {
				this.V.animatePause(this.isUndefined(id) ? '': id);
				return;
			}
			var arr = [];
			if (id != '' && !this.isUndefined(id) && id != 'pause') {
				arr.push(id);
			} else {
				if (id === 'pause') {
					arr = this.animatePauseArray;
				} else {
					arr = this.animateElementArray;
				}
			}
			for (var i = 0; i < arr.length; i++) {
				var index = this.arrIndexOf(this.animateElementArray, arr[i]);
				if (index > -1) {
					this.animateArray[index].stop();
				}
			}
		},
		/*
			内置函数
			根据ID删除数组里对应的内容
		*/
		deleteAnimate: function(id) {
			if (this.playerType == 'flashplayer' && this.V) {
				try {
					this.V.deleteAnimate(id);
				} catch(event) {
					this.log(event);
				}
				return;
			}
			var index = this.arrIndexOf(this.animateElementArray, id);
			if (index > -1) {
				this.animateArray[index].callBackFunction();
				this.animateArray.splice(index, 1);
				this.animateElementArray.splice(index, 1);
			}
		},
		/*
			内置函数
			删除外部新建的元件
		*/
		deleteElement: function(ele) {
			if (this.playerType == 'flashplayer' && this.V) {
				try {
					this.V.deleteElement(ele);
				} catch(event) {}
				return;
			}
			//先将该元件从元件数组里删除，让其不再跟随播放器的尺寸改变而改变位置
			var def = this.arrIndexOf(this.elementArr, ele.className);
			if (def > -1) {
				this.elementArr.splice(def, 1);
			}
			try {
				def = this.arrIndexOf(this.elementTempArr, ele.className);
				if (def > -1) {
					this.elementTempArr.splice(def, 1);
				}
			} catch(event) {}
			this.deleteAnimate(ele);
			this.deleteChild(ele);
		},
		/*
			--------------------------------------------------------------
			共用函数部分
			以下函数并非只能在本程序中使用，也可以在页面其它项目中使用
			根据ID获取元素对象
		*/
		getByElement: function(obj, parent) {
			if (this.isUndefined(parent)) {
				parent = document;
			}
			var num = obj.substr(0, 1);
			var res = [];
			if (num != '#') {
				if (num == '.') {
					obj = obj.substr(1, obj.length);
				}
				if (parent.getElementsByClassName) {
					res = parent.getElementsByClassName(obj);
				} else {
					var reg = new RegExp(' ' + obj + ' ', 'i');
					var ele = parent.getElementsByTagName('*');

					for (var i = 0; i < ele.length; i++) {
						if (reg.test(' ' + ele[i].className + ' ')) {
							res.push(ele[i]);
						}
					}
				}

				if (res.length > 0) {
					return res[0];
				} else {
					return res;
				}
			} else {
				if (num == '#') {
					obj = obj.substr(1, obj.length);
				}
				return document.getElementById(obj);
			}
		},
		/*
		 	共用函数
			功能：修改样式或获取指定样式的值，
				elem：ID对象或ID对应的字符，如果多个对象一起设置，则可以使用数组
				attribute：样式名称或对象，如果是对象，则省略掉value值
				value：attribute为样式名称时，定义的样式值
				示例一：
				this.css(ID,'width','100px');
				示例二：
				this.css('id','width','100px');
				示例三：
				this.css([ID1,ID2,ID3],'width','100px');
				示例四：
				this.css(ID,{
					width:'100px',
					height:'100px'
				});
				示例五(获取宽度)：
				var width=this.css(ID,'width');
		*/
		css: function(elem, attribute, value) {
			var i = 0;
			var k = '';
			if (typeof(elem) == 'object') { //对象或数组
				if (!this.isUndefined(typeof(elem.length))) { //说明是数组
					for (i = 0; i < elem.length; i++) {
						var el;
						if (typeof(elem[i]) == 'string') {
							el = this.getByElement(elem[i])
						} else {
							el = elem[i];
						}
						if (typeof(attribute) != 'object') {
							if (!this.isUndefined(value)) {
								el.style[attribute] = value;
							}
						} else {
							for (k in attribute) {
								if (!this.isUndefined(attribute[k])) {
									try {
										el.style[k] = attribute[k];
									} catch(event) {
										this.log(event);
									}
								}
							}
						}
					}
					return;
				}

			}
			if (typeof(elem) == 'string') {
				elem = this.getByElement(elem);
			}
			if (typeof(attribute) != 'object') {
				if (!this.isUndefined(value)) {
					elem.style[attribute] = value;
				} else {
					if (!this.isUndefined(this.getStyle(elem, attribute))) {
						return this.getStyle(elem, attribute);
					} else {
						return false;
					}
				}
			} else {
				for (k in attribute) {
					if (!this.isUndefined(attribute[k])) {
						elem.style[k] = attribute[k];
					}
				}
			}

		},
		/*
			内置函数
			兼容型获取style
		*/
		getStyle: function(obj, attr) {
			if (!this.isUndefined(obj.style[attr])) {
				return obj.style[attr];
			} else {
				if (obj.currentStyle) {
					return obj.currentStyle[attr];
				} else {
					return getComputedStyle(obj, false)[attr];
				}
			}
		},
		/*
			共用函数
			判断变量是否存在或值是否为undefined
		*/
		isUndefined: function(value) {
			try {
				if (value == 'undefined' || value == undefined || value == null) {
					return true;
				}
			} catch(event) {
				this.log(event);
			}
			return false;
		},
		/*
		 	共用函数
			外部监听函数
		*/
		addListener: function(name, funName) {
			if (name && funName) {
				if (this.playerType == 'flashplayer') {
					var ff = ''; //定义用来向flashplayer传递的函数字符
					if (typeof(funName) == 'function') {
						ff = this.getParameterNames(funName);
					}
					this.V.addListener(name, ff);
					return;
				}
				var have = false;
				for (var i = 0; i < this.listenerJsArr.length; i++) {
					var arr = this.listenerJsArr[i];
					if (arr[0] == name && arr[1] == funName) {
						have = true;
						break;
					}
				}
				if (!have) {
					this.listenerJsArr.push([name, funName]);
				}
			}
		},
		/*
			共用函数
			外部删除监听函数
		*/
		removeListener: function(name, funName) {
			if (name && funName) {
				if (this.playerType == 'flashplayer') {
					var ff = ''; //定义用来向flashplayer传递的函数字符
					if (typeof(funName) == 'function') {
						ff = this.getParameterNames(funName);
					}
					this.V.removeListener(name, ff);
					return;
				}
				for (var i = 0; i < this.listenerJsArr.length; i++) {
					var arr = this.listenerJsArr[i];
					if (arr[0] == name && arr[1] == funName) {
						this.listenerJsArr.splice(i, 1);
						break;
					}
				}
			}
		},
		/*
			内部监听函数，调用方式：
			this.addListenerInside('click',function(event){},[ID]);
			d值为空时，则表示监听当前的视频播放器
		*/
		addListenerInside: function(e, f, d, t) {
			if (this.isUndefined(t)) {
				t = false;
			}
			var o = this.V;
			if (!this.isUndefined(d)) {
				o = d;
			}
			if (o.addEventListener) {
				try {
					o.addEventListener(e, f, t);
				} catch(event) {}
			} else if (o.attachEvent) {
				try {
					o.attachEvent('on' + e, f);
				} catch(event) {}
			} else {
				o['on' + e] = f;
			}
		},
		/*
			删除内部监听函数，调用方式：
			this.removeListenerInside('click',function(event){}[,ID]);
			d值为空时，则表示监听当前的视频播放器
		*/
		removeListenerInside: function(e, f, d, t) {
			/*if(this.playerType=='flashplayer' && this.getParameterNames(f) && this.isUndefined(d)) {
				return;
			}*/
			if (this.isUndefined(t)) {
				t = false;
			}
			var o = this.V;
			if (!this.isUndefined(d)) {
				o = d;
			}
			if (o.removeEventListener) {
				try {
					this.addNum--;
					o.removeEventListener(e, f, t);
				} catch(e) {}
			} else if (o.detachEvent) {
				try {
					o.detachEvent('on' + e, f);
				} catch(e) {}
			} else {
				o['on' + e] = null;
			}
		},
		/*
			共用函数
			统一分配监听，以达到跟as3同样效果
		*/
		sendJS: function(name, val) {
			if (this.adPlayerPlay && name.substr( - 2) != 'Ad') {
				return;
			}
			var list = this.listenerJsArr;
			var obj = {
				variable: this.vars['variable']
			};
			if (this.vars['playerID']) {
				obj['playerID'] = this.vars['playerID'];
			}
			if(this.vars['debug']){
				this.log(name+':'+val);
			}
			for (var i = 0; i < list.length; i++) {
				var arr = list[i];
				if (arr[0] == name) {
					if (val) {
						switch (arr[1].length) {
						case 1:
							arr[1](val);
							break;
						case 2:
							arr[1](val, obj);
							break;
						default:
							arr[1]();
							break;
						}

					} else {
						switch (arr[1].length) {
						case 1:
							if (typeof(val) == 'boolean') {
								arr[1](false);
							} else {
								arr[1](obj);
							}
							break;
						default:
							arr[1]();
							break;
						}

					}
				}
			}
		},
		/*
			共用函数
			获取函数名称，如 function ckplayer(){} var fun=ckplayer，则getParameterNames(fun)=ckplayer
		*/
		getParameterNames: function(fn) {
			if (typeof(fn) !== 'function') {
				return false;
			}
			var COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;
			var code = fn.toString().replace(COMMENTS, '');
			var result = code.slice(code.indexOf(' ') + 1, code.indexOf('('));
			return result === null ? false: result;
		},
		/*
			共用函数
			获取当前本地时间
		*/
		getNowDate: function() {
			var nowDate = new Date();
			var month = nowDate.getMonth() + 1;
			var date = nowDate.getDate();
			var hours = nowDate.getHours();
			var minutes = nowDate.getMinutes();
			var seconds = nowDate.getSeconds();
			var tMonth = '',
			tDate = '',
			tHours = '',
			tMinutes = '',
			tSeconds = '',
			tSeconds = (seconds < 10) ? '0' + seconds: seconds + '',
			tMinutes = (minutes < 10) ? '0' + minutes: minutes + '',
			tHours = (hours < 10) ? '0' + hours: hours + '',
			tDate = (date < 10) ? '0' + date: date + '',
			tMonth = (month < 10) ? '0' + month: month + '';
			return tMonth + '/' + tDate + ' ' + tHours + ':' + tMinutes + ':' + tSeconds;
		},
		/*
			共用函数
			格式化时分秒
			seconds:Int：秒数
			ishours:Boolean：是否显示小时，如果设置成false，则会显示如80:20，表示1小时20分钟20秒
		*/
		formatTime: function(seconds, ishours) {
			var tSeconds = '',
			tMinutes = '',
			tHours = '';
			if (isNaN(seconds)) {
				seconds = 0;
			}
			var s = Math.floor(seconds % 60),
			m = 0,
			h = 0;
			if (ishours) {
				m = Math.floor(seconds / 60) % 60;
				h = Math.floor(seconds / 3600);
			} else {
				m = Math.floor(seconds / 60);
			}
			tSeconds = (s < 10) ? '0' + s: s + '';
			tMinutes = (m > 0) ? ((m < 10) ? '0' + m + ':': m + ':') : '00:';
			tHours = (h > 0) ? ((h < 10) ? '0' + h + ':': h + ':') : '';
			if (ishours) {
				return tHours + tMinutes + tSeconds;
			} else {
				return tMinutes + tSeconds;
			}
		},
		/*
			共用函数
			获取一个随机字符
			len：随机字符长度
		*/
		randomString: function(len) {
			len = len || 16;
			var chars = 'abcdefghijklmnopqrstuvwxyz';
			var maxPos = chars.length;
			var val = '';
			for (i = 0; i < len; i++) {
				val += chars.charAt(Math.floor(Math.random() * maxPos));
			}
			return 'ch' + val;
		},
		/*
			共用函数
			获取字符串长度,中文算两,英文数字算1
		*/
		getStringLen: function(str) {
			var len = 0;
			for (var i = 0; i < str.length; i++) {
				if (str.charCodeAt(i) > 127 || str.charCodeAt(i) == 94) {
					len += 2;
				} else {
					len++;
				}
			}
			return len;
		},
		/*
			内部函数
			用来为ajax提供支持
		*/
		createXHR: function() {
			if (window.XMLHttpRequest) {
				//IE7+、Firefox、Opera、Chrome 和Safari
				return new XMLHttpRequest();
			} else if (window.ActiveXObject) {
				//IE6 及以下
				try {
					return new ActiveXObject('Microsoft.XMLHTTP');
				} catch(event) {
					try {
						return new ActiveXObject('Msxml2.XMLHTTP');
					} catch(event) {
						this.eject(this.errorList[7]);
					}
				}
			} else {
				this.eject(this.errorList[8]);
			}
		},
		/*
			共用函数
			ajax调用
		*/
		ajax: function(cObj) {
			var thisTemp = this;
			var callback = null;
			var obj = {
				method: 'get',
				//请求类型
				dataType: 'json',
				//请求的数据类型
				charset: 'utf-8',
				async: false,
				//true表示异步，false表示同步
				url: '',
				data: null,
				success: null
			};
			if (typeof(cObj) != 'object') {
				this.eject(this.errorList[9]);
				return;
			}
			obj = this.standardization(obj, cObj);
			if (obj.dataType === 'json' || obj.dataType === 'text' || obj.dataType === 'html') {
				var xhr = this.createXHR();
				callback = function() {
					//判断http的交互是否成功
					if (xhr.status == 200) {
						if (thisTemp.isUndefined(obj.success)) {
							return;
						}
						if (obj.dataType === 'json') {
							try {
								obj.success(eval('(' + xhr.responseText + ')')); //回调传递参数
							} catch(event) {
								obj.success(null);
							}
						} else {
							obj.success(xhr.responseText); //回调传递参数
						}
					} else {
						obj.success(null);
						thisTemp.eject(thisTemp.errorList[10], 'Ajax.status:' + xhr.status);
					}
				};
				obj.url = obj.url.indexOf('?') == -1 ? obj.url + '?rand=' + this.randomString(6) : obj.url;
				obj.data = this.formatParams(obj.data); //通过params()将名值对转换成字符串
				if (obj.method === 'get' && !this.isUndefined(obj.data)) {
					if (obj.data != '') {
						if (obj.url.indexOf('?') == -1) {
							obj.url += '?' + obj.data
						} else {
							obj.url += '&' + obj.data;
						}
					}
				}
				if (obj.async === true) { //true表示异步，false表示同步
					xhr.onreadystatechange = function() {
						if (xhr.readyState == 4 && callback != null) { //判断对象的状态是否交互完成
							callback(); //回调
						}
					};
				}
				xhr.open(obj.method, obj.url, obj.async);
				if (obj.method === 'post') {
					try{
						xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
						xhr.setRequestHeader('charset', obj['charset']);
						xhr.send(obj.data);
					}
					catch(event){callback();}
				} else {
					try{
						xhr.send(null); //get方式则填null
					}
					catch(event){callback(); }	
				}
				if (obj.async === false) { //同步
					callback();
				}

			} else if (obj.dataType === 'jsonp') {
				var oHead = document.getElementsByTagName('head')[0];
				var oScript = document.createElement('script');
				var callbackName = 'callback' + new Date().getTime();
				var params = this.formatParams(obj.data) + '&callback=' + callbackName; //按时间戳拼接字符串
				callback = obj.success;
				//拼接好src
				oScript.src = obj.url.split('?') + '?' + params;
				//插入script标签
				oHead.insertBefore(oScript, oHead.firstChild);
				//jsonp的回调函数
				window[callbackName] = function(json) {
					callback(json);
					oHead.removeChild(oScript);
				};
			}
		},
		/*
			内置函数
			动态加载js
		*/
		loadJs: function(path, success) {
			var oHead = document.getElementsByTagName('HEAD').item(0);
			var oScript = document.createElement('script');
			oScript.type = 'text/javascript';
			oScript.src = this.getNewUrl(path);
			oHead.appendChild(oScript);
			oScript.onload = function() {
				success();
			}
		},
		/*
			共用函数
			排除IE6-9
		*/
		isMsie: function() {
			var browser = navigator.appName;
			var b_version = navigator.appVersion;
			var version = b_version.split(';');
			var trim_Version = '';
			if (version.length > 1) {
				trim_Version = version[1].replace(/[ ]/g, '');
			}
			if (browser == 'Microsoft Internet Explorer' && (trim_Version == 'MSIE6.0' || trim_Version == 'MSIE7.0' || trim_Version == 'MSIE8.0' || trim_Version == 'MSIE9.0' || trim_Version == 'MSIE10.0')) {
				return false;
			}
			return true;
		},
		/*
			共用函数
			判断是否安装了flashplayer
		*/
		uploadFlash: function() {
			var swf;
			if (navigator.userAgent.indexOf('MSIE') > 0) {
				try {
					var swf = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
					return true;
				} catch(e) {
					return false;
				}
			}
			if (navigator.userAgent.indexOf('Firefox') > 0) {
				swf = navigator.plugins['Shockwave Flash'];
				if (swf) {
					return true
				} else {
					return false;
				}
			}
			return true;
		},
		/*
			共用函数
			检测浏览器是否支持HTML5-Video
		*/
		supportVideo: function() {
			if (!this.isMsie()) {
				return false;
			}
			if ( !! document.createElement('video').canPlayType) {
				var vidTest = document.createElement('video');
				var oggTest;
				try {
					oggTest = vidTest.canPlayType('video/ogg; codecs="theora, vorbis"');
				} catch(error) {
					oggTest = false;
				}
				if (!oggTest) {
					var h264Test;
					try {
						h264Test = vidTest.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"');
					} catch(error) {
						h264Test = false;
					}
					if (!h264Test) {
						return false;
					} else {
						if (h264Test == "probably") {
							return true;
						} else {
							return false;
						}
					}
				} else {
					if (oggTest == "probably") {
						return true;
					} else {
						return false;
					}
				}
			} else {
				return false;
			}
		},
		/*
			共用函数
			获取属性值
		*/
		getDataset: function(ele, z) {
			try {
				return ele.dataset[z];
			} catch(error) {
				try {
					return ele.getAttribute('data-' + z)
				} catch(error) {
					return false;
				}
			}
		},
		/*
			共用函数
			返回flashplayer的对象
		*/
		getObjectById: function(id) {
			var x = null;
			var y = this.getByElement('#' + id);
			var r = 'embed';
			if (y && y.nodeName == 'OBJECT') {
				if (typeof(y.SetVariable) != 'undefined') {
					x = y;
				} else {
					var z = y.getElementsByTagName(r)[0];
					if (z) {
						x = z;
					}
				}
			}
			return x;
		},
		/*
			共用函数
			对象转地址字符串
		*/
		formatParams: function(data) {
			var arr = [];
			for (var i in data) {
				arr.push(encodeURIComponent(i) + '=' + encodeURIComponent(data[i]));
			}
			return arr.join('&');
		},
		/*
			内置函数
			对地址进行冒泡排序
		*/
		arrSort: function(arr) {
			var temp = [];
			for (var i = 0; i < arr.length; i++) {
				for (var j = 0; j < arr.length - i; j++) {
					if (!this.isUndefined(arr[j + 1]) && arr[j][3] < arr[j + 1][3]) {
						temp = arr[j + 1];
						arr[j + 1] = arr[j];
						arr[j] = temp;
					}
				}
			}
			return arr;
		},
		/*
			内置函数
			判断文件后缀
		*/
		getFileExt: function(filepath) {
			if (filepath != '' && !this.isUndefined(filepath)) {
				if (filepath.indexOf('?') > -1) {
					filepath = filepath.split('?')[0];
				}
				var pos = '.' + filepath.replace(/.+\./, '');
				return pos.toLowerCase();
			}
			return '';
		},
		/*
			内置函数
			判断是否是移动端
		*/
		isMobile: function() {
			if (navigator.userAgent.match(/(iPhone|iPad|iPod|Android|ios)/i)) {
				return true;
			}
			return false;
		},
		/*
			内置函数
			搜索字符串str是否包含key
		*/
		isContains: function(str, key) {
			return str.indexOf(key) > -1;
		},
		/*
			内置函数
			给地址添加随机数
		*/
		getNewUrl: function(url) {
			if (this.isContains(url, '?')) {
				return url += '&' + this.randomString(8) + '=' + this.randomString(8);
			} else {
				return url += '?' + this.randomString(8) + '=' + this.randomString(8);
			}
		},
		/*
			共用函数
			获取clientX和clientY
		*/
		client: function(event) {
			var eve = event || window.event;
			if (this.isUndefined(eve)) {
				eve = {
					clientX: 0,
					clientY: 0
				};
			}
			return {
				x: eve.clientX + (document.documentElement.scrollLeft || this.body.scrollLeft) - this.pdCoor['x'],
				y: eve.clientY + (document.documentElement.scrollTop || this.body.scrollTop) - this.pdCoor['y']
			}
		},
		/*
			内置函数
			获取节点的绝对坐标
		*/
		getCoor: function(obj) {
			var coor = this.getXY(obj);
			return {
				x: coor['x'] - this.pdCoor['x'],
				y: coor['y'] - this.pdCoor['y']
			};
		},
		getXY: function(obj) {
			var parObj = obj;
			var left = obj.offsetLeft;
			var top = obj.offsetTop;
			while (parObj = parObj.offsetParent) {
				left += parObj.offsetLeft;
				top += parObj.offsetTop;
			}
			return {
				x: left,
				y: top
			};
		},
		/*
			内置函数
			删除本对象的所有属性
		*/
		removeChild: function() {
			if (this.playerType == 'html5video') {
				//删除计时器
				var i = 0;
				var timerArr = [this.timerError, this.timerFull, this.timerTime, this.timerBuffer, this.timerClick, this.timerLoading, this.timerCBar, this.timerVCanvas];
				for (i = 0; i < timerArr.length; i++) {
					if (timerArr[i] != null) {
						if (timerArr[i].runing) {
							timerArr[i].stop();
						}
						timerArr[i] = null;
					}
				}
				//删除事件监听
				var ltArr = this.listenerJsArr;
				for (i = 0; i < ltArr.length; i++) {
					this.removeListener(ltArr[i][0], ltArr[i][1]);
				}
			}
			this.playerType == '';
			this.V = null;
			if (this.showFace) {
				this.deleteChild(this.CB['menu']);
			}
			this.deleteChild(this.PD);
			this.CD.innerHTML = '';
		},
		/*
			内置函数
			画封闭的图形
		*/
		canvasFill: function(name, path) {
			name.beginPath();
			for (var i = 0; i < path.length; i++) {
				var d = path[i];
				if (i > 0) {
					name.lineTo(d[0], d[1]);
				} else {
					name.moveTo(d[0], d[1]);
				}
			}
			name.closePath();
			name.fill();
		},
		/*
			内置函数
			画矩形
		*/
		canvasFillRect: function(name, path) {
			for (var i = 0; i < path.length; i++) {
				var d = path[i];
				name.fillRect(d[0], d[1], d[2], d[3]);
			}
		},
		/*
			共用函数
			删除容器节点
		*/
		deleteChild: function(f) {
			var def = this.arrIndexOf(this.elementArr, f.className);
			if (def > -1) {
				this.elementArr.splice(def, 1);
			}
			var childs = f.childNodes;
			for (var i = childs.length - 1; i >= 0; i--) {
				f.removeChild(childs[i]);
			}

			if (f && f != null && f.parentNode) {
				try {
					if (f.parentNode) {
						f.parentNode.removeChild(f);

					}

				} catch(event) {}
			}
		},
		/*
			内置函数
		 	根据容器的宽高,内部节点的宽高计算出内部节点的宽高及坐标
		*/
		getProportionCoor: function(stageW, stageH, vw, vh) {
			var w = 0,
			h = 0,
			x = 0,
			y = 0;
			if (stageW / stageH < vw / vh) {
				w = stageW;
				h = w * vh / vw;
			} else {
				h = stageH;
				w = h * vw / vh;
			}
			x = (stageW - w) * 0.5;
			y = (stageH - h) * 0.5;
			return {
				width: parseInt(w),
				height: parseInt(h),
				x: parseInt(x),
				y: parseInt(y)
			};
		},
		/*
			共用函数
			将字幕文件内容转换成数组
		*/
		parseSrtSubtitles: function(srt) {
			var subtitlesArr = [];
			var textSubtitles = [];
			var i = 0;
			var arrs = srt.split('\n');
			var arr = [];
			var delHtmlTag = function(str) {
				return str.replace(/<[^>]+>/g, ''); //去掉所有的html标记
			};
			for (i = 0; i < arrs.length; i++) {
				if (arrs[i].replace(/\s/g, '').length > 0) {
					arr.push(arrs[i]);
				} else {
					if (arr.length > 0) {
						textSubtitles.push(arr);
					}
					arr = [];
				}
			}
			for (i = 0; i < textSubtitles.length; ++i) {
				var textSubtitle = textSubtitles[i];
				if (textSubtitle.length >= 2) {
					var sn = textSubtitle[0]; // 字幕的序号
					var startTime = this.toSeconds(this.trim(textSubtitle[1].split(' --> ')[0])); // 字幕的开始时间
					var endTime = this.toSeconds(this.trim(textSubtitle[1].split(' --> ')[1])); // 字幕的结束时间
					var content = [delHtmlTag(textSubtitle[2])]; // 字幕的内容
					var cktrackdelay=this.vars['cktrackdelay'];
					if(cktrackdelay!=0){
						startTime+=cktrackdelay;
						endTime+=cktrackdelay;
					}
					// 字幕可能有多行
					if (textSubtitle.length > 2) {
						for (var j = 3; j < textSubtitle.length; j++) {
							content.push(delHtmlTag(textSubtitle[j]));
						}
					}
					// 字幕对象
					var subtitle = {
						sn: sn,
						startTime: startTime,
						endTime: endTime,
						content: content
					};
					subtitlesArr.push(subtitle);
				}
			}
			return subtitlesArr;
		},
		/*
			共用函数
			计时器,该函数模拟as3中的timer原理
			time:计时时间,单位:毫秒
			fun:接受函数
			number:运行次数,不设置则无限运行
		*/
		timer: function(time, fun, number) {
			var thisTemp = this;
			this.time = 10; //运行间隔
			this.fun = null; //监听函数
			this.timeObj = null; //setInterval对象
			this.number = 0; //已运行次数
			this.numberTotal = null; //总至需要次数
			this.runing = false; //当前状态
			this.startFun = function() {
				thisTemp.number++;
				thisTemp.fun();
				if (thisTemp.numberTotal != null && thisTemp.number >= thisTemp.numberTotal) {
					thisTemp.stop();
				}
			};
			this.start = function() {
				if (!thisTemp.runing) {
					thisTemp.runing = true;
					thisTemp.timeObj = window.setInterval(thisTemp.startFun, time);
				}
			};
			this.stop = function() {
				if (thisTemp.runing) {
					thisTemp.runing = false;
					window.clearInterval(thisTemp.timeObj);
					thisTemp.timeObj = null;
				}
			};
			if (time) {
				this.time = time;
			}
			if (fun) {
				this.fun = fun;
			}
			if (number) {
				this.numberTotal = number;
			}
			this.start();
		},
		/*
			共用函数
			将时分秒转换成秒
		*/
		toSeconds: function(t) {
			var s = 0.0;
			if (t) {
				var p = t.split(':');
				for (i = 0; i < p.length; i++) {
					s = s * 60 + parseFloat(p[i].replace(',', '.'));
				}
			}
			return s;
		},
		/*将字符变成数字形式的数组*/
		arrayInt: function(str) {
			var a = str.split(',');
			var b = [];
			for (var i = 0; i < a.length; i++) {
				if (this.isUndefined(a[i])) {
					a[i] = 0;
				}
				if (a[i].substr( - 1) != '%') {
					a[i] = parseInt(a[i]);
				}
				b.push(a[i]);
			}
			return b;
		},
		/*
			共用函数
			将对象Object标准化
		*/
		standardization: function(o, n) { //n替换进o
			var h = {};
			var k;
			for (k in o) {
				h[k] = o[k];
			}
			for (k in n) {
				var type = typeof(h[k]);
				switch (type) {
				case 'number':
					h[k] = parseFloat(n[k]);
					break;
				default:
					h[k] = n[k];
					break;
				}

			}
			return h;
		},
		/*
			共用函数
			搜索数组
		 */
		arrIndexOf: function(arr, key) {
			var re = new RegExp(key, ['']);
			return (arr.toString().replace(re, '┢').replace(/[^,┢]/g, '')).indexOf('┢');
		},
		/*
			共用函数
			去掉空格
		 */
		trim: function(str) {
			if (str != '') {
				return str.replace(/(^\s*)|(\s*$)/g, '');
			}
			return '';
		},
		/*
			共用函数
			判断对象类型
		*/
		typeString:function typeString(object) {
   			return Object.prototype.toString.call(object).slice(8,-1).toLowerCase();
		},
		/*
			共用函数
			输出内容到控制台
		*/
		log: function(val) {
			try {
				console.log(val);
			} catch(e) {}
		},
		/*
			共用函数
			弹出提示
		*/
		eject: function(er, val) {
			if (!this.vars['debug']) {
				return;
			}
			var errorVal = er[1];
			if (!this.isUndefined(val)) {
				errorVal = errorVal.replace('[error]', val);
			}
			var value = 'error ' + er[0] + ':' + errorVal;
			try {
				this.log(value);
			} catch(e) {}
		}
	};
	window.ckplayer = ckplayer;
})();