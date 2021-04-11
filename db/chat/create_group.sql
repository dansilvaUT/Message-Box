INSERT INTO chat_group
(owner, name)
VALUES (
    ${owner},
    ${name}
)

RETURNING *;