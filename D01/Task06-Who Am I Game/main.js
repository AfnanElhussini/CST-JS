var images = ['cat.png', 'dolphin.png', 'eagle.png', 'lion.png', 'parrot.png' , 'shark.png'];

var first = prompt('DO YOU FLY ?')
if(first == 'yes'){
    var first_two = prompt('ARE YOU WILD ?')
    if(first_two == 'yes'){
        // eagle
        document.write('<img src="' + images[2] + '">');
    }else{
        // parrot
        document.write('<img src="' + images[4] + '">');

    }
}else{
    var second = prompt('DO YOU LIVE UNDER SEA ?')
    if(second == 'yes'){
      var second_two =  prompt('ARE YOU WILD ?');
        if(second_two == 'yes'){
            // shark
            document.write('<img src="' + images[5] + '">');
        }else{
            // dolfin
            document.write('<img src="' + images[1] + '">');

        }
    }else{
        var third = prompt('ARE YOU WILD ?');
        if (third == 'yes'){
            //lion
            document.write('<img src="'+images[3]+'" >');

        }else{
            document.write('<img src="' + images[0] + '">');

        }
    }
}