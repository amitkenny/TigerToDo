if (Meteor.isClient) {

    Template.todomain.helpers({
        student: function () {
            return {
                name: "John",
                rollno: "007",
                specialization: "Butterfly Catching"
            }
        }
    })
}