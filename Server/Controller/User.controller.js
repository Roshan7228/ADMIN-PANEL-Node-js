const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

let signupuser = async (request, response) => {
    let { Username, Email, Password } = request.body;

    if (!Username || !Email || !Password) {
        return response.status(400).json({
            message: "Please fill all the fields"
        });
    }

    try {
        let expectedAdminEmail = `${Username}.Admin@gmail.com`;
        let role = "user";
        if (Email.toLowerCase().includes("admin") && !Email.includes(".Admin")) {
            return response.status(400).json({
                message: "Invalid Email! If you're trying to create Admin, use '.Admin' with dot & capital A."
            });
        }
        if (Email.includes(".Admin") && Email !== expectedAdminEmail) {
            return response.status(400).json({
                message: `Invalid Admin Email! Correct format: ${expectedAdminEmail}`
            });
        }
        if (Email === expectedAdminEmail) {
            role = "Admin";
        }
        bcrypt.hash(Password, 10, async (err, hash) => {
            if (err) {
                return response.status(400).json({
                    message: err.message
                });
            }
            if (hash) {
                let user = {
                    Username,
                    Email,
                    role
                };
                jwt.sign({ user }, "kcsxsx", { algorithm: 'HS256' }, function (err, token) {
                    if (err) {
                        response.status(400).json({
                            message: err.message
                        })
                    }
                    return response.status(200).json({
                        message: role === "Admin" ? "Admin user created successfully" : "User registered successfully",
                        user: { Username, Email, role, Password: hash },
                        token
                    });
                });
            }
        });

    } catch (error) {
        return response.status(400).json({
            message: error.message
        });
    }
};

module.exports = { signupuser };
