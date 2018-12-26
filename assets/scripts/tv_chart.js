function fn_chart(coinType) {

	var time_frames_option = [
		{"text" : "6m" , "resolution": "D" , "description" : "6분"},
		{"text" : "3m" , "resolution": "360" , "description" : "3분"},
		{"text" : "1m" , "resolution": "60" , "description" : "1분"},
		{"text" : "1d" , "resolution": "10" , "description" : "1일"},
		{"text" : "1w" , "resolution": "30" , "description" : "1주"},
	];
	
	var disabled_features = [
		"volume_force_overlay", // 볼륨 겹치게/나눠서
		"study_templates",
		"header_undo_redo",
		"header_symbol_search",
		"symbol_search_hot_key",
		"adaptive_logo",
		"go_to_date",
		"header_compare",
		"use_localstorage_for_settings" // 비활성화 해야 favorites 설정 가능
	];
	
	var overrides = {
		"mainSeriesProperties.style": 1, // 기본 차트 종류 지정 1:캔들
		"mainSeriesProperties.candleStyle.upColor": "#cc0000",
		"mainSeriesProperties.candleStyle.downColor": "#1155cc",
		"mainSeriesProperties.candleStyle.wickUpColor": "#cc0000",
		"mainSeriesProperties.candleStyle.wickDownColor": "#1155cc",
		"mainSeriesProperties.candleStyle.borderUpColor": "#cc0000",
		"mainSeriesProperties.candleStyle.borderDownColor": "#1155cc",
		"mainSeriesProperties.hollowCandleStyle.upColor": "#cc0000",
		"mainSeriesProperties.hollowCandleStyle.downColor": "#1155cc",
		"mainSeriesProperties.hollowCandleStyle.wickUpColor": "#cc0000",
		"mainSeriesProperties.hollowCandleStyle.wickDownColor": "#1155cc",
		"mainSeriesProperties.hollowCandleStyle.borderUpColor": "#cc0000",
		"mainSeriesProperties.hollowCandleStyle.borderDownColor": "#1155cc",
		"mainSeriesProperties.haStyle.upColor": "#cc0000",
		"mainSeriesProperties.haStyle.downColor": "#1155cc",
		"mainSeriesProperties.haStyle.wickUpColor": "#cc0000",
		"mainSeriesProperties.haStyle.wickDownColor": "#1155cc",
		"mainSeriesProperties.haStyle.borderUpColor": "#cc0000",
		"mainSeriesProperties.haStyle.borderDownColor": "#1155cc",
		"study_Overlay@tv-basicstudies.style" : 1,
		"study_Overlay@tv-basicstudies.lineStyle.color" : "#351c75",
		"volumePaneSize": "medium" //tiny, small, medium, large
	};
	
	var studies_overrides = {
		"volume.volume.plottype" : "columns",
		"volume.volume.color.0" : "#3c78d8",
		"volume.volume.color.1" : "#e16d6d",
		"volume.volume.transparency" : 10,
		"volume.volume ma.plottype" : "line",
		"volume.volume ma.color" : "#9bba8e",
		"volume.volume ma.transparency" : 50,
		"volume.volume ma.linewidth" : 2,
		"volume.MA length" : 15,
		"volume.show ma" : true
	};
	
	
	widget = new TradingView.widget({
		width: 897,
		height: 436,
		symbol : "BitFriends:"+priceType+'|'+coinType,
		interval : "5",
		toolbar_bg : "#f4f7f9",
		container_id : "tv_chart_container",
		library_path : "/assets/charting_library/",
		datafeed : new Datafeeds.UDFCompatibleDatafeed("/assets/chart/"+coinType),
		locale : "ko",
		disabled_features : disabled_features,
		drawings_access: { type: 'black', tools: [ { name: "Regression Trend" } ] },
		enabled_features : ["move_logo_to_main_pane"],
		overrides : overrides,
		favorites : {intervals : ["1", "3", "5", "15", "30", "60", "120", "360","D", "W"] },  
		studies_overrides : studies_overrides,
		timezone : 'Asia/Seoul',
		debug : false,
		time_frames: time_frames_option,
		details : true,
	});
	
}