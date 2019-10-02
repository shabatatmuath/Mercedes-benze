
var showorder=function () {
    //input
    
    var userorder = prompt ('what is the model do you want to see,c180 or gclass');
    var orderimage='';
    var numberofimages;

    //processing
    while (userorder !== 'c180' && userorder !== 'gclass') {
        userorder = ('pleas choose c180 or gclass');
        }
        numberofimages = prompt('how many cars do want to see?');
        for (let ctr =0;ctr < numberofimages; ctr++) {
            if (userorder === 'c180') {
                orderimage +='<img class="style" src="imag/c180.jfif">';
            } else if (userorder === 'gclass'){
                orderimage=orderimage + '<img class="style" src="imag/gclass.jfif">';
        }
    }

    //output
    return orderimage;
};