export function rps(shot) {
    const MOVES = ['rock', 'paper', 'scissors'];

    //if shot is undefined, return random move
    if (shot === undefined) {
        return {'player': MOVES[Math.floor(Math.random() * MOVES.length)]};
    } else {
        //ignore case
        shot = shot.toLowerCase();

        //if shot is not a valid move, return error
        if (!MOVES.includes(shot)) {
            return 'error';
        }

        //pick opponent's move
        let opponent = MOVES[Math.floor(Math.random() * MOVES.length)];

        //compare moves
        if (shot === opponent) {
            return {'player': shot, 'opponent': opponent, 'result': 'tie'};
        }
        if (shot === 'rock' && opponent === 'scissors') {
            return {'player': shot, 'opponent': opponent, 'result': 'win'};
        }
        if (shot === 'rock' && opponent === 'paper') {
            return {'player': shot, 'opponent': opponent, 'result': 'lose'};
        }
        if (shot === 'paper' && opponent === 'rock') {
            return {'player': shot, 'opponent': opponent, 'result': 'win'};
        }
        if (shot === 'paper' && opponent === 'scissors') {
            return {'player': shot, 'opponent': opponent, 'result': 'lose'};
        }
        if (shot === 'scissors' && opponent === 'paper') {
            return {'player': shot, 'opponent': opponent, 'result': 'win'};
        }
        if (shot === 'scissors' && opponent === 'rock') {
            return {'player': shot, 'opponent': opponent, 'result': 'lose'};
        }
    }
}

export function rpsls(shot) {
    const MOVES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];


    //if shot is undefined, return random move
    if (shot === undefined) {
        return {'player': MOVES[Math.floor(Math.random() * MOVES.length)]};
    } else {
        //ignore case
        shot = shot.toLowerCase();

         //if shot is not a valid move, return error
         if (!MOVES.includes(shot)) {
            return 'error';
        }

        //pick opponent's move
        let opponent = MOVES[Math.floor(Math.random() * MOVES.length)];

        //compare moves
        if (shot === opponent) {
            return {'player': shot, 'opponent': opponent, 'result': 'tie'};
        }

        if (shot === 'rock' && (opponent === 'scissors' || opponent === 'lizard')) {
            return {'player': shot, 'opponent': opponent, 'result': 'win'};
        }
        if (shot === 'rock' && (opponent === 'paper' || opponent === 'spock')) {
            //capatalize spock again
            if (opponent === 'spock') {
                opponent = 'Spock';
            }
            return {'player': shot, 'opponent': opponent, 'result': 'lose'};
        }

        if (shot === 'paper' && (opponent === 'rock' || opponent === 'spock')) {
            //capatalize spock again
            if (opponent === 'spock') {
                opponent = 'Spock';
            }
            return {'player': shot, 'opponent': opponent, 'result': 'win'};
        }
        if (shot === 'paper' && (opponent === 'scissors' || opponent === 'lizard')) {
            return {'player': shot, 'opponent': opponent, 'result': 'lose'};
        }

        if (shot === 'scissors' && (opponent === 'paper' || opponent === 'lizard')) {
            return {'player': shot, 'opponent': opponent, 'result': 'win'};
        }
        if (shot === 'scissors' && (opponent === 'rock' || opponent === 'spock')) {
            //capatalize spock again
            if (opponent === 'spock') {
                opponent = 'Spock';
            }
            return {'player': shot, 'opponent': opponent, 'result': 'lose'};
        }

        if (shot === 'lizard' & (opponent === 'paper' || opponent === 'spock')) {
            //capatalize spock again
            if (opponent === 'spock') {
                opponent = 'Spock';
            }
            return {'player': shot, 'opponent': opponent, 'result': 'win'};
        }
        if (shot === 'lizard' & (opponent == 'rock' || opponent == 'scissors')) {
            return {'player': shot, 'opponent': opponent, 'result': 'lose'};
        }

        if (shot === 'spock' & (opponent === 'rock' || opponent === 'scissors')) {
            return {'player': 'Spock', 'opponent': opponent, 'result': 'win'};
        }
        if (shot === 'spock' & (opponent === 'paper' || opponent === 'lizard')) {
            return {'player': 'Spock', 'opponent': opponent, 'result': 'lose'};
        }
    }
}