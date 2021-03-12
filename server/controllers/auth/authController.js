const bcrypt = require('bcryptjs');

module.exports = {
    register: async (req, res) => {
        const { username, email, password } = req.body;
        const db = req.app.get('db');

        const [foundUser] = await db.users.check_user({ username, email });

        if (foundUser && foundUser.username === username) {
            return res.status(400).send(`User already existing with username ${foundUser.username}`);
        }
        if (foundUser && foundUser.email === email) {
            return res.status(400).send(`User already existing with email ${foundUser.email}`);
        }

        let salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        const [newUser] = await db.users.add_user({ username, email, hash, profile_pic: null });

        req.session.user = newUser;
        delete newUser.password;
        res.status(201).send(req.session.user)
    },

    login: async (req, res) => {
        const { username, password } = req.body;
        const db = req.app.get('db');

        const [foundUser] = await db.users.get_user({ username });

        if (!foundUser) {
            return res.status(404).send(`${username} does not have a registered account`);
        }

        const authenticated = bcrypt.compareSync(password, foundUser.password);
        if (!authenticated) {
            return res.status(401).send(`Incorrect password for ${username}`);
        }

        delete foundUser.password;
        req.session.user = foundUser;

        res.status(200).send(req.session.user);
    },

    logout: (req, res) => {
        req.session.destroy();
        res.status(200).send('Successfully logged out');
    }
}