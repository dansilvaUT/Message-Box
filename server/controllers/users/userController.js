module.exports = {
    getUser: (req, res) => {
        if (req.session.user) {
            return res.send(req.session.user);
        }

        res.status(401).send('Not logged in');
    }
}