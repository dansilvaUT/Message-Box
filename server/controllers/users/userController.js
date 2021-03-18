module.exports = {
    getUser: (req, res) => {
        if (req.session.user) {
            return res.send(req.session.user);
        }

        res.status(401).send('Not logged in');
    },

    getAllUsers: async (req, res) => {
        const db = req.app.get('db');
        const users = await db.users.get_all_users();

        if (!users[0]) {
            return res.status(404).send('No users to display');
        }

        res.send(users);
    }
}