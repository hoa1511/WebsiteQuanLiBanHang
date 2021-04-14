module.exports = {
    getHomePage: (req, res) => {
        const search = req.query.search;
        //console.log(search);
       let query = "";

        if(search){
            query = "SELECT * FROM `myproduct_tb` where Name like '%" + search + "%' ORDER BY STT ASC";
        }else {
             query = "SELECT * FROM `myproduct_tb` ORDER BY STT ASC"; // query database to get all the players
        }

        // execute query
        db.query(query, (err, result) => {
            if (err) {
                res.redirect('/home');
            }
            res.render('index.ejs', {
                title: "Welcome to my FlowerShop",
                myproduct_tb: result
            });
        });
    },
};