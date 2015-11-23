directory.AchievementView = Backbone.View.extend({
	courseName : '',
    clean : [],
	tIdx : '1',
	num : '',
    url : utils.baseUrl + '/api/chartsData/',
    events: {
        "click #buttonKnowledge": "clickKnowledge",
        "click #buttonSkills": "clickSkills",
		"click #push_next": "push_next",
		"click #push_back": "push_back"
    },

    initialize: function () {
        console.log('Initializing AchievementView View');
        utils.headerTitle = 'MY ACHIEVEMENTS';
        utils.pageTitle = 'Achievement';
		
    },
	
	clickKnowledge: function() {
		$('#buttonSkills').removeClass('active-link');
		$("#buttonKnowledge").addClass("active-link");
	},
	
	clickSkills: function() {
		$('#buttonKnowledge').removeClass('active-link');
        $('#buttonSkills').addClass('active-link');
	},
	
	push_next:function() {
		var idx = $('div.active').index() + 1;
		tIdx= idx+1;
        this.renderChart(tIdx);
	},
	
	push_back:function() {
		var idx = $('div.active').index() + 1;
         tIdx= idx-1;
		 this.renderChart(tIdx);
	},
	
	renderChart:function(tIdx){
		var closure = this;
		closure.clean = [];
		if(tIdx == 1){
			closure.num = '2603'; 
			$.ajax({
			url: closure.url + closure.num,
			type: 'GET',
			dataType: "json",
			success: function (data) {
			//alert(data.y);
			 var resi = data.y.replace("[", "");
			 var resii = resi.replace("]", "");
			 var res = resii.split(",");
			 var res2 = data.x.split(",");
			 //alert('data.y' + res2);
			 //var clean = [];
			 $.each(res, function (i, val) {
			 closure.clean.push(parseFloat(val));
			 
			 });
			 //alert(closure.clean);
			closure.$('#chart1Container').highcharts({
				 credits: {
				 enabled: false
				 },
				 chart: {
				 type: 'spline'
				 },
				title: {
					text: closure.courseName,
					style: {
						fontsize: '16px',
						fontWeight: 'Regular',
						color: '#0C467F',
					}
				},				
				subtitle: {
					text: sessionStorage.userName,
					style: {
						fontsize: '15px',
						fontWeight: 'Bold',
						color: '#333333',
					}	
				},
				xAxis: {
					categories: []				
				},
				yAxis: {
					title: {
						text: 'Points'
					},
					min: 0,
					/*minorGridLineWidth: 0,
					gridLineWidth: 0,
					alternateGridColor: null*/
			
				plotLines: [{
					value: 0,
					width: 1
					//color: 'red'
				}]
				},
				legend: {
					/*layout: 'vertical',
									align: 'right',
									verticalAlign: 'middle',
									borderWidth: 0*/
				},
				tooltip: {
				valueSuffix: ' points ',
				crosshairs: true,
				shared: true,
				useHTML: true
				},
				series: [{
					//type: 'area',
					name: '',
					data: closure.clean
				}]
			    }); 
		        }
	            });

		}
		else if(tIdx == 2){
			closure.num = '2605'; 
			$.ajax({
			url: closure.url + closure.num,
			type: 'GET',
			dataType: "json",
			success: function (data) {
			//alert(data.y);
			 var resi = data.y.replace("[", "");
			 var resii = resi.replace("]", "");
			 var res = resii.split(",");
			 var res2 = data.x.split(",");
			 //alert('data.y' + res2);
			 //var clean = [];
			 $.each(res, function (i, val) {
			 closure.clean.push(parseFloat(val));
			 
			 });
			 //alert(closure.clean);
			closure.$('#chart2Container').highcharts({
				 credits: {
				 enabled: false
				 },
				 chart: {
				 type: 'spline'
				 },
				title: {
					text: closure.courseName,
					style: {
						fontsize: '16px',
						fontWeight: 'Regular',
						color: '#0C467F',
					}
				},				
				subtitle: {
					text: sessionStorage.userName,
					style: {
						fontsize: '15px',
						fontWeight: 'Bold',
						color: '#333333',
					}		
				},
				xAxis: {
					categories: []				
				},
				yAxis: {
					title: {
						text: 'Points'
					},
					min: 0,
					/*minorGridLineWidth: 0,
					gridLineWidth: 0,
					alternateGridColor: null*/
				plotLines: [{
					value: 0,
					width: 1
					//color: 'red'
				}]
				},
				legend: {
					/*layout: 'vertical',
									align: 'right',
									verticalAlign: 'middle',
									borderWidth: 0*/
				},
				tooltip: {
				valueSuffix: ' points ',
				crosshairs: true,
				shared: true,
				useHTML: true
				},
				series: [{
				    //type: 'area',
					name: '',
					data: closure.clean
				}]
			
				}); 
				}
				});
			
			}
		    else if(tIdx == 3){
				closure.num = '2603'; 
				$.ajax({
				url: closure.url + closure.num,
				type: 'GET',
				dataType: "json",
				success: function (data) {
				//alert(data.y);
				 var resi = data.y.replace("[", "");
				 var resii = resi.replace("]", "");
				 var res = resii.split(",");
				 var res2 = data.x.split(",");
				 //alert('data.y' + res2);
				 //var clean = [];
				 $.each(res, function (i, val) {
				 closure.clean.push(parseFloat(val));
				 
				 });
				 //alert(closure.clean);
				closure.$('#chart3Container').highcharts({
				credits: {
					enabled: false
				},
				chart: {
					zoomType: 'x'
				},
				title: {
					text: closure.courseName,
				style: {
					fontsize: '16px',
					fontWeight: 'Regular',
					color: '#0C467F',					
					}
				},				
				subtitle: {
					text: sessionStorage.userName,
					style: {
						fontsize: '15px',
						fontWeight: 'Bold',
						color: '#333333',
					}			
				},
				xAxis: {
					categories: []				
				},
				yAxis: {
					title: {
					text: 'Points'
					},
					min: 0,
					/*minorGridLineWidth: 0,
					gridLineWidth: 0,
					alternateGridColor: null*/
							
				plotLines: [{
					value: 0,
					width: 1
					//color: 'red'
				}]
				},
				legend: {
					/*layout: 'vertical',
									align: 'right',
									verticalAlign: 'middle',
									borderWidth: 0*/
				},
				tooltip: {
				valueSuffix: ' points ',
				crosshairs: true,
				shared: true,
				useHTML: true
				},
				series: [{
					type: 'area',
					name: '',
					data: closure.clean
				}]
						
				}); 
				}
				});
				
		  }
    },
	
    render: function () {
        $(this.el).html(this.template());
        return this;
        
    },
});






                       
		







