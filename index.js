const express = require('express');
const nodemailer = require ('nodemailer');
const fs = require('fs');

const app = express();
const port = 3000;


app.listen(port, () => {
    console.log(`This mailing template is listening at http://localhost:${port}`);
});


//Creating a nodemailer Transporter object
let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    service: 'gmail',
    secure: true,
    post: 465,

    auth: {
        user: "nkenganyiclovis45@gmail.com",
        pass: "nkenganyi12345"
},
tls: {
    rejectUnauthorized: false,
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take our messages', success);
  }
});

let mailOptions = {
  from: 'nkenganyiclovis45@gmail.com',
  to: 'peldrige8@gmail.com',
  subject: 'Email Template',
  html: `<!DOCTYPE html>
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
  
  <head>
  
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width,initial-scale=1">
      <meta name="x-apple-disable-message-reformatting">
      <title>Email Template</title>
  
      <link rel="stylesheet" href="/assets/css/style.css">
  
      <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous" />
  
      <!--[if mso]>
    <style>
      table {border-collapse:collapse;border-spacing:0;border:none;margin:0;}
      div, td {padding:0;}
      div {margin:0 !important;}
    </style>
    <noscript>
      <xml>
        <o:OfficeDocumentSettings>
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
      </xml>
    </noscript>
    <![endif]-->
  
  </head>
  
  <body style="margin:0;padding:0;word-spacing:normal;background-color:#939297;">
      <div role="article" aria-roledescription="email" lang="en"
          style="text-size-adjust:100%;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;background-color:#939297;">
          <table role="presentation" style="width:100%;border:none;border-spacing:0;">
              <tr>
                  <td align="center" style="padding:0;">
  
                      <!--[if mso]>
                      <table role="presentation" align="center" style="width:600px;">
                          <tr>
                          <td>
                  <![endif]-->
  
                      <table role="presentation"
                          style="width:94%;max-width:600px;border:none; background-color: #fff; border-spacing:0;text-align:left;font-family:Arial,sans-serif;font-size:16px;line-height:22px;color:#363636;">
                          <tr>
                              <td align="center" style="background-color:#ffffff; padding-top: 50px;">
                                  <img src="https://sevengps.net/wp-content/uploads/2020/02/Seven-logo.png"
                                      width="165" alt="Logo" style="width:80%;max-width:165px;height:auto;" />
                              </td>
                          </tr>
                          <tr>
                              <td align="center" style="padding:30px 60px;background-color:#ffffff; color: #01013f;">
                                  <h1
                                      style="margin-top:0;margin-bottom:16px;font-size:26px;line-height:32px;font-weight:bold;letter-spacing:-0.02em;">
                                      Welcome to our responsive email!</h1>
                                  <p style="margin:0;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempus
                                      adipiscing felis, sit amet blandit ipsum volutpat sed. Morbi porttitor, nisi
                                      libero ultricies ipsum, in posuere mauris neque at erat.</p>
                              </td>
                          </tr>
  
                          <tr>
                              <td align="center" style="background-color:#ffffff; margin-top: 0;">
                                  <img src="https://cms.taygo.tech/business/images/hero-banner.png" width="400px" alt=""
                                      style="width:60%;height:auto;border:none;text-decoration:none;">
                              </td>
                          </tr>
                          <tr>
                              <td align="center" style="padding: 20px 50px;background-color:#ffffff;">
                                  <p style="margin:0;">Duis sit amet accumsan nibh, varius tincidunt lectus. Quisque
                                      commodo, nulla ac feugiat cursus, arcu orci condimentum tellus, vel placerat libero
                                      sapien et libero. Suspendisse auctor vel orci nec finibus.</p>
                              </td>
                          </tr>
                          <tr>
                              <td align="center" style="padding: 10px 20px 40px;">
                                  <button class="btn btn-green" style=" border: none;
                                  padding: 2% 4%;
                                  color: #fff;
                                  font-family: sans-serif;
                                  font-weight: 700;
                                  cursor: pointer;
                                  border-radius: 5px; background: #06a396;">Learn More</button>
  
                                  <button class="btn btn-yellow" style=" border: none;
                                  padding: 2% 4%;
                                  color: #fff;
                                  font-family: sans-serif;
                                  font-weight: 700;
                                  cursor: pointer;
                                  border-radius: 5px; background: #fa9600;">Click Here</button>
                              </td>
                          </tr>
                          <tr>
                              <td align="center" style="background-color:#ffffff; padding-bottom: 50px;">
                                  <img src="https://sevengps.net/wp-content/uploads/2020/02/Seven-logo.png"
                                      width="165" alt="Logo" style="width:80%;max-width:165px;height:auto;" /></a>
                              </td>
                          </tr>
  
                          <tr>
                              <td
                                  style="padding:10px;text-align:center;font-size:12px;background-color:#404040;color:#cccccc;">
  
                                  <p style="margin:0;font-size:14px;line-height:20px;">&reg; SevenGPS 2021<br><a
                                          class="unsubscribe" href="http://www.example.com/"
                                          style="color:#cccccc;text-decoration:underline;">Unsubscribe to our
                                          newsletter</a></p>
  
                                  <!-- <a href="#" class="icons"><i class="fab fa-facebook-f"></i></a>
                                  <a href="#" class="icons"><i class="fab fa-twitter"></i></a>
                                  <a href="#" class="icons"><i class="fab fa-instagram"></i></a>
                                  <a href="#" class="icons"><i class="fas fa-envelope-open-text"></i></a>
                                  <a href="#" class="icons"><i class="fab fa-youtube"></i></a>
                                  <a href="#" class="icons"><i class="fab fa-google"></i></a> -->
  
                                  <a href="http://www.facebook.com/" style="text-decoration:none;"><img
                                          src="https://assets.codepen.io/210284/facebook_1.png" width="40" height="40"
                                          alt="f" style="display:inline-block;color:#cccccc;"></a> <a
                                      href="http://www.twitter.com/" style="text-decoration:none;"><img
                                          src="https://assets.codepen.io/210284/twitter_1.png" width="40" height="40"
                                          alt="t" style="display:inline-block;color:#cccccc;"></a>
                              </td>
                          </tr>
                      </table>
  
                      <!--[if mso]>
                  </td>
                  </tr>
                  </table>
              <![endif]-->
  
                  </td>
              </tr>
          </table>
      </div>
  </body>
  
  </html>`
};

transporter.sendMail(mailOptions, (err, info) => {
  if (err) {
    console.log(err.message);
    process.exit(1);
  }
  console.log('Message sent', info.messageId);
});

