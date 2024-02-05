/*
  Warnings:

  - A unique constraint covering the columns `[path_display]` on the table `Image` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `Image` MODIFY `client_modified` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `name` VARCHAR(191) NOT NULL DEFAULT 'Image';

-- CreateIndex
CREATE UNIQUE INDEX `Image_path_display_key` ON `Image`(`path_display`);
