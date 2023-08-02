# crypto_app
Cryptocurrency application using Third party API for data  and charts.

## Project Name and Description
Goal Planner - a planner designed to help you achieve your goals, reflect on your week, journal, and more!

## MVP Goals
***Frontend:*** 
Components 
- Navbar
- Landing page (screens) for login/registration
- Homepage (screens)
- Journal Page (screens)
- Todo list/ Form for todo list
- Planner entry
- Passion journal entries
- Weekly Reflection (5 things that went well this week/proud of)


## Post-MVP Goals
- Motivational quotes (component using API possibly)
- Dark mode
- Notification (email users and remind them)

## Database Schemas
_Please provide a sample of how you intend to build your models. A Schema object for each of your models is ideal._

```json
const userSchema = new Schema(
{
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
},
{timestamps: true}
);

const journalSchema = new Schema(
{
    journalDate: {type: Date, required: true},
    journalInput: {type: String, required: true},
    userID: {type: String, required: true}
},
{timestamps: true}
);

const toDoSchema = new Schema(
{
    toDoList: {type: String, required: true},
    userID: {type: String, required: true}
},
{timestamps: true}
);

const plannerEntrySchema = new Schema(
{
    plannerDate: {type: Date, required: true},
    plannerInput: {type: String, required: true},
    userID: {type: String, required: true}
},
{timestamps: true}
);

```

## Whimsical
