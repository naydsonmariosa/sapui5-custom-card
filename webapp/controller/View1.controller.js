sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox"
], function (Controller, MessageBox) {
	"use strict";

	return Controller.extend("naydsonmariosa.CustomCard.controller.View1", {
		onInit: function () {

		},
		
		onPress: function(oEvent) {
			MessageBox.alert(oEvent.getSource().getTitle());
		}
	});
});