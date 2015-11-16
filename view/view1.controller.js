sap.ui.controller("view.view1", {
	
	/**
	 * Called when a controller is instantiated and its View controls (if available) are already created.
	 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
	 * @memberOf view.View1
	 */
	onInit: function() { 
		// bundle model
	/*	var rootPath = jQuery.sap.getModulePath("par.ui");
		var i18nModel = new sap.ui.model.resource.ResourceModel({
			bundleUrl : [ rootPath, "i18n/messageBundle.properties" ].join("/")
		});
		sap.ui.getCore().setModel(i18nModel, "i18n");
		//view model
		var oModel = new sap.ui.model.json.JSONModel();
		this.getView().setModel(oModel);
		oModel.loadData("/JERSEY1/rest/helloworld");*/
		
		var oModel = new sap.ui.model.json.JSONModel();
		this.getView().setModel(oModel);
		oModel.loadData("/JERSEY1/rest/helloworld");				
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
		
		// bundle model
		/*var rootPath = jQuery.sap.getModulePath("par.ui");*/
	/*	var i18nModel = new sap.ui.model.resource.ResourceModel({
			bundleUrl : [ rootPath, "i18n/messageBundle.properties" ].join("/")
		});
		sap.ui.getCore().setModel(i18nModel, "i18n");*/
		//view model
		var oModel = new sap.ui.model.json.JSONModel();
		this.getView().setModel(oModel);
		oModel.loadData("/JERSEY1/rest/helloworld");	
		 
		//this.showMessage(""+oModel.getData());
		
		this.showMessage("Hallo");
		
		
    /* var url = "../Services/BatchFileUpload.xsjs";  
        var fileLoader =  this.byId('fileUploader');
        var fileName = fileLoader.getValue();  
         
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
        }  */
	}

});