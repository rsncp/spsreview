



let db=require('../dbconfig/db-connect');


db.connect(function (error) {
    if (error){
        console.log('DB connection error');
        process.exit(1);
    } else{
        console.log('connected successfully and inserting data to db');

        db.get().collection('user').insertMany([
            {
                imagePath: '../images/avatar-04.jpg',
                name: 'Ajmal',
                place:'calicut',
                gender:'male',
                email:'mohajmal@gmail.com',
                facebook:'https://www.facebook.com/crossroadstalks/',
                telegram: 'https://t.me/crtalks',
                linkedin: ' https://www.linkedin.com/in/nikhilkilivayil/',
                whatsapp:'https://api.whatsapp.com/send?phone=91'

            },
            {
                imagePath: '../images/avatar-04.jpg',
                name: 'Ajmal',
                place:'calicut',
                gender:'male',
                email:'mohajmal@gmail.com',
                facebook:'https://www.facebook.com/crossroadstalks/',
                telegram: 'https://t.me/crtalks',
                linkedin: ' https://www.linkedin.com/in/nikhilkilivayil/',
                whatsapp:'https://api.whatsapp.com/send?phone=91'
            },
            {
                imagePath: '../images/avatar-04.jpg',
                name: 'Ajmal',
                place:'calicut',
                gender:'male',
                email:'mohajmal@gmail.com',
                facebook:'https://www.facebook.com/crossroadstalks/',
                telegram: 'https://t.me/crtalks',
                linkedin: ' https://www.linkedin.com/in/nikhilkilivayil/',
                whatsapp:'https://api.whatsapp.com/send?phone=91'
            },
            {
                imagePath: '../images/avatar-04.jpg',
                name: 'Ajmal',
                place:'calicut',
                gender:'male',
                email:'mohajmal@gmail.com',
                facebook:'https://www.facebook.com/crossroadstalks/',
                telegram: 'https://t.me/crtalks',
                linkedin: ' https://www.linkedin.com/in/nikhilkilivayil/',
                whatsapp:'https://api.whatsapp.com/send?phone=91'
            },
            {
                imagePath: '../images/avatar-04.jpg',
                name: 'Ajmal',
                place:'calicut',
                gender:'male',
                email:'mohajmal@gmail.com',
                facebook:'https://www.facebook.com/crossroadstalks/',
                telegram: 'https://t.me/crtalks',
                linkedin: ' https://www.linkedin.com/in/nikhilkilivayil/',
                whatsapp:'https://api.whatsapp.com/send?phone=91'
            },
            {
                imagePath: '../images/avatar-04.jpg',
                name: 'Ajmal',
                place:'calicut',
                gender:'male',
                email:'mohajmal@gmail.com',
                facebook:'https://www.facebook.com/crossroadstalks/',
                telegram: 'https://t.me/crtalks',
                linkedin: ' https://www.linkedin.com/in/nikhilkilivayil/',
                whatsapp:'https://api.whatsapp.com/send?phone=91',
            }
        ]);

    }

});

