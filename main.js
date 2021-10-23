noseX = 0;
noseY = 0;

function preload() {
	world_start = loadSound("world_start.wav");
	MarioJump = loadSound("jump.wav");
	CoinSound = loadSound("coin.wav");
	GameOver = loadSound("gameover.wav");
	KickSound = loadSound("kick.wav")
	MariosDeath = loadSound("mariodie.wav");
	setSprites();
	MarioAnimation();
}

function setup(){
	canvas = createCanvas(1240,336);
	canvas.parent("canvas");
	video = createCapture(VIDEO);
	video.size(800, 400);
	video.parent("gameConsole");
	instializeInSetup(mario);

	Poses = ml5.poseNet(video, modelLoaded);
	Poses.on("pose", gotResults)
}

function modelLoaded(){
	console.log("I'm alive!");
}

function gotResults(results, error){
	if(error){
		console.log(error);
	}
	else{
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
	}
}

function draw() {
	game()
}