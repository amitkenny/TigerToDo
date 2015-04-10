Template.taskarea.helpers({
    tasklist: function () {
        return Tasks.find({});
    },
    tasklistlength: function () {
        if (Tasks.find({}).count() == 0)
            return false;
        else
            return true;
    }
})


Template.taskarea.events({
    'submit #taskInsertForm': function (events, template) {

        var taskVal = events.currentTarget.task.value

        Tasks.insert({
            task: taskVal,
            status: false
        });

        events.currentTarget.task.value = "";


        return false;
    },


    'click .taskItem': function (events, template) {
        var id = events.currentTarget.dataset.id;
        var currentTaskStatus = Tasks.findOne({
            _id: id
        }).status;

        if (!currentTaskStatus) {
            Tasks.update({
                _id: id
            }, {
                $set: {
                    status: true
                }
            });
        } else {
            Tasks.update({
                _id: id
            }, {
                $set: {
                    status: false
                }
            });
        }

        return false;
    },


    'click #doneDelete': function (events, template) {


        Tasks.find({
            status: true
        }).forEach(function (task) {
            Tasks.remove({
                _id: task._id
            })
        })
    }
})