using { db } from '../db/schema';

service Srv {

    
    type Object {
                    test:String(10);

                };

    entity student as projection on db.Student;

    action calculate(input:Object) returns Object;

}

service UIService {

    


    entity student as projection on db.Student;



}