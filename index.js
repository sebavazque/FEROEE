const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path')

// SDK de Mercado Pago
const mercadopago = require ('mercadopago');


app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(
  path.join(__dirname,"./public")));

  mercadopago.configure({
  access_token: 'APP_USR-6623451607855904-111502-1f258ab308efb0fb26345a2912a3cfa5-672708410'})

          //routes
          app.post('/payment', (req, res) => {
           
            let preference = {
              items: [
                {
                  title:req.body.title,
                  unit_price: parseInt(req.body.price),
                  quantity: 1,
                  currency_id: 'ARS'
                }],		back_urls: {
                  "success": "https://feroee.onrender.com",
                  "failure": "https://feroee.onrender.com",
                  "pending": "https://feroee.onrender.com"
                },
                auto_return: "approved",
            };
            mercadopago.preferences
              .create(preference)
              .then((response)=> {
                  console.log(response);
              })
              .catch(function(error){
              console.log(error);
              });
          })

    



    app.listen(3001, () => {
      console.log(`Server listening on 3001`);
    });
