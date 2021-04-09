INSERT INTO rooms (room_id)
VALUES (
    ${room_id}
);

RETURNING *;