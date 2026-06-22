//순환 참조

function doA() {
    console.log('doA');
    doB();
}

function doB() {
    console.log('doB')
    doA();
}

doA();