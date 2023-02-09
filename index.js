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
            
              global.init_point = response.body.init_point;
             
            }).catch(function(error){
              console.log(error);
            });
          })

    const PORT = process.env.PORT || 3001;



    app.listen(PORT, () => {
      console.log(`Server listening on ${PORT}`);
    });
