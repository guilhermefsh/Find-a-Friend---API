/*
  Warnings:

  - Added the required column `about` to the `pets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `age` to the `pets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `energy_level` to the `pets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `environtment` to the `pets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `size` to the `pets` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "petType" AS ENUM ('CAT', 'DOG');

-- AlterTable
ALTER TABLE "pets" ADD COLUMN     "about" TEXT NOT NULL,
ADD COLUMN     "age" TEXT NOT NULL,
ADD COLUMN     "energy_level" TEXT NOT NULL,
ADD COLUMN     "environtment" TEXT NOT NULL,
ADD COLUMN     "size" TEXT NOT NULL,
ADD COLUMN     "type" "petType" NOT NULL DEFAULT 'DOG';
