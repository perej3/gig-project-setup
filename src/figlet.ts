var figlet = require('figlet');
 
figlet('Hello World!!', function(err: string, data : string) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});