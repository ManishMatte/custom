sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("createform.controller.CreateForm", {
            onInit: function () {

                const oModel = new sap.ui.model.json.JSONModel({
                    payload:{
                        Employees:[
                            {
                                name:"",
                                location:"",
                                injuryTypeKeys:[]
                            }
                        ],
                        Incident : {

                            incidentKeys:[],
                            location:""

                        },
                        Witness:[
                            {
                                name : "",
                                statement:""
                            }
                        ]
                    },
                    injuryType:[
                        {
                            key:1,
                            text:"Fracture"
                        },
                        {
                            key:2,
                            text:"Burn"
                        },
                        {
                            key:3,
                            text:"Cuts/Bruises"
                        },
                        {
                            key:4,
                            text:"Shanked"
                        }
                    
                    ],
                    incidentTypes:[
                        {
                            key:5,
                            text:"Personal Injury"
                        },
                        {
                            key:6,
                            text:"Vehicle Incident"
                        },
                        {
                            key:7,
                            text:"Near Miss"
                        }
                    ]
                });

                this.getView().setModel(oModel,'oModel');

            },
            onPressAddEmployee : function(){

                const oModel = this.getView().getModel('oModel');
                const Employees = oModel.getProperty('/payload/Employees');

                Employees.push({
                    
                    name:"",
                    location:"",
                    injuryTypeKeys:[]
                    
                });

                oModel.setProperty('/payload/Employees', Employees);

            },
            onPressDeleteEmployee : function(oEvent){

                const index = oEvent.getSource().getBindingContext("oModel").getPath().slice(-1);
                const oModel = this.getView().getModel('oModel');
                const Employees = oModel.getProperty('/payload/Employees');
                Employees.splice(index,1);
                oModel.setProperty('/payload/Employees', Employees);

            },
            onPressAddWitness : function(){

                const oModel = this.getView().getModel('oModel');
                const Witness = oModel.getProperty('/payload/Witness');

                Witness.push({
                    
                    name:"",
                   statement:""
                    
                });

                oModel.setProperty('/payload/Witness', Witness);

            },
            onPressDeleteWitness : function(oEvent){

                debugger;

                const index = oEvent.getSource().getBindingContext("oModel").getPath().slice(-1);
                const oModel = this.getView().getModel('oModel');
                const Witness = oModel.getProperty('/payload/Witness');
                Witness.splice(index,1);
                oModel.setProperty('/payload/Witness', Witness);

            },
            onPressSubmit : function(){

                var payload = {
                    incidentType:[],
                    employees:[],
                    witness:[]
                };
                const oModel = this.getView().getModel('oModel');
                payload.location = oModel.getProperty('/payload/Incident/location');
                const incidentTypeKeys = oModel.getProperty('/payload/Incident/incidentKeys');

                for(var i = 0; i<incidentTypeKeys.length; i++){
                    payload.incidentType.push({
                        "master_ID": parseInt(incidentTypeKeys[i])
                    });
                }
                payload.employees = oModel.getProperty('/payload/Employees');
                payload.witness = oModel.getProperty('/payload/Witness');

                debugger;
                

                // $.ajax({
                //     type: "POST",
                //     url: "odata/v4/ui/Incidents",
                //     data: JSON.stringify(payload),
                //     success: function (response, statusText, xhrToken) {

                //         MessageBox.success("Incident Submitted Successfully.");
                //         // that.clearModel();

                //     },
                //     contentType: "application/json"
                // });

            }
        });
    });
