INSERT INTO chat_group
(name)
VALUES (${name});

RETURNING *;