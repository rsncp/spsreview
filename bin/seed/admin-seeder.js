



let db=require('../dbconfig/db-connect');


db.connect(function (error) {
    if (error){
        console.log('DB connection error');
        process.exit(1);
    } else{
        console.log('connected successfully and inserting data to db');

        db.get().collection('admin').insertOne({email:'admin@admin',password:'admin'});
    }

});

