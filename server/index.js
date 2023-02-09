const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path')

// SDK de Mercado Pago
const mercadopago = require ('mercadopago');


app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(
  path.join(__dirname,"FEROE/client/build")));

  mercadopago.configure({
  access_token: 'TEST-4427981030188178-020410-f2c190606d5552ae69cfbcbb4dfce592-442830367'})

          //routes
          app.post('/payment', (req, res) => {
           
            let preference = {
              items: [
                {
                  title:req.body.title,
                  unit_price: parseInt(req.body.price),
                  quantity: 1,
                  currency_id: 'ARS'
                }],
            };
            mercadopago.preferences.create(preference)
            .then((response)=> {
            
              res.redirect(response.body.init_point);
             
            }).catch(function(error){
              console.log(error);
            });
          })

          app.listen(3001, () => {
              console.log("Server running on port: 3001", );
            });
