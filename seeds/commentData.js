const { Comment } = require('../models');

const commentdata = [
    {
        "contents": "Amazing Article!",
        "date_created": "02/02/2021",
        "user_id": 1,
        "post_id": 2
    },
    {
        "contents": "Keep up the great work!",
        "date_created": "07/07/2022",
        "user_id": 1,
        "post_id": 3
    },
    {
        "contents": "This may need additional research.",
        "date_created": "09/09/2022",
        "user_id": 2,
        "post_id": 4
    },
    {
        "contents": "Thorough review of the details",
        "date_created": "03/23/2022",
        "user_id": 3,
        "post_id": 1
    },
    {
        "contents": "Cannot stop reading.  Thank you for this piece!",
        "date_created": "01/19/2023",
        "user_id": 4,
        "post_id": 2
    },
    {
        "contents": "Perfect!",
        "date_created": "08/14/2020",
        "user_id": 1,
        "post_id": 1
    },
    {
        "contents": "Wow",
        "date_created": "06/04/2020",
        "user_id": 3,
        "post_id": 3
    }
]

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;