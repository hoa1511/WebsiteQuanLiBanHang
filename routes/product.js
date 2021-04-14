const fs = require('fs');

exports.addProductPage = (req, res) => {
    res.render('add-product.ejs', {
        title: "Welcome to FlowerShop",
        message: ''
    });
};

exports.addProduct = (req, res) => {
    if (!req.files) {
        return res.status(400).send("No files were uploaded.");
    }

    let message = '';
    let Name = req.body.Name;
    let Price = req.body.Price;
    let Status = req.body.Status
    let SoLuong = req.body.SoLuong;
    let uploadedFile = req.files.image;
    let image_name = uploadedFile.name;
    let fileExtension = uploadedFile.mimetype.split('/')[1];
    image_name = Name + '.' + fileExtension;

    let usernameQuery = "SELECT * FROM `myproduct_tb` WHERE Name = '" + Name + "'";

    db.query(usernameQuery, (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).send(err);
        }

        if (result.length > 0) {
            message = 'Product already exists';
            res.render('add-product.ejs', {
                message,
                title: "Welcome to HoaDB | Add a new product"
            });
        } else {
            // check the filetype before uploading it
            if (uploadedFile.mimetype === 'image/png' || uploadedFile.mimetype === 'image/jpeg' || uploadedFile.mimetype === 'image/gif') {
                // upload the file to the /public/assets/img directory
                uploadedFile.mv(`public/assets/img/${image_name}`, (err ) => {
                    if (err) {
                        return res.status(500).send(err);
                    }
                    // send the player's details to the database
                    let query = "INSERT INTO `myproduct_tb` (Name, Price, Status, Picture, SoLuong) VALUES ('" +
                        Name + "', '" + Price + "', '" + Status + "', '" +image_name + "', '" + SoLuong  + "')";
                    db.query(query, (err, result) => {
                        if (err) {
                            return res.status(500).send(err);
                        }
                        res.redirect('/home');
                    });
                });
            } else {
                message = "Invalid File format. Only 'gif', 'jpeg' and 'png' images are allowed.";
                res.render('add-product.ejs', {
                    message,
                    title: "Welcome Hoa"
                });
            }
        }
    });
}

exports.editProductPage = (req, res) => {
    let productId = req.params.STT;
    let query = "SELECT * FROM `myproduct_tb` WHERE STT = '" + productId + "' ";
    db.query(query, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.render('edit-product.ejs', {
            title: "Edit  Product",
            product: result[0],
            message: ''
        });
    });
}

exports.editProduct = (req, res) => {
    let productId = req.params.STT;
    let Name = req.body.Name;
    let Price = req.body.Price;
    let Status = req.body.Status;
    let SoLuong = req.body.SoLuong;

    let query = "UPDATE `myproduct_tb` SET `Name` = '" + Name + "', `Price` = '" + Price + "', `Status` = '" + Status + "', `SoLuong` = '" + SoLuong + "' WHERE `myproduct_tb`.`STT` = '" + productId + "'";
    db.query(query, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.redirect('/home');
    });
}

exports.deleteProduct = (req, res) => {
    let productId = req.params.STT;
    let getImageQuery = 'SELECT Picture from `myproduct_tb` WHERE STT = "' + productId + '"';
    let deleteUserQuery = 'DELETE FROM myproduct_tb WHERE STT = "' + productId + '"';

    db.query(getImageQuery, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }

        let Picture = result[0].Picture;

        fs.unlink(`public/assets/img/${Picture}`, (err) => {
            if (err) {
                return res.status(500).send(err);
            }
            db.query(deleteUserQuery, (err, result) => {
                if (err) {
                    return res.status(500).send(err);
                }
                res.redirect('/home');
            });
        });
    });
}
