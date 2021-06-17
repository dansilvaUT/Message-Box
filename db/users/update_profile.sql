UPDATE users
SET profile_pic = ${profile_pic}
WHERE user_id = ${user_id};

SELECT profile_pic FROM users WHERE user_id = ${user_id};