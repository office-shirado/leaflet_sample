//配列のプロパティ--------------------------------------

function SelectOption(parentValue, text, value) {
  
  this.parentValue = parentValue;
  
  this.setOption = function() {
    this.text = text;
    this.value = value;
  };
  
  return this;
}

//-----------------------------------------------------
function SelectBox(id) {
  
  function getObject() {
    var parobj = document.getElementById(id);
    if(!parobj.options && ( (typeof parobj.length) == "number") ) {
      if(parobj.length > 0) {
        parobj = parobj[0];
      } else {
        parobj = null;
      }
    }
    return parobj;
  }
  
  // オプションのリスト
  var options = [];
  
  this.registOption = function(option) {
    options[options.length] = option;
  };
  
  // 子のオブジェクト
  var child = null;
  
  this.setChild = function(childObj) {
    child = childObj;
  };
  
  this.make = function(parentValue) {
    var obj = getObject();
    if(obj) {
      // 選択肢削除
      obj.options.length = 0;
      // 表示すべき選択肢抽出
      var opt = (parentValue != null) ? [] : options;
      if(parentValue != null) {
        for(var i = 0; i < options.length; i++) {
          if( (options[i].parentValue == null) || (options[i].parentValue == parentValue) ) {
            opt[opt.length] = options[i];
          }
        }
      }
      // 選択肢反映
      obj.options.length = opt.length;
      for(var i = 0; i < opt.length; i++) {
        opt[i].setOption.call(obj.options[i]);
      }
      // 子のオブジェクトにも連鎖反映
      if(child) {
        child.make(obj.value);
      }
    }
  };
  
  return this;
}


var box1 = new SelectBox("sb1");
box1.registOption(new SelectOption(null, "▼施設種別"      , "0", "color:gray;"));
box1.registOption(new SelectOption(null, "市役所・支所"  , "1"));
box1.registOption(new SelectOption(null, "駅：JR常磐線"  , "2"));
box1.registOption(new SelectOption(null, "駅：JR磐越東線", "3"));
box1.registOption(new SelectOption(null, "観　光"        , "4"));
box1.registOption(new SelectOption(null, "山"            , "5"));

