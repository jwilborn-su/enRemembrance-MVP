SELECT
posts.post_text, posts.post_date,
post_users.handle AS post_user_handle, post_users.id AS post_user_id,
comment_users.handle AS comment_user_handle, comment_users.id AS comment_user_id,
stories.title, stories.id AS story_id, 
post_comments.comment_text,
post_expressions.expression_id AS post_expressions_id, post_expressions.count AS post_expressions_count,
story_expressions.expression_id AS story_expressions_id, story_expressions.count AS story_expressions_count,
post_expressions_summary.id AS post_expressions_summary_id, post_expressions_summary.name AS post_expressions_summary_name, post_expressions_summary.description AS post_expressions_summary_description, post_expressions_summary.image_path AS post_expressions_summary_image_path,
story_expressions_summary.id AS story_expressions_summary_id, story_expressions_summary.name AS story_expressions_summary_name, story_expressions_summary.description AS story_expressions_summary_description, story_expressions_summary.image_path AS story_expressions_summary_image_path


FROM posts
LEFT JOIN users post_users ON posts.user_id=post_users.id
LEFT JOIN stories ON posts.story_id=stories.id
LEFT JOIN post_comments ON posts.id=post_comments.post_id
LEFT JOIN users comment_users ON post_comments.commentor_id=comment_users.id
LEFT JOIN post_expressions ON posts.id=post_expressions.post_id
LEFT JOIN story_expressions ON stories.id=story_expressions.story_id
LEFT JOIN expressions post_expressions_summary ON post_expressions.expression_id=post_expressions_summary.id
LEFT JOIN expressions story_expressions_summary ON story_expressions.expression_id=story_expressions_summary.id