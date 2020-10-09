db.createUser(
    {
        user: "uquizzdb",
        pwd: "5678",
        roles: [
            {
                role: "readWrite",
                db: "quizz"
            }
        ]
    }
);