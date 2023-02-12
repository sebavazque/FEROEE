const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path')
const http = require('http');

app.use (express.json())

// SDK de Mercado Pago
const mercadopago = require ('mercadopago');
const server = http.createServer(mercadopago);

app.use(bodyParser.urlencoded({ extended: false }))
app.set('port', process.env.PORT || 3001)
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
                }],
            };
            mercadopago.preferences.create(preference)
            .then((response)=> {

              res.redirect(response.body.init_point);

            }).catch(function(error){
              console.log(error);
            });
          })

        //   server.listen(app.get('port'),()=>{
        //     console.log(`Server on port ${app.get('port')}`)
        // })

        server.listen(3001);
        console.log("Server")