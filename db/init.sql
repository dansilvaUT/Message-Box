CREATE TABLE IF NOT EXISTS users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(300) NOT NULL,
    profile_pic TEXT,
    date_joined TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)

CREATE TABLE IF NOT EXISTS chat_group (
    group_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL
)

CREATE TABLE IF NOT EXISTS chat (
    chat_id SERIAL PRIMARY KEY,
    group_id INT REFERENCES chat_group(group_id),
    user_id INT REFERENCES users(user_id),
    message TEXT
)

CREATE TABLE IF NOT EXISTS rooms (
    id SERIAL PRIMARY KEY,
    room_id INT
)

CREATE TABLE IF NOT EXISTS individual_chat (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(users),
    room_id INT,
    message TEXT
)