-- Active: 1665042400864@@127.0.0.1@3306@craftcomputer

DROP SCHEMA IF EXISTS `craftcomputer` ;
CREATE SCHEMA IF NOT EXISTS `craftcomputer` DEFAULT CHARACTER SET utf8 ;
USE `craftcomputer` ;
CREATE TABLE IF NOT EXISTS `craftcomputer`.`products` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `product_name` VARCHAR(100) NULL,
  `category` INT NULL,
  `price` INT NULL,
  `description` VARCHAR(1000) NULL,
  `provider` VARCHAR(45) NULL,
  `createdAt` DATE,
  `updatedAt` DATE,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `craftcomputer`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NULL,
  `email` VARCHAR(100) NULL,
  `password` VARCHAR(45) NULL,
  `createdAt` DATE,
  `updatedAt` DATE,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `craftcomputer`.`orders` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` VARCHAR(45) NULL,
  `product_id` VARCHAR(45) NULL,
  `createdAt` DATE,
  `updatedAt` DATE,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `craftcomputer`.`categories` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `category_name` VARCHAR(45) NULL,
  `createdAt` DATE,
  `updatedAt` DATE,
  PRIMARY KEY(`id`)
)
