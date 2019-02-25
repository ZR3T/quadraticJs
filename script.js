var graphClick = 0;//sets the # of clicks to 0 at startup (jic)
var evalClick = 0;
function evalu8(){//Function to initiate the calculative portion of the quadCalculator
    evalClick += 1;
    if(evalClick == 1){//Updates that user has pressed the button
        document.getElementById('inpoot').innerHTML = 'Reset';

    }

    if(evalClick == 2){//reloads page to reset all inputs
        location.reload();
    }
    var a = Number(document.getElementById('a').value);//loads HTML values as JS vars
    var b = Number(document.getElementById('b').value);
    var c = Number(document.getElementById('c').value);
    if (a != Number(a)){//errors for all inputs 
        alert('Please check to make sure your "a", "b" and "c" values are numbers.');
        return;
    }

    if (b != Number(b)){
        alert('Please check to make sure your "a", "b" and "c" values are numbers.');
        return;
    }

    if (c != Number(c)){
        alert('Please check to make sure your "a", "b" and "c" values are numbers.');
        return;
    }

    var AoS = ( -1 * b) / (2 * a);//calculates AoS
    document.getElementById('aos').innerHTML = AoS.toFixed(2);

    var vertex = '(' + AoS.toFixed(2) + ',' + ((a * (AoS * AoS)) + (b * AoS) + c).toFixed(2) + ')';//Calcs Vertex
    document.getElementById('vTex').innerHTML = vertex;

    var discrim = (b * b) - (4 * a * c);//calcs Discriminant
    document.getElementById('dScrim').innerHTML = discrim;

    var ToR = 'idk';// sets vars to idk in case of error (for testing)
    var root1 = 'idk';
    var root2 = 'idk';

    if(discrim == 0){//self-explanatory
        ToR = 'One solution';
        root1 = 'Root1: ' + ( (-1 * b + Math.sqrt( Math.pow(b, 2) - (4 * a * c) ) ) / (2 * a) ).toFixed(2);//simplified roots
        root2 = '';
    }
    if(discrim > 0){//self-explanatory
        ToR = 'Two solutions';
        //root1 = 'Root1: ' + ( (-1 * b)- (Math.sqrt((b*b) - (4 * a * c)) / (2 * a)) ).toFixed(2);//simplified roots //wrong
        //root2 = 'Root2: ' + ( (-1 * b)+ (Math.sqrt((b*b) - (4 * a * c)) / (2 * a)) ).toFixed(2);//simplified roots

        root1 = 'Root1: ' + ( (-1 * b + Math.sqrt( Math.pow(b, 2) - (4 * a * c) ) ) / (2 * a) ).toFixed(2);      // right
        root2 = 'Root2: ' + ( (-1 * b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a) ).toFixed(2);
    }
    if(discrim < 0){//self-explanatory
        ToR = 'Two imaginary solutions';
        var rP1 = ((-1 * b)/(2*a));
        var rP2 = Math.sqrt( ((Math.pow(b, 2) - (4 * a * c))*(-1)) ) / (2 * a);
        var i = 'i';

        if(rP1 == 0){//if first part of imagEquation is 0: remove it
            root1 ='Root1: ' + rP2.toFixed(2) + i;
            root2 ='Root2: ' + '-' + rP2.toFixed(2) + i;

            if(rP2 == 1){// if second part of imagEqaution is 1: remove it
                root1 ='Root1: ' + i;
                root2 ='Root2: ' + '-'+i;
            }
        }

        if(rP1 != 0 && rP2 == 1){// if second part of imagEqaution is 1: remove it
            root1 ='Root1: ' + rP1.toFixed(2) + ' + ' + i;
            root2 ='Root2: ' + rP1.toFixed(2) + ' - ' + i;
        } 

        else if(rP1 != 0 && rP2 != 1){//if there are no simple simplifications to do. output imagEquation as is with decimal caps
            root1 ='Root1: ' + rP1.toFixed(2) + ' + ' + rP2.toFixed(2) + i;
            root2 ='Root2: ' + rP1.toFixed(2) + ' - ' + rP2.toFixed(2) + i; 
        }



    }

    document.getElementById('tor').innerHTML = ToR;//output the info to HTML
    document.getElementById('root1').innerHTML = root1;
    document.getElementById('root2').innerHTML = root2;
}




//FOR THIS PROGRAM EVERY SQUARE IS 50x50
var lineX = -500;
var lineXe = 250;
var lineY = -250;
ctx.clearRect(0, 0, canvas.width, canvas.height);//clear canvas

function graph(){//initiates graphing portion of graphing calculator
    graphClick += 1;
    document.getElementById('gButt').innerHTML = 'Reset';

    if(graphClick == 2){//reload page if user clicks twice
        location.reload();
        graph();
    }
    var a = (document.getElementById('a').value)/50;//adjusts scale for 50x50 squares
    var b = document.getElementById('b').value;
    var c = (document.getElementById('c').value)*50;
    var can = document.getElementById("myCanvas");//imports canvas
    var ctx = can.getContext("2d");
    ctx.translate(500,500);//moves canvas origin to center of canvas

    ctx.beginPath();//creates Y axis at origin
    ctx.strokeStyle = "green";
    ctx.lineWidth = 1.5;
    ctx.moveTo(0, 500);
    ctx.lineTo(0, -500);
    ctx.stroke();

    for(lineX = -500; lineX < 500; lineX += 50){//loop to make x = lines
        ctx.beginPath();
        ctx.strokeStyle = "gray";
        ctx.lineWidth = 0.5;
        ctx.moveTo(lineX, 500);
        //lineXe = -1*(lineX);
        ctx.lineTo(lineX, -500);
        ctx.stroke();
    }

    ctx.beginPath();//creates X axis line at origin
    ctx.strokeStyle = "green";
    ctx.lineWidth = 1.5;
    ctx.moveTo(500, 0);
    ctx.lineTo(-500, 0);
    ctx.stroke();

    for(lineX = -500; lineX < 500; lineX += 50){//loop to make y = lines
        ctx.beginPath();
        ctx.strokeStyle = "gray";
        ctx.lineWidth = 0.5;
        ctx.moveTo(500,lineX);
        //lineXe = -1*(lineX);
        ctx.lineTo(-500, lineX);
        ctx.stroke();
    }

    ctx.beginPath();//graphs user's equation
    ctx.strokeStyle = "black";
    for(x = -500; x < 500; x++){
        ctx.lineTo((x), ((( -1*(a*(x*x) + (b*x) + c)) )));
        ctx.stroke();
    }
}