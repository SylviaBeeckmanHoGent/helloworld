sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast, JSONModel) {
        "use strict";

        return Controller.extend("helloworld.controller.App", {
            onInit: function () { 
                const oData = {
                    user: "Sylvia",
                };
                const oModel = new JSONModel(oData);
                this.getView().setModel(oModel, "test"); //test is de naam van het model
            },
            onPress: function (evt) {
                MessageToast.show(evt.getSource().getId() + " Pressed");
            }
        });
    });

/*
de functie krijgt een Controller component mee > deze komt uit sap/ui/core/mvc
deze controller gaan we gaan extenden (zie API Reference)
sap.ui.define > is eigenlijk een import doen > we gaan de Controller gaan instantiëren
wat geven we terug > een controller obv helloworld.controller.App > die geven we dan onInit en onPress mee
*/