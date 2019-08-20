const { User, validate } = require('../models/user');
const bcrypt = require('bcryptjs')

exports.Dashboard = (req , res) => {
    res.json('this is User Dashboard ')
};

exports.registerUser = async (req, res) => {
    const error = validate(req.body);

    async function createUser() {
            const { name, email, password} = req.body;
            let  user = await User.findOne({ email: email});
            if(user) {
                res.status(400).json({error: 'user already registered. '});
            } else {
                let user = new User({
                    name,
                    email,
                    password
                })
                bcrypt.genSalt(10, (err, salt) => bcrypt.hash(user.password, salt, (err, hash) => {
                    if(err) throw err;
                    user.password = hash;
                    user.save();
                    res.json({
                        name,
                        email,
                        password
                    })
                }))
            }

    }
    createUser();


}