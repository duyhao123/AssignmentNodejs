const { assert } = require("joi");
const { Schema } = require("mongoose");

const userSchema = new Schema({
    name: {
        type: String,
        // Co the tra ve mot promisr trong vali
        validate: () => Promise.reject(new Errow('Oops!'))
    },
    email: {
        type: String,
        //Co 2 cach de mongoose tra ve loi
        //1. Promise eject hoac fullfill
        //2. Neu promise tra ve false
        validate: {
            validator: () => Promise.resolve(false),
            message: ' Khong the xac dinh email'
        }
    }
});

const User = db.model('User', userSchema);
const user = new User();

user.email = 'hao@gmail.com';
user.name = 'Hao';
user.validate().catch(error =>{
    assert.ok(error);
    assert.equal(error.errors['name'].message, 'Oops!');
    assert.equal(error.errors['email'].message, 'Email khong xac dinh');


});