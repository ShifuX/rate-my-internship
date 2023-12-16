-- CreateTable
CREATE TABLE `Company` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `logo_path` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(191) NOT NULL,
    `first_name` VARCHAR(191) NOT NULL,
    `last_name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Reviews` (
    `id` VARCHAR(191) NOT NULL,
    `total_rating` DECIMAL(65, 30) NOT NULL,
    `learn_rating` DECIMAL(65, 30) NOT NULL,
    `fun_rating` DECIMAL(65, 30) NOT NULL,
    `challenge_rating` DECIMAL(65, 30) NOT NULL,
    `pay` DECIMAL(65, 30) NOT NULL,
    `review` VARCHAR(191) NOT NULL,
    `role` VARCHAR(191) NOT NULL,
    `would_retake` BOOLEAN NOT NULL,
    `created_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `companyID` VARCHAR(191) NOT NULL,

    INDEX `Reviews_companyID_idx`(`companyID`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
