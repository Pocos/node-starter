export class SetUpMatch {
    teamPlayers: string;
    numPlayers: number;
    date: string;
    hour: string;
    pitch: string;
    price: number;

    constructor( teamPlayers: string, numPlayers: number, date: string, hour: string, pitch: string, price: number) {
        this.teamPlayers = teamPlayers;
        this.numPlayers = numPlayers;
        this.date = date;
        this.hour = hour;
        this.pitch = pitch;
        this.price = price;
    }
}
