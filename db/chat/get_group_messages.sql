SELECT 
c.chat_id, 
c.group_id, 
c.user_id, 
c.message, 
u.username
FROM chat c
JOIN users u ON c.user_id = u.user_id 
WHERE c.group_id = ${group_id};