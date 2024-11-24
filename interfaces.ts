import { LoyaltyUser } from "./enums.ts";
import { Price, country } from "./types.ts";

export interface Review {
    name: string;
    stars: number;
    loyaltyUser: LoyaltyUser;
    date: string;
}

export interface Property {
    image: string;
    title: string;
    price: Price;
    location: {
        firstLine: string;
        city: string;
        code: number | string;
        country: country
    }
    contact: [ number, string];
    isAvailable: boolean;
}