SELECT group_id, name, username FROM chat_group
JOIN users ON users.user_id = chat_group.owner
WHERE owner = ${owner};