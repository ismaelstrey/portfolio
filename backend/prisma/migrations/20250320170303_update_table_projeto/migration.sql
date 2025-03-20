/*
  Warnings:

  - You are about to drop the column `imagems` on the `projetos` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "projetos" DROP COLUMN "imagems",
ADD COLUMN     "imagens" TEXT[];
