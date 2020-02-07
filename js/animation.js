
$(function(){
	$('#trigger01').on('inview', function(event, isInView){
		if (isInView) {
		$(".reform_middle").animate({opacity: 1,'left': '0%'}, 1000);
		}
	});
	/*$('#trigger01').on('inview', function(event, isInView){
		slideBG()
			.then(fadeContents)

		function slideBG(){
			var d = new $.Deferred;
			$(".content01").show().animate({
				width:"60%"
			},400, function(){
				d.resolve();
			});
			return d.promise();
		}

		function fadeContents(){
			var d = new $.Deferred;
			$(".content01_inner_content").animate({
				'left' : '30%',
				opacity : 1
			},700, function(){
				d.resolve();
			});
			return d.promise();
		}
	});*/
    $('#trigger02').on('inview', function(event, isInView){
		if (isInView) {
		$("#reason").animate({opacity: 1,'right': '0%'}, 1000);
		}
	});
	/*$('#trigger02').on('inview', function(event, isInView){
		slideBG()
			.then(fadeContents)

		function slideBG(){
			var d = new $.Deferred;
			$(".content02").show().animate({
				width:"60%"
			},400, function(){
				d.resolve();
			});
			return d.promise();
		}

		function fadeContents(){
			var d = new $.Deferred;
			$(".content02").animate({
				/*'right' : '30%',
				opacity : 1
			},700, function(){
				d.resolve();
			});
			return d.promise();
		}
	});*/
    $('#trigger03').on('inview', function(event, isInView){
		if (isInView) {
		$("#staff_area").animate({opacity: 1,'bottom': '0%'}, 1000);
		}
	});
    /*$('#trigger03').on('inview', function(event, isInView){
		slideBG()
			.then(fadeContents)

		function slideBG(){
			var d = new $.Deferred;
			$(".content03").show().animate({
				width:"60%"
			},400, function(){
				d.resolve();
			});
			return d.promise();
		}

		function fadeContents(){
			var d = new $.Deferred;
			$(".content03").animate({
				/*'right' : '30%',
				opacity : 1
			},700, function(){
				d.resolve();
			});
			return d.promise();
		}
	});*/
        $('#trigger04').on('inview', function(event, isInView){
		if (isInView) {
		$(".flow_contact").animate({opacity: 1,'left': '0%'}, 1000);
		}
	});
       /* $('#trigger04').on('inview', function(event, isInView){
		slideBG()
			.then(fadeContents)

		function slideBG(){
			var d = new $.Deferred;
			$(".content04").show().animate({
				width:"60%"
			},400, function(){
				d.resolve();
			});
			return d.promise();
		}

		function fadeContents(){
			var d = new $.Deferred;
			$(".content04").animate({
				/*'right' : '30%',
				opacity : 1
			},700, function(){
				d.resolve();
			});
			return d.promise();
		}
	});*/
        $('#trigger05').on('inview', function(event, isInView){
            if (isInView) {
            $(".center02").animate({opacity: 1,'right': '0%'}, 1000);
            }
        });
        /*$('#trigger05').on('inview', function(event, isInView){
		slideBG()
			.then(fadeContents)

		function slideBG(){
			var d = new $.Deferred;
			$(".content05").show().animate({
				width:"60%"
			},400, function(){
				d.resolve();
			});
			return d.promise();
		}

		function fadeContents(){
			var d = new $.Deferred;
			$(".content05").animate({
				/*'right' : '30%',
				opacity : 1
			},700, function(){
				d.resolve();
			});
			return d.promise();
		}
	});*/
});

