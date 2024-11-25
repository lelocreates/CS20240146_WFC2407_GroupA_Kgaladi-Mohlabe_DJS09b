// Import necessary functions, enums, types, interfaces, and classes from other modules
import { showReviewTotal, populateUser, showDetails, getTopTwoReviews} from "./utils.ts";
import { Permissions, LoyaltyUser } from "./enums.ts";
import { Price, country } from "./types.ts";
import { Review, Property } from "./interfaces.ts";
import { MainProperty } from "./classes.ts";

// Select DOM elements to manipulate and display content
const propertyContainer = document.querySelector('.properties')
const reviewContainer = document.querySelector('.reviews')
const container = document.querySelector('.container')
const button = document.querySelector('button')
const footer = document.querySelector('.footer')

// variable to track the login status of the user
let isLoggedIn: boolean


const reviews : Review[] = /*{
    name: string;
    stars: number;
    loyaltyUser: LoyaltyUser;
    date: string;
} | {
    name: string;
    stars: number;
    loyaltyUser: LoyaltyUser;
    date: string;
    description: string;
}[] = */[
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: LoyaltyUser.GOLD_USER,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: LoyaltyUser.BRONZE_USER,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: LoyaltyUser.SILVER_USER,
        date: '27-03-2021',
        description: "Great hosts, location was a bit further than expected"
    },
]

// Define user details including name, permissions, loyalty status, and properties stayed
const you = {
    firstName: 'Bobby',
    lastName: 'Brown',
    permissions: Permissions.ADMIN,
    isReturning: true,
    age: 35,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
}


const properties : {
    image: string;
    title: string;
    price: number;
    location: {
        firstLine: string;
        city: string;
        code: number;
        country: country; 
    };
    contact: [ number, string];
    isAvailable: boolean;
}[] = [
    {
        image: './colombia-property.jpg',
        title: 'Colombian Shack',
        price: 45,
        location: {
            firstLine: 'shack 37',
            city: 'Bogota',
            code: 45632,
            country: 'Colombia'
        },
        contact: [+112343823978921, 'marywinkle@gmail.com'],
        isAvailable: true  
    },
    {
        image: './poland-property.jpg',
        title: 'Polish Cottage',
        price: 30,
        location: {
            firstLine: 'no 23',
            city: 'Gdansk',
            code: 343903,
            country: 'Poland'
        },
        contact: [+1298239028490830, 'garydavis@hotmail.com'],
        isAvailable: false 
    },
    {
        image: './london-property.jpg',
        title: 'London Flat',
        price: 25,
        location: {
            firstLine: 'flat 15',
            city: 'London',
            code: 35433,
            country: 'United Kingdom',
        },
        contact: [+34829374892553, 'andyluger@aol.com'],
        isAvailable: true
    },
    {
        image: './images/malaysian-hotel.jpeg',
        title: 'Malia Hotel',
        price: 35,
        location: {
            firstLine: 'Room 4',
            city: 'Malia',
            code: 45334,
            country: 'Malaysia'
        },
        contact: [ +60349822083, 'lee34@gmail.com'],
        isAvailable: false
    }
]

//Function calls 
// Display the total reviews and the first reviewer's name with loyalty status
showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser)
// Populate the user information in the UI
populateUser(you.isReturning, you.userName)

let authorityStatus : any

// Initialize the login status
isLoggedIn = false


// Add property cards to the DOM
for (let i = 0; i < properties.length; i++) {
    const card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML = properties[i].title
    const image = document.createElement('img')
    image.setAttribute('src', properties[i].image)
    card.appendChild(image)
    showDetails(you.permissions, card, properties[i].price)
    propertyContainer.appendChild(card)
}

// Count variable to ensure reviews are added only once
let count = 0

// Function to display the top reviews
function addReviews(array: Review[]) : void {
    if (!count ) {
        count++
        const topTwo = getTopTwoReviews(array)
        for (let i = 0; i < topTwo.length; i++) {
            const card = document.createElement('div')
            card.classList.add('review-card')
            card.innerHTML = topTwo[i].stars + ' stars from ' + topTwo[i].name
            reviewContainer.appendChild(card)
        }
        container.removeChild(button) 
    }
}

// Event listener for the button to trigger the addReviews function
button.addEventListener('click', () => addReviews(reviews))

// Define the current location details and update the footer
const currentLocation : [string, string, number] = ["South Africa", "02:08", 17]
footer.innerHTML = currentLocation[0] + " " + currentLocation[1] + " " + currentLocation[2]


// Create a new MainProperty instance and add its image to the main image container
const yourMainProperty = new MainProperty(
    './images/italian-property.jpg', 
    'Italian House',
    [{
        name: 'Olive',
        stars: 5,
        loyaltyUser: LoyaltyUser.GOLD_USER,
        date: '12-04-2021'
    }] 
)


const mainImageContainer = document.querySelector('.main-image')
const image = document.createElement('img')
image.setAttribute('src', yourMainProperty.src)
mainImageContainer.appendChild(image)