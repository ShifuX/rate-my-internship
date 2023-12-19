/*
  Warnings:

  - Added the required column `pdf` to the `Reviews` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `reviews` ADD COLUMN `pdf` LONGBLOB NOT NULL;
