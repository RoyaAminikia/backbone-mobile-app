directory.MenAcademyView = Backbone.View.extend({
    initialize: function () {
        console.log('Initializing MenAcademyView View');
        utils.pageTitle = 'MenAcademy';
        utils.headerTitle = 'MENACADEMY';
    },
	/*renderReports: function (){
		alert('1');
		var closure = this;
		closure.profName = '';
		myCourse = utils.allCourses;
		for each (var item in closure.myCourse) {
			        $.ajax({
                    url: utils.baseUrl + '/api/professor/400',
                    contentType: 'application/json',
                    dataType: 'json',
                    type: 'GET',
                    success: function (data) {
						closure.profName = data.firstName + ' ' + data.lastName ;
						closure.render();
						alert(closure.profName );
                    },
                    error: function (xhr, status, error) {
                        alert(status);
                    }
                });
           
         }
	},*/


    render: function () {
        $(this.el).html(this.template());
        return this;
    },
});
