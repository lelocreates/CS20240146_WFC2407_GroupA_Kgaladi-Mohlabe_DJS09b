//Selects the DOM element
const reviewTotalDisplay = document.querySelector('#reviews')
const userNameDisplay = document.querySelector('#user')
const returningUserDisplay = document.querySelector('#returning-user')

// Importing the LoyaltyUser enum from the "enums" module
import { LoyaltyUser } from "./enums"

// Function to display the total reviews, the name of the last reviewer, and a loyalty icon
export function showReviewTotal (value : number, reviewer: string, isLoyalty : LoyaltyUser) {
    const iconDisplay = LoyaltyUser.GOLD_USER ? "⭐" : ""
    reviewTotalDisplay.innerHTML = value.toString() + " Review" + makeMultiple(value)+ " | last reviewed by " + reviewer + iconDisplay
}

// Function to populate user details in the UI
export function populateUser(isReturning: boolean, userName: string) {
    if (isReturning) {
        returningUserDisplay.innerHTML = "back"
    }
    userNameDisplay.innerHTML = userName
}

// Function to show additional details, such as the price per night, in a given element
export function showDetails(value: boolean | Permissions, element : HTMLDivElement, price: number) {
    if (value) {
        const priceDisplay = document.createElement('div')
        priceDisplay.innerHTML = price.toString() + '/night'
        element.appendChild(priceDisplay)
    }
}

export function add( firstValue: number, secondValue: number ) : number {
    return firstValue + secondValue
}

// Function to return 's' for plural, empty for singular
export function makeMultiple(value: number) : string {
    if (value > 1 || value === 0) {
        return 's'
    } else return ' '
}

// Function to get the top two reviews based on the highest star ratings
export function getTopTwoReviews(reviews : Review[]) : Review[]  {
    const sortedReviews = reviews.sort((a, b) => b.stars - a.stars)
    return sortedReviews.slice(0,2)
}


