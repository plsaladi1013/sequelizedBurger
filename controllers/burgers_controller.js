var express = require("express"); 
var router = express.Router();
var db = require("../models");


// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
   res.redirect("/burgers");
  });

router.get("/burgers", function(req, res) {
    db.Burger.findAll().then(function(dbBurger) {
      var hbsObject ={
        burger : dbBurger
      }
     // console.log(burger);
      return res.render("index", hbsObject );
    });
  });  

router.post("/api/burger", function(req, res) {
     console.log(req.body)
      db.Burger.create(req.body).then(function() {
 console.log('ok')
 res.redirect('/burgers')
      });
    });

     //   burger.create([
  //"burger_name", "devoured"
   //], [
     //req.body.burger_name, req.body.devoured
   //], function(result) {
     // Send back the ID of the new quote
     //console.log(result);
  //   res.json({ id: result.insertId });
  // });
// });
 router.put("/update/:id" , function(req, res) {
  console.log(req);
   console.log("condition", req.params.id);
   db.Burger.update({
     customer: req.body.customer,
     devoured: true
   },
  {
    where: {
      id: req.params.id
    }
  }).then(function(){
    res.json('/')
  })
 });

//router.delete("/api/burger/:id", function(req, res) {
//   var condition = "id = " + req.params.id;
//   burger.delete(condition, function(result) {
//     if (result.affectedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });
// Export routes for server.js to use.

module.exports = router;