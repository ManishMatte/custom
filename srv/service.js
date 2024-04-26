const cds = require("@sap/cds");

module.exports = cds.service.impl(async function (srv) {

  
    srv.on('calculate', (req) => {
      
        return req.data.input;

        
    });


    srv.before('CREATE','student', (req) => {
        
        srv.run(SELECT.one.from('STUDENT').orderBy('ID desc')).then(data => {
            console.log(data); // Log the fetched data
        }).then(
            data => {
                console.log(data);
            }
        );
            
    });


});