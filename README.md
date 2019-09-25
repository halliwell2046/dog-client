# **Doggo**

Doggo is an app that connects dog owners with dog walkers. 


## DogClient
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.0.

### Install Angular from NPM
1. Install a stable version of Node (if not already installed) and verify the installation using node -v.
2. Install TypeScript using command npm install -g typescript.
3. Download and install Angular CLI using command npm install -g @angular/cli.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

## Code scaffolding
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.


## Functionality:
Users choose to sign up as either a dog owner or a dog walker
* They can enter information and photo links to create their own profile. 
<img width="1340" alt="Owner profile" src="https://user-images.githubusercontent.com/49046404/65557369-101fed80-df01-11e9-965f-cdfd163507d5.png">

**Owners can**
* Create a walk request for their dog and search for nearby walkers 
* Read walker reviews
* Write reviews for the walkers they’ve used 
* Update their profile information and create/update/delete their dogs’ bios
* Delete their profile
<img width="1085" alt="Owner dashboard" src="https://user-images.githubusercontent.com/49046404/65557238-8a9c3d80-df00-11e9-83e8-05797ed5d68a.png">

**Walkers can**
* View their pending requests and check out the owner's profile and dogs
* Accept or decline requests
* Update their profile information 
* Delete (cancel) a walk

<img width="1088" alt="Screen Shot 2019-09-24 at 6 51 08 PM" src="https://user-images.githubusercontent.com/49046404/65556954-976c6180-deff-11e9-96f1-3157972bbc6e.png">


## Usage
A user can sign up with doggo as an owner or a walker. After declaring their user type, they are invited to create a profile. Dog owners enter their contact information, dog details, a bio and an optional photo of each dog. The information populates as cards on their profile. Walkers enter their contact information, an optional photo, and a brief bio to introduce themselves to dog owners. After creating their profile, a user taps "next" to go to their dashboard.


To request a walk, the owner taps a "+" button on their profile page, which brings up a modal window. They choose the date and time of the walk and tap OK. The modal closes and their request appears in the "request a walk" table along with the name of their dog that has been pulled from the database. The owner then taps the "fetch" button to begin the search for a nearby walker. At that point, the "available walkers near you" table appears below. The walkers within a 10-mile radius will appear as blue icons on the map surrounding a red dog icon that marks the owner's location. The walkers also appear as links in a table adjacent to the map. The table includes the cumulative rating the walker has earned from their reviews.

Owners may learn about each walker by clicking the link leading to their walker profile. On the walker profile page, they can see the walker's bio as well as any reviews of the walker that other owners have posted. Next the owner taps "back to walk request" to return to their dashboard. They can then choose the walker by tapping the "book" button in the walker table or explore other profiles.


## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change. Please make sure to update tests as appropriate.

Rob VanArsdall – rvanar@gmail.com\
Alice Frazier – Halliwell2046@yahoo.com\
Tracy Smart – tracy.smart@att.net

https://github.com/halliwell2046/dog-client.git
https://git.heroku.com/doggo-server-efa.git
## License
[MIT](https://choosealicense.com/licenses/mit/)
