namespace db;

using { cuid,managed } from '@sap/cds/common';


entity Student {
    key ID:Integer;
    name : String(100);
    gender:  String(1) enum {M = 'Male'; F = 'Female'};
}

entity Incidents : cuid, managed {

    location:String(100);
    incidentType: Composition of many Inc_IncidentTypes on incidentType.incident = $self;
    employees : Composition of many Inc_Employees on employees.incident = $self;
    witness: Composition of many Inc_Witnesses on witness.incident = $self

}

entity Inc_Employees : cuid , managed{
    name:String(100);
    location:String(100);
    incident : Association to Incidents;
}

entity Inc_IncidentTypes : cuid {
    master_ID:Int16;
    incident : Association to Incidents;
}

entity Inc_Witnesses : cuid {
    name : String(100);
    statement : String(1000);
    incident : Association to Incidents;
}