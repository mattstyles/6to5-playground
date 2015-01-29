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
} catch( e ) {
    console.log( 'out of scope', e );
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

// private keyword - only with experimental flag
class Engineer {
    private TASK
    constructor( name, job = 'Engineer' ) {
        this::TASK = job;
    }

    get occupation() {
        return 'Expert ' + this::TASK;
    }
}

var speaker = new Speaker( 'Johnson' );
window.Speaker = Speaker;
speaker.say( 'hola' );

// privacy with symbols
var john = new Speaker( 'John' );
var alex = new Speaker( 'alex', 'Craftsman' );
var nina = new Engineer( 'Nina' );
console.log( john.job, john.JOB, john.occupation ); // undefined undefined Speaker
console.log( alex.job, alex.JOB, alex.occupation ); // undefined undefined Craftsman
console.log( nina.task, nina.TASK, nina.occupation )


// import
import * as math from './lib/math';
console.log( '3 + 4 =', math.sum( 3, 4 ) );


/* import existing lib */
// import PIXI from 'pixi.js';
// console.log( 'pixi:', PIXI );
// import raf from 'animation-frame';
//
// var stage = new PIXI.Stage(0x66FF99);
// var renderer = PIXI.autoDetectRenderer(400, 300);
// document.body.appendChild(renderer.view);
// raf( animate );
// function animate() {
//     raf( animate );
//     renderer.render(stage);
// }



// Arrow function and promises
function delay( duration = 0 ) {
    return new Promise( ( resolve, reject ) => {
        setTimeout( resolve, duration );
    });
}
var p = delay( 500 )
    .then( () => {
        var fnName = 'delay';
        // String literal
        console.log( `${ fnName } has resolved` );
    });
console.log( p );

// type checking with flowcheck
function flow( x: string ) {
    console.log( 'flowcheck:', x );
}
try {
    flow( 'a string' ); // fine
    //flow( 8 ); // will throw
} catch( e ) {
    console.log( 'flowcheck error', e );
}
