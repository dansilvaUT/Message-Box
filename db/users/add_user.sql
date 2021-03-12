INSERT INTO users (
    username,
    email,
    password,
    profile_pic
) VALUES (
    ${username},
    ${email},
    ${hash},
    ${profile_pic}
)

RETURNING *;