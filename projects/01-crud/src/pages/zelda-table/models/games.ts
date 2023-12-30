export interface Game {
    success: boolean;
    count:   number;
    data:    Datum[];
}

export interface Datum {
    name:         string;
    description:  string;
    developer:    string;
    publisher:    Publisher;
    released_date: string;
    id:           string;
}

export enum Publisher {
    Nintendo = "Nintendo",
    PhilipsMedia = "Philips Media",
    StGIGA = "St. GIGA",
}
