DROP DATABASE IF EXISTS ts_server;
CREATE DATABASE ts_server;
USE ts_server;


CREATE TABLE IF NOT EXISTS `roles` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `users` (
    `id` INT NOT NULL AUTO_INCREMENT, 
    `username` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `pseudonyme` VARCHAR(255) NOT NULL,

    `roles_id` INT NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`roles_id`) REFERENCES `roles`(`id`)
);

CREATE TABLE IF NOT EXISTS `messages` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `receiver_id` INT NOT NULL,
    `expeditor_id` INT NOT NULL,
    `content` VARCHAR(5000) NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`receiver_id`) REFERENCES `users`(`id`),
    FOREIGN KEY (`expeditor_id`) REFERENCES `users`(`id`)
);

CREATE TABLE IF NOT EXISTS `channels` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `room` VARCHAR(45) NOT NULL, 
    `status` VARCHAR(45) NOT NULL,
    `messages_id` INT NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`messages_id`) REFERENCES `messages`(`id`)
);


INSERT INTO `roles` (`name`) VALUES ("chatter");
INSERT INTO `roles` (`name`) VALUES ("admin");
INSERT INTO `users` (`username`, `password`, pseudonyme, `roles_id`) VALUES ("Charlie", "toto", "baba", 1);
INSERT INTO `users` (`username`, `password`, pseudonyme, `roles_id`) VALUES ("Matthieu", "toto", "bebe", 1);
INSERT INTO `users` (`username`, `password`, pseudonyme, `roles_id`) VALUES ("user3", "toto", "bobo", 2);
