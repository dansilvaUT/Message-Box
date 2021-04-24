module.exports = {
    createGroup: async (req, res) => {
        const { owner, name, privateGroup } = req.body;
        const db = req.app.get('db');

        const [query] = await db.chat.check_group({ owner, name });

        if (query) {
            return res.status(405).send('Name already in use');
        }

        await db.chat.create_group({ owner, name, privateGroup });

        res.sendStatus(201);
    },

    getGroups: async (req, res) => {
        const db = req.app.get('db');
        const { id: owner } = req.params;

        const groups = await db.chat.get_groups_by_owner({ owner });

        if (!groups[0]) {
            return res.status(404).send('You have no chat groups');
        }

        res.status(200).send(groups);
    },

    getGroup: async (req, res) => {
        const db = req.app.get('db');
        const { id } = req.params;

        const group = await db.chat.get_group({ id });

        if (!group[0]) {
            return res.status(404).send('No group info to display');
        }

        res.status(200).send(group);
    }
}