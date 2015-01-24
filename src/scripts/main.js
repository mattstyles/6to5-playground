'use strict';

// let
for ( ;; ) {
    let letter = 'let me var';
    var varrer = 'var me let';
    console.log( 'in', varrer );
    console.log( 'in', letter );
    break;
}
try {
    console.log( 'out', varrer );
    console.log( 'out', letter );
} catch(e) {
    console.log( 'out of scope' );
}

// Classes
class Person {
    constructor( name ) {
        this.name = name;
    }

    say() {
        console.log( this.name, 'is speaking' );
    }

    add( a, b ) {
        return a + b;
    }
}

var JOB = Symbol( 'job' );
class Speaker extends Person {
    // Default params
    constructor( name, job = 'Speaker' ) {
        super( name );

        this[ JOB ] = job;
    }

    // getter
    get occupation() {
        return 'Master ' + this[ JOB ];
    }

    say( str ) {
        super.say();
        console.log( str );

        // arrows and spread
        setTimeout( () => {
            var nums = [ 3, 2 ];
            console.log( this.add( ...nums ) );
        }, 200 );
    }
}

var speaker = new Speaker( 'Johnson' );
window.Speaker = Speaker;
speaker.say( 'hola' );

// privacy with symbols
var john = new Speaker( 'John' );
var alex = new Speaker( 'alex', 'Craftsman' );
console.log( john.job, john.JOB, john.occupation );
console.log( alex.job, alex.JOB, alex.occupation );


// import
import * as math from './lib/math';
console.log( '3 + 4 =', math.sum( 3, 4 ) );

// import assign from 'object-assign';
// console.log( assign({ foo: 'foo'}, {bar: 'bar'}) );

// Arrow function and promises
function delay( duration = 0 ) {
    return new Promise( ( resolve, reject ) => {
        setTimeout( resolve, duration );
    });
}
var p = delay( 500 )
    .then( () => {
        var fnName = 'delay';
        console.log( `${ fnName } has resolved` );
    });
console.log( p );
