/*
  Warnings:

  - You are about to drop the `ContactLead` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `ContactLead`;

-- CreateTable
CREATE TABLE `Contact` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NULL,
    `message` VARCHAR(191) NULL,
    `phone` INTEGER NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
