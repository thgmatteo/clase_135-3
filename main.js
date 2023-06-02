cocossd = "";
status = "";
function setup()
{
    canvas = createCanvas(300, 225);
    canvas.center();
    image(VIDEO, 300, 225)
}
function start()
{
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Estatus:Detectando Objetos";
}
function modelLoaded()
{
    console.log("Modelo Cargado");
    status = true;
}
function draw()
{
    image(video, 0, 0, 300, 225);
}