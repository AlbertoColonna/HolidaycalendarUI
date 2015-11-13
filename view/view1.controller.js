sap.ui.controller("view.view1", {
	
	/**
	 * Called when a controller is instantiated and its View controls (if available) are already created.
	 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
	 * @memberOf view.View1
	 */
	onInit: function() { 
		this.initTodoModel();
	},

	/**
	 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
	 * (NOT before the first rendering! onInit() is used for that one!).
	 * @memberOf view.View1
	 */
	//	onBeforeRendering: function() {
	//
	//	},

	/**
	 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
	 * This hook is the same one that SAPUI5 controls get after being rendered.
	 * @memberOf view.View1
	 */
	//	onAfterRendering: function() {
	//
	//	},

	/**
	 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
	 * @memberOf view.View1
	 */
	//	onExit: function() {
	//
	//	}
	
 initTodoModel : function() {  
 	
        var oModel = new sap.ui.model.json.JSONModel();
        
       var aData = jQuery.ajax({
            type : "GET",
            contentType : "application/json",
            url : "https://holiday1a2ae72c92.hana.ondemand.com/JERSEY1/rest/helloworld/",
            dataType : "json",
            async: false, 
            success : function(data,textStatus, jqXHR) {
                oModel.setData({modelData : data}); 
				sap.ui.getCore().setModel(oModel);    
				console.log("TETET");
            }

        });

        return oModel;  
    },
	
showMessage: function(msg)
{
	sap.m.MessageToast.show(msg, {
	    duration: 3000,                  // default
	    width: "15em",                   // default
	    my: "center bottom",             // default
	    at: "center bottom",             // default
	    of: window,                      // default
	    offset: "0 0",                   // default
	    collision: "fit fit",             // default
	    onClose: null,                   // default
	    autoClose: true,                 // default
	    animationTimingFunction: "ease", // default
	    animationDuration: 1000,         // default
	    closeOnBrowserNavigation: true   // default
	});	
},
	
handleUploadComplete: function(oEvent) {
        
		},	
				
	
	handleUploadPress: function(onEvent) {
		
		
        var url = "../Services/BatchFileUpload.xsjs";  
        var fileLoader =  this.byId('fileUploader');
        var fileName = fileLoader.getValue();  
        
        this.showMessage(this.initTodoModel().getData());
         
        if (fileName === "" )  
        {  
           jQuery.sap.require("sap.ui.commons.MessageBox");  
           sap.ui.commons.MessageBox.show("Please choose File.", sap.ui.commons.MessageBox.Icon.INFORMATION, "Information");  
        }  
        else  
        {  
    	   url = url+"?file_name="+fileName;
    	   
           fileLoader.setUploadUrl(url);  
           fileLoader.upload();  
        }  
	}

});


