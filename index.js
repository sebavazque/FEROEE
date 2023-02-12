const express = require('express');
const morgan = require('morgan');
const server = express();
const bodyParser = require('body-parser');
const path = require('path')

server.use (express.json())
server.use(morgan('dev'))

// SDK de Mercado Pago
const mercadopago = require ('mercadopago');


app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(
  path.join(__dirname,"./public")));

  mercadopago.configure({
  access_token: 'APP_USR-6623451607855904-111502-1f258ab308efb0fb26345a2912a3cfa5-672708410'})

          //routes
          server.post('/payment', (req, res) => {
           
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

          server.listen(3001, () => {
              console.log("Server running on port: 3001", );
            });
