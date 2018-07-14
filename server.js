var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var Sequelize = require('sequelize');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var data = "";
var databaseUserName = "root",
    databaseName = "user_form",
    databasePassword = "Sellerworx123",
    databaseHost = "localhost";

var sequelize = new Sequelize(
    databaseName,
    databaseUserName,
    databasePassword, {
        host: databaseHost,
        dialect: 'mysql',
        operatorsAliases: false
    }
);

var userDetail = sequelize.define('user_detail', {
    name: Sequelize.STRING,
    blood_group: Sequelize.STRING,
    age: Sequelize.STRING,
    mobile: Sequelize.STRING,
    address: Sequelize.STRING
});

app.use(express.static(__dirname + '/app'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/app/html/index.html" );
});

app.post('/storeValue', function(request, response) {
    process.nextTick(function() {
            userDetail
                .findOrCreate({
                    where: {
                        mobile: request.body.mobile
                    },
                    defaults :request.body
                })
                .then(function(user) {
                    response.json(user);
                })
                .catch(function(error) {

                });
        });

});

app.get('/showDetails', function(req, res) {
    userDetail
            .findAll()
            .then(function(details) {
                res.json(details);
            })
            .catch(function(error) {
                res.error;
            });
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});
