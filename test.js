const captcha = require('./index');

// Create a random text captcha
const result = captcha.create({
        size: 5,                // Number of characters in the CAPTCHA
        ignoreChars: '0o1i',    // Exclude confusing characters
        noise: 3,               // Increase noise for better security
        color: false,           // Disable color (Black and white)
        background: '#ff000',  // White background for better contrast
        width: 200,             // Width of the CAPTCHA image
        height: 70,             // Height of the CAPTCHA image
        fontSize: 50,           // Font size for better readability
        textColor: '#000000',
        isBase64:false
});
console.log(result);
