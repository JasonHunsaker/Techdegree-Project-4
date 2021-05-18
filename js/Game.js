/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = createPhrases
        this.activePhrase = null;
    }

createPhrases() {
    const gamePhrase = [
        new Phrase('Hasta la vista, baby'),
        new Phrase('One in a Million'),
        new Phrase('Do, or do not. There is no try'),
        new Phrase('Could be worse; Could be me'),
        new Phrase("Hey, I'm walkin here!"),
]

    return gamePhrase

};