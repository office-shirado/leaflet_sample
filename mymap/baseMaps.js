//背景タイル設定

//標準地図
var std = L.tileLayer('http://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png',
	{attribution: "<a href='http://www.gsi.go.jp/' target='_blank'>国土地理院</a>：標準地図", maxZoom: 23, maxNativeZoom: 18});


//淡色地図
var pale = L.tileLayer('http://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png',
        {attribution: "<a href='http://www.gsi.go.jp/' target='_blank'>国土地理院</a>：淡色地図", maxZoom: 23, maxNativeZoom: 18});


//白地図
var blank = L.tileLayer('http://cyberjapandata.gsi.go.jp/xyz/blank/{z}/{x}/{y}.png',
        {attribution: "<a href='http://www.gsi.go.jp/' target='_blank'>国土地理院</a>：白地図", maxZoom: 23, maxNativeZoom: 14});


//災害復興計画基図
var fukkokizu = L.tileLayer('http://cyberjapandata.gsi.go.jp/xyz/fukkokizu/{z}/{x}/{y}.png',
	{attribution: "<a href='http://www.gsi.go.jp/' target='_blank'>国土地理院</a>：災害復興計画基図", maxZoom: 23, maxNativeZoom: 18, opacity: 1.0});


//オープンストリートマップ
var osm = L.tileLayer('http://tile.openstreetmap.jp/{z}/{x}/{y}.png',
        {attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>' , maxZoom: 23, maxNativeZoom: 19});



//背景レイヤグループ設定
var baseMaps = {
	"標準地図" : std,
	"淡色地図" : pale,
	"白地図"   : blank,
	"復興計画基図":fukkokizu,
	"OpenStreetMap"  : osm
	};


