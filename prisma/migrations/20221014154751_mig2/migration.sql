/*
  Warnings:

  - Made the column `year` on table `songs` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `songs` MODIFY `year` INTEGER NOT NULL;
