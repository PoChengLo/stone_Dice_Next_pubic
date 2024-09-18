CREATE TABLE `userinfo` (
    `user_id` int NOT NULL AUTO_INCREMENT,
    `user_name` varchar(255) NOT NULL,
    `email` varchar(255) NOT NULL,
    `password` varchar(255) NOT NULL,
    `nick_name` varchar(255) DEFAULT NULL,
    `user_img` varchar(255) DEFAULT NULL,
    `birthday` date DEFAULT NULL,
    `create_day` datetime NOT NULL,
    `last_date` datetime DEFAULT NULL,
    `qr_img` varchar(255) DEFAULT NULL,
    `mobile` varchar(255) DEFAULT NULL,
    `line_id` varchar(255) DEFAULT NULL,
    PRIMARY KEY (`user_id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

ALTER TABLE `userinfo` AUTO_INCREMENT = 2024001;