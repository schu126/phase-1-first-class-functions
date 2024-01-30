function receivesAFunction (secondFunction) {
    secondFunction();
}

function returnsANamedFunction () {
    function namedFunction() {
    }
    return namedFunction;
}

function returnsAnAnonymousFunction () {
    return function(){

    };
}