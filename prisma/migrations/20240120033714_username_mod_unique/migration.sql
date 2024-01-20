/*
  Warnings:

  - A unique constraint covering the columns `[username]` on the table `Moderator` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Moderator_username_key` ON `Moderator`(`username`);
