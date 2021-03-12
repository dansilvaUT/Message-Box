SELECT username, email
FROM users
WHERE username = ${username} OR email = ${email};