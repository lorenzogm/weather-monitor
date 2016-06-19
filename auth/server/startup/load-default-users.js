Meteor.startup(function() {
    if (Meteor.users.find().count() === 0) {
        Accounts.createUser({
            username: 'demo',
            email: 'demo@demo.com',
            password: 'demo',
            profile: {
                first_name: 'Demo',
                last_name: 'User',
                company: 'Demo',
            }
        });
    }
});
