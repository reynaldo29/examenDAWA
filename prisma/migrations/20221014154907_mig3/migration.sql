/*
  Warnings:

  - You are about to drop the column `userId` on the `songs` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `songs` DROP FOREIGN KEY `songs_userId_fkey`;

-- AlterTable
ALTER TABLE `songs` DROP COLUMN `userId`;