var box2 = new SelectBox("sb2");
box2.registOption(new SelectOption(null, "▼施設名等", "0", "color:gray;"));
box2.registOption(new SelectOption("1" , "いわき市役所本庁舎", "140.88767,37.05046"));	//↓1 市役所・支所
box2.registOption(new SelectOption("1" , "小名浜支所"        , "140.90378,36.95469"));
box2.registOption(new SelectOption("1" , "勿来支所"          , "140.79102,36.90661"));
box2.registOption(new SelectOption("1" , "常磐支所"          , "140.84608,37.00837"));
box2.registOption(new SelectOption("1" , "内郷支所"          , "140.85727,37.03604"));
box2.registOption(new SelectOption("1" , "四倉支所"          , "140.98943,37.10976"));
box2.registOption(new SelectOption("1" , "遠野支所"          , "140.75019,37.00740"));
box2.registOption(new SelectOption("1" , "好間支所"          , "140.85690,37.06331"));
box2.registOption(new SelectOption("1" , "小川支所"          , "140.86104,37.12733"));
box2.registOption(new SelectOption("1" , "田人支所"          , "140.70515,36.95209"));
box2.registOption(new SelectOption("1" , "三和支所"          , "140.68489,37.14290"));
box2.registOption(new SelectOption("1" , "川前支所"          , "140.75115,37.20719"));
box2.registOption(new SelectOption("1" , "久之浜・大久支所"  , "140.99787,37.14149"));
box2.registOption(new SelectOption("2" , "勿来駅"    , "140.78667,36.88365"));	//↓２ 駅：ＪＲ常磐線
box2.registOption(new SelectOption("2" , "植田駅"    , "140.79648,36.92048"));
box2.registOption(new SelectOption("2" , "泉駅"      , "140.85405,36.95558"));
box2.registOption(new SelectOption("2" , "湯本駅"    , "140.84984,37.00695"));
box2.registOption(new SelectOption("2" , "内郷駅"    , "140.85489,37.03601"));
box2.registOption(new SelectOption("2" , "いわき駅"  , "140.89227,37.05822"));
box2.registOption(new SelectOption("2" , "草野駅"    , "140.94727,37.07388"));
box2.registOption(new SelectOption("2" , "四ツ倉駅"  , "140.98093,37.10231"));
box2.registOption(new SelectOption("2" , "久ノ浜駅"  , "140.99575,37.14248"));
box2.registOption(new SelectOption("2" , "末続駅"    , "140.99567,37.17211"));
box2.registOption(new SelectOption("3" , "いわき駅"  , "140.89227,37.05822"));	//↓３ 駅：ＪＲ磐越東線
box2.registOption(new SelectOption("3" , "赤井駅"    , "140.86635,37.08063"));
box2.registOption(new SelectOption("3" , "小川郷駅"  , "140.86253,37.12645"));
box2.registOption(new SelectOption("3" , "江田駅"    , "140.82640,37.17915"));
box2.registOption(new SelectOption("3" , "川前駅"    , "140.75026,37.20567"));
box2.registOption(new SelectOption("4" , "塩屋崎灯台"			, "140.98193,36.99523"));  //↓ ４：観光
box2.registOption(new SelectOption("4" , "美空ひばり歌碑・遺影碑"	, "140.98062,36.99591"));
box2.registOption(new SelectOption("4" , "龍ヶ城美術館"			, "140.89015,37.05948"));
box2.registOption(new SelectOption("4" , "アクアマリンふくしま"		, "140.90144,36.94268"));
box2.registOption(new SelectOption("4" , "いわき・ら・ら・ミュウ"	, "140.90512,36.94396"));
box2.registOption(new SelectOption("4" , "暮らしの伝承郷"		, "140.91535,37.00849"));
box2.registOption(new SelectOption("4" , "三崎公園"			, "140.92004,36.93876"));
box2.registOption(new SelectOption("4" , "勿来の関文学歴史館"		, "140.78041,36.86674"));
box2.registOption(new SelectOption("4" , "いわき市石炭化石館"		, "140.84830,37.01262"));
box2.registOption(new SelectOption("4" , "考古資料館"			, "140.82531,36.99677"));
box2.registOption(new SelectOption("4" , "いわき湯本温泉郷"		, "140.84616,37.00904"));
box2.registOption(new SelectOption("4" , "スパリゾート・ハワイアンズ"	, "140.81663,36.99356"));
box2.registOption(new SelectOption("4" , "ＪＲＡ馬の温泉"		, "140.83575,36.99140"));
box2.registOption(new SelectOption("4" , "白水阿弥陀堂"			, "140.83708,37.03591"));
box2.registOption(new SelectOption("4" , "みろく沢炭鉱資料館"		, "140.82927,37.03365"));
box2.registOption(new SelectOption("4" , "草野心平記念文学館"		, "140.83329,37.12897"));
box2.registOption(new SelectOption("4" , "海竜の里センター"		, "140.96579,37.16668"));
box2.registOption(new SelectOption("4" , "アンモナイトセンター"		, "140.94332,37.17547"));
box2.registOption(new SelectOption("5" , "閼伽井嶽" 	, "140.80639,37.09539"));	//↓ ５：山
box2.registOption(new SelectOption("5" , "石森山" 	, "140.90046,37.09396"));
box2.registOption(new SelectOption("5" , "大丸山" 	, "140.65803,36.90058"));
box2.registOption(new SelectOption("5" , "湯ノ岳" 	, "140.79570,37.02394"));
box2.registOption(new SelectOption("5" , "高倉山(常磐)"	, "140.82776,37.01375"));
box2.registOption(new SelectOption("5" , "三大明神山" 	, "140.76191,37.05224"));
box2.registOption(new SelectOption("5" , "三森山" 	, "140.91031,37.19344"));
box2.registOption(new SelectOption("5" , "猫鳴山" 	, "140.88163,37.20234"));
box2.registOption(new SelectOption("5" , "高倉山(四倉)"	, "140.91557,37.13477"));
box2.registOption(new SelectOption("5" , "鶴石山" 	, "140.72565,37.09066"));
box2.registOption(new SelectOption("5" , "二ツ石山" 	, "140.74852,37.06630"));
box2.registOption(new SelectOption("5" , "天狗山" 	, "140.76957,37.03711"));
box2.registOption(new SelectOption("5" , "住生山" 	, "140.70171,37.07005"));
box2.registOption(new SelectOption("5" , "滝富士" 	, "140.73596,36.96602"));
box2.registOption(new SelectOption("5" , "屹兎屋山" 	, "140.86742,37.21064"));
box2.registOption(new SelectOption("5" , "二ツ箭山" 	, "140.87037,37.17304"));
box2.registOption(new SelectOption("5" , "芝山" 	, "140.61265,37.15804"));
box2.registOption(new SelectOption("5" , "水石山" 	, "140.79783,37.10951"));
box2.registOption(new SelectOption("5" , "馬場山" 	, "140.68060,37.11316"));
box2.registOption(new SelectOption("5" , "雨降山" 	, "140.64414,37.14372"));
box2.registOption(new SelectOption("5" , "塩見山" 	, "140.64596,37.16352"));
box2.registOption(new SelectOption("5" , "良々堂山" 	, "140.68535,37.17238"));
box2.registOption(new SelectOption("5" , "仏具山" 	, "140.68189,36.91766"));
box2.registOption(new SelectOption("5" , "朝日山" 	, "140.58351,36.95770"));
box2.registOption(new SelectOption("5" , "明神山" 	, "140.63563,36.96290"));
box2.registOption(new SelectOption("5" , "愛宕山" 	, "140.71244,36.95491"));
box2.registOption(new SelectOption("5" , "矢大臣山" 	, "140.68935,37.28698"));
box2.registOption(new SelectOption("5" , "鬼ヶ城山" 	, "140.73885,37.28008"));
box2.registOption(new SelectOption("5" , "神楽山" 	, "140.81118,37.22351"));


box1.setChild(box2);

window.onload = function() {
  		box1.make(null);
}



//プルダウンメニューから地図表示
function goLink(str) {
	var stringarray = new Array();
	stringarray = str.split(',');
	var sE = eval(stringarray[0]);
	var sN = eval(stringarray[1]);
	if( sE!=0 && sN!=0 ) {
	map.setView([sN,sE]);
	}
}


