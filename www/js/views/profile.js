directory.ProfileView = Backbone.View.extend({


    initialize: function () {
        console.log('Initializing ProfileView View');
		utils.pageTitle = 'Profile';
        utils.headerTitle = 'PROFILE';
        
    },

    render: function () {
        $(this.el).html(this.template());
        return this;
    }
});


