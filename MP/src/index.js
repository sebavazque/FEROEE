const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = express.Router()

// SDK de Mercado Pago
const mercadopago = require ('mercadopago');



router.get('https://feroe.netlify.app/payment'), (req, res) =>{



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
                }],
                back_urls : {
                  success: 'https://feroe.netlify.app/'
                }
            };
            mercadopago.preferences.create(preference)
            .then((response)=> {
            
              res.redirect(response.body.init_point);
             
            }).catch(function(error){
              console.log(error);
            });
          })
 }

  app.use(router)
          app.listen(3010, () => {
              console.log("Server  3000");
          });
       