onmessage = function(event) {
    let circle = event.data[0]; 
    let totalPoints = event.data[1];
    let drawPoints = event.data[2];

    if (drawPoints) {
        for (let i = 0; i < totalPoints; i++) {
            postMessage(generatePoint(circle));
        }
    }
    else {
        let pointsInCircle = 0;
        for (let i = 0; i < totalPoints; i++) {
            if (generatePoint(circle).inCircle) pointsInCircle++;
        }
        postMessage(pointsInCircle);
    }
};

function generatePoint(circle) {
    let point = {};
    point.x = Math.random() * circle.radius * 2;
    point.y = Math.random() * circle.radius * 2;
    point.inCircle = Math.pow(point.x - circle.x, 2) + Math.pow(point.y - circle.y, 2) < Math.pow(circle.radius, 2);
    return point;
}
